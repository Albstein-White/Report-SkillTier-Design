'use client';

import { UndervaluedDomain } from '../types/report';
import { BRAND, DOMAIN_COLORS } from '../tokens';

interface Page11Props {
  undervalued: UndervaluedDomain[];
}

export function Page11({ undervalued }: Page11Props) {
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
          <h1 className="text-3xl font-bold mb-2">Hidden Potentials</h1>
          <p className="text-sm" style={{ color: BRAND.colors.muted }}>
            Undervalued strengths that deserve more attention and development
          </p>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          {undervalued.map((item, i) => {
            const color =
              DOMAIN_COLORS[item.domain.toLowerCase()] || BRAND.colors.accent;
            return (
              <div
                key={i}
                className="p-6 rounded"
                style={{
                  backgroundColor: BRAND.cardBg,
                  borderRadius: BRAND.radius,
                  borderLeft: `4px solid ${color}`,
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="text-lg font-bold"
                      style={{ color }}
                    >
                      {item.domain}
                    </div>
                    <div
                      className="px-2 py-1 text-xs font-medium rounded"
                      style={{
                        backgroundColor: `${color}20`,
                        color,
                      }}
                    >
                      Hidden Strength
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: BRAND.colors.muted }}>
                  {item.why}
                </p>
              </div>
            );
          })}

          {undervalued.length === 0 && (
            <div
              className="flex-1 flex items-center justify-center p-12 rounded"
              style={{
                backgroundColor: BRAND.cardBg,
                borderRadius: BRAND.radius,
              }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">✨</div>
                <div className="text-lg font-semibold mb-2">
                  All Strengths Well-Recognized
                </div>
                <p className="text-sm" style={{ color: BRAND.colors.muted }}>
                  Your profile shows balanced development across all domains
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="text-center text-xs mt-4" style={{ color: BRAND.colors.muted }}>
          Page 11
        </div>
      </div>
    </div>
  );
}
