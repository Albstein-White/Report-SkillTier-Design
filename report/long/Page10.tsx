'use client';

import { DomainScore } from '../types/report';
import { DomainPage } from './DomainPage';
import { DOMAIN_COLORS } from '../tokens';

interface Page10Props {
  domain: DomainScore;
}

export function Page10({ domain }: Page10Props) {
  return (
    <DomainPage
      domain="Social"
      score={domain.score}
      percentile={domain.percentile}
      se={domain.se}
      n={domain.n}
      tier={domain.tier}
      color={DOMAIN_COLORS.social}
      description="Theory of mind, emotional intelligence, and interpersonal reasoning."
      strengths={[
        'Accurate mental state attribution',
        'High emotional pattern recognition',
        'Strong perspective-taking abilities',
      ]}
      growth={[
        'Complex multi-agent interaction modeling',
        'Cultural context integration',
        'Balancing empathy with objectivity',
      ]}
      pageNumber={10}
    />
  );
}
