import { useEffect, useState } from 'react';
import { Terminal, X, Menu } from 'lucide-react';

const navItems = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: "Who It's For", href: '#who-its-for' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>

          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ padding: '6px', border: '1px solid rgba(227,255,4,0.3)', borderRadius: '8px', background: 'rgba(227,255,4,0.08)', display: 'flex' }}>
              <Terminal size={18} color="var(--color-accent)" />
            </div>
            <span style={{ fontWeight: 800, fontSize: '18px', color: '#ffffff', letterSpacing: '-0.5px' }}>
              Strik <span style={{ color: 'var(--color-accent)' }}>fin</span>
            </span>
          </a>

          {/* Desktop Nav — hidden on mobile */}
          {!isMobile && (
            <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="nav-link">{item.name}</a>
              ))}
            </div>
          )}

          {/* Desktop CTA — hidden on mobile */}
          {!isMobile && (
            <a href="#" className="nav-cta">
              <span>→</span>
              <span>Explore</span>
            </a>
          )}

          {/* Mobile hamburger — shown only on mobile */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#ffffff', padding: '6px', display: 'flex' }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div className={`mobile-overlay${mobileOpen ? ' open' : ''}`}>
        <button
          onClick={() => setMobileOpen(false)}
          style={{ position: 'absolute', top: 24, right: 24, background: 'transparent', border: 'none', cursor: 'pointer', color: '#ffffff' }}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="mobile-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            {item.name}
          </a>
        ))}
        <a
          href="#"
          className="btn-primary"
          onClick={() => setMobileOpen(false)}
          style={{ marginTop: '12px', justifyContent: 'center' }}
        >
          → Explore
        </a>
      </div>
    </>
  );
}
