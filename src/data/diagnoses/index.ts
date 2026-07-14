import type { Diagnosis } from '../types';
import { aiTools } from './ai-tools';
import { englishConversation } from './english-conversation';
import { careerChange } from './career-change';
import { programmingSchool } from './programming-school';
import { videoStreaming } from './video-streaming';
import { personalGym } from './personal-gym';
import { qualification } from './qualification';
import { insurance } from './insurance';
import { hairRemovalSalon } from './hair-removal-salon';
import { waterServer } from './water-server';
import { marriageAgency } from './marriage-agency';
import { fxInvestment } from './fx-investment';

export const diagnoses: Diagnosis[] = [
  aiTools,
  englishConversation,
  careerChange,
  programmingSchool,
  videoStreaming,
  personalGym,
  qualification,
  insurance,
  hairRemovalSalon,
  waterServer,
  marriageAgency,
  fxInvestment,
];

export function getDiagnosisBySlug(slug: string): Diagnosis | undefined {
  return diagnoses.find((d) => d.slug === slug);
}

export function getResultBySlug(diagnosisSlug: string, resultSlug: string) {
  const diagnosis = getDiagnosisBySlug(diagnosisSlug);
  return diagnosis?.results.find((r) => r.slug === resultSlug);
}
