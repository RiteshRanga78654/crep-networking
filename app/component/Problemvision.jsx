'use client'

import {
  LayoutDashboard,
  Building2,
  Network,
  PieChart,
  ArrowRight,
  CheckCircle2,
  Quote,
} from "lucide-react";

/* ─── Section Label ───────────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <p
      className="text-xs tracking-widest uppercase font-semibold mb-4"
      style={{ color: '#c9a84c' }}
    >
      {children}
    </p>
  )
}

/* ─── Problem Section ─────────────────────────────────────── */
function Problem() {
  const gaps = [
    {
      Icon: LayoutDashboard,
      title: 'Scattered Platforms',
      desc: 'CRE professionals spread across multiple disconnected tools with no unified space.',
    },
    {
      Icon: Building2,
      title: 'No Dedicated Ecosystem',
      desc: 'No purpose-built platform exists for CRE collaboration and community building.',
    },
    {
      Icon: Network,
      title: 'Limited Networking',
      desc: 'Structured, high-value networking opportunities are rare and hard to access.',
    },
    {
      Icon: PieChart,
      title: 'Fragmented Insights',
      desc: 'Market intelligence and deal opportunities are siloed and difficult to find.',
    },
  ]

  return (
    <section className="py-24 px-8 lg:px-16" style={{ background: '#f4f2ec' }}>
      <div className="max-w-7xl mx-auto">
        <SectionLabel>The Problem</SectionLabel>

        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-14">
          <h2
            className="flex-1"
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 700,
              color: '#0b1929',
              lineHeight: 1.1,
            }}
          >
            Current Industry Gap
          </h2>
          <p
            className="flex-1 text-sm leading-relaxed max-w-xs"
            style={{ color: '#6b7280' }}
          >
            CRE professionals are scattered, underserved, and lacking a dedicated home for
            meaningful collaboration.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gaps.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="lift gold-hover p-7 bg-white flex flex-col gap-5"
              style={{ border: '1px solid rgba(0,0,0,0.07)' }}
            >
              {/* Icon container */}
              <div
                className="w-10 h-10 flex items-center justify-center"
                style={{
                  background: 'rgba(201,168,76,0.08)',
                  border: '1px solid rgba(201,168,76,0.2)',
                }}
              >
                <Icon size={18} color="#c9a84c" strokeWidth={1.5} />
              </div>

              <div>
                <h3
                  className="text-sm font-semibold mb-2"
                  style={{ color: '#0b1929' }}
                >
                  {title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: '#6b7280' }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Vision Section ──────────────────────────────────────── */
function Vision() {
  const bullets = [
    'Build the most trusted CRE professional community',
    'Central hub for networking, knowledge & opportunities',
    'Enable meaningful, long-term business connections',
    'Not just a platform — a thriving professional ecosystem',
  ]

  return (
    <section
      className="py-24 px-8 lg:px-16 relative overflow-hidden grain"
      style={{ background: '#0b1929' }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionLabel>Our Vision</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <h2
              className="mb-10"
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.15,
              }}
            >
              Where Relationships
              <br />
              Become{' '}
              <em style={{ color: '#c9a84c', fontStyle: 'italic' }}>Opportunities</em>
            </h2>

            <div className="space-y-5">
              {bullets.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 fade-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <CheckCircle2
                    size={16}
                    color="#c9a84c"
                    strokeWidth={1.5}
                    className="flex-shrink-0 mt-0.5"
                  />
                  <span className="text-sm leading-relaxed" style={{ color: '#8a9bb0' }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Quote card */}
          <div
            className="p-10 relative"
            style={{
              border: '1px solid rgba(201,168,76,0.22)',
              background: 'rgba(201,168,76,0.04)',
            }}
          >
            {/* Decorative quote icon */}
            <Quote
              size={40}
              color="#c9a84c"
              strokeWidth={1}
              className="mb-6 opacity-40"
            />

            <blockquote
              className="mb-8"
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: 'clamp(20px, 2.5vw, 26px)',
                fontWeight: 600,
                color: '#ffffff',
                lineHeight: 1.4,
              }}
            >
              "Not just a platform —{' '}
              <em style={{ color: '#c9a84c' }}>
                a thriving professional ecosystem
              </em>
              "
            </blockquote>

            <div
              className="h-px w-12 mb-4"
              style={{ background: '#c9a84c', opacity: 0.4 }}
            />
            <p
              className="text-xs tracking-widest uppercase"
              style={{ color: '#4a5f72' }}
            >
              CREPNET Mission Statement
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── EXPORT ──────────────────────────────────────────────── */
export default function ProblemVision() {
  return (
    <>
      <Problem />
      <Vision />
    </>
  )
}