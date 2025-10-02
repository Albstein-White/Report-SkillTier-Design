export interface OverallScore {
  score: number;
  tier: string;
  rarity: string;
  percentile: number;
}

export interface DomainScore {
  domain: string;
  score: number;
  percentile: number;
  se: number;
  n: number;
  tier: string;
}

export interface UndervaluedDomain {
  domain: string;
  why: string;
}

export interface ReportData {
  name: string;
  date: string;
  overall: OverallScore;
  domains: DomainScore[];
  undervalued: UndervaluedDomain[];
  traps: string[];
  consistency: number;
  durationSec: number;
}

export type ReportDocT = ReportData;

export interface DomainPageProps {
  domain: string;
  score: number;
  percentile: number;
  se: number;
  n: number;
  tier: string;
  color: string;
  description: string;
  strengths: string[];
  growth: string[];
  pageNumber: number;
}
