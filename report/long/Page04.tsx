'use client';

import { DomainScore } from '../types/report';
import { DomainPage } from './DomainPage';
import { DOMAIN_COLORS } from '../tokens';

interface Page04Props {
  domain: DomainScore;
}

export function Page04({ domain }: Page04Props) {
  return (
    <DomainPage
      domain="Mathematical"
      score={domain.score}
      percentile={domain.percentile}
      se={domain.se}
      n={domain.n}
      tier={domain.tier}
      color={DOMAIN_COLORS.mathematical}
      description="Numerical reasoning, quantitative problem-solving, and mathematical conceptualization."
      strengths={[
        'Rapid mental arithmetic and estimation',
        'Strong algebraic manipulation skills',
        'Effective use of mathematical heuristics',
      ]}
      growth={[
        'Advanced geometry and spatial math',
        'Statistical inference under uncertainty',
        'Multi-step problem chaining',
      ]}
      pageNumber={4}
    />
  );
}
