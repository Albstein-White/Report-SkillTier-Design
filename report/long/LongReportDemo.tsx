'use client';

import { ReportData } from '../types/report';
import { Page01 } from './Page01';
import { Page02 } from './Page02';
import { Page03 } from './Page03';
import { Page04 } from './Page04';
import { Page05 } from './Page05';
import { Page06 } from './Page06';
import { Page07 } from './Page07';
import { Page08 } from './Page08';
import { Page09 } from './Page09';
import { Page10 } from './Page10';
import { Page11 } from './Page11';
import { Page12 } from './Page12';
import { Page13 } from './Page13';
import { Page14 } from './Page14';
import { Page15 } from './Page15';

interface LongReportDemoProps {
  doc: ReportData;
}

export function LongReportDemo({ doc }: LongReportDemoProps) {
  const getDomain = (name: string) =>
    doc.domains.find((d) => d.domain.toLowerCase() === name.toLowerCase()) || doc.domains[0];

  return (
    <div className="report-container">
      <Page01 name={doc.name} date={doc.date} overall={doc.overall} />
      <Page02 overall={doc.overall} domains={doc.domains} />
      <Page03 domain={getDomain('analytical')} />
      <Page04 domain={getDomain('mathematical')} />
      <Page05 domain={getDomain('verbal')} />
      <Page06 domain={getDomain('memory')} />
      <Page07 domain={getDomain('spatial')} />
      <Page08 domain={getDomain('creativity')} />
      <Page09 domain={getDomain('strategy')} />
      <Page10 domain={getDomain('social')} />
      <Page11 undervalued={doc.undervalued} />
      <Page12 traps={doc.traps} consistency={doc.consistency} />
      <Page13 domains={doc.domains} />
      <Page14 overall={doc.overall} domains={doc.domains} durationSec={doc.durationSec} />
      <Page15 />
    </div>
  );
}
