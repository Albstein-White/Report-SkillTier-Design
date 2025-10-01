'use client';

import { DomainScore } from '../types/report';
import { DomainPage } from './DomainPage';
import { DOMAIN_COLORS } from '../tokens';

interface Page07Props {
  domain: DomainScore;
}

export function Page07({ domain }: Page07Props) {
  return (
    <DomainPage
      domain="Spatial"
      score={domain.score}
      percentile={domain.percentile}
      se={domain.se}
      n={domain.n}
      tier={domain.tier}
      color={DOMAIN_COLORS.spatial}
      description="Mental rotation, visualization, and spatial reasoning in 2D and 3D environments."
      strengths={[
        'Rapid mental rotation abilities',
        'Accurate spatial transformations',
        'Strong 3D object manipulation',
      ]}
      growth={[
        'Complex multi-object tracking',
        'Perspective-taking under time pressure',
        'Integration with verbal spatial cues',
      ]}
      pageNumber={7}
    />
  );
}
