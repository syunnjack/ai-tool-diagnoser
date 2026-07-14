import type { Diagnosis } from '../types';

export const personalGym: Diagnosis = {
  slug: 'personal-gym',
  title: 'パーソナルジム診断',
  emoji: '💪',
  shortDescription: '目的・予算・エリアからあなたに合うパーソナルジムがわかる',
  heroDescription: '5つの質問に答えるだけで、あなたの目的・予算・希望エリアに合ったパーソナルジムを診断します。',
  questions: [
    {
      id: 'goal',
      title: '一番の目的は？',
      options: [
        { label: '短期間で痩せたい・ダイエット', tags: ['diet', 'intensive'] },
        { label: '筋肉をつけて体を変えたい', tags: ['muscle', 'longterm'] },
        { label: '健康維持・姿勢改善', tags: ['health', 'flexible'] },
      ],
    },
    {
      id: 'budget',
      title: '予算感はどれに近いですか？',
      options: [
        { label: 'できるだけ安く続けたい', tags: ['cheap', 'flexible'] },
        { label: '結果が出るなら高くてもいい', tags: ['premium', 'intensive'] },
      ],
    },
    {
      id: 'gender',
      title: '希望するジム環境は？',
      options: [
        { label: '女性専用や女性トレーナー希望', tags: ['women', 'diet'] },
        { label: '特に気にしない', tags: ['muscle', 'health'] },
      ],
    },
    {
      id: 'diet',
      title: '食事指導も重視しますか？',
      options: [
        { label: '食事指導までしっかりしてほしい', tags: ['diet', 'premium'] },
        { label: 'トレーニング中心でOK', tags: ['muscle', 'cheap'] },
      ],
    },
    {
      id: 'access',
      title: '通いやすさ・利用頻度は？',
      options: [
        { label: '短期集中で週に何度も通いたい', tags: ['intensive', 'premium'] },
        { label: '自分のペースで長く続けたい', tags: ['longterm', 'flexible', 'cheap'] },
      ],
    },
  ],
  results: [
    {
      slug: 'short-term-diet-gym',
      name: '短期集中ダイエット型',
      category: '短期集中ダイエット',
      description: '数ヶ月の短期集中で結果を出すことに特化したジム。',
      reasonTemplate: '短期間でのダイエットを重視しているため、短期集中型が向いています。',
      tags: ['diet', 'intensive', 'premium'],
      link: 'https://example.com/short-term-diet-gym-affiliate',
      accentColor: '#dc2626',
    },
    {
      slug: 'cost-performance-gym',
      name: 'コスパ重視型',
      category: 'コスパ重視',
      description: '継続しやすい価格帯で、無理なく通えるパーソナルジム。',
      reasonTemplate: '予算を抑えて長く続けたいニーズに合っています。',
      tags: ['cheap', 'flexible', 'longterm'],
      link: 'https://example.com/cost-performance-gym-affiliate',
      accentColor: '#16a34a',
    },
    {
      slug: 'women-only-gym',
      name: '女性専用型',
      category: '女性専用',
      description: '女性専用スペースや女性トレーナーが在籍するジム。',
      reasonTemplate: '女性ならではの環境を重視しているため、女性専用型が向いています。',
      tags: ['women'],
      link: 'https://example.com/women-only-gym-affiliate',
      accentColor: '#db2777',
    },
    {
      slug: 'muscle-building-gym',
      name: '本格筋トレ・ボディメイク型',
      category: '筋肉増強',
      description: '本格的なトレーニングで理想の体を作りたい人向け。',
      reasonTemplate: '筋肉をつけて体を変えたいニーズに合っています。',
      tags: ['muscle', 'longterm'],
      link: 'https://example.com/muscle-building-gym-affiliate',
      accentColor: '#78350f',
    },
    {
      slug: 'health-maintenance-gym',
      name: '健康維持・姿勢改善型',
      category: '健康維持',
      description: '無理なく体を動かし、健康や姿勢の改善を目指す人向け。',
      reasonTemplate: '健康維持や姿勢改善が目的のため、この型が向いています。',
      tags: ['health', 'flexible'],
      link: 'https://example.com/health-maintenance-gym-affiliate',
      accentColor: '#0891b2',
    },
  ],
};
