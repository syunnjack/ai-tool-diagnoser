import type { Diagnosis } from '../types';

export const kidsEducation: Diagnosis = {
  slug: 'kids-education',
  title: '通信教育診断',
  emoji: '📚',
  shortDescription: '年齢・重視したい力からお子さんに合う通信教育サービスがわかる',
  heroDescription: '5つの質問に答えるだけで、お子さんの年齢や目的に合った通信教育サービスのタイプを診断します。資料請求の参考にしてください。',
  questions: [
    {
      id: 'age',
      title: 'お子さんの年齢は？',
      options: [
        { label: '未就学児（幼児）', tags: ['infant'] },
        { label: '小学生', tags: ['elementary'] },
        { label: '中学受験を考えている', tags: ['juken'] },
      ],
    },
    {
      id: 'focus',
      title: '重視したい力は？',
      options: [
        { label: '基礎学力・学習習慣', tags: ['infant', 'elementary'] },
        { label: 'プログラミング・論理的思考力', tags: ['programming'] },
        { label: '英語力', tags: ['english'] },
        { label: '中学受験対策', tags: ['juken'] },
      ],
    },
    {
      id: 'style',
      title: '学習スタイルは？',
      options: [
        { label: 'タブレット・デジタル教材で楽しく', tags: ['programming', 'infant'] },
        { label: '紙のテキストでじっくり', tags: ['elementary', 'juken'] },
      ],
    },
    {
      id: 'time',
      title: '学習にかけられる時間は？',
      options: [
        { label: '毎日少しずつ', tags: ['infant', 'english'] },
        { label: 'まとまった時間で集中的に', tags: ['juken', 'programming'] },
      ],
    },
    {
      id: 'goal',
      title: '一番の目的は？',
      options: [
        { label: '勉強を楽しく好きになってほしい', tags: ['infant', 'programming'] },
        { label: '受験や将来に役立つ力をつけたい', tags: ['juken', 'english'] },
      ],
    },
  ],
  results: [
    {
      slug: 'infant-education',
      name: '幼児向け通信教育',
      category: '幼児特化型',
      description: '未就学児向けに、遊びながら学習習慣の土台を作る通信教育サービス。',
      reasonTemplate: '未就学のお子さん向けで、楽しく学習習慣をつけたいニーズに合っています。',
      tags: ['infant'],
      link: 'https://example.com/infant-education-affiliate',
      accentColor: '#0f766e',
    },
    {
      slug: 'elementary-education',
      name: '小学生向け通信教育',
      category: '小学生特化型',
      description: '学校の授業に沿って基礎学力・学習習慣を身につけられる通信教育サービス。',
      reasonTemplate: '小学生の基礎学力・学習習慣を重視しているため、この型が向いています。',
      tags: ['elementary'],
      link: 'https://example.com/elementary-education-affiliate',
      accentColor: '#1d4ed8',
    },
    {
      slug: 'programming-education',
      name: 'プログラミング教育特化',
      category: 'プログラミング特化型',
      description: 'タブレット教材でプログラミング・論理的思考力を伸ばす通信教育サービス。',
      reasonTemplate: 'プログラミング・論理的思考力を重視しているため、プログラミング特化型が向いています。',
      tags: ['programming'],
      link: 'https://example.com/programming-education-affiliate',
      accentColor: '#7c2d12',
    },
    {
      slug: 'english-education',
      name: '英語教育特化',
      category: '英語特化型',
      description: '毎日少しずつ取り組める、英語力の育成に特化した通信教育サービス。',
      reasonTemplate: '英語力を重視しているため、英語教育特化型が向いています。',
      tags: ['english'],
      link: 'https://example.com/english-education-affiliate',
      accentColor: '#0891b2',
    },
    {
      slug: 'juken-education',
      name: '中学受験対策特化',
      category: '中学受験特化型',
      description: '紙のテキストで受験に必要な学力をじっくり鍛える中学受験対策の通信教育サービス。',
      reasonTemplate: '中学受験対策を重視しているため、中学受験特化型が向いています。',
      tags: ['juken'],
      link: 'https://example.com/juken-education-affiliate',
      accentColor: '#be185d',
    },
  ],
};
