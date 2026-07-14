export interface QuestionOption {
  label: string;
  tags: string[];
}

export interface Question {
  id: string;
  title: string;
  options: QuestionOption[];
}

export interface ResultItem {
  slug: string;
  name: string;
  category: string;
  description: string;
  reasonTemplate: string;
  tags: string[];
  link: string;
  accentColor: string;
}

export interface Diagnosis {
  slug: string;
  title: string;
  emoji: string;
  shortDescription: string;
  heroDescription: string;
  questions: Question[];
  results: ResultItem[];
}
