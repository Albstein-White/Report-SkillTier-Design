'use client';

import { DomainScore } from '../types/report';
import { DomainPage } from './DomainPage';
import { DOMAIN_COLORS } from '../tokens';

interface Page05Props {
  domain: DomainScore;
}

export function Page05({ domain }: Page05Props) {
  return (
    <DomainPage
      domain="Verbal"
      score={domain.score}
      percentile={domain.percentile}
      se={domain.se}
      n={domain.n}
      tier={domain.tier}
      color={DOMAIN_COLORS.verbal}
      description="Language comprehension, vocabulary depth, and linguistic reasoning abilities."
      strengths={[
        'Rich vocabulary and semantic networks',
        'Effective extraction of meaning from context',
        'Strong analogical reasoning with words',
      ]}
      growth={[
        'Complex syntax parsing speed',
        'Broader exposure to technical terminology',
        'Improved disambiguation strategies',
      ]}
      pageNumber={5}
    />
  );
}
