'use client';

import { DomainScore } from '../types/report';
import { BRAND, DOMAIN_COLORS } from '../tokens';

interface Page13Props {
  domains: DomainScore[];
}

export function Page13({ domains }: Page13Props) {
  const drills = [
    { domain: 'Analytical', drill: 'Pattern Matrix Challenges', time: '15 min/day', priority: 1 },
    { domain: 'Mathematical', drill: 'Mental Arithmetic Sprints', time: '10 min/day', priority: 2 },
    { domain: 'Verbal', drill: 'Etymology Deep Dives', time: '12 min/day', priority: 3 },
    { domain: 'Memory', drill: 'Chunking Practice', time: '15 min/day', priority: 4 },
    { domain: 'Spatial', drill: '3D Rotation Drills', time: '10 min/day', priority: 5 },
    { domain: 'Creativity', drill: 'Divergent Thinking Prompts', time: '20 min/day', priority: 6 },
  ];

  return (
    <div
      className="relative"
      style={{
        width: '210mm',
        height: '297mm',
        backgroundColor: BRAND.colors.bg,
        color: BRAND.colors.fg,
        padding: '12mm',
        pageBreakAfter: 'always',
      }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Action Plan</h1>
          <p className="text-sm" style={{ color: BRAND.colors.muted }}>
            Targeted drills and quick wins for accelerated development
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Top 6 Priority Drills</h2>
          <div className="grid grid-cols-2 gap-3">
            {drills.map((drill) => {
              const color =
                DOMAIN_COLORS[drill.domain.toLowerCase()] || BRAND.colors.accent;
              return (
                <div
                  key={drill.priority}
                  className="p-4 rounded"
                  style={{
                    backgroundColor: BRAND.cardBg,
                    borderRadius: BRAND.radius,
                    borderLeft: `3px solid ${color}`,
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-sm font-bold" style={{ color }}>
                      {drill.domain}
                    </div>
                    <div
                      className="text-xs font-medium px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: `${color}20`,
                        color,
                      }}
                    >
                      P{drill.priority}
                    </div>
                  </div>
                  <div className="text-sm font-semibold mb-1">{drill.drill}</div>
                  <div className="text-xs" style={{ color: BRAND.colors.muted }}>
                    {drill.time}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Quick Wins by Domain</h2>
          <div className="grid grid-cols-2 gap-3">
            {domains.slice(0, 6).map((domain) => {
              const color =
                DOMAIN_COLORS[domain.domain.toLowerCase()] || BRAND.colors.accent;
              const quickWins: Record<string, string> = {
                analytical: 'Practice identifying assumptions in arguments',
                mathematical: 'Master the order of magnitude estimation',
                verbal: 'Learn 10 new word roots per week',
                memory: 'Use the method of loci for lists',
                spatial: 'Sketch objects from multiple perspectives',
                creativity: 'Combine unrelated concepts daily',
                strategy: 'Analyze post-game decisions',
                social: 'Journal about others\' perspectives',
              };

              return (
                <div
                  key={domain.domain}
                  className="p-4 rounded"
                  style={{
                    backgroundColor: BRAND.cardBg,
                    borderRadius: BRAND.radius,
                  }}
                >
                  <div className="text-sm font-bold mb-2" style={{ color }}>
                    {domain.domain}
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: BRAND.colors.muted }}>
                    {quickWins[domain.domain.toLowerCase()] || 'Practice consistently'}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="mt-4 p-4 rounded"
          style={{
            backgroundColor: `${BRAND.colors.accent}10`,
            borderRadius: BRAND.radius,
          }}
        >
          <p className="text-xs leading-relaxed" style={{ color: BRAND.colors.muted }}>
            <strong style={{ color: BRAND.colors.fg }}>Recommended approach:</strong> Focus on
            your top 2-3 priorities for 30 days before rotating. Consistency beats intensity.
            Track your progress weekly and adjust based on improvement velocity.
          </p>
        </div>

        <div className="text-center text-xs mt-4" style={{ color: BRAND.colors.muted }}>
          Page 13
        </div>
      </div>
    </div>
  );
}
