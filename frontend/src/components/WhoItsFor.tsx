import { Compass, Zap, TrendingUp, BookOpen } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Persona {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

const personas: Persona[] = [
  {
    title: 'Options Traders',
    subtitle: 'Derivatives Analytics',
    description: 'Analyze live implied volatility, track real-time Greek shifts, and visualize open interest distribution across strikes and expiries — all from a single dashboard.',
    icon: Compass,
    features: ['Real-time Greeks dashboard', 'IV percentile tracker', 'OI change analysis', 'Multi-leg payoff simulation'],
  },
  {
    title: 'Intraday Traders',
    subtitle: 'Live Market Data',
    description: 'Monitor real-time VWAP levels, intraday volume anomalies, and price action metrics to evaluate market conditions as they develop during the session.',
    icon: Zap,
    features: ['Live VWAP analytics', 'Volume spike detection', 'Real-time OI shifts', 'Intraday PCR monitoring'],
  },
  {
    title: 'Swing & Positional Traders',
    subtitle: 'Multi-Session Analysis',
    description: 'Evaluate Put-Call Ratio trends, Max Pain levels, and historical volatility comparisons to assess market structure across multiple trading sessions.',
    icon: TrendingUp,
    features: ['PCR trend visualization', 'Max Pain calculator', 'Historical volatility charts', 'Trend regime indicators'],
  },
  {
    title: 'Beginners & Learners',
    subtitle: 'Simplified Analytics',
    description: 'Navigate complex derivatives data through clean, simplified dashboards. Understand what IV, Greeks, OI, and PCR actually measure before making any decision.',
    icon: BookOpen,
    features: ['Simplified analytics view', 'Metric explanations', 'Interactive data exploration', 'Zero-jargon summaries'],
  },
];

export default function WhoItsFor() {
  return (
    <section
      id="who-its-for"
      className="section-pad"
      style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', scrollMarginTop: '80px' }}
    >
      <div className="container-main">

        {/* Section header */}
        <div style={{ marginBottom: '64px' }}>
          <div data-aos="fade-up-right" data-aos-duration="1400" style={{ marginBottom: '20px' }}>
            <span className="section-badge">Built for Retail Traders</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <h2
              data-aos="zoom-in-down"
              data-aos-duration="1600"
              style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.05, margin: 0 }}
            >
              <span style={{ fontWeight: 700 }}>Designed for the</span>{' '}
              <span style={{ fontWeight: 800, color: 'var(--color-accent)' }}>Indian Retail Trader</span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              style={{ color: 'var(--color-text-muted)', fontSize: '15px', maxWidth: '360px', lineHeight: 1.7, margin: 0 }}
            >
              Whether you trade options daily or are still learning the market — StrikFin gives every retail trader access to the same quality of analytics.
            </p>
          </div>
        </div>

        {/* Persona grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
        }}>
          {personas.map((persona, idx) => {
            const Icon = persona.icon;
            return (
              <div
                key={idx}
                className="persona-card"
                data-aos={idx % 2 === 0 ? 'zoom-in-left' : 'zoom-in-right'}
                data-aos-duration={String(1400 + idx * 100)}
                data-aos-delay={String(idx * 80)}
              >
                {/* Icon + subtitle row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{
                    padding: '14px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    background: 'rgba(227,255,4,0.04)',
                    display: 'inline-flex',
                  }}>
                    <Icon size={22} color="var(--color-accent)" />
                  </div>
                  <span style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '999px',
                    padding: '3px 10px',
                  }}>
                    {persona.subtitle}
                  </span>
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', margin: '0 0 10px' }}>
                  {persona.title}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', lineHeight: 1.7, margin: '0 0 20px' }}>
                  {persona.description}
                </p>

                {/* Feature list */}
                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '16px' }}>
                  {persona.features.map((feat, fIdx) => (
                    <div key={fIdx} className="persona-feature-item">
                      <span className="persona-feature-chevron">›</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div
          data-aos="fade-up"
          data-aos-duration="1400"
          style={{
            marginTop: '56px',
            padding: '28px 32px',
            background: 'rgba(227,255,4,0.04)',
            border: '1px solid rgba(227,255,4,0.12)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div>
            <p style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff', margin: '0 0 4px' }}>
              100% open source. No account restrictions. No paywalls.
            </p>
            <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', margin: 0 }}>
              Every retail trader gets access to the full analytics suite — free, forever.
            </p>
          </div>
          <a href="#" className="btn-primary" style={{ flexShrink: 0 }}>
            Launch Terminal ↗
          </a>
        </div>

      </div>
    </section>
  );
}
