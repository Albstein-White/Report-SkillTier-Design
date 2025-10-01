import { BRAND } from '../tokens';

interface DonutSVGProps {
  value: number;
  max?: number;
  label?: string;
  color?: string;
}

export function DonutSVG({ value, max = 100, label, color = BRAND.colors.accent }: DonutSVGProps) {
  const size = 160;
  const strokeWidth = 20;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = Math.min((value / max) * 100, 100);
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={BRAND.cardBg}
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text
        x={size / 2}
        y={size / 2}
        textAnchor="middle"
        alignmentBaseline="middle"
        fill={BRAND.colors.fg}
        fontSize="28"
        fontWeight="bold"
      >
        {value}
      </text>
      {label && (
        <text
          x={size / 2}
          y={size / 2 + 20}
          textAnchor="middle"
          alignmentBaseline="middle"
          fill={BRAND.colors.muted}
          fontSize="12"
        >
          {label}
        </text>
      )}
    </svg>
  );
}
