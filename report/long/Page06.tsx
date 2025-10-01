'use client';

import { DomainScore } from '../types/report';
import { DomainPage } from './DomainPage';
import { DOMAIN_COLORS } from '../tokens';

interface Page06Props {
  domain: DomainScore;
}

export function Page06({ domain }: Page06Props) {
  return (
    <DomainPage
      domain="Memory"
      score={domain.score}
      percentile={domain.percentile}
      se={domain.se}
      n={domain.n}
      tier={domain.tier}
      color={DOMAIN_COLORS.memory}
      description="Working memory capacity, recall accuracy, and information retention across modalities."
      strengths={[
        'High working memory span',
        'Efficient encoding strategies',
        'Strong resistance to interference',
      ]}
      growth={[
        'Long-term consolidation techniques',
        'Chunking optimization for complex data',
        'Context-dependent retrieval practice',
      ]}
      pageNumber={6}
    />
  );
}
