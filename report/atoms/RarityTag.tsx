import { BRAND } from '../tokens';

interface RarityTagProps {
  rarity: string;
}

export function RarityTag({ rarity }: RarityTagProps) {
  return (
    <div
      className="inline-flex items-center text-xs font-medium px-2 py-1 rounded border"
      style={{
        borderColor: BRAND.colors.accent,
        color: BRAND.colors.accent,
      }}
    >
      {rarity}
    </div>
  );
}
