import { Database, Cpu, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Connect Live Feed',
    description: 'Connect your broker account or stream direct market data. Compatible with major Indian retail brokers and direct data feed providers.',
    icon: Database,
  },
  {
    number: '02',
    title: 'Analyze Quantitative Metrics',
    description: 'The terminal computes option Greeks, IV percentile, PCR, Max Pain, OI distribution, VWAP, and institutional positioning metrics using live market data.',
    icon: Cpu,
  },
  {
    number: '03',
    title: 'Make Better-Informed Decisions',
    description: 'Review quantitative analytics, visualize derivatives positioning, and evaluate market conditions — all trading decisions remain entirely with you.',
    icon: TrendingUp,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-pad"
      style={{ background: 'var(--color-bg-primary)', borderTop: '1px solid var(--color-border)', scrollMarginTop: '80px' }}
    >
      <div className="container-main">

        {/* Section header */}
        <div style={{ marginBottom: '70px' }}>
          <div data-aos="fade-up-right" data-aos-duration="1400" style={{ marginBottom: '20px' }}>
            <span className="section-badge">How It Works</span>
          </div>
          <h2
            data-aos="zoom-in-down"
            data-aos-duration="1600"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.05, margin: '0 0 16px' }}
          >
            <span style={{ fontWeight: 700 }}>How Strikfin</span>{' '}
            <span style={{ fontWeight: 800, color: 'var(--color-accent)' }}>Works</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            style={{ color: 'var(--color-text-muted)', fontSize: '16px', maxWidth: '480px', lineHeight: 1.7, margin: 0 }}
          >
            A streamlined three-step workflow — from live data ingestion to quantitative analytics output. All metrics are informational; all decisions are yours.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '28px',
        }}>
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="step-card"
                data-aos="zoom-in"
                data-aos-duration="1600"
                data-aos-delay={String(idx * 150)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <div style={{
                    padding: '14px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    background: 'rgba(227,255,4,0.04)',
                    display: 'inline-flex',
                  }}>
                    <Icon size={24} color="var(--color-accent)" />
                  </div>
                  <span className="step-number">{step.number}</span>
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', margin: '0 0 12px' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
