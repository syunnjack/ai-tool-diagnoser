import type { Diagnosis } from '../types';

export const customHome: Diagnosis = {
  slug: 'custom-home',
  title: '注文住宅診断',
  emoji: '🏠',
  shortDescription: '予算・重視ポイント・土地の有無からあなたに合う住宅メーカー・工務店がわかる',
  heroDescription: '5つの質問に答えるだけで、あなたの希望条件に合った注文住宅メーカー・工務店のタイプを診断します。カタログ・資料請求の参考にしてください。',
  questions: [
    {
      id: 'priority',
      title: '住宅で最も重視したいことは？',
      options: [
        { label: '予算をできるだけ抑えたい', tags: ['cost', 'local'] },
        { label: '断熱性能・省エネ性能', tags: ['performance', 'eco'] },
        { label: 'デザイン・間取りの自由度', tags: ['design'] },
        { label: 'ブランド・信頼性', tags: ['brand', 'major'] },
      ],
    },
    {
      id: 'land',
      title: '土地の状況は？',
      options: [
        { label: 'すでに土地がある', tags: ['local', 'design'] },
        { label: '土地探しから相談したい', tags: ['major', 'brand'] },
      ],
    },
    {
      id: 'style',
      title: '相談のスタイルは？',
      options: [
        { label: '住宅展示場でじっくり比較したい', tags: ['major', 'brand'] },
        { label: '地元の工務店に直接相談したい', tags: ['local', 'cost'] },
      ],
    },
    {
      id: 'budget',
      title: '予算感は？',
      options: [
        { label: 'ローコストに抑えたい', tags: ['cost'] },
        { label: '性能・デザインに投資したい', tags: ['performance', 'design'] },
      ],
    },
    {
      id: 'timing',
      title: '検討状況は？',
      options: [
        { label: 'まずは情報収集から', tags: ['cost', 'local'] },
        { label: '本格的に比較検討中', tags: ['performance', 'design', 'brand'] },
      ],
    },
  ],
  results: [
    {
      slug: 'low-cost-maker',
      name: 'ローコスト住宅メーカー',
      category: 'ローコスト型',
      description: '規格化された設計でコストを抑えながら注文住宅を建てられるメーカー。',
      reasonTemplate: '予算を重視しているため、ローコスト住宅メーカーの資料が参考になります。',
      tags: ['cost'],
      link: 'https://example.com/low-cost-maker-affiliate',
      accentColor: '#0f766e',
    },
    {
      slug: 'performance-maker',
      name: '高性能・高気密高断熱住宅メーカー',
      category: '性能重視型',
      description: '断熱性能・省エネ性能にこだわり、光熱費を抑えられる住宅メーカー。',
      reasonTemplate: '断熱性能・省エネ性能を重視しているため、高性能住宅メーカーが向いています。',
      tags: ['performance', 'eco'],
      link: 'https://example.com/performance-maker-affiliate',
      accentColor: '#1d4ed8',
    },
    {
      slug: 'design-maker',
      name: 'デザイン注文住宅メーカー',
      category: 'デザイン重視型',
      description: '間取り・外観デザインの自由度が高く、個性を出しやすい住宅メーカー。',
      reasonTemplate: 'デザイン・間取りの自由度を重視しているため、この型が向いています。',
      tags: ['design'],
      link: 'https://example.com/design-maker-affiliate',
      accentColor: '#be185d',
    },
    {
      slug: 'local-builder',
      name: '地元密着型工務店',
      category: '地元工務店型',
      description: '地域の気候・土地事情に詳しく、柔軟に相談しやすい地元の工務店。',
      reasonTemplate: '地元の工務店に直接相談したいニーズに合っています。',
      tags: ['local'],
      link: 'https://example.com/local-builder-affiliate',
      accentColor: '#0891b2',
    },
    {
      slug: 'major-maker',
      name: '大手ハウスメーカー',
      category: 'ブランド重視型',
      description: 'ブランド力・保証体制・土地探しサポートまで一貫して頼れる大手ハウスメーカー。',
      reasonTemplate: 'ブランド・信頼性を重視し土地探しから相談したいため、大手ハウスメーカーが向いています。',
      tags: ['brand', 'major'],
      link: 'https://example.com/major-maker-affiliate',
      accentColor: '#7c2d12',
    },
  ],
};
