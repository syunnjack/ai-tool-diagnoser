<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

// このファイルはビルド出力(dist/api/reviews.php)としてデプロイされる。
// SQLiteファイルは `npm run build` のたびに消える dist/ の外側
// (プロジェクトルート/data/) に置き、投稿データを永続化する。
$dbPath = __DIR__ . '/../../data/reviews.sqlite';

const NG_WORDS = ['http://', 'https://', 'www.', '死ね', '殺す', 'バカ', 'カス'];
const VALID_TOOL_SLUGS = [
    'chat-writing-ai',
    'image-generation-ai',
    'coding-assist-ai',
    'research-ai',
    'free-lightweight-ai',
    'automation-ai',
];

function respond(int $status, array $body): never
{
    $json = json_encode($body, JSON_UNESCAPED_UNICODE);
    if ($json === false) {
        http_response_code(500);
        echo json_encode(['error' => 'エンコードエラーが発生しました。']);
        exit;
    }

    http_response_code($status);
    echo $json;
    exit;
}

function getDb(string $dbPath): PDO
{
    $isNew = !file_exists($dbPath);
    @mkdir(dirname($dbPath), 0755, true);

    $pdo = new PDO('sqlite:' . $dbPath);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($isNew) {
        $pdo->exec('
            CREATE TABLE reviews (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                tool_slug TEXT NOT NULL,
                nickname TEXT NOT NULL DEFAULT "匿名",
                rating INTEGER NOT NULL,
                comment TEXT NOT NULL,
                ip_hash TEXT NOT NULL,
                created_at TEXT NOT NULL
            )
        ');
        $pdo->exec('CREATE INDEX idx_reviews_tool_slug ON reviews (tool_slug)');
    }

    return $pdo;
}

function clientIpHash(): string
{
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    return hash('sha256', $ip);
}

$pdo = getDb($dbPath);
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $tool = $_GET['tool'] ?? '';
    if (!in_array($tool, VALID_TOOL_SLUGS, true)) {
        respond(400, ['error' => '不正なtoolパラメータです。']);
    }

    $stmt = $pdo->prepare('SELECT nickname, rating, comment, created_at FROM reviews WHERE tool_slug = :tool ORDER BY created_at DESC LIMIT 50');
    $stmt->execute(['tool' => $tool]);
    respond(200, $stmt->fetchAll(PDO::FETCH_ASSOC));
}

if ($method === 'POST') {
    // ハニーポット: ボットはこの隠しフィールドを埋めてしまう
    if (!empty($_POST['website'])) {
        respond(200, ['ok' => true]);
    }

    $tool = $_POST['tool'] ?? '';
    $nickname = trim((string) ($_POST['nickname'] ?? ''));
    $rating = filter_var($_POST['rating'] ?? '', FILTER_VALIDATE_INT);
    $comment = trim((string) ($_POST['comment'] ?? ''));

    if (!in_array($tool, VALID_TOOL_SLUGS, true)) {
        respond(400, ['error' => '不正なtoolパラメータです。']);
    }
    if ($rating === false || $rating < 1 || $rating > 5) {
        respond(422, ['error' => '評価は1〜5の範囲で選択してください。']);
    }
    if (mb_strlen($comment) < 5 || mb_strlen($comment) > 1000) {
        respond(422, ['error' => '口コミは5〜1000文字で入力してください。']);
    }
    if (mb_strlen($nickname) > 30) {
        respond(422, ['error' => 'ニックネームは30文字以内で入力してください。']);
    }

    foreach (NG_WORDS as $word) {
        if (mb_stripos($comment, $word) !== false) {
            respond(422, ['error' => '投稿内容に使用できない文字列が含まれています。']);
        }
    }

    $ipHash = clientIpHash();

    // 簡易レート制限: 同一IP・同一ツールへの30秒以内の連投を防ぐ
    $recent = $pdo->prepare('SELECT COUNT(*) FROM reviews WHERE tool_slug = :tool AND ip_hash = :ip AND created_at > :since');
    $recent->execute([
        'tool' => $tool,
        'ip' => $ipHash,
        'since' => gmdate('Y-m-d\TH:i:s\Z', time() - 30),
    ]);
    if ((int) $recent->fetchColumn() > 0) {
        respond(429, ['error' => '投稿間隔が短すぎます。しばらく待ってから再度お試しください。']);
    }

    $insert = $pdo->prepare('INSERT INTO reviews (tool_slug, nickname, rating, comment, ip_hash, created_at) VALUES (:tool, :nickname, :rating, :comment, :ip, :created_at)');
    $insert->execute([
        'tool' => $tool,
        'nickname' => $nickname !== '' ? $nickname : '匿名',
        'rating' => $rating,
        'comment' => $comment,
        'ip' => $ipHash,
        'created_at' => gmdate('Y-m-d\TH:i:s\Z'),
    ]);

    respond(201, ['ok' => true]);
}

respond(405, ['error' => 'Method Not Allowed']);
