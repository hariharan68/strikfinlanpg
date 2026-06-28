import { Terminal, ShieldAlert, Github, Twitter, Linkedin } from 'lucide-react';

const currentYear = new Date().getFullYear();

const productLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing Options', href: '#' },
  { label: 'API Feeds', href: '#' },
  { label: 'Documentation', href: '#' },
];

const platformLinks = [
  { label: 'Live Option Chain', href: '#features' },
  { label: 'Strategy Lab', href: '#features' },
  { label: 'Market Analytics Workspace', href: '#features' },
  { label: 'Quantitative Trade Scanner', href: '#features' },
];

const companyLinks = [
  { label: 'About Us', href: '#' },
  { label: 'Research Blog', href: '#' },
  { label: 'Security Measures', href: '#' },
  { label: 'Careers', href: '#' },
];

function FooterLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href} className="footer-link">
            <span className="footer-link-chevron">{'>>'}</span>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-bg-primary)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container-main" style={{ paddingTop: '80px', paddingBottom: '40px', background: 'var(--color-bg-primary)' }}>

        {/* 4-column grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
          marginBottom: '64px',
        }}>

          {/* Column 1: About */}
          <div data-aos="zoom-in" data-aos-duration="1600">
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '20px' }}>
              <div style={{ padding: '6px', border: '1px solid rgba(227,255,4,0.3)', borderRadius: '8px', background: 'rgba(227,255,4,0.08)', display: 'flex' }}>
                <Terminal size={18} color="var(--color-accent)" />
              </div>
              <span style={{ fontWeight: 800, fontSize: '18px', color: '#ffffff', letterSpacing: '-0.5px' }}>
                Strikfin <span style={{ color: 'var(--color-accent)' }}></span>
              </span>
            </a>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', lineHeight: 1.7, margin: '0 0 24px', maxWidth: '280px' }}>
              Institutional-grade options analytics built specifically for the Indian retail trader. Open source, unrestricted, and free to use. All outputs are informational analytics — not financial advice.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { Icon: Twitter, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Github, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  style={{
                    padding: '8px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    color: 'var(--color-text-muted)',
                    display: 'flex',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--color-accent)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Product */}
          <div data-aos="zoom-in" data-aos-duration="1600" data-aos-delay="100">
            <h4 className="footer-heading">Product</h4>
            <FooterLinks links={productLinks} />
          </div>

          {/* Column 3: Platform */}
          <div data-aos="zoom-in" data-aos-duration="1600" data-aos-delay="200">
            <h4 className="footer-heading">Platform</h4>
            <FooterLinks links={platformLinks} />
          </div>

          {/* Column 4: Company */}
          <div data-aos="zoom-in" data-aos-duration="1600" data-aos-delay="300">
            <h4 className="footer-heading">Company</h4>
            <FooterLinks links={companyLinks} />
          </div>
        </div>

        {/* Market Data & Analytics Disclaimer */}
        <div style={{
          background: 'rgba(227,255,4,0.04)',
          border: '1px solid rgba(227,255,4,0.15)',
          borderRadius: '12px',
          padding: '24px 28px',
          display: 'flex',
          gap: '16px',
          alignItems: 'flex-start',
          marginBottom: '32px',
        }}>
          <div style={{ padding: '8px', border: '1px solid rgba(227,255,4,0.3)', borderRadius: '8px', background: 'rgba(227,255,4,0.08)', flexShrink: 0 }}>
            <ShieldAlert size={18} color="var(--color-accent)" />
          </div>
          <div>
            <h5 style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 10px' }}>
              Market Data &amp; Analytics Disclaimer
            </h5>
            <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', lineHeight: 1.8, margin: '0 0 8px' }}>
              StrikFin is an independent market analytics platform. The platform provides market data, quantitative calculations, statistical models, derivatives analytics, and visualization tools for informational purposes only. Nothing on this platform constitutes investment advice, research recommendations, portfolio management, or financial advisory services of any kind.
            </p>
            <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', lineHeight: 1.8, margin: '0 0 8px' }}>
              Users are solely responsible for their own trading and investment decisions. Trading in equities, derivatives, futures, options, and other securities involves substantial market risk and may result in the loss of capital. Past performance does not guarantee future results. Market data may be delayed depending on the selected data provider. Calculated metrics are derived from publicly available or licensed market data and mathematical models.
            </p>
            <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', lineHeight: 1.8, margin: '0 0 8px' }}>
              Users should independently verify all information before making any financial decisions. StrikFin shall not be liable for any direct or indirect financial losses arising from reliance on platform data or calculations. StrikFin does not provide investment advisory, research analyst, portfolio management, or brokerage services, and is not registered in any such capacity with SEBI or any other regulatory authority.
            </p>
            <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', lineHeight: 1.8, margin: 0 }}>
              <strong style={{ color: 'var(--color-text-muted)', fontWeight: 600 }}>Trademark Notice:</strong> StrikFin™ is a trademark of its respective owner. NSE®, National Stock Exchange®, BSE®, Bombay Stock Exchange®, NIFTY®, NIFTY 50®, SENSEX®, BANKNIFTY®, FINNIFTY®, and all related indices and trademarks are the property of their respective owners. StrikFin is an independent analytics platform and is not affiliated with, endorsed by, sponsored by, or associated with any stock exchange, index provider, regulator, broker, or financial institution unless explicitly stated. All product names, company names, broker names, and logos referenced on this website remain the property of their respective owners and are used solely for identification purposes.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--color-border)',
          paddingTop: '28px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}>
          <p style={{ fontSize: '13px', color: 'var(--color-text-subtle)', margin: 0 }}>
            © {currentYear} StrikFin™. All Rights Reserved. StrikFin™ is an independent financial analytics platform.
          </p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {['Privacy Policy', 'Terms of Service', 'Analytics Disclaimer'].map((text) => (
              <a
                key={text}
                href="#"
                style={{ fontSize: '13px', color: 'var(--color-text-subtle)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text-subtle)'; }}
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
