'use client';

import { DomainScore } from '../types/report';
import { DomainPage } from './DomainPage';
import { DOMAIN_COLORS } from '../tokens';

interface Page08Props {
  domain: DomainScore;
}

export function Page08({ domain }: Page08Props) {
  return (
    <DomainPage
      domain="Creativity"
      score={domain.score}
      percentile={domain.percentile}
      se={domain.se}
      n={domain.n}
      tier={domain.tier}
      color={DOMAIN_COLORS.creativity}
      description="Divergent thinking, novel idea generation, and conceptual flexibility."
      strengths={[
        'High fluency in idea generation',
        'Conceptual flexibility across domains',
        'Original approaches to problems',
      ]}
      growth={[
        'Elaboration and refinement of ideas',
        'Cross-domain analogical transfer',
        'Balancing novelty with feasibility',
      ]}
      pageNumber={8}
    />
  );
}
