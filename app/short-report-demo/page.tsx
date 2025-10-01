import { ShortPage } from '@/report/short/ShortPage';
import { sampleData } from '@/report/sampleData';

export default function ShortReportDemoPage() {
  return (
    <div className="min-h-screen bg-[#0D0E12] flex items-center justify-center py-10">
      <ShortPage doc={sampleData} />
    </div>
  );
}
