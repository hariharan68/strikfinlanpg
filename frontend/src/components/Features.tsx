import { useState } from "react";
import {
  LineChart,
  Activity,
  Radar,
  Bot,
  Zap,
  LayoutDashboard,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  tag: string;
  icon: LucideIcon;
}

const features: Feature[] = [
  {
    title: "Options Lab",
    description:
      "Model and backtest complex options strategies. Analyze real-time payoffs, simulate shifts, and monitor option Greeks instantly.",
    tag: "Strategy",
    icon: LineChart,
  },
  {
    title: "Live Option Chain",
    description:
      "Full-depth option chain displaying real-time Open Interest (OI) changes, volume surges, implied volatility (IV), and Put-Call Ratio (PCR).",
    tag: "Real-Time",
    icon: Activity,
  },
  {
    title: "Smart Money Radar",
    description:
      "Monitor institutional volume patterns, visualize OI concentration across strikes, and track significant block activity using quantitative order flow metrics.",
    tag: "Order Flow",
    icon: Radar,
  },
  {
    title: "Market Analytics Workspace",
    description:
      "Explore market structure through an interactive analytics interface. Query options data by strike, expiry, or instrument and visualize key metrics instantly.",
    tag: "Analytics",
    icon: Bot,
  },
  {
    title: "Quantitative Trade Scanner",
    description:
      "Scan the options market using quantitative filters — OI build-up, IV rank, volume anomalies, and Greek thresholds — to surface conditions worth monitoring.",
    tag: "Scanner",
    icon: Zap,
  },
  {
    title: "Advanced Dashboard",
    description:
      "A multi-factor quantitative dashboard displaying ATR, ADX, trend regime indicators, key pivot levels, VWAP bands, and historical volatility comparisons.",
    tag: "Analytics",
    icon: LayoutDashboard,
  },
];

export default function Features() {
  const [openIdx, setOpenIdx] = useState(0);

  const handleToggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? -1 : idx));

    setTimeout(() => {
      document
        .getElementById(`feature-${idx}`)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
    }, 100);
  };

  return (
    <section
      id="features"
      className="section-pad"
      style={{
        background: "var(--color-bg-secondary)",
        scrollMarginTop: "80px",
      }}
    >
      <div className="container-main">
        <div style={{ marginBottom: "60px" }}>
          <div style={{ marginBottom: "20px" }}>
            <span className="section-badge">Our Services</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(32px,5vw,64px)",
                fontWeight: 800,
                textTransform: "uppercase",
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              <span>Institutional-Grade </span>
              <span style={{ color: "var(--color-accent)" }}>Terminal</span>
            </h2>

            <p
              style={{
                color: "var(--color-text-muted)",
                maxWidth: "360px",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Analyze derivatives data with precision. Every metric is
              calculated from live market data.
            </p>
          </div>
        </div>

        {features.map((feature, idx) => {
          const Icon = feature.icon;
          const isOpen = openIdx === idx;

          return (
            <div
              key={idx}
              id={`feature-${idx}`}
              className={`accordion-item ${isOpen ? "active" : ""}`}
            >
              <button
                className="accordion-trigger"
                onClick={() => handleToggle(idx)}
              >
                <span className="accordion-number">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <span className="accordion-title">{feature.title}</span>

                <span className="accordion-plus">+</span>
              </button>

              <div className={`accordion-body ${isOpen ? "open" : ""}`}>
                <div className="accordion-content">
                  <p className="accordion-desc">{feature.description}</p>

                  <div className="accordion-icon-box">
                    <div
                      style={{
                        padding: 20,
                        border: "1px solid var(--color-border-medium)",
                        borderRadius: 8,
                        background: "var(--color-bg-elevated)",
                      }}
                    >
                      <Icon
                        size={28}
                        color="var(--color-accent)"
                      />
                    </div>

                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        color: "var(--color-accent)",
                        border: "1px solid var(--color-border)",
                        borderRadius: 999,
                        padding: "4px 12px",
                      }}
                    >
                      {feature.tag}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}