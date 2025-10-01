import { BRAND } from '../tokens';

interface RadarSVGProps {
  values: number[];
  labels: string[];
  max?: number;
}

export function RadarSVG({ values, labels, max = 100 }: RadarSVGProps) {
  const size = 300;
  const center = size / 2;
  const radius = size * 0.35;
  const levels = 5;

  const angleStep = (2 * Math.PI) / values.length;

  const getPoint = (value: number, index: number) => {
    const angle = index * angleStep - Math.PI / 2;
    const r = (value / max) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  const getLabelPoint = (index: number) => {
    const angle = index * angleStep - Math.PI / 2;
    const r = radius * 1.2;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  const dataPoints = values.map((v, i) => getPoint(v, i));
  const pathD = dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {Array.from({ length: levels }).map((_, i) => {
        const r = ((i + 1) / levels) * radius;
        return (
          <circle
            key={i}
            cx={center}
            cy={center}
            r={r}
            fill="none"
            stroke={BRAND.cardBg}
            strokeWidth="1"
          />
        );
      })}

      {values.map((_, i) => {
        const p = getPoint(max, i);
        return (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={p.x}
            y2={p.y}
            stroke={BRAND.cardBg}
            strokeWidth="1"
          />
        );
      })}

      <path d={pathD} fill={BRAND.colors.accent} fillOpacity="0.2" stroke={BRAND.colors.accent} strokeWidth="2" />

      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4" fill={BRAND.colors.accent} />
      ))}

      {labels.map((label, i) => {
        const p = getLabelPoint(i);
        return (
          <text
            key={i}
            x={p.x}
            y={p.y}
            textAnchor="middle"
            alignmentBaseline="middle"
            fill={BRAND.colors.muted}
            fontSize="11"
            fontWeight="500"
          >
            {label}
          </text>
        );
      })}
    </svg>
  );
}
