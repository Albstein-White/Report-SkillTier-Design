'use client';

import { DonutSVG } from '../atoms/DonutSVG';
import { BRAND } from '../tokens';

interface Page12Props {
  traps: string[];
  consistency: number;
}

export function Page12({ traps, consistency }: Page12Props) {
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
          <h1 className="text-3xl font-bold mb-2">Traps & Consistency</h1>
          <p className="text-sm" style={{ color: BRAND.colors.muted }}>
            Common pitfalls and performance reliability analysis
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 flex-1">
          <div className="col-span-7 flex flex-col gap-4">
            <div
              className="p-6 rounded"
              style={{
                backgroundColor: BRAND.cardBg,
                borderRadius: BRAND.radius,
              }}
            >
              <h2 className="text-lg font-bold mb-4" style={{ color: BRAND.colors.warn }}>
                Common Traps
              </h2>
              <div className="space-y-3">
                {traps.map((trap, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded"
                    style={{
                      backgroundColor: `${BRAND.colors.warn}10`,
                    }}
                  >
                    <div
                      className="text-lg font-bold"
                      style={{ color: BRAND.colors.warn }}
                    >
                      {i + 1}
                    </div>
                    <p className="text-sm" style={{ color: BRAND.colors.muted }}>
                      {trap}
                    </p>
                  </div>
                ))}
                {traps.length === 0 && (
                  <div className="text-center py-8">
                    <div className="text-2xl mb-2">✓</div>
                    <p className="text-sm" style={{ color: BRAND.colors.muted }}>
                      No significant traps identified
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div
              className="p-6 rounded"
              style={{
                backgroundColor: BRAND.cardBg,
                borderRadius: BRAND.radius,
              }}
            >
              <h2 className="text-lg font-bold mb-3">Interpretation</h2>
              <p className="text-sm leading-relaxed" style={{ color: BRAND.colors.muted }}>
                Traps represent systematic errors or biases in your problem-solving approach.
                Awareness of these patterns enables targeted improvement strategies.
              </p>
            </div>
          </div>

          <div className="col-span-5 flex flex-col gap-4">
            <div
              className="p-6 rounded flex flex-col items-center justify-center"
              style={{
                backgroundColor: BRAND.cardBg,
                borderRadius: BRAND.radius,
              }}
            >
              <h2 className="text-lg font-bold mb-4">Consistency Score</h2>
              <DonutSVG
                value={consistency}
                max={100}
                color={consistency >= 70 ? BRAND.colors.ok : consistency >= 50 ? BRAND.colors.warn : BRAND.colors.bad}
              />
              <p className="text-xs mt-4 text-center" style={{ color: BRAND.colors.muted }}>
                Measures performance stability across tasks
              </p>
            </div>

            <div
              className="p-6 rounded"
              style={{
                backgroundColor: BRAND.cardBg,
                borderRadius: BRAND.radius,
              }}
            >
              <h3 className="text-sm font-bold mb-3">Score Ranges</h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span style={{ color: BRAND.colors.muted }}>70-100</span>
                  <span style={{ color: BRAND.colors.ok }}>Excellent</span>
                </div>
                <div className="flex justify-between items-center">
                  <span style={{ color: BRAND.colors.muted }}>50-69</span>
                  <span style={{ color: BRAND.colors.warn }}>Good</span>
                </div>
                <div className="flex justify-between items-center">
                  <span style={{ color: BRAND.colors.muted }}>0-49</span>
                  <span style={{ color: BRAND.colors.bad }}>Developing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-xs mt-4" style={{ color: BRAND.colors.muted }}>
          Page 12
        </div>
      </div>
    </div>
  );
}
