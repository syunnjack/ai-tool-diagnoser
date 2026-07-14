import type { Diagnosis } from '../types';

export const englishConversation: Diagnosis = {
  slug: 'english-conversation',
  title: 'オンライン英会話診断',
  emoji: '🗣️',
  shortDescription: '目的・予算・レベルからあなたに合うオンライン英会話がわかる',
  heroDescription: '5つの質問に答えるだけで、あなたの目的・予算・レベルに合ったオンライン英会話サービスを診断します。',
  questions: [
    {
      id: 'purpose',
      title: '英語を主に何に使いたいですか？',
      options: [
        { label: '日常会話・旅行', tags: ['daily', 'beginner'] },
        { label: 'ビジネス・仕事', tags: ['business', 'pro'] },
        { label: '資格試験対策（TOEIC等）', tags: ['exam', 'pro'] },
        { label: '子どもの英語教育', tags: ['kids', 'beginner'] },
      ],
    },
    {
      id: 'budget',
      title: '予算感はどれに近いですか？',
      options: [
        { label: 'できるだけ安く始めたい', tags: ['cheap', 'beginner'] },
        { label: '質が良ければ多少高くてもいい', tags: ['premium', 'business'] },
      ],
    },
    {
      id: 'teacher',
      title: '講師のタイプはどれがいいですか？',
      options: [
        { label: '日本人講師で安心して始めたい', tags: ['japanese', 'beginner'] },
        { label: 'ネイティブ講師にこだわりたい', tags: ['native', 'premium'] },
        { label: 'こだわらない・とにかく回数重視', tags: ['cheap', 'daily'] },
      ],
    },
    {
      id: 'level',
      title: '今の英語レベルは？',
      options: [
        { label: '初心者', tags: ['beginner', 'japanese'] },
        { label: '中級〜上級', tags: ['business', 'native', 'exam'] },
      ],
    },
    {
      id: 'frequency',
      title: 'どれくらいの頻度で受けたいですか？',
      options: [
        { label: '毎日レッスンを受けたい', tags: ['daily', 'cheap'] },
        { label: '週に数回で十分', tags: ['business', 'premium'] },
      ],
    },
  ],
  results: [
    {
      slug: 'daily-conversation-app',
      name: '日常英会話特化型',
      category: '日常会話・旅行',
      description: '日常会話や旅行で使える英語を、リーズナブルに毎日学びたい人向け。',
      reasonTemplate: '日常会話目的で毎日コツコツ続けたいニーズに合っています。',
      tags: ['daily', 'beginner', 'cheap', 'japanese'],
      link: 'https://example.com/daily-conversation-app-affiliate',
      accentColor: '#0ea5e9',
    },
    {
      slug: 'business-english-app',
      name: 'ビジネス英会話特化型',
      category: 'ビジネス',
      description: 'ビジネスシーンで通用する実践的な英語力を身につけたい人向け。',
      reasonTemplate: '仕事での実践利用を重視しており、ビジネス特化型カリキュラムが向いています。',
      tags: ['business', 'pro', 'premium', 'native'],
      link: 'https://example.com/business-english-app-affiliate',
      accentColor: '#4338ca',
    },
    {
      slug: 'native-teacher-app',
      name: 'ネイティブ講師重視型',
      category: 'ネイティブ講師',
      description: '発音やニュアンスまでこだわって学びたい、ネイティブ講師中心のサービス。',
      reasonTemplate: 'ネイティブ講師へのこだわりが強いため、ネイティブ在籍数の多いサービスが合っています。',
      tags: ['native', 'premium', 'business'],
      link: 'https://example.com/native-teacher-app-affiliate',
      accentColor: '#dc2626',
    },
    {
      slug: 'beginner-friendly-app',
      name: '初心者サポート重視型',
      category: '初心者向け',
      description: '日本人講師のカウンセリングも受けながら、安心して始めたい初心者向け。',
      reasonTemplate: '初心者で日本人講師のサポートを求めているため、安心感のあるサービスが向いています。',
      tags: ['beginner', 'japanese', 'daily'],
      link: 'https://example.com/beginner-friendly-app-affiliate',
      accentColor: '#16a34a',
    },
    {
      slug: 'exam-prep-app',
      name: '資格試験対策特化型',
      category: '資格試験対策',
      description: 'TOEIC・TOEFL・英検などのスコアアップを目指す人向け。',
      reasonTemplate: '資格試験対策が目的のため、試験対策カリキュラムに強いサービスが向いています。',
      tags: ['exam', 'pro', 'business'],
      link: 'https://example.com/exam-prep-app-affiliate',
      accentColor: '#b45309',
    },
  ],
};
