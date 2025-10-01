'use client';

import { LongReportDemo } from '@/report/long/LongReportDemo';
import { sampleData } from '@/report/sampleData';

export default function ReportDemoPage() {
  return (
    <div className="min-h-screen bg-[#0D0E12]">
      <LongReportDemo doc={sampleData} />
    </div>
  );
}
