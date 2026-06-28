import { ShieldCheck, Zap, BarChart, MapPin, Lock } from 'lucide-react';

const badges = [
  { text: 'Compliance-Aware Analytics Platform', icon: ShieldCheck },
  { text: 'Real-Time Market Data', icon: Zap },
  { text: 'Institutional-Grade Analytics', icon: BarChart },
  { text: 'Built for Indian Markets', icon: MapPin },
  { text: 'Secure & Private', icon: Lock },
];

function MarqueeItem({ text, icon: Icon, outlined }: { text: string; icon: React.FC<{ size?: number; color?: string }>; outlined?: boolean }) {
  return (
    <div className="marquee-item">
      <Icon size={18} color="var(--color-accent)" />
      <span className={`marquee-text${outlined ? ' outlined' : ''}`}>{text}</span>
      <span className="marquee-star">✦</span>
    </div>
  );
}

export default function TrustBar() {
  const items = badges.map((b, i) => ({ ...b, outlined: i % 2 === 1 }));
  const doubled = [...items, ...items];

  return (
    <div className="marquee-wrap" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      {/* Row 1 — forward */}
      <div className="marquee-row">
        {doubled.map((item, i) => (
          <MarqueeItem key={i} text={item.text} icon={item.icon as React.FC<{ size?: number; color?: string }>} outlined={item.outlined} />
        ))}
      </div>
      {/* Row 2 — reverse */}
      <div className="marquee-row reverse">
        {doubled.map((item, i) => (
          <MarqueeItem key={i} text={item.text} icon={item.icon as React.FC<{ size?: number; color?: string }>} outlined={!item.outlined} />
        ))}
      </div>
    </div>
  );
}
