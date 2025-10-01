'use client';

import { DomainPageProps } from '../types/report';
import { TierBadge } from '../atoms/TierBadge';
import { Metric } from '../atoms/Metric';
import { Bar } from '../atoms/Bar';
import { BRAND } from '../tokens';

export function DomainPage({
  domain,
  score,
  percentile,
  se,
  n,
  tier,
  color,
  description,
  strengths,
  growth,
  pageNumber,
}: DomainPageProps) {
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
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2" style={{ color }}>
              {domain}
            </h1>
            <p className="text-sm max-w-2xl" style={{ color: BRAND.colors.muted }}>
              {description}
            </p>
          </div>
          <TierBadge tier={tier} size="lg" />
        </div>

        <div className="grid grid-cols-12 gap-4 mb-6">
          <div
            className="col-span-3 p-4 rounded"
            style={{ backgroundColor: BRAND.cardBg, borderRadius: BRAND.radius }}
          >
            <Metric label="Score" value={score} color={color} />
          </div>

          <div
            className="col-span-3 p-4 rounded"
            style={{ backgroundColor: BRAND.cardBg, borderRadius: BRAND.radius }}
          >
            <Metric label="Percentile" value={percentile} suffix="%" color={BRAND.colors.ok} />
          </div>

          <div
            className="col-span-3 p-4 rounded"
            style={{ backgroundColor: BRAND.cardBg, borderRadius: BRAND.radius }}
          >
            <Metric label="Std Error" value={se.toFixed(1)} color={BRAND.colors.muted} />
          </div>

          <div
            className="col-span-3 p-4 rounded"
            style={{ backgroundColor: BRAND.cardBg, borderRadius: BRAND.radius }}
          >
            <Metric label="Sample Size" value={n} color={BRAND.colors.muted} />
          </div>
        </div>

        <div
          className="p-6 rounded mb-4"
          style={{ backgroundColor: BRAND.cardBg, borderRadius: BRAND.radius }}
        >
          <h2 className="text-lg font-bold mb-4">Performance Distribution</h2>
          <Bar label="Your Score" value={score} max={100} color={color} />
          <div className="mt-4 flex justify-between text-xs" style={{ color: BRAND.colors.muted }}>
            <span>0</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 flex-1">
          <div
            className="p-6 rounded"
            style={{ backgroundColor: BRAND.cardBg, borderRadius: BRAND.radius }}
          >
            <h2 className="text-lg font-bold mb-3" style={{ color: BRAND.colors.ok }}>
              Key Strengths
            </h2>
            <ul className="space-y-2">
              {strengths.map((strength, i) => (
                <li key={i} className="text-sm flex items-start gap-2">
                  <span style={{ color }}>●</span>
                  <span style={{ color: BRAND.colors.muted }}>{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="p-6 rounded"
            style={{ backgroundColor: BRAND.cardBg, borderRadius: BRAND.radius }}
          >
            <h2 className="text-lg font-bold mb-3" style={{ color: BRAND.colors.warn }}>
              Growth Areas
            </h2>
            <ul className="space-y-2">
              {growth.map((item, i) => (
                <li key={i} className="text-sm flex items-start gap-2">
                  <span style={{ color: BRAND.colors.warn }}>●</span>
                  <span style={{ color: BRAND.colors.muted }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center text-xs mt-4" style={{ color: BRAND.colors.muted }}>
          Page {pageNumber}
        </div>
      </div>
    </div>
  );
}
