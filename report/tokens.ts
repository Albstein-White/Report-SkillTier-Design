export const BRAND = {
  colors: {
    bg: '#0D0E12',
    fg: '#E6E8EC',
    muted: '#9BA1A6',
    accent: '#7B61FF',
    ok: '#22C55E',
    warn: '#F59E0B',
    bad: '#EF4444',
  },
  radius: '6mm',
  gap: '4mm',
  cardBg: 'rgba(255, 255, 255, 0.04)',
} as const;

export const TIER_COLORS: Record<string, string> = {
  Elite: '#7B61FF',
  Advanced: '#22C55E',
  Intermediate: '#F59E0B',
  Developing: '#EF4444',
};

export const DOMAIN_COLORS: Record<string, string> = {
  analytical: '#7B61FF',
  mathematical: '#3B82F6',
  verbal: '#22C55E',
  memory: '#F59E0B',
  spatial: '#EC4899',
  creativity: '#8B5CF6',
  strategy: '#EF4444',
  social: '#14B8A6',
};
