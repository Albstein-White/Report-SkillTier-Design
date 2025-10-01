'use client';

import { BRAND } from '../tokens';

export function Page15() {
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
          <h1 className="text-3xl font-bold mb-2">Methods Appendix</h1>
          <p className="text-sm" style={{ color: BRAND.colors.muted }}>
            Scoring methodology, calibration, and technical notes
          </p>
        </div>

        <div className="space-y-4 flex-1">
          <div
            className="p-6 rounded"
            style={{ backgroundColor: BRAND.cardBg, borderRadius: BRAND.radius }}
          >
            <h2 className="text-lg font-bold mb-3" style={{ color: BRAND.colors.accent }}>
              How Scoring Works
            </h2>
            <div className="text-sm leading-relaxed space-y-2" style={{ color: BRAND.colors.muted }}>
              <p>
                Scores are derived from Item Response Theory (IRT) models calibrated on a global
                reference sample. Each domain score represents your latent ability estimate on a
                standardized scale (mean = 50, SD = 15).
              </p>
              <p>
                Tasks are adaptively selected based on prior responses to maximize information at
                your ability level. This ensures efficient, accurate measurement across the full
                ability range.
              </p>
            </div>
          </div>

          <div
            className="p-6 rounded"
            style={{ backgroundColor: BRAND.cardBg, borderRadius: BRAND.radius }}
          >
            <h2 className="text-lg font-bold mb-3" style={{ color: BRAND.colors.ok }}>
              Calibration & Validation
            </h2>
            <div className="text-sm leading-relaxed space-y-2" style={{ color: BRAND.colors.muted }}>
              <p>
                The assessment battery has been validated against established cognitive tests
                (r = 0.72-0.89) and shows strong test-retest reliability (r = 0.81-0.93 across
                domains).
              </p>
              <p>
                Standard errors reflect measurement precision. Smaller SE values indicate higher
                confidence in score estimates. Scores within 1 SE of each other should be
                considered statistically equivalent.
              </p>
            </div>
          </div>

          <div
            className="p-6 rounded"
            style={{ backgroundColor: BRAND.cardBg, borderRadius: BRAND.radius }}
          >
            <h2 className="text-lg font-bold mb-3" style={{ color: BRAND.colors.warn }}>
              Tier Classification
            </h2>
            <div className="text-sm leading-relaxed" style={{ color: BRAND.colors.muted }}>
              <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="p-3 rounded" style={{ backgroundColor: `${BRAND.colors.accent}10` }}>
                  <div className="font-bold mb-1" style={{ color: BRAND.colors.accent }}>
                    Elite (85-100)
                  </div>
                  <div className="text-xs">Top 15% of global population</div>
                </div>
                <div className="p-3 rounded" style={{ backgroundColor: `${BRAND.colors.ok}10` }}>
                  <div className="font-bold mb-1" style={{ color: BRAND.colors.ok }}>
                    Advanced (70-84)
                  </div>
                  <div className="text-xs">Top 16-30% of global population</div>
                </div>
                <div className="p-3 rounded" style={{ backgroundColor: `${BRAND.colors.warn}10` }}>
                  <div className="font-bold mb-1" style={{ color: BRAND.colors.warn }}>
                    Intermediate (40-69)
                  </div>
                  <div className="text-xs">Middle 30-60% of global population</div>
                </div>
                <div className="p-3 rounded" style={{ backgroundColor: `${BRAND.colors.bad}10` }}>
                  <div className="font-bold mb-1" style={{ color: BRAND.colors.bad }}>
                    Developing (0-39)
                  </div>
                  <div className="text-xs">Bottom 40% of global population</div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="p-6 rounded"
            style={{ backgroundColor: BRAND.cardBg, borderRadius: BRAND.radius }}
          >
            <h2 className="text-lg font-bold mb-3">Disclaimers</h2>
            <div className="text-xs leading-relaxed space-y-2" style={{ color: BRAND.colors.muted }}>
              <p>
                This report is intended for personal development and should not be used for
                high-stakes decisions without additional validation.
              </p>
              <p>
                Cognitive abilities are malleable and trainable. Scores reflect current performance,
                not fixed potential. Environmental factors, motivation, and practice significantly
                influence outcomes.
              </p>
              <p>
                © 2025 SkillTier. All rights reserved. For questions or support, contact
                support@skilltier.com
              </p>
            </div>
          </div>
        </div>

        <div className="text-center text-xs mt-4" style={{ color: BRAND.colors.muted }}>
          Page 15
        </div>
      </div>
    </div>
  );
}
