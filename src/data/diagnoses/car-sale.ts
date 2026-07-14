import type { Diagnosis } from '../types';

export const carSale: Diagnosis = {
  slug: 'car-sale',
  title: '車買取診断',
  emoji: '🚗',
  shortDescription: '車の状態・車種からあなたに合う車買取サービスがわかる',
  heroDescription: '5つの質問に答えるだけで、あなたの車の状態に合った買取サービスのタイプを診断します。一括査定の参考にしてください。',
  questions: [
    {
      id: 'condition',
      title: '車の状態は？',
      options: [
        { label: '普通に走行できる', tags: ['normal', 'multi'] },
        { label: '事故車・修復歴あり', tags: ['accident'] },
        { label: '故障していて動かない', tags: ['accident', 'nonrunning'] },
      ],
    },
    {
      id: 'maker',
      title: '車のメーカーは？',
      options: [
        { label: '国産車', tags: ['normal', 'multi'] },
        { label: '外車（輸入車）', tags: ['import'] },
      ],
    },
    {
      id: 'age',
      title: '車の年式は？',
      options: [
        { label: '5年以内の比較的新しい車', tags: ['newmodel', 'multi'] },
        { label: '5年以上経過している', tags: ['normal', 'local'] },
      ],
    },
    {
      id: 'priority',
      title: '最も重視したいことは？',
      options: [
        { label: 'できるだけ高く売りたい', tags: ['multi', 'newmodel'] },
        { label: '手間なくすぐに引き取ってほしい', tags: ['local', 'nonrunning'] },
      ],
    },
    {
      id: 'compare',
      title: '査定の受け方は？',
      options: [
        { label: '複数社の査定額を比較したい', tags: ['multi', 'newmodel'] },
        { label: '専門業者に直接相談したい', tags: ['accident', 'import'] },
      ],
    },
  ],
  results: [
    {
      slug: 'multi-appraisal',
      name: '大手一括査定サービス',
      category: '一括査定型',
      description: '複数の買取業者からまとめて査定額を集められる一括査定サービス。',
      reasonTemplate: '複数社の査定額を比較して高く売りたいニーズに合っています。',
      tags: ['multi', 'normal'],
      link: 'https://example.com/multi-appraisal-affiliate',
      accentColor: '#0f766e',
    },
    {
      slug: 'accident-car-buyer',
      name: '事故車・不動車専門買取',
      category: '事故車特化型',
      description: '事故車や動かない車でも値段をつけてくれる専門買取業者。',
      reasonTemplate: '事故車・修復歴や故障車の売却に合っており、事故車専門買取が向いています。',
      tags: ['accident', 'nonrunning'],
      link: 'https://example.com/accident-car-buyer-affiliate',
      accentColor: '#1d4ed8',
    },
    {
      slug: 'import-car-buyer',
      name: '外車特化買取',
      category: '外車特化型',
      description: '輸入車の相場・パーツ事情に詳しい外車専門の買取業者。',
      reasonTemplate: '外車（輸入車）の売却に合っており、外車特化買取が向いています。',
      tags: ['import'],
      link: 'https://example.com/import-car-buyer-affiliate',
      accentColor: '#be185d',
    },
    {
      slug: 'newmodel-buyer',
      name: '高年式車特化買取',
      category: '高年式特化型',
      description: '5年以内の新しい車を高値で買い取ることを得意とする業者。',
      reasonTemplate: '比較的新しい車をできるだけ高く売りたいニーズに合っています。',
      tags: ['newmodel'],
      link: 'https://example.com/newmodel-buyer-affiliate',
      accentColor: '#0891b2',
    },
    {
      slug: 'local-buyer',
      name: '地域密着型買取店',
      category: '地域密着型',
      description: '手続きから引き取りまで手間なくスムーズに対応してくれる地元の買取店。',
      reasonTemplate: '手間なくすぐに引き取ってほしいニーズに合っており、地域密着型買取店が向いています。',
      tags: ['local'],
      link: 'https://example.com/local-buyer-affiliate',
      accentColor: '#7c2d12',
    },
  ],
};
