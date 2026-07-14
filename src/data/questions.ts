export interface QuestionOption {
  label: string;
  tags: string[];
}

export interface Question {
  id: string;
  title: string;
  options: QuestionOption[];
}

export const questions: Question[] = [
  {
    id: 'purpose',
    title: 'AIツールを主に何に使いたいですか？',
    options: [
      { label: '文章作成・要約', tags: ['writing', 'research', 'beginner'] },
      { label: '画像生成', tags: ['image', 'creative'] },
      { label: 'コード補助', tags: ['coding', 'pro', 'daily'] },
      { label: '情報収集・リサーチ', tags: ['research', 'business', 'daily'] },
    ],
  },
  {
    id: 'budget',
    title: '予算感はどれに近いですか？',
    options: [
      { label: 'まずは無料で試したい', tags: ['free', 'beginner'] },
      { label: '必要なら月額課金してもいい', tags: ['paid', 'business', 'pro'] },
    ],
  },
  {
    id: 'level',
    title: 'AIツールの利用レベルは？',
    options: [
      { label: '初心者', tags: ['beginner', 'simple'] },
      { label: 'ある程度使い慣れている', tags: ['pro', 'custom'] },
    ],
  },
  {
    id: 'frequency',
    title: 'どれくらいの頻度で使う予定ですか？',
    options: [
      { label: 'たまに使う', tags: ['simple', 'free'] },
      { label: '毎日使う', tags: ['daily', 'business', 'pro'] },
    ],
  },
  {
    id: 'usageType',
    title: '主な利用シーンは？',
    options: [
      { label: '個人利用・趣味', tags: ['creative', 'simple'] },
      { label: '仕事・業務効率化', tags: ['business', 'research', 'daily'] },
    ],
  },
];
