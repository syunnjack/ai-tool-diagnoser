import type { Diagnosis } from '../types';

export const programmingSchool: Diagnosis = {
  slug: 'programming-school',
  title: 'プログラミングスクール診断',
  emoji: '💻',
  shortDescription: '目的・予算・学習時間からあなたに合うプログラミングスクールがわかる',
  heroDescription: '5つの質問に答えるだけで、あなたの目的・予算・学習時間に合ったプログラミングスクールを診断します。',
  questions: [
    {
      id: 'purpose',
      title: 'プログラミングを学ぶ目的は？',
      options: [
        { label: 'エンジニアに転職したい', tags: ['career', 'intensive'] },
        { label: '副業・フリーランスで稼ぎたい', tags: ['freelance', 'flexible'] },
        { label: 'スキルアップ・趣味', tags: ['hobby', 'cheap'] },
      ],
    },
    {
      id: 'budget',
      title: '予算感はどれに近いですか？',
      options: [
        { label: 'できるだけ安く・独学寄りでもいい', tags: ['cheap', 'hobby'] },
        { label: '手厚いサポートなら高くてもいい', tags: ['premium', 'career'] },
      ],
    },
    {
      id: 'time',
      title: '週にどれくらい学習時間を確保できますか？',
      options: [
        { label: '毎日まとまった時間が取れる', tags: ['intensive', 'career'] },
        { label: '仕事の合間に少しずつ', tags: ['flexible', 'freelance'] },
      ],
    },
    {
      id: 'experience',
      title: 'プログラミング経験は？',
      options: [
        { label: '未経験', tags: ['hobby', 'cheap'] },
        { label: '経験あり・スキルアップしたい', tags: ['freelance', 'premium'] },
      ],
    },
    {
      id: 'style',
      title: '学習スタイルの希望は？',
      options: [
        { label: '短期集中でしっかり学びたい', tags: ['intensive', 'career'] },
        { label: '自分のペースでオンライン完結', tags: ['flexible', 'cheap'] },
      ],
    },
  ],
  results: [
    {
      slug: 'career-guarantee-school',
      name: '転職保証型スクール',
      category: '転職特化',
      description: 'エンジニア転職の実績・サポートが手厚いスクール。',
      reasonTemplate: '転職目的で短期集中を希望しているため、転職保証型が向いています。',
      tags: ['career', 'intensive', 'premium'],
      link: 'https://example.com/career-guarantee-school-affiliate',
      accentColor: '#4f46e5',
    },
    {
      slug: 'freelance-focused-school',
      name: '副業・フリーランス特化型',
      category: '副業特化',
      description: '案件獲得サポートまで含めて副業・フリーランスを目指す人向け。',
      reasonTemplate: '副業・フリーランスを目指しており、案件獲得サポートに強いスクールが向いています。',
      tags: ['freelance', 'flexible'],
      link: 'https://example.com/freelance-focused-school-affiliate',
      accentColor: '#0f766e',
    },
    {
      slug: 'budget-selflearning-school',
      name: '低価格・独学サポート型',
      category: '低価格',
      description: 'コストを抑えつつ、必要な時だけ質問できるサポート付き。',
      reasonTemplate: '予算を抑えたい・趣味目的のニーズに合っています。',
      tags: ['cheap', 'hobby'],
      link: 'https://example.com/budget-selflearning-school-affiliate',
      accentColor: '#16a34a',
    },
    {
      slug: 'intensive-bootcamp',
      name: '短期集中ブートキャンプ型',
      category: '短期集中',
      description: '数週間〜数ヶ月でみっちり詰め込んで学ぶスタイル。',
      reasonTemplate: '毎日まとまった時間を確保できるため、短期集中型が効果的です。',
      tags: ['intensive', 'career'],
      link: 'https://example.com/intensive-bootcamp-affiliate',
      accentColor: '#b91c1c',
    },
    {
      slug: 'self-paced-online-school',
      name: 'オンライン完結・自分のペース型',
      category: '自分のペース',
      description: '仕事や家事の合間に、自分のペースで進められるオンライン完結型。',
      reasonTemplate: '学習時間が限られているため、自分のペースで進められるスタイルが向いています。',
      tags: ['flexible', 'freelance', 'hobby'],
      link: 'https://example.com/self-paced-online-school-affiliate',
      accentColor: '#7c3aed',
    },
  ],
};
