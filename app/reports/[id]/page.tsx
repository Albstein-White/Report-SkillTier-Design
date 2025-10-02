import { notFound } from 'next/navigation';

import { LongReportDemo } from '@/report/long/LongReportDemo';
import { ShortPage } from '@/report/short/ShortPage';
import { sampleData } from '@/report/sampleData';
import type { ReportDocT } from '@/report/types/report';

interface ReportPageProps {
  params: { id: string };
  searchParams: { variant?: string; demo?: string };
}

export default function ReportPage({ searchParams }: ReportPageProps) {
  const variant = searchParams?.variant === 'short' ? 'short' : 'long';
  const isDemo = searchParams?.demo === '1';
  const doc: ReportDocT | null = isDemo ? sampleData : null;

  if (!doc) {
    notFound();
  }

  if (variant === 'short') {
    return <ShortPage doc={doc} />;
  }

  return (
    <div className="min-h-screen bg-[#0D0E12]">
      <LongReportDemo doc={doc} />
    </div>
  );
}
