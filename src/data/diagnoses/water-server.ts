import type { Diagnosis } from '../types';

export const waterServer: Diagnosis = {
  slug: 'water-server',
  title: 'ウォーターサーバー診断',
  emoji: '💧',
  shortDescription: '水の種類・設置スペース・予算からあなたに合うウォーターサーバーがわかる',
  heroDescription: '5つの質問に答えるだけで、あなたのライフスタイルに合ったウォーターサーバーのタイプを診断します。',
  questions: [
    {
      id: 'water-type',
      title: '希望する水の種類は？',
      options: [
        { label: '天然水にこだわりたい', tags: ['natural', 'quality'] },
        { label: '水の種類はこだわらない', tags: ['ro', 'budget'] },
      ],
    },
    {
      id: 'space',
      title: '設置スペースは？',
      options: [
        { label: '広めのスペースがある', tags: ['standing'] },
        { label: '卓上・省スペースがいい', tags: ['compact', 'small'] },
      ],
    },
    {
      id: 'design',
      title: '重視するポイントは？',
      options: [
        { label: 'デザイン・インテリア性', tags: ['design'] },
        { label: 'とにかくコスパ', tags: ['budget', 'ro'] },
        { label: '赤ちゃんのミルクにも使いたい', tags: ['natural', 'quality', 'family'] },
      ],
    },
    {
      id: 'usage',
      title: '主な利用シーンは？',
      options: [
        { label: '家族みんなでよく使う', tags: ['standing', 'family'] },
        { label: '一人暮らしで少量使う', tags: ['compact', 'small', 'budget'] },
      ],
    },
    {
      id: 'temperature',
      title: '欲しい機能は？',
      options: [
        { label: '温水・冷水どちらも使いたい', tags: ['natural', 'standing'] },
        { label: '冷水だけで十分、価格重視', tags: ['budget', 'ro'] },
      ],
    },
  ],
  results: [
    {
      slug: 'natural-water-server',
      name: '天然水サーバー',
      category: '天然水型',
      description: '採水地から届く天然水を使う、味と安全性にこだわるサーバー。',
      reasonTemplate: '天然水にこだわりたいニーズに合っており、天然水サーバーが向いています。',
      tags: ['natural', 'quality'],
      link: 'https://example.com/natural-water-server-affiliate',
      accentColor: '#0891b2',
    },
    {
      slug: 'ro-water-server',
      name: 'RO水サーバー',
      category: 'RO水型',
      description: '逆浸透膜でろ過した水を使う、コストを抑えやすいサーバー。',
      reasonTemplate: 'コスパを重視しているため、RO水サーバーが向いています。',
      tags: ['ro', 'budget'],
      link: 'https://example.com/ro-water-server-affiliate',
      accentColor: '#0f766e',
    },
    {
      slug: 'design-water-server',
      name: 'デザイン重視サーバー',
      category: 'デザイン型',
      description: 'インテリアになじむスタイリッシュなデザインのサーバー。',
      reasonTemplate: 'デザイン・インテリア性を重視しているため、この型が向いています。',
      tags: ['design', 'standing'],
      link: 'https://example.com/design-water-server-affiliate',
      accentColor: '#7c2d12',
    },
    {
      slug: 'budget-water-server',
      name: 'コスパ重視サーバー',
      category: 'コスパ型',
      description: '月々の料金を抑えて続けやすい、コストパフォーマンス重視のサーバー。',
      reasonTemplate: 'とにかくコスパを重視しているため、コスパ重視サーバーが向いています。',
      tags: ['budget'],
      link: 'https://example.com/budget-water-server-affiliate',
      accentColor: '#1d4ed8',
    },
    {
      slug: 'compact-water-server',
      name: '卓上型コンパクトサーバー',
      category: '卓上・省スペース型',
      description: '一人暮らしや省スペースの部屋にも置きやすい卓上サイズのサーバー。',
      reasonTemplate: '省スペースで一人暮らし向けの使い方に合っています。',
      tags: ['compact', 'small'],
      link: 'https://example.com/compact-water-server-affiliate',
      accentColor: '#be185d',
    },
  ],
};
