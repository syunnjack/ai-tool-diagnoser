export interface Tool {
  slug: string;
  name: string;
  category: string;
  description: string;
  reasonTemplate: string;
  tags: string[];
  link: string;
  accentColor: string;
}

export const tools: Tool[] = [
  {
    slug: 'chat-writing-ai',
    name: '文章生成AI（ChatGPTタイプ）',
    category: '文章作成・要約',
    description: '文章作成、要約、壁打ち、調査まで幅広く使いたい人向け。',
    reasonTemplate: '文章作成や情報整理との相性が高く、初心者でも使いやすいタイプです。',
    tags: ['writing', 'research', 'beginner', 'simple', 'business', 'daily', 'paid', 'free'],
    link: 'https://example.com/chat-writing-ai-affiliate',
    accentColor: '#4f46e5',
  },
  {
    slug: 'image-generation-ai',
    name: '画像生成AI（Midjourneyタイプ）',
    category: '画像生成',
    description: 'バナー、アイキャッチ、デザイン案を素早く作りたい人向け。',
    reasonTemplate: '画像生成ニーズが強く、クリエイティブ用途を優先している人向けです。',
    tags: ['image', 'creative', 'paid', 'pro'],
    link: 'https://example.com/image-generation-ai-affiliate',
    accentColor: '#db2777',
  },
  {
    slug: 'coding-assist-ai',
    name: 'コード補助AI（GitHub Copilotタイプ）',
    category: 'コード補助',
    description: '実装、補完、レビューなど開発効率を上げたい人向け。',
    reasonTemplate: 'コード補助と高頻度利用を重視しているため、開発向けAIとの相性が高いです。',
    tags: ['coding', 'pro', 'daily', 'business', 'custom', 'paid'],
    link: 'https://example.com/coding-assist-ai-affiliate',
    accentColor: '#0f766e',
  },
  {
    slug: 'research-ai',
    name: '検索・リサーチ特化AI（Perplexityタイプ）',
    category: '情報収集・リサーチ',
    description: '調査、比較、情報収集を効率化したい人向け。',
    reasonTemplate: '情報収集や業務用途が中心なので、検索特化型AIが向いています。',
    tags: ['research', 'business', 'daily', 'paid', 'pro'],
    link: 'https://example.com/research-ai-affiliate',
    accentColor: '#2563eb',
  },
  {
    slug: 'free-lightweight-ai',
    name: '無料から試しやすい軽量AI',
    category: '無料スタート',
    description: 'まずはお金をかけずに始めたい初心者向け。',
    reasonTemplate: '無料志向が強く、まずは簡単に試したいニーズに合っています。',
    tags: ['free', 'beginner', 'simple', 'creative'],
    link: 'https://example.com/free-lightweight-ai-affiliate',
    accentColor: '#16a34a',
  },
  {
    slug: 'automation-ai',
    name: '業務自動化AI（Zapierタイプ）',
    category: '業務自動化',
    description: '仕事の定型作業や社内効率化を進めたい人向け。',
    reasonTemplate: '仕事利用と継続利用の傾向があり、業務効率化寄りのツールが適しています。',
    tags: ['business', 'daily', 'pro', 'custom', 'paid'],
    link: 'https://example.com/automation-ai-affiliate',
    accentColor: '#ea580c',
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}
