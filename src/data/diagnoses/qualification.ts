import type { Diagnosis } from '../types';

export const qualification: Diagnosis = {
  slug: 'qualification',
  title: '資格取得診断',
  emoji: '📜',
  shortDescription: '目的・分野・学習時間からあなたに合う資格・通信講座がわかる',
  heroDescription: '5つの質問に答えるだけで、あなたの目的・興味分野・学習時間に合った資格・通信講座を診断します。',
  questions: [
    {
      id: 'purpose',
      title: '資格取得の目的は？',
      options: [
        { label: '転職・就職を有利にしたい', tags: ['career', 'it'] },
        { label: '独立・開業したい', tags: ['independent', 'legal'] },
        { label: '今の仕事のスキルアップ', tags: ['skillup', 'it'] },
        { label: '趣味・生活に活かしたい', tags: ['hobby', 'lifestyle'] },
      ],
    },
    {
      id: 'field',
      title: '興味のある分野は？',
      options: [
        { label: 'IT・デジタル系', tags: ['it', 'career'] },
        { label: '法律・会計・ビジネス系', tags: ['legal', 'independent'] },
        { label: '医療・福祉・心理系', tags: ['medical', 'skillup'] },
        { label: '語学系', tags: ['language', 'hobby'] },
      ],
    },
    {
      id: 'time',
      title: '週にどれくらい学習時間を確保できますか？',
      options: [
        { label: 'まとまった時間が取れる', tags: ['career', 'independent'] },
        { label: 'スキマ時間で少しずつ', tags: ['hobby', 'lifestyle'] },
      ],
    },
    {
      id: 'budget',
      title: '予算感はどれに近いですか？',
      options: [
        { label: 'できるだけ安く始めたい', tags: ['hobby', 'lifestyle'] },
        { label: '本格的に投資してもいい', tags: ['career', 'independent', 'legal'] },
      ],
    },
    {
      id: 'style',
      title: '学習スタイルの希望は？',
      options: [
        { label: '通信講座でしっかりカリキュラムに沿いたい', tags: ['career', 'medical', 'legal'] },
        { label: 'アプリや動画で気軽に学びたい', tags: ['hobby', 'language', 'lifestyle'] },
      ],
    },
  ],
  results: [
    {
      slug: 'it-digital-qualification',
      name: 'IT・DX系資格型',
      category: 'IT・デジタル系',
      description: 'ITパスポートや基本情報技術者など、IT・デジタル分野の資格。',
      reasonTemplate: 'IT分野への興味とキャリアアップ志向が強いため、IT系資格が向いています。',
      tags: ['it', 'career', 'skillup'],
      link: 'https://example.com/it-digital-qualification-affiliate',
      accentColor: '#4338ca',
    },
    {
      slug: 'legal-accounting-qualification',
      name: '法律・会計系資格型',
      category: '法律・会計・ビジネス系',
      description: '簿記、行政書士、社労士など独立・キャリアに強い資格。',
      reasonTemplate: '独立志向やビジネス分野への関心が強いため、法律・会計系資格が向いています。',
      tags: ['legal', 'independent', 'career'],
      link: 'https://example.com/legal-accounting-qualification-affiliate',
      accentColor: '#92400e',
    },
    {
      slug: 'medical-welfare-qualification',
      name: '医療福祉・心理系資格型',
      category: '医療・福祉・心理系',
      description: '登録販売者、心理カウンセラーなど医療福祉分野の資格。',
      reasonTemplate: '医療福祉分野への関心とスキルアップ志向に合っています。',
      tags: ['medical', 'skillup'],
      link: 'https://example.com/medical-welfare-qualification-affiliate',
      accentColor: '#0f766e',
    },
    {
      slug: 'language-qualification',
      name: '語学系資格型',
      category: '語学系',
      description: 'TOEIC、中国語検定など語学系の資格・検定。',
      reasonTemplate: '語学分野への関心が強く、気軽に学びたいニーズに合っています。',
      tags: ['language', 'hobby'],
      link: 'https://example.com/language-qualification-affiliate',
      accentColor: '#0891b2',
    },
    {
      slug: 'lifestyle-hobby-qualification',
      name: '趣味・生活系資格型',
      category: '趣味・生活系',
      description: '整理収納アドバイザーや食生活アドバイザーなど、生活に活かせる資格。',
      reasonTemplate: '趣味や生活に活かしたい、気軽に始めたいニーズに合っています。',
      tags: ['hobby', 'lifestyle'],
      link: 'https://example.com/lifestyle-hobby-qualification-affiliate',
      accentColor: '#16a34a',
    },
  ],
};
