import { LongReportDemo } from '@/report/long/LongReportDemo';
import { ShortPage } from '@/report/short/ShortPage';
import { sampleData } from '@/report/sampleData';

interface ReportPageProps {
  params: { id: string };
  searchParams: { variant?: string };
}

export default function ReportPage({ searchParams }: ReportPageProps) {
  const doc = sampleData; // TODO: replace with real data fetch when available

  if (searchParams?.variant === 'short') {
    return (
      <div className="min-h-screen bg-[#0D0E12] flex items-center justify-center py-10">
        <ShortPage doc={doc} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D0E12]">
      <LongReportDemo doc={doc} />
    </div>
  );
}
