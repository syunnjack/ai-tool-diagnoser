import type { Diagnosis } from '../types';

export const insurance: Diagnosis = {
  slug: 'insurance',
  title: '保険診断',
  emoji: '🛡️',
  shortDescription: '相談スタイルと家族構成からあなたに合う保険の選び方がわかる',
  heroDescription: '5つの質問に答えるだけで、あなたの相談スタイルや目的に合った保険の探し方を診断します。結果はあくまで参考情報であり、契約前には必ず各社の詳細な説明をご確認ください。',
  questions: [
    {
      id: 'style',
      title: '保険の相談スタイルは？',
      options: [
        { label: '自宅でじっくり相談したい', tags: ['thorough', 'visit'] },
        { label: 'お店に行って相談したい', tags: ['visit', 'store'] },
        { label: 'オンラインで手軽に済ませたい', tags: ['online', 'quick'] },
      ],
    },
    {
      id: 'purpose',
      title: '保険に入る目的は？',
      options: [
        { label: '万一の保障を重視したい', tags: ['thorough', 'family'] },
        { label: '将来のための貯蓄も兼ねたい', tags: ['savings', 'longterm'] },
        { label: '保険料をできるだけ安く抑えたい', tags: ['quick', 'compare'] },
      ],
    },
    {
      id: 'family',
      title: '家族構成は？',
      options: [
        { label: '独身・一人暮らし', tags: ['quick', 'online'] },
        { label: '夫婦のみ', tags: ['thorough', 'savings'] },
        { label: '子供がいる', tags: ['family', 'child'] },
      ],
    },
    {
      id: 'compare',
      title: '比較したい保険会社の数は？',
      options: [
        { label: '1社とじっくり話したい', tags: ['thorough', 'visit'] },
        { label: '複数社をまとめて比較したい', tags: ['compare', 'online'] },
      ],
    },
    {
      id: 'timing',
      title: '今回の保険相談は？',
      options: [
        { label: '初めて保険に入る', tags: ['thorough', 'family'] },
        { label: '定期的な見直し', tags: ['compare', 'online', 'savings'] },
      ],
    },
  ],
  results: [
    {
      slug: 'visit-consultation',
      name: '訪問型保険相談サービス',
      category: '訪問相談型',
      description: '自宅などに担当者が訪問し、複数保険会社の商品をじっくり比較できるサービス。',
      reasonTemplate: '自宅でじっくり相談したいニーズに合っており、訪問型の相談サービスが向いています。',
      tags: ['thorough', 'visit', 'family'],
      link: 'https://example.com/visit-consultation-affiliate',
      accentColor: '#1d4ed8',
    },
    {
      slug: 'online-comparison',
      name: 'オンライン一括見積もりサービス',
      category: 'オンライン比較型',
      description: 'スマホやPCから複数社の保険料をまとめて比較できるサービス。',
      reasonTemplate: '手軽に複数社を比較したいニーズに合っており、オンライン一括見積もりが向いています。',
      tags: ['online', 'quick', 'compare'],
      link: 'https://example.com/online-comparison-affiliate',
      accentColor: '#0f766e',
    },
    {
      slug: 'insurance-shop',
      name: '来店型保険ショップ',
      category: '来店相談型',
      description: 'ショッピングモールなどの店舗で、複数保険会社の商品を無料相談できるサービス。',
      reasonTemplate: '店舗で相談しながら比較したいニーズに合っており、来店型保険ショップが向いています。',
      tags: ['visit', 'store', 'compare'],
      link: 'https://example.com/insurance-shop-affiliate',
      accentColor: '#7c2d12',
    },
    {
      slug: 'savings-insurance',
      name: '貯蓄型保険特化相談',
      category: '貯蓄重視型',
      description: '保障と将来の資産形成を両立させたい人向けの貯蓄型保険に強い相談サービス。',
      reasonTemplate: '将来のための貯蓄も重視しているため、貯蓄型保険に強い相談サービスが向いています。',
      tags: ['savings', 'longterm'],
      link: 'https://example.com/savings-insurance-affiliate',
      accentColor: '#0891b2',
    },
    {
      slug: 'child-insurance',
      name: '子供・教育費重視の相談サービス',
      category: 'ファミリー重視型',
      description: '子供の教育費や家族の保障を中心に提案してくれる相談サービス。',
      reasonTemplate: 'お子さんがいてファミリー向けの保障を重視しているため、この型が向いています。',
      tags: ['family', 'child'],
      link: 'https://example.com/child-insurance-affiliate',
      accentColor: '#be185d',
    },
  ],
};
