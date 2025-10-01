import { TierBadge } from '../atoms/TierBadge';
import { RarityTag } from '../atoms/RarityTag';
import { RadarSVG } from '../atoms/RadarSVG';
import { Bar } from '../atoms/Bar';
import { ReportData as ReportDocT } from '../types/report';

interface ShortPageProps {
  doc: ReportDocT;
}

const formatDomainName = (domain: string) =>
  domain.length === 0 ? domain : domain.charAt(0).toUpperCase() + domain.slice(1);

export function ShortPage({ doc }: ShortPageProps) {
  const domainValues = doc.domains.map((domain) => domain.score);
  const domainLabels = doc.domains.map((domain) => formatDomainName(domain.domain));
  const trapsText = doc.traps.join(' • ');

  return (
    <div className="page short-report">
      <header
        style={{
          gridColumn: '1 / span 12',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
          columnGap: '4mm',
          rowGap: '4mm',
          alignItems: 'stretch',
        }}
      >
        <div
          style={{
            gridColumn: '1 / span 7',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '3mm',
          }}
        >
          <div style={{ fontSize: '14pt', fontWeight: 700 }}>SkillTier — Short Report</div>
          <div className="short-report-muted" style={{ fontSize: '10pt' }}>
            {doc.date}
          </div>
          <div className="short-report-muted clamp-2" style={{ fontSize: '11pt', maxWidth: '90mm' }}>
            Snapshot of the SkillTier cognitive profile condensed into a single actionable sheet.
          </div>
        </div>

        <div
          className="short-report-card"
          style={{
            gridColumn: '8 / span 5',
            display: 'flex',
            flexDirection: 'column',
            gap: '3mm',
            justifyContent: 'space-between',
          }}
          tabIndex={0}
        >
          <div className="short-report-muted" style={{ fontSize: '9pt', letterSpacing: '0.5px' }}>
            OVERALL SNAPSHOT
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2mm' }}>
              <div style={{ fontSize: '32pt', fontWeight: 700, lineHeight: 1 }}>{doc.overall.score}</div>
              <div className="short-report-muted" style={{ fontSize: '10pt' }}>
                Score
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2mm' }}>
              <TierBadge tier={doc.overall.tier} />
              <RarityTag rarity={doc.overall.rarity} />
              <div className="short-report-muted" style={{ fontSize: '10pt' }}>
                Top {doc.overall.percentile}% percentile
              </div>
            </div>
          </div>
        </div>
      </header>

      <section
        style={{
          gridColumn: '1 / span 12',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
          columnGap: '4mm',
        }}
      >
        <div
          className="short-report-card"
          style={{
            gridColumn: '1 / span 5',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3mm',
          }}
          tabIndex={0}
        >
          <div className="short-report-muted" style={{ fontSize: '9pt', letterSpacing: '0.5px' }}>
            DOMAIN RADAR
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <RadarSVG values={domainValues} labels={domainLabels} />
          </div>
        </div>

        <div
          className="short-report-card"
          style={{
            gridColumn: '6 / span 7',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            columnGap: '4mm',
            rowGap: '4mm',
            padding: '4mm',
          }}
          tabIndex={0}
        >
          {doc.domains.map((domain) => (
            <div
              key={domain.domain}
              style={{ display: 'flex', flexDirection: 'column', gap: '2mm' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1mm' }}>
                <div style={{ fontSize: '10pt', fontWeight: 600 }}>{formatDomainName(domain.domain)}</div>
                <TierBadge tier={domain.tier} size="sm" />
              </div>
              <div style={{ fontSize: '18pt', fontWeight: 700, lineHeight: 1 }}>{domain.score}</div>
              <Bar label="Score" value={domain.score} showValue={false} />
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          gridColumn: '1 / span 12',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
          columnGap: '4mm',
        }}
      >
        <div
          className="short-report-card"
          style={{
            gridColumn: '1 / span 6',
            display: 'flex',
            flexDirection: 'column',
            gap: '3mm',
          }}
          tabIndex={0}
        >
          <div style={{ fontSize: '11pt', fontWeight: 600 }}>Hidden potentials</div>
          <ul className="short-report-list">
            {doc.undervalued.map((item) => (
              <li key={item.domain}>
                <div style={{ fontSize: '10pt', fontWeight: 600 }}>{item.domain}</div>
                <div className="short-report-muted clamp-3" style={{ fontSize: '9pt', lineHeight: 1.4 }}>
                  {item.why}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="short-report-card"
          style={{
            gridColumn: '7 / span 6',
            display: 'flex',
            flexDirection: 'column',
            gap: '3mm',
          }}
          tabIndex={0}
        >
          <div style={{ fontSize: '11pt', fontWeight: 600 }}>Risks</div>
          <div className="short-report-muted clamp-3" style={{ fontSize: '10pt', lineHeight: 1.5 }}>
            {trapsText}
          </div>
        </div>
      </section>

      <div
        style={{
          gridColumn: '1 / span 12',
          display: 'flex',
          flexDirection: 'column',
          gap: '3mm',
          marginTop: '2mm',
        }}
      >
        <div className="short-report-cta">Get full 15-page report</div>
        <div className="short-report-footer">© SkillTier — 1/1</div>
      </div>
    </div>
  );
}
