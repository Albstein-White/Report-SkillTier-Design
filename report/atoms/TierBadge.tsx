import { TIER_COLORS } from '../tokens';

interface TierBadgeProps {
  tier: string;
  size?: 'sm' | 'md' | 'lg';
}

export function TierBadge({ tier, size = 'md' }: TierBadgeProps) {
  const color = TIER_COLORS[tier] || TIER_COLORS.Developing;
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2',
  };

  return (
    <div
      className={`inline-flex items-center font-semibold rounded ${sizeClasses[size]}`}
      style={{ backgroundColor: color, color: '#fff' }}
    >
      {tier}
    </div>
  );
}
