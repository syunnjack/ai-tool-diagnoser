import type { Diagnosis } from '../types';

export const fxInvestment: Diagnosis = {
  slug: 'fx-investment',
  title: 'FX・投資サービス診断',
  emoji: '📈',
  shortDescription: '経験値や投資スタイルからあなたに合うFX・投資サービスがわかる',
  heroDescription:
    '5つの質問に答えるだけで、あなたの経験値や投資スタイルに合ったFX・投資サービスのタイプを診断します。診断結果は口座選びの参考情報であり、投資助言ではありません。FX・投資には元本割れ等のリスクがあります。取引を始める際は、各社が提供する契約締結前交付書面等を必ずご確認のうえ、ご自身の判断で行ってください。',
  questions: [
    {
      id: 'experience',
      title: '投資の経験は？',
      options: [
        { label: '初めて・未経験', tags: ['beginner', 'small'] },
        { label: 'ある程度経験がある', tags: ['experienced', 'advanced'] },
      ],
    },
    {
      id: 'amount',
      title: '始めたい金額感は？',
      options: [
        { label: '少額から試したい', tags: ['small', 'beginner'] },
        { label: 'まとまった資金で運用したい', tags: ['experienced', 'advanced'] },
      ],
    },
    {
      id: 'style',
      title: '取引のスタイルは？',
      options: [
        { label: 'スマホでサクッと取引したい', tags: ['app', 'small'] },
        { label: '本格的なチャートで分析したい', tags: ['advanced', 'chart'] },
        { label: '自動売買・積立で手間をかけたくない', tags: ['auto', 'beginner'] },
      ],
    },
    {
      id: 'learning',
      title: '学習について',
      options: [
        { label: 'デモ取引などで練習してから始めたい', tags: ['beginner', 'demo'] },
        { label: 'すぐに実践で運用したい', tags: ['experienced', 'auto'] },
      ],
    },
    {
      id: 'time',
      title: '取引にかけられる時間は？',
      options: [
        { label: 'こまめにチャートを見る時間はない', tags: ['auto', 'app'] },
        { label: 'じっくり相場を分析する時間がある', tags: ['advanced', 'chart'] },
      ],
    },
  ],
  results: [
    {
      slug: 'beginner-fx-service',
      name: '少額スタート向けFXサービス',
      category: '初心者向け',
      description: '1000通貨単位など少額から始められ、初心者向けサポートが充実したFXサービス。',
      reasonTemplate: '投資が初めてで少額から試したいニーズに合っており、初心者向けサービスが向いています。',
      tags: ['beginner', 'small'],
      link: 'https://example.com/beginner-fx-service-affiliate',
      accentColor: '#0f766e',
    },
    {
      slug: 'app-investment-service',
      name: 'スマホ完結型投資アプリ',
      category: 'アプリ型',
      description: '口座開設から取引まですべてスマホで完結する、手軽な投資アプリ。',
      reasonTemplate: 'スマホでサクッと取引したいニーズに合っており、アプリ型サービスが向いています。',
      tags: ['app'],
      link: 'https://example.com/app-investment-service-affiliate',
      accentColor: '#1d4ed8',
    },
    {
      slug: 'auto-trading-service',
      name: '積立・自動売買サービス',
      category: '自動運用型',
      description: 'あらかじめ設定したルールに沿って自動で売買してくれる、手間をかけたくない人向けのサービス。',
      reasonTemplate: '自動売買・積立で手間をかけたくないニーズに合っています。',
      tags: ['auto'],
      link: 'https://example.com/auto-trading-service-affiliate',
      accentColor: '#7c2d12',
    },
    {
      slug: 'demo-learning-service',
      name: 'デモ取引重視の学習型サービス',
      category: '学習重視型',
      description: '本番資金を使わずに練習できるデモ取引や学習コンテンツが充実したサービス。',
      reasonTemplate: 'デモ取引などで練習してから始めたいニーズに合っており、学習型サービスが向いています。',
      tags: ['demo', 'beginner'],
      link: 'https://example.com/demo-learning-service-affiliate',
      accentColor: '#0891b2',
    },
    {
      slug: 'advanced-chart-service',
      name: '高機能チャート重視の上級者向けサービス',
      category: '上級者向け',
      description: 'テクニカル分析ツールが充実し、本格的に相場分析したい経験者向けのサービス。',
      reasonTemplate: '経験があり本格的なチャート分析をしたいニーズに合っています。',
      tags: ['advanced', 'chart', 'experienced'],
      link: 'https://example.com/advanced-chart-service-affiliate',
      accentColor: '#be185d',
    },
  ],
};
