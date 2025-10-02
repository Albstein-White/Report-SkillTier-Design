import Link from 'next/link';

export default function Home() {
  return (
    <div
      style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
        SkillTier Reports
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <Link
          href="/report-demo"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: '#7B61FF',
            color: '#fff',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: '600',
          }}
        >
          View Long Report Demo
        </Link>
        <Link
          href="/short-report-demo"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: '#1E1F25',
            color: '#E6E8EC',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: '600',
            border: '1px solid #7B61FF',
          }}
        >
          View Short Report Demo
        </Link>
      </div>
    </div>
  );
}
