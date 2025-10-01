'use client';

import { OverallScore } from '../types/report';
import { TierBadge } from '../atoms/TierBadge';
import { RarityTag } from '../atoms/RarityTag';
import { BRAND } from '../tokens';

interface Page01Props {
  name: string;
  date: string;
  overall: OverallScore;
}

export function Page01({ name, date, overall }: Page01Props) {
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
      <div className="flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="text-xs font-medium" style={{ color: BRAND.colors.muted }}>
            SkillTier Long Report
          </div>
          <div className="text-xs" style={{ color: BRAND.colors.muted }}>
            {date}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 gap-8">
          <div
            className="text-6xl font-bold text-center"
            style={{
              background: `linear-gradient(135deg, ${BRAND.colors.accent} 0%, ${BRAND.colors.ok} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {name}
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="text-8xl font-bold">{overall.score}</div>
            <TierBadge tier={overall.tier} size="lg" />
            <RarityTag rarity={overall.rarity} />
            <div className="text-sm" style={{ color: BRAND.colors.muted }}>
              Top {overall.percentile}% globally
            </div>
          </div>

          <div
            className="w-full max-w-md h-1 rounded-full"
            style={{ backgroundColor: BRAND.cardBg }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${overall.percentile}%`,
                backgroundColor: BRAND.colors.accent,
              }}
            />
          </div>
        </div>

        <div className="text-center text-xs" style={{ color: BRAND.colors.muted }}>
          Page 1
        </div>
      </div>
    </div>
  );
}
