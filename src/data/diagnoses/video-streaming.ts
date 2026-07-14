import type { Diagnosis } from '../types';

export const videoStreaming: Diagnosis = {
  slug: 'video-streaming',
  title: '動画配信サービス診断',
  emoji: '🎬',
  shortDescription: 'ジャンル・予算・視聴スタイルからあなたに合う動画配信サービスがわかる',
  heroDescription: '5つの質問に答えるだけで、あなたのジャンル・予算・視聴スタイルに合った動画配信サービスを診断します。',
  questions: [
    {
      id: 'genre',
      title: '一番よく見るジャンルは？',
      options: [
        { label: 'アニメ', tags: ['anime', 'niche'] },
        { label: '映画・海外ドラマ', tags: ['movie', 'premium'] },
        { label: '国内ドラマ・バラエティ', tags: ['variety', 'domestic'] },
        { label: 'まだ決めていない・お試し重視', tags: ['trial', 'cheap'] },
      ],
    },
    {
      id: 'budget',
      title: '月額予算はどれくらいまで許容できますか？',
      options: [
        { label: 'できるだけ安く・無料で', tags: ['cheap', 'trial'] },
        { label: 'コンテンツが充実してるなら払う', tags: ['premium', 'movie'] },
      ],
    },
    {
      id: 'household',
      title: '主な視聴スタイルは？',
      options: [
        { label: '一人でじっくり', tags: ['niche', 'anime'] },
        { label: '家族・複数人で共有したい', tags: ['domestic', 'variety'] },
      ],
    },
    {
      id: 'frequency',
      title: 'どれくらいの頻度で視聴しますか？',
      options: [
        { label: 'ほぼ毎日', tags: ['premium', 'domestic'] },
        { label: '週末や暇な時だけ', tags: ['cheap', 'trial'] },
      ],
    },
    {
      id: 'extra',
      title: '動画配信以外に欲しい機能は？',
      options: [
        { label: '見逃し配信・国内番組重視', tags: ['variety', 'domestic'] },
        { label: '特になし・コンテンツ量重視', tags: ['movie', 'anime'] },
      ],
    },
  ],
  results: [
    {
      slug: 'anime-focused-streaming',
      name: 'アニメ特化型',
      category: 'アニメ特化',
      description: 'アニメの配信本数・最新話の早さが魅力のサービス。',
      reasonTemplate: 'アニメを中心に視聴したいニーズに合っています。',
      tags: ['anime', 'niche'],
      link: 'https://example.com/anime-focused-streaming-affiliate',
      accentColor: '#7c3aed',
    },
    {
      slug: 'movie-drama-streaming',
      name: '映画・海外ドラマ充実型',
      category: '映画・海外ドラマ',
      description: '話題の映画・海外ドラマをいち早く楽しみたい人向け。',
      reasonTemplate: '映画・海外ドラマ重視でコンテンツの充実度を求めているため向いています。',
      tags: ['movie', 'premium'],
      link: 'https://example.com/movie-drama-streaming-affiliate',
      accentColor: '#1e3a8a',
    },
    {
      slug: 'cost-performance-streaming',
      name: 'コスパ重視型',
      category: 'コスパ重視',
      description: '動画配信以外の特典も含めて、コストパフォーマンス重視の人向け。',
      reasonTemplate: '予算を抑えつつ幅広く使いたいニーズに合っています。',
      tags: ['cheap', 'trial'],
      link: 'https://example.com/cost-performance-streaming-affiliate',
      accentColor: '#16a34a',
    },
    {
      slug: 'domestic-variety-streaming',
      name: '国内ドラマ・バラエティ型',
      category: '国内番組重視',
      description: 'テレビ番組の見逃し配信や国内ドラマ・バラエティが充実。',
      reasonTemplate: '家族で共有しつつ国内番組を楽しみたいニーズに合っています。',
      tags: ['domestic', 'variety'],
      link: 'https://example.com/domestic-variety-streaming-affiliate',
      accentColor: '#ea580c',
    },
    {
      slug: 'free-trial-streaming',
      name: '無料お試し重視型',
      category: '無料お試し',
      description: 'まずは無料期間でじっくり試してから決めたい人向け。',
      reasonTemplate: 'ジャンルが未定でまずは試したいニーズに合っています。',
      tags: ['trial', 'cheap'],
      link: 'https://example.com/free-trial-streaming-affiliate',
      accentColor: '#0891b2',
    },
  ],
};
