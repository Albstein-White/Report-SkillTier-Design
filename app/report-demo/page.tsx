'use client';

import { LongReportDemo } from '@/report/long/LongReportDemo';
import { sampleData } from '@/report/sampleData';

export default function ReportDemoPage() {
  return (
    <div className="min-h-screen bg-[#0D0E12]">
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
          }
        }
      `}</style>
      <LongReportDemo doc={sampleData} />
    </div>
  );
}
