'use client';

import { OverallScore, DomainScore } from '../types/report';
import { RadarSVG } from '../atoms/RadarSVG';
import { Bar } from '../atoms/Bar';
import { Metric } from '../atoms/Metric';
import { BRAND, DOMAIN_COLORS } from '../tokens';

interface Page02Props {
  overall: OverallScore;
  domains: DomainScore[];
}

export function Page02({ overall, domains }: Page02Props) {
  const domainLabels = domains.map((d) => d.domain.slice(0, 4).toUpperCase());
  const domainValues = domains.map((d) => d.score);

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
          <h1 className="text-3xl font-bold mb-2">Executive Summary</h1>
          <p className="text-sm" style={{ color: BRAND.colors.muted }}>
            Comprehensive overview across all cognitive domains
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 flex-1">
          <div className="col-span-7 flex items-center justify-center">
            <RadarSVG values={domainValues} labels={domainLabels} max={100} />
          </div>

          <div className="col-span-5 flex flex-col gap-4">
            <div
              className="p-4 rounded"
              style={{ backgroundColor: BRAND.cardBg, borderRadius: BRAND.radius }}
            >
              <Metric label="Overall Score" value={overall.score} color={BRAND.colors.accent} />
            </div>

            <div
              className="p-4 rounded"
              style={{ backgroundColor: BRAND.cardBg, borderRadius: BRAND.radius }}
            >
              <Metric
                label="Global Percentile"
                value={overall.percentile}
                suffix="%"
                color={BRAND.colors.ok}
              />
            </div>

            <div
              className="p-4 rounded"
              style={{ backgroundColor: BRAND.cardBg, borderRadius: BRAND.radius }}
            >
              <div className="text-xs font-medium mb-2" style={{ color: BRAND.colors.muted }}>
                Tier
              </div>
              <div className="text-2xl font-bold">{overall.tier}</div>
            </div>
          </div>

          <div className="col-span-12 flex flex-col gap-2">
            {domains.map((domain) => (
              <Bar
                key={domain.domain}
                label={domain.domain}
                value={domain.score}
                max={100}
                color={DOMAIN_COLORS[domain.domain.toLowerCase()] || BRAND.colors.accent}
              />
            ))}
          </div>
        </div>

        <div className="text-center text-xs mt-4" style={{ color: BRAND.colors.muted }}>
          Page 2
        </div>
      </div>
    </div>
  );
}
