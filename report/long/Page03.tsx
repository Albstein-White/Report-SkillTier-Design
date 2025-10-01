'use client';

import { DomainScore } from '../types/report';
import { DomainPage } from './DomainPage';
import { DOMAIN_COLORS } from '../tokens';

interface Page03Props {
  domain: DomainScore;
}

export function Page03({ domain }: Page03Props) {
  return (
    <DomainPage
      domain="Analytical"
      score={domain.score}
      percentile={domain.percentile}
      se={domain.se}
      n={domain.n}
      tier={domain.tier}
      color={DOMAIN_COLORS.analytical}
      description="Ability to break down complex problems, identify patterns, and derive logical conclusions from data."
      strengths={[
        'Strong pattern recognition across abstract concepts',
        'Efficient problem decomposition strategies',
        'High accuracy in logical inference tasks',
      ]}
      growth={[
        'Speed optimization in timed analytical tasks',
        'Enhanced metacognitive monitoring',
        'Broader exposure to novel problem types',
      ]}
      pageNumber={3}
    />
  );
}
