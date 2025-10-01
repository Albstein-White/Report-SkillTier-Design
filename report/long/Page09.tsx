'use client';

import { DomainScore } from '../types/report';
import { DomainPage } from './DomainPage';
import { DOMAIN_COLORS } from '../tokens';

interface Page09Props {
  domain: DomainScore;
}

export function Page09({ domain }: Page09Props) {
  return (
    <DomainPage
      domain="Strategy"
      score={domain.score}
      percentile={domain.percentile}
      se={domain.se}
      n={domain.n}
      tier={domain.tier}
      color={DOMAIN_COLORS.strategy}
      description="Planning, resource allocation, and long-term decision-making under constraints."
      strengths={[
        'Effective multi-step planning',
        'Strong resource optimization',
        'Adaptive strategy switching',
      ]}
      growth={[
        'Anticipation of opponent moves',
        'Handling high-uncertainty scenarios',
        'Integration of probabilistic information',
      ]}
      pageNumber={9}
    />
  );
}
