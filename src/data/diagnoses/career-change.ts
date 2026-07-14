import type { Diagnosis } from '../types';

export const careerChange: Diagnosis = {
  slug: 'career-change',
  title: '転職エージェント診断',
  emoji: '💼',
  shortDescription: '業界・年代・希望条件からあなたに合う転職エージェントがわかる',
  heroDescription: '5つの質問に答えるだけで、あなたの業界・年代・希望条件に合った転職エージェントを診断します。',
  questions: [
    {
      id: 'industry',
      title: '希望する業界・職種は？',
      options: [
        { label: 'IT・エンジニア', tags: ['it', 'skill'] },
        { label: '営業・販売', tags: ['general', 'quick'] },
        { label: '専門職（医療・士業など）', tags: ['specialist', 'skill'] },
        { label: '特にこだわらない・幅広く検討', tags: ['general', 'wide'] },
      ],
    },
    {
      id: 'age',
      title: '年代は？',
      options: [
        { label: '20代', tags: ['young', 'quick'] },
        { label: '30代以上', tags: ['experienced', 'income'] },
      ],
    },
    {
      id: 'motivation',
      title: '転職の本気度は？',
      options: [
        { label: 'すぐにでも転職したい', tags: ['quick', 'general'] },
        { label: 'まずは情報収集から', tags: ['wide', 'young'] },
      ],
    },
    {
      id: 'priority',
      title: '転職先で最も重視したいことは？',
      options: [
        { label: '年収アップ', tags: ['income', 'experienced'] },
        { label: '働きやすさ・ワークライフバランス', tags: ['worklife', 'wide'] },
        { label: 'スキルアップ・成長できる環境', tags: ['skill', 'it'] },
      ],
    },
    {
      id: 'gender',
      title: '希望条件に女性向けサポートは必要ですか？',
      options: [
        { label: '女性ならではのサポートが欲しい', tags: ['worklife', 'wide'] },
        { label: '特に気にしない', tags: ['general', 'income'] },
      ],
    },
  ],
  results: [
    {
      slug: 'general-major-agent',
      name: '総合型大手エージェント',
      category: '総合型',
      description: '求人数が豊富で、幅広い業界・職種を検討したい人向け。',
      reasonTemplate: '業界を絞らず幅広く検討したいニーズに合っており、求人数の多い総合型が向いています。',
      tags: ['general', 'wide', 'quick'],
      link: 'https://example.com/general-major-agent-affiliate',
      accentColor: '#1d4ed8',
    },
    {
      slug: 'it-specialized-agent',
      name: 'IT・エンジニア特化型',
      category: 'IT特化',
      description: 'IT業界・エンジニア職への転職に強い専門特化型エージェント。',
      reasonTemplate: 'IT・エンジニア職やスキルアップを重視しているため、IT特化型が向いています。',
      tags: ['it', 'skill'],
      link: 'https://example.com/it-specialized-agent-affiliate',
      accentColor: '#0f766e',
    },
    {
      slug: 'high-income-agent',
      name: 'ハイクラス・年収重視型',
      category: 'ハイクラス',
      description: '年収アップやマネジメント層への転職を目指す経験者向け。',
      reasonTemplate: '年収アップを重視し経験も豊富なため、ハイクラス向けエージェントが適しています。',
      tags: ['income', 'experienced', 'specialist'],
      link: 'https://example.com/high-income-agent-affiliate',
      accentColor: '#7c2d12',
    },
    {
      slug: 'young-second-agent',
      name: '20代・第二新卒特化型',
      category: '20代特化',
      description: '20代・第二新卒のキャリア形成をサポートするエージェント。',
      reasonTemplate: '20代でまずは情報収集から始めたいニーズに合っています。',
      tags: ['young', 'quick', 'wide'],
      link: 'https://example.com/young-second-agent-affiliate',
      accentColor: '#0891b2',
    },
    {
      slug: 'worklife-agent',
      name: '女性・働き方重視型',
      category: '働き方重視',
      description: 'ワークライフバランスや女性ならではのキャリア相談に強いエージェント。',
      reasonTemplate: '働きやすさや女性向けサポートを重視しているため、この型が向いています。',
      tags: ['worklife'],
      link: 'https://example.com/worklife-agent-affiliate',
      accentColor: '#be185d',
    },
  ],
};
