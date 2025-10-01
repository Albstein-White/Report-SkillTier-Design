import { BRAND } from '../tokens';

interface MetricProps {
  label: string;
  value: string | number;
  suffix?: string;
  color?: string;
}

export function Metric({ label, value, suffix, color = BRAND.colors.fg }: MetricProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-xs font-medium" style={{ color: BRAND.colors.muted }}>
        {label}
      </div>
      <div className="text-2xl font-bold" style={{ color }}>
        {value}
        {suffix && <span className="text-sm ml-1">{suffix}</span>}
      </div>
    </div>
  );
}
