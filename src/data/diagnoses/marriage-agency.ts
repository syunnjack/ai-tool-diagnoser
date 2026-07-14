import type { Diagnosis } from '../types';

export const marriageAgency: Diagnosis = {
  slug: 'marriage-agency',
  title: '結婚相談所診断',
  emoji: '💍',
  shortDescription: '婚活のスタイルや希望条件からあなたに合う結婚相談所・婚活サービスがわかる',
  heroDescription: '5つの質問に答えるだけで、あなたの婚活スタイルに合った結婚相談所・婚活サービスのタイプを診断します。',
  questions: [
    {
      id: 'style',
      title: '婚活の進め方は？',
      options: [
        { label: '自分のペースでオンライン中心に進めたい', tags: ['online', 'quick'] },
        { label: '仲人・カウンセラーに伴走してほしい', tags: ['support', 'thorough'] },
      ],
    },
    {
      id: 'matching',
      title: 'お相手探しの方法は？',
      options: [
        { label: 'プロフィールデータでじっくり絞り込みたい', tags: ['data', 'online'] },
        { label: '紹介してもらう形がいい', tags: ['introduction', 'support'] },
        { label: 'パーティーやイベントで出会いたい', tags: ['party', 'quick'] },
      ],
    },
    {
      id: 'budget',
      title: '予算感は？',
      options: [
        { label: 'できるだけ費用を抑えたい', tags: ['online', 'quick'] },
        { label: 'ハイクラスな出会いに投資したい', tags: ['highclass', 'support'] },
      ],
    },
    {
      id: 'time',
      title: '婚活にかけられる時間は？',
      options: [
        { label: 'すきま時間にスマホで', tags: ['online', 'quick'] },
        { label: 'じっくり時間をかけたい', tags: ['thorough', 'support'] },
      ],
    },
    {
      id: 'age-income',
      title: '希望する相手の条件は？',
      options: [
        { label: '年収や学歴などハイクラス志向', tags: ['highclass', 'data'] },
        { label: '条件よりも相性重視', tags: ['party', 'introduction'] },
      ],
    },
  ],
  results: [
    {
      slug: 'data-matching-agency',
      name: 'データマッチング型結婚相談所',
      category: 'データ重視型',
      description: '年収・学歴などのプロフィールデータで効率的にお相手を絞り込める相談所。',
      reasonTemplate: 'プロフィールデータで絞り込みたいニーズに合っており、データマッチング型が向いています。',
      tags: ['data', 'online'],
      link: 'https://example.com/data-matching-agency-affiliate',
      accentColor: '#1d4ed8',
    },
    {
      slug: 'introduction-agency',
      name: '仲人紹介型結婚相談所',
      category: '仲人紹介型',
      description: '専任カウンセラーが二人三脚でサポートし、お相手を紹介してくれる相談所。',
      reasonTemplate: '仲人・カウンセラーに伴走してほしいニーズに合っており、仲人紹介型が向いています。',
      tags: ['support', 'introduction', 'thorough'],
      link: 'https://example.com/introduction-agency-affiliate',
      accentColor: '#be185d',
    },
    {
      slug: 'online-marriage-service',
      name: 'オンライン完結型婚活サービス',
      category: 'オンライン型',
      description: 'スマホひとつで検索から連絡まで完結できる、手軽な婚活サービス。',
      reasonTemplate: 'すきま時間で手軽に婚活を進めたいニーズに合っています。',
      tags: ['online', 'quick'],
      link: 'https://example.com/online-marriage-service-affiliate',
      accentColor: '#0f766e',
    },
    {
      slug: 'party-marriage-service',
      name: '婚活パーティー特化型サービス',
      category: 'パーティー型',
      description: '婚活パーティーや街コンなど、リアルな出会いの場を提供するサービス。',
      reasonTemplate: 'パーティーやイベントでの出会いを希望しているため、この型が向いています。',
      tags: ['party'],
      link: 'https://example.com/party-marriage-service-affiliate',
      accentColor: '#0891b2',
    },
    {
      slug: 'highclass-marriage-service',
      name: 'ハイクラス限定婚活サービス',
      category: 'ハイクラス型',
      description: '年収・学歴などの審査を設けた、ハイクラス層向けの婚活サービス。',
      reasonTemplate: 'ハイクラス志向の条件を重視しているため、ハイクラス限定サービスが向いています。',
      tags: ['highclass'],
      link: 'https://example.com/highclass-marriage-service-affiliate',
      accentColor: '#7c2d12',
    },
  ],
};
