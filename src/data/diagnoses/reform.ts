import type { Diagnosis } from '../types';

export const reform: Diagnosis = {
  slug: 'reform',
  title: 'リフォーム業者診断',
  emoji: '🔨',
  shortDescription: 'リフォームしたい箇所・目的からあなたに合うリフォーム業者がわかる',
  heroDescription: '5つの質問に答えるだけで、あなたのリフォーム希望に合った業者のタイプを診断します。一括見積もりの参考にしてください。',
  questions: [
    {
      id: 'part',
      title: 'リフォームしたい箇所は？',
      options: [
        { label: 'キッチン', tags: ['kitchen', 'partial'] },
        { label: 'お風呂・トイレなど水回り', tags: ['water', 'partial'] },
        { label: '外壁・屋根', tags: ['exterior'] },
        { label: '家全体（フルリノベーション）', tags: ['full'] },
      ],
    },
    {
      id: 'purpose',
      title: 'リフォームの目的は？',
      options: [
        { label: '老朽化・故障への対応', tags: ['water', 'exterior'] },
        { label: '暮らしやすさ・デザインの向上', tags: ['kitchen', 'full'] },
        { label: '断熱性・省エネ性の向上', tags: ['eco'] },
      ],
    },
    {
      id: 'budget',
      title: '予算感は？',
      options: [
        { label: '部分的に費用を抑えて', tags: ['partial'] },
        { label: 'まとまった予算で本格的に', tags: ['full', 'eco'] },
      ],
    },
    {
      id: 'age',
      title: '住宅の築年数は？',
      options: [
        { label: '築20年以上', tags: ['exterior', 'eco', 'full'] },
        { label: '築20年未満', tags: ['kitchen', 'water'] },
      ],
    },
    {
      id: 'timing',
      title: '検討状況は？',
      options: [
        { label: 'まずは見積もりを比較したい', tags: ['partial', 'water'] },
        { label: '本格的にプランを相談したい', tags: ['full', 'eco'] },
      ],
    },
  ],
  results: [
    {
      slug: 'kitchen-reform',
      name: 'キッチンリフォーム業者',
      category: 'キッチン特化型',
      description: 'システムキッチンの入れ替え・レイアウト変更を得意とする業者。',
      reasonTemplate: 'キッチンのリフォームを希望しているため、キッチン特化業者が向いています。',
      tags: ['kitchen'],
      link: 'https://example.com/kitchen-reform-affiliate',
      accentColor: '#0f766e',
    },
    {
      slug: 'water-reform',
      name: '水回りリフォーム業者',
      category: '水回り特化型',
      description: 'お風呂・トイレ・洗面所などの水回り工事を得意とする業者。',
      reasonTemplate: '水回りのリフォームを希望しているため、水回り特化業者が向いています。',
      tags: ['water'],
      link: 'https://example.com/water-reform-affiliate',
      accentColor: '#1d4ed8',
    },
    {
      slug: 'exterior-reform',
      name: '外壁・屋根リフォーム業者',
      category: '外装特化型',
      description: '外壁塗装・屋根の補修や葺き替えを得意とする業者。',
      reasonTemplate: '外壁・屋根のリフォームを希望しているため、外装特化業者が向いています。',
      tags: ['exterior'],
      link: 'https://example.com/exterior-reform-affiliate',
      accentColor: '#be185d',
    },
    {
      slug: 'eco-reform',
      name: '断熱・省エネリフォーム業者',
      category: '省エネ特化型',
      description: '断熱材・窓の交換など省エネ性能向上を得意とする業者。',
      reasonTemplate: '断熱性・省エネ性の向上を重視しているため、省エネ特化業者が向いています。',
      tags: ['eco'],
      link: 'https://example.com/eco-reform-affiliate',
      accentColor: '#0891b2',
    },
    {
      slug: 'full-renovation',
      name: 'フルリノベーション業者',
      category: 'フルリノベ型',
      description: '間取り変更を含む家全体の大規模リフォームを得意とする業者。',
      reasonTemplate: '家全体のリフォームを希望しているため、フルリノベーション業者が向いています。',
      tags: ['full'],
      link: 'https://example.com/full-renovation-affiliate',
      accentColor: '#7c2d12',
    },
  ],
};
