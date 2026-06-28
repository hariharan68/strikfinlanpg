import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import WhoItsFor from './components/WhoItsFor';
import ContactUs from './components/Waitlist';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1500, once: false, offset: 80 });
    // Mark AOS as initialized so the CSS safety net releases
    // (prevents a permanently-invisible "black screen" if AOS
    // hasn't triggered above-the-fold elements yet).
    document.documentElement.classList.add('aos-ready');
    // Recompute element positions after fonts/layout settle.
    const refresh = () => AOS.refresh();
    window.addEventListener('load', refresh);
    const t = setTimeout(refresh, 200);

    const timer = setTimeout(() => setLoading(false), 1600);
    return () => {
      clearTimeout(timer);
      clearTimeout(t);
      window.removeEventListener('load', refresh);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Preloader */}
      <div className={`preloader${loading ? '' : ' done'}`}>
        <div className="preloader-spinner" />
      </div>

      <div style={{ minHeight: '100vh', background: 'var(--color-bg-primary)', color: 'var(--color-text-primary)', fontFamily: 'var(--font-primary)' }}>
        <Navbar />
        <main>
          <Hero />
          <TrustBar />
          <Features />
          <HowItWorks />
          <WhoItsFor />
          <ContactUs />
        </main>
        <Footer />
      </div>

      {/* Scroll-to-top */}
      <button
        className={`scroll-top-btn${showScrollTop ? ' visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}

export default App;
