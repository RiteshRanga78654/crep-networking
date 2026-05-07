"use client";

import { useState, useEffect, useRef } from "react";

const footerLinks = {
  "Properties": [
    "Office Spaces",
    "Retail Properties",
    "Industrial Warehouses",
    "Mixed-Use Developments",
    "Investment Portfolios",
    "Land Acquisitions",
  ],
  "Services": [
    "Market Analysis",
    "Property Valuation",
    "Lease Negotiation",
    "Asset Management",
    "Due Diligence",
    "1031 Exchange",
  ],
  "Network": [
    "Broker Directory",
    "Investor Hub",
    "Developer Connect",
    "Tenant Representation",
    "Capital Markets",
    "Advisory Board",
  ],
  "Resources": [
    "Market Reports",
    "CRE Insights Blog",
    "Webinars & Events",
    "Deal Calculator",
    "Legal Resources",
    "Partner APIs",
  ],
};

const socialLinks = [
  {
    name: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    href: "#",
  },
  {
    name: "Twitter/X",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: "#",
  },
  {
    name: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    href: "#",
  },
  {
    name: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
    href: "#",
  },
];

const stats = [
  { value: "$2.4T+", label: "Assets Under Coverage" },
  { value: "48K+", label: "Active Professionals" },
  { value: "180+", label: "Markets Nationwide" },
  { value: "96%", label: "Client Retention Rate" },
];

function useIntersectionObserver(threshold = 0.1) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

function AnimatedStat({ value, label, delay }) {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div
      ref={ref}
      className="text-center"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      <div
        className="text-3xl md:text-4xl font-black tracking-tight"
        style={{ color: "#C9A84C", fontFamily: "'Playfair Display', serif" }}
      >
        {value}
      </div>
      <div className="text-xs uppercase tracking-widest text-slate-400 mt-1 font-medium">
        {label}
      </div>
    </div>
  );
}

function FooterLinkGroup({ title, links, delay }) {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      <h4
        className="text-xs uppercase tracking-[0.2em] font-bold mb-5"
        style={{ color: "#C9A84C" }}
      >
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-slate-400 hover:text-white transition-all duration-300 flex items-center gap-2 group"
            >
              <span
                className="w-0 h-px bg-amber-500 group-hover:w-4 transition-all duration-300"
                style={{ backgroundColor: "#C9A84C" }}
              />
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [footerRef, footerVisible] = useIntersectionObserver(0.05);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        .footer-root * {
          font-family: 'DM Sans', sans-serif;
          box-sizing: border-box;
        }

        .footer-root {
          position: relative;
          background: #0A0D14;
          overflow: hidden;
        }

        .footer-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .footer-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .stat-divider {
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent);
        }

        .newsletter-input {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(201,168,76,0.2);
          color: white;
          padding: 12px 18px;
          border-radius: 4px 0 0 4px;
          outline: none;
          width: 100%;
          font-size: 14px;
          transition: border-color 0.3s;
        }
        .newsletter-input::placeholder { color: rgba(255,255,255,0.3); }
        .newsletter-input:focus { border-color: rgba(201,168,76,0.6); }

        .newsletter-btn {
          background: #C9A84C;
          color: #0A0D14;
          padding: 12px 22px;
          border-radius: 0 4px 4px 0;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.05em;
          cursor: pointer;
          border: none;
          transition: background 0.3s, transform 0.15s;
          white-space: nowrap;
        }
        .newsletter-btn:hover { background: #e0bc5e; transform: scale(1.02); }

        .social-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(201,168,76,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .social-btn:hover {
          border-color: #C9A84C;
          color: #C9A84C;
          background: rgba(201,168,76,0.08);
          transform: translateY(-3px);
        }

        .bottom-bar-link {
          color: #64748b;
          font-size: 12px;
          text-decoration: none;
          transition: color 0.2s;
        }
        .bottom-bar-link:hover { color: #C9A84C; }

        .cert-badge {
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 4px;
          padding: 6px 12px;
          font-size: 11px;
          color: #94a3b8;
          letter-spacing: 0.1em;
          font-weight: 600;
          transition: border-color 0.3s, color 0.3s;
        }
        .cert-badge:hover { border-color: rgba(201,168,76,0.5); color: #C9A84C; }

        .logo-mark {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: 28px;
          color: white;
          letter-spacing: -0.5px;
        }
        .logo-mark span { color: #C9A84C; }

        .divider-line {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent);
        }
      `}</style>

      <footer className="footer-root" ref={footerRef}>
        {/* Background effects */}
        <div className="footer-grid-bg" />
        <div className="footer-glow" style={{ top: "-200px", left: "-100px" }} />
        <div className="footer-glow" style={{ bottom: "-200px", right: "-100px" }} />

        {/* Stats bar */}
        <div
          className="relative border-b"
          style={{ borderColor: "rgba(201,168,76,0.12)" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  <AnimatedStat value={stat.value} label={stat.label} delay={i * 120} />
                  {i < stats.length - 1 && (
                    <div className="stat-divider hidden md:block h-12 mx-auto" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-12">

          {/* Top section: Brand + Newsletter */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">

            {/* Brand block */}
            <div
              className="lg:w-80 flex-shrink-0"
              style={{
                opacity: footerVisible ? 1 : 0,
                transform: footerVisible ? "translateY(0)" : "translateY(32px)",
                transition: "opacity 0.7s ease 0ms, transform 0.7s ease 0ms",
              }}
            >
              <div className="logo-mark mb-1">
                CREP
              </div>
              <div
                className="text-xs uppercase tracking-[0.25em] mb-5"
                style={{ color: "#C9A84C" }}
              >
                Professional Network
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                The premier platform connecting commercial real estate professionals,
                investors, and developers across the nation's top markets.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((s) => (
                  <a key={s.name} href={s.href} className="social-btn" title={s.name}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([title, links], i) => (
                <FooterLinkGroup
                  key={title}
                  title={title}
                  links={links}
                  delay={100 + i * 80}
                />
              ))}
            </div>
          </div>

          <div className="divider-line mb-12" />

          {/* Newsletter + Certifications */}
          <div className="flex flex-col md:flex-row gap-10 md:items-center md:justify-between mb-12">
            {/* Newsletter */}
            <div
              style={{
                opacity: footerVisible ? 1 : 0,
                transform: footerVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease 400ms, transform 0.7s ease 400ms",
              }}
              className="md:max-w-sm w-full"
            >
              <h5
                className="text-xs uppercase tracking-[0.2em] font-bold mb-1"
                style={{ color: "#C9A84C" }}
              >
                Market Intelligence
              </h5>
              <p className="text-slate-400 text-sm mb-4">
                Weekly CRE insights, deal flow, and market data — direct to your inbox.
              </p>
              {subscribed ? (
                <div
                  className="text-sm font-semibold py-3 px-4 rounded"
                  style={{
                    background: "rgba(201,168,76,0.1)",
                    color: "#C9A84C",
                    border: "1px solid rgba(201,168,76,0.3)",
                  }}
                >
                  ✓ You're on the list. Welcome aboard.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex">
                  <input
                    type="email"
                    className="newsletter-input"
                    placeholder="Your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className="newsletter-btn">
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            {/* Certifications */}
            <div
              style={{
                opacity: footerVisible ? 1 : 0,
                transform: footerVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease 550ms, transform 0.7s ease 550ms",
              }}
            >
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-3 font-medium">
                Certified & Compliant
              </p>
              <div className="flex flex-wrap gap-2">
                {["CCIM Member", "NAR Affiliated", "SOC 2 Certified", "GDPR Ready"].map(
                  (badge) => (
                    <span key={badge} className="cert-badge">
                      {badge}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="divider-line mb-8" />

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-xs">
              © {new Date().getFullYear()} CREPro Professional Network. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center">
              {["Privacy Policy", "Terms of Service", "Cookie Preferences", "Accessibility"].map(
                (item) => (
                  <a key={item} href="#" className="bottom-bar-link">
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}