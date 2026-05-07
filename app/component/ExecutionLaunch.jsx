'use client'

import {
  CheckCircle2,
  Rocket,
  Trophy,
  Link2,
  Zap,
  DollarSign,
  ArrowRight,
  Diamond,
} from 'lucide-react'

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

/* ─── Development Phases Section ─────────────────────────── */
function DevPhases() {
  const phases = [
    {
      num: 'Phase 1',
      title: 'Foundation',
      items: ['Website Launch', 'Branding & UI Design', 'Lead Capture System'],
      active: false,
    },
    {
      num: 'Phase 2',
      title: 'Community',
      items: ['Member Signup & Login', 'Professional Profiles', 'Member Directory'],
      active: true,
    },
    {
      num: 'Phase 3',
      title: 'Growth',
      items: ['Events Platform', 'Advanced Networking', 'Insights Hub'],
      active: false,
    },
  ]

  return (
    <section
      className="py-24 px-8 lg:px-16 relative overflow-hidden grain"
      style={{ background: '#0b1929' }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(201,168,76,0.12) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 20% 80%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 20% 80%, black 20%, transparent 80%)',
          opacity: 0.5,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionLabel>Execution Plan</SectionLabel>

        <h2
          className="mb-14"
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
          }}
        >
          Development Phases
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {phases.map(({ num, title, items, active }, i) => (
            <div
              key={i}
              className="lift p-8 flex flex-col gap-7"
              style={{
                border: active ? '1px solid #c9a84c' : '1px solid rgba(201,168,76,0.14)',
                background: active
                  ? 'rgba(201,168,76,0.06)'
                  : 'rgba(255,255,255,0.02)',
              }}
            >
              {/* Phase number badge */}
              <div className="flex items-center gap-3">
                <span
                  className="text-xs tracking-widest uppercase font-semibold px-3 py-1"
                  style={{
                    border: '1px solid rgba(201,168,76,0.3)',
                    color: '#c9a84c',
                    background: 'rgba(201,168,76,0.06)',
                  }}
                >
                  {num}
                </span>
                {active && (
                  <span
                    className="text-xs tracking-widest uppercase font-semibold"
                    style={{ color: '#c9a84c' }}
                  >
                    Current
                  </span>
                )}
              </div>

              <h3
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#ffffff',
                }}
              >
                {title}
              </h3>

              <div className="space-y-3.5">
                {items.map((item, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <CheckCircle2
                      size={14}
                      color="#c9a84c"
                      strokeWidth={1.8}
                      className="flex-shrink-0"
                    />
                    <span className="text-sm" style={{ color: '#8a9bb0' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Impact Section ──────────────────────────────────────── */
function Impact() {
  const impacts = [
    {
      Icon: Trophy,
      title: 'Industry Positioning',
      desc: 'Establish CREPNET as the go-to destination for CRE professional networking.',
    },
    {
      Icon: Link2,
      title: 'High-Value Network',
      desc: 'A curated community of valued CRE professionals driving real business outcomes.',
    },
    {
      Icon: Zap,
      title: 'Continuous Engagement',
      desc: 'Events, insights, and opportunities keep members returning and actively engaged.',
    },
    {
      Icon: DollarSign,
      title: 'Revenue Opportunities',
      desc: 'Membership fees, events, sponsorships, and deal flow accelerator revenue streams.',
    },
  ]

  return (
    <section className="py-24 px-8 lg:px-16" style={{ background: '#f4f2ec' }}>
      <div className="max-w-7xl mx-auto">
        <SectionLabel>Expected Impact</SectionLabel>

        <h2
          className="mb-14"
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 700,
            color: '#0b1929',
            lineHeight: 1.1,
          }}
        >
          Why This Matters
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map(({ Icon, title, desc }, i) => (
            <div key={i} className="flex flex-col gap-5">
              {/* Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center"
                style={{
                  background: 'rgba(201,168,76,0.08)',
                  border: '1px solid rgba(201,168,76,0.22)',
                }}
              >
                <Icon size={20} color="#c9a84c" strokeWidth={1.5} />
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

/* ─── CTA Section ─────────────────────────────────────────── */
function CallToAction() {
  const nextSteps = [
    { label: 'Step 01', desc: 'Confirm the vision & feature scope' },
    { label: 'Step 02', desc: 'Finalize design direction & UI/UX' },
    { label: 'Step 03', desc: 'Kickstart development sprint' },
  ]

  return (
    <section
      className="py-28 px-8 lg:px-16 relative overflow-hidden grain"
      style={{ background: '#0b1929' }}
    >
      {/* Dot grid accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(201,168,76,0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 80%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-6 py-2 text-xs tracking-widest uppercase font-semibold mb-10"
          style={{
            border: '1px solid rgba(201,168,76,0.35)',
            color: '#c9a84c',
            background: 'rgba(201,168,76,0.05)',
          }}
        >
          <Diamond size={7} fill="#c9a84c" color="#c9a84c" />
          Next Steps
          <Diamond size={7} fill="#c9a84c" color="#c9a84c" />
        </div>

        <h2
          className="mb-4"
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.05,
          }}
        >
          Let&apos;s Build
          <br />
          <em style={{ color: '#c9a84c' }}>Together</em>
        </h2>

        <p className="text-sm mb-16" style={{ color: '#8a9bb0' }}>
          Three steps to kickoff — confirm, design, and build.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {nextSteps.map(({ label, desc }, i) => (
            <div
              key={i}
              className="p-6"
              style={{ border: '1px solid rgba(201,168,76,0.12)' }}
            >
              <p
                className="text-xs tracking-widest uppercase font-semibold mb-3"
                style={{ color: '#c9a84c' }}
              >
                {label}
              </p>
              <p className="text-sm" style={{ color: '#8a9bb0' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          className="inline-flex items-center gap-3 px-12 py-4 text-sm font-semibold tracking-wide transition-all duration-200"
          style={{
            background: '#c9a84c',
            color: '#0b1929',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#b8941e'
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(201,168,76,0.25)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#c9a84c'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          <Rocket size={16} strokeWidth={1.8} />
          Join the Network
          <ArrowRight size={14} strokeWidth={2} />
        </button>
      </div>
    </section>
  )
}

/* ─── EXPORT ──────────────────────────────────────────────── */
export default function ExecutionLaunch() {
  return (
    <>
      <DevPhases />
      <Impact />
      <CallToAction />
    </>
  )
}