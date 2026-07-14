import type { Diagnosis } from '../types';

export const moving: Diagnosis = {
  slug: 'moving',
  title: '引っ越し業者診断',
  emoji: '📦',
  shortDescription: '荷物量・距離・予算からあなたに合う引っ越し業者がわかる',
  heroDescription: '5つの質問に答えるだけで、あなたの引っ越し条件に合った業者のタイプを診断します。一括見積もりの参考にしてください。',
  questions: [
    {
      id: 'household',
      title: '世帯構成は？',
      options: [
        { label: '単身（一人暮らし）', tags: ['single', 'budget'] },
        { label: '家族（2人以上）', tags: ['family', 'full'] },
      ],
    },
    {
      id: 'distance',
      title: '引っ越しの距離は？',
      options: [
        { label: '同一市内・近距離', tags: ['single', 'budget'] },
        { label: '県外・長距離', tags: ['longdistance'] },
      ],
    },
    {
      id: 'timing',
      title: '引っ越しの時期は？',
      options: [
        { label: 'できるだけ急ぎたい', tags: ['urgent', 'budget'] },
        { label: '日程に余裕がある', tags: ['full', 'longdistance'] },
      ],
    },
    {
      id: 'priority',
      title: '最も重視したいことは？',
      options: [
        { label: 'とにかく費用を抑えたい', tags: ['budget', 'urgent'] },
        { label: '荷造りも含めておまかせしたい', tags: ['full'] },
      ],
    },
    {
      id: 'packing',
      title: '荷造りは？',
      options: [
        { label: '自分で荷造りする', tags: ['single', 'budget'] },
        { label: 'プロにおまかせしたい', tags: ['full', 'family'] },
      ],
    },
  ],
  results: [
    {
      slug: 'single-pack-mover',
      name: '単身パック引っ越し業者',
      category: '単身特化型',
      description: '荷物量の少ない単身者向けに、コンテナ単位で運ぶ低価格プランに強い業者。',
      reasonTemplate: '単身で費用を抑えたいニーズに合っており、単身パック業者が向いています。',
      tags: ['single', 'budget'],
      link: 'https://example.com/single-pack-mover-affiliate',
      accentColor: '#0f766e',
    },
    {
      slug: 'family-mover',
      name: '家族向け引っ越し業者',
      category: '家族向け型',
      description: '荷物量の多い家族の引っ越しに対応できる人員・トラックを揃えた業者。',
      reasonTemplate: '家族での引っ越しに合っており、家族向け業者が向いています。',
      tags: ['family'],
      link: 'https://example.com/family-mover-affiliate',
      accentColor: '#1d4ed8',
    },
    {
      slug: 'longdistance-mover',
      name: '長距離引っ越し業者',
      category: '長距離特化型',
      description: '県外への長距離輸送や搬送日程調整に強い業者。',
      reasonTemplate: '県外・長距離の引っ越しに合っており、長距離特化業者が向いています。',
      tags: ['longdistance'],
      link: 'https://example.com/longdistance-mover-affiliate',
      accentColor: '#0891b2',
    },
    {
      slug: 'urgent-cheap-mover',
      name: '即日・激安引っ越し業者',
      category: '即日・激安型',
      description: '急な引っ越しにも対応でき、価格重視のプランを提供する業者。',
      reasonTemplate: '急ぎで費用も抑えたいニーズに合っており、即日・激安業者が向いています。',
      tags: ['urgent', 'budget'],
      link: 'https://example.com/urgent-cheap-mover-affiliate',
      accentColor: '#be185d',
    },
    {
      slug: 'full-service-mover',
      name: 'フルサービス引っ越し業者',
      category: 'フルサービス型',
      description: '荷造りから荷解きまでおまかせできる、手間をかけたくない人向けの業者。',
      reasonTemplate: '荷造りも含めておまかせしたいニーズに合っており、フルサービス業者が向いています。',
      tags: ['full'],
      link: 'https://example.com/full-service-mover-affiliate',
      accentColor: '#7c2d12',
    },
  ],
};
