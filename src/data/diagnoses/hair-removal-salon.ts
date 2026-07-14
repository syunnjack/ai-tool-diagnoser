import type { Diagnosis } from '../types';

export const hairRemovalSalon: Diagnosis = {
  slug: 'hair-removal-salon',
  title: '脱毛サロン診断',
  emoji: '✨',
  shortDescription: '予算・部位・脱毛方式からあなたに合う脱毛サロン・クリニックがわかる',
  heroDescription: '5つの質問に答えるだけで、あなたの希望条件に合った脱毛サロン・クリニックのタイプを診断します。',
  questions: [
    {
      id: 'method',
      title: '脱毛の方式は？',
      options: [
        { label: '医療脱毛でしっかり効果を出したい', tags: ['medical', 'effect'] },
        { label: 'サロンの光脱毛で気軽に始めたい', tags: ['salon', 'light'] },
      ],
    },
    {
      id: 'part',
      title: '脱毛したい部位は？',
      options: [
        { label: '全身まとめて', tags: ['fullbody'] },
        { label: 'VIOなどデリケートゾーン中心', tags: ['vio'] },
        { label: '顔・腕・脚など部分的に', tags: ['partial', 'budget'] },
      ],
    },
    {
      id: 'budget',
      title: '予算感は？',
      options: [
        { label: 'とにかく安く抑えたい', tags: ['budget', 'salon'] },
        { label: '多少高くても効果重視', tags: ['effect', 'medical'] },
      ],
    },
    {
      id: 'gender',
      title: '性別は？',
      options: [
        { label: '女性向けを探している', tags: ['fullbody', 'vio'] },
        { label: 'メンズ脱毛を探している', tags: ['mens'] },
      ],
    },
    {
      id: 'student',
      title: '学生ですか？',
      options: [
        { label: '学生（学割を使いたい）', tags: ['budget', 'student'] },
        { label: '社会人', tags: ['effect', 'fullbody'] },
      ],
    },
  ],
  results: [
    {
      slug: 'fullbody-salon',
      name: '全身脱毛特化サロン',
      category: '全身脱毛型',
      description: '全身をまとめてケアできる、コース設計に優れた脱毛サロン。',
      reasonTemplate: '全身をまとめて脱毛したいニーズに合っており、全身脱毛特化サロンが向いています。',
      tags: ['fullbody', 'salon'],
      link: 'https://example.com/fullbody-salon-affiliate',
      accentColor: '#db2777',
    },
    {
      slug: 'medical-clinic',
      name: '医療脱毛クリニック',
      category: '医療脱毛型',
      description: '医療レーザーでしっかり効果を出したい人向けの脱毛クリニック。',
      reasonTemplate: '効果を重視し医療脱毛を希望しているため、医療脱毛クリニックが向いています。',
      tags: ['medical', 'effect'],
      link: 'https://example.com/medical-clinic-affiliate',
      accentColor: '#1d4ed8',
    },
    {
      slug: 'budget-partial',
      name: '部分脱毛・安さ重視サロン',
      category: '安さ重視型',
      description: '顔や腕など部位を絞って、コストを抑えて通えるサロン。',
      reasonTemplate: '予算を抑えつつ部分的に脱毛したいニーズに合っています。',
      tags: ['budget', 'partial'],
      link: 'https://example.com/budget-partial-affiliate',
      accentColor: '#0891b2',
    },
    {
      slug: 'mens-salon',
      name: 'メンズ脱毛特化サロン',
      category: 'メンズ特化型',
      description: 'ヒゲ・VIOなど男性特有の悩みに対応するメンズ脱毛サロン。',
      reasonTemplate: 'メンズ脱毛を希望しているため、メンズ特化サロンが向いています。',
      tags: ['mens'],
      link: 'https://example.com/mens-salon-affiliate',
      accentColor: '#0f766e',
    },
    {
      slug: 'vio-specialized',
      name: 'VIO特化ケアサロン',
      category: 'VIO特化型',
      description: 'デリケートゾーンのケアに強みを持つ脱毛サロン・クリニック。',
      reasonTemplate: 'VIOなどデリケートゾーンを重視しているため、VIO特化サロンが向いています。',
      tags: ['vio'],
      link: 'https://example.com/vio-specialized-affiliate',
      accentColor: '#be185d',
    },
  ],
};
