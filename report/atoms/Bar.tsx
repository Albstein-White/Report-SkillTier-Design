import { BRAND } from '../tokens';

interface BarProps {
  label: string;
  value: number;
  max?: number;
  color?: string;
  showValue?: boolean;
}

export function Bar({ label, value, max = 100, color = BRAND.colors.accent, showValue = true }: BarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <span className="text-xs font-medium" style={{ color: BRAND.colors.muted }}>
          {label}
        </span>
        {showValue && (
          <span className="text-xs font-bold" style={{ color: BRAND.colors.fg }}>
            {value}
          </span>
        )}
      </div>
      <div className="w-full h-2 rounded-full" style={{ backgroundColor: BRAND.cardBg }}>
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}
