'use client';

import { OverallScore, DomainScore } from '../types/report';
import { Bar } from '../atoms/Bar';
import { Metric } from '../atoms/Metric';
import { BRAND, DOMAIN_COLORS } from '../tokens';

interface Page14Props {
  overall: OverallScore;
  domains: DomainScore[];
  durationSec: number;
}

export function Page14({ overall, domains, durationSec }: Page14Props) {
  const durationMin = Math.round(durationSec / 60);
  const speedPercentile = 85;

  const cohortData = [
    { label: 'Overall', percentile: overall.percentile, color: BRAND.colors.accent },
    { label: 'Age Group', percentile: 78, color: BRAND.colors.ok },
    { label: 'Education Level', percentile: 82, color: BRAND.colors.warn },
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
          <h1 className="text-3xl font-bold mb-2">Benchmarking</h1>
          <p className="text-sm" style={{ color: BRAND.colors.muted }}>
            How you compare across different reference groups
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 mb-6">
          <div
            className="col-span-4 p-4 rounded"
            style={{ backgroundColor: BRAND.cardBg, borderRadius: BRAND.radius }}
          >
            <Metric
              label="Global Percentile"
              value={overall.percentile}
              suffix="%"
              color={BRAND.colors.accent}
            />
          </div>

          <div
            className="col-span-4 p-4 rounded"
            style={{ backgroundColor: BRAND.cardBg, borderRadius: BRAND.radius }}
          >
            <Metric
              label="Completion Time"
              value={durationMin}
              suffix="min"
              color={BRAND.colors.ok}
            />
          </div>

          <div
            className="col-span-4 p-4 rounded"
            style={{ backgroundColor: BRAND.cardBg, borderRadius: BRAND.radius }}
          >
            <Metric
              label="Speed Rank"
              value={speedPercentile}
              suffix="%"
              color={BRAND.colors.warn}
            />
          </div>
        </div>

        <div
          className="p-6 rounded mb-4"
          style={{ backgroundColor: BRAND.cardBg, borderRadius: BRAND.radius }}
        >
          <h2 className="text-lg font-bold mb-4">Cohort Comparisons</h2>
          <div className="space-y-3">
            {cohortData.map((cohort) => (
              <Bar
                key={cohort.label}
                label={cohort.label}
                value={cohort.percentile}
                max={100}
                color={cohort.color}
              />
            ))}
          </div>
        </div>

        <div
          className="p-6 rounded mb-4"
          style={{ backgroundColor: BRAND.cardBg, borderRadius: BRAND.radius }}
        >
          <h2 className="text-lg font-bold mb-4">Domain Dispersion</h2>
          <div className="space-y-2">
            {domains.map((domain) => {
              const color =
                DOMAIN_COLORS[domain.domain.toLowerCase()] || BRAND.colors.accent;
              return (
                <div key={domain.domain} className="flex items-center gap-3">
                  <div className="w-24 text-xs" style={{ color: BRAND.colors.muted }}>
                    {domain.domain}
                  </div>
                  <div className="flex-1">
                    <Bar
                      label=""
                      value={domain.percentile}
                      max={100}
                      color={color}
                      showValue={false}
                    />
                  </div>
                  <div className="w-12 text-right text-xs font-bold">
                    {domain.percentile}%
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="p-4 rounded"
          style={{
            backgroundColor: `${BRAND.colors.accent}10`,
            borderRadius: BRAND.radius,
          }}
        >
          <p className="text-xs leading-relaxed" style={{ color: BRAND.colors.muted }}>
            <strong style={{ color: BRAND.colors.fg }}>Note:</strong> Percentiles compare you to
            a global reference sample. High dispersion indicates specialized strengths; low
            dispersion suggests balanced development.
          </p>
        </div>

        <div className="text-center text-xs mt-4" style={{ color: BRAND.colors.muted }}>
          Page 14
        </div>
      </div>
    </div>
  );
}
