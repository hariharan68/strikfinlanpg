import { useEffect, useState } from 'react';
import { BarChart3 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

/* Lightweight, dependency-free count-up animation.
   Mounts when scrolled into view and animates 0 → end. */
function CountUp({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - (1 - progress) * (1 - progress); // easeOutQuad
      setValue(Math.round(eased * end));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);
  return <>{value}{suffix}</>;
}

export default function Hero() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const strikes = ['23300', '23400', '23500', '23600', '23700'];
  const callOI = [45, 60, 95, 80, 50];
  const putOI = [85, 90, 75, 40, 30];

  return (
    <section className="hero-section">
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        background: 'rgba(232,103,58,0.04)',
        borderRadius: '50%', filter: 'blur(120px)',
        pointerEvents: 'none',
      }} />

      <div className="container-main" style={{ width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '60px',
          alignItems: 'center',
          paddingTop: '20px',
          paddingBottom: '60px',
        }}>

          {/* ── Left Column ── */}
          <div>
            {/* Pill badge */}
            <div
              data-aos="fade-up-right"
              data-aos-duration="1400"
              style={{ marginBottom: '28px' }}
            >
              <span className="section-badge" style={{ fontSize: '11px' }}>
                ✦ Open Source — NIFTY 50 &amp; SENSEX
              </span>
            </div>

            {/* H1 — two lines */}
            <h1 style={{ margin: '0 0 24px', padding: 0 }}>
              <span
                className="hero-heading-line"
                data-aos="zoom-in-left"
                data-aos-duration="1800"
              >
                <span style={{ fontWeight: 800 }}>DATA POWERED</span>{' '}
                <span style={{ fontWeight: 800 }}>OPTIONS</span>
              </span>
              <span
                className="hero-heading-line"
                data-aos="zoom-in-right"
                data-aos-duration="2100"
                style={{ marginTop: '4px' }}
              >
                <span style={{ fontWeight: 800, color: 'var(--color-accent)' }}>INTELLIGENCE</span>{' '}
                <span style={{ fontWeight: 800 }}>TERMINAL</span>
              </span>
            </h1>

            {/* Sub-headline */}
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              style={{
                color: 'var(--color-text-muted)',
                fontSize: '16px',
                lineHeight: 1.7,
                maxWidth: '480px',
                margin: '0 0 32px',
              }}
            >
              An institutional-grade options analytics and market intelligence terminal — converting complex derivatives data into clear quantitative insights for Indian market participants.
            </p>

            {/* CTA Buttons */}
            <div
              data-aos="fade-up"
              data-aos-duration="1600"
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '56px' }}
            >
              <a href="#" className="btn-primary">
                Launch Terminal <span>↗</span>
              </a>
              <a href="#features" className="btn-secondary">
                Explore Features
              </a>
            </div>

            {/* Bottom stats row */}
            <div ref={statsRef} style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              <span style={{ color: 'var(--color-accent)', fontSize: '20px' }}>↗</span>
              <span style={{ color: 'var(--color-text-subtle)', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                India's Institutional Options Analytics Terminal
              </span>
              <div style={{ flex: 1, height: '1px', background: 'var(--color-border)', minWidth: '20px' }} />
              <div style={{ display: 'flex', gap: '28px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>
                    {statsInView ? <CountUp end={20} duration={2.2} suffix="+" /> : '0+'}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--color-text-subtle)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>
                    Analytics Modules
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>
                    {statsInView ? <CountUp end={100} duration={2.0} suffix="%" /> : '0%'}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--color-text-subtle)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>
                    Open Source
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column — floating terminal card ── */}
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div className="floating-card" style={{
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
            }}>
              {/* Browser chrome */}
              <div style={{
                background: 'var(--color-bg-secondary)',
                borderBottom: '1px solid var(--color-border)',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: 12, height: 12, borderRadius: '50%', background: 'rgba(239,68,68,0.8)', display: 'block' }} />
                  <span style={{ width: 12, height: 12, borderRadius: '50%', background: 'rgba(234,179,8,0.8)', display: 'block' }} />
                  <span style={{ width: 12, height: 12, borderRadius: '50%', background: 'rgba(34,197,94,0.8)', display: 'block' }} />
                </div>
                <div style={{
                  background: 'var(--color-bg-primary)', border: '1px solid var(--color-border)',
                  color: 'var(--color-text-subtle)', fontSize: '11px',
                  fontFamily: 'monospace', padding: '3px 16px', borderRadius: '4px',
                }}>
                  terminal.Strikfin/nifty
                </div>
                <span style={{
                  fontSize: '10px', fontWeight: 700, letterSpacing: '1px',
                  color: 'var(--color-accent)', background: 'var(--color-accent-glow)',
                  border: '1px solid rgba(232,103,58,0.3)', padding: '2px 8px', borderRadius: '4px',
                }}>
                  LIVE DATA
                </span>
              </div>

              {/* Dashboard content */}
              <div style={{ padding: '16px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                {/* Stat 1 */}
                <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--color-text-subtle)' }}>NIFTY 50 INDEX</span>
                    <span style={{ fontSize: '10px', color: '#22c55e', fontFamily: 'monospace', fontWeight: 700, background: 'rgba(34,197,94,0.1)', padding: '1px 5px', borderRadius: '3px' }}>+0.55%</span>
                  </div>
                  <div style={{ marginTop: '8px' }}>
                    <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff', fontFamily: 'monospace' }}>23,512.40</div>
                    <div style={{ fontSize: '10px', color: 'var(--color-text-subtle)', fontFamily: 'monospace', marginTop: '2px' }}>Spot Price • Updated 1s ago</div>
                  </div>
                </div>

                {/* Stat 2 */}
                <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--color-text-subtle)' }}>PUT-CALL RATIO</span>
                    <span style={{ fontSize: '10px', color: 'var(--color-accent)', fontFamily: 'monospace', fontWeight: 700, background: 'var(--color-accent-glow)', padding: '1px 5px', borderRadius: '3px' }}>PCR &gt; 1</span>
                  </div>
                  <div style={{ marginTop: '8px' }}>
                    <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff', fontFamily: 'monospace' }}>1.18</div>
                    <div style={{ fontSize: '10px', color: 'var(--color-text-subtle)', fontFamily: 'monospace', marginTop: '2px' }}>Put OI exceeds Call OI at 23500</div>
                  </div>
                </div>

                {/* Stat 3 */}
                <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--color-text-subtle)' }}>IV PERCENTILE</span>
                    <span style={{ fontSize: '10px', color: '#f87171', fontFamily: 'monospace', fontWeight: 700, background: 'rgba(248,113,113,0.1)', padding: '1px 5px', borderRadius: '3px' }}>HIGH</span>
                  </div>
                  <div style={{ marginTop: '8px' }}>
                    <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff', fontFamily: 'monospace' }}>84.2%</div>
                    <div style={{ fontSize: '10px', color: 'var(--color-text-subtle)', fontFamily: 'monospace', marginTop: '2px' }}>Elevated implied volatility environment</div>
                  </div>
                </div>

                {/* OI Chart */}
                <div style={{ gridColumn: '1 / -1', background: '#111', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <BarChart3 size={14} color="var(--color-accent)" />
                      <span style={{ fontSize: '11px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>Open Interest Distribution</span>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <span style={{ fontSize: '10px', fontWeight: 600, color: '#f87171', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ width: 8, height: 8, background: 'rgba(239,68,68,0.8)', display: 'block', borderRadius: '1px' }} /> Calls
                      </span>
                      <span style={{ fontSize: '10px', fontWeight: 600, color: '#4ade80', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ width: 8, height: 8, background: 'rgba(34,197,94,0.8)', display: 'block', borderRadius: '1px' }} /> Puts
                      </span>
                    </div>
                  </div>
                  <div style={{ height: '90px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px', gap: '8px' }}>
                    {strikes.map((strike, idx) => (
                      <div key={strike} style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '4px', height: '100%' }}>
                        <div style={{ width: '10px', height: `${callOI[idx]}%`, background: 'linear-gradient(to top, rgba(220,38,38,0.8), rgba(239,68,68,0.9))', borderRadius: '2px 2px 0 0' }} />
                        <div style={{ width: '10px', height: `${putOI[idx]}%`, background: 'linear-gradient(to top, rgba(22,163,74,0.8), rgba(34,197,94,0.9))', borderRadius: '2px 2px 0 0' }} />
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '6px' }}>
                    {strikes.map((s) => (
                      <span key={s} style={{ flex: 1, textAlign: 'center', fontSize: '10px', color: 'var(--color-text-subtle)', fontFamily: 'monospace', fontWeight: 700 }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
