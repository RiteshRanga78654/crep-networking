'use client'

import {
  Globe,
  Users,
  CalendarDays,
  Lightbulb,
  Layers,
  MousePointerClick,
  UserCheck,
  Compass,
  PartyPopper,
  Handshake,
  ArrowRight,
  Monitor,
  Server,
  Database,
  Boxes,
} from 'lucide-react'

/* ─── Section Label ───────────────────────────────────────── */
function SectionLabel({ children, dark }) {
  return (
    <p
      className="text-xs tracking-widest uppercase font-semibold mb-4"
      style={{ color: '#c9a84c' }}
    >
      {children}
    </p>
  )
}

/* ─── Solution Section ────────────────────────────────────── */
function Solution() {
  const pillars = [
    { num: '01', title: 'Public Website',     sub: 'Brand & Entry Point',   Icon: Globe },
    { num: '02', title: 'Member Platform',    sub: 'Core USP',              Icon: Users },
    { num: '03', title: 'Events System',      sub: 'Engagement Driver',     Icon: CalendarDays },
    { num: '04', title: 'Insights Hub',       sub: 'Knowledge Authority',   Icon: Lightbulb },
    { num: '05', title: 'Opportunity Layer',  sub: 'Future Vision',         Icon: Layers },
  ]

  return (
    <section className="py-24 px-8 lg:px-16" style={{ background: '#f4f2ec' }}>
      <div className="max-w-7xl mx-auto">
        <SectionLabel>The Solution</SectionLabel>

        <div className="flex flex-col lg:flex-row lg:items-end gap-6 mb-14">
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
            CREPNET Digital
            <br />
            Ecosystem
          </h2>
          <p
            className="flex-1 text-sm leading-relaxed max-w-xs"
            style={{ color: '#6b7280' }}
          >
            A layered platform that evolves into a full-scale CRE ecosystem — designed to grow with
            the community.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {pillars.map(({ num, title, sub, Icon }, i) => (
            <div
              key={i}
              className="lift cursor-pointer p-6 flex flex-col justify-between"
              style={{
                minHeight: '160px',
                background: '#0b1929',
                border: i === 2
                  ? '1px solid #c9a84c'
                  : '1px solid rgba(201,168,76,0.12)',
              }}
            >
              <div className="flex items-start justify-between">
                <span
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '26px',
                    fontWeight: 400,
                    color: 'rgba(201,168,76,0.4)',
                    lineHeight: 1,
                  }}
                >
                  {num}
                </span>
                <Icon
                  size={16}
                  color={i === 2 ? '#c9a84c' : 'rgba(201,168,76,0.4)'}
                  strokeWidth={1.5}
                />
              </div>

              <div>
                <div
                  className="text-sm font-semibold mb-1"
                  style={{ color: '#ffffff' }}
                >
                  {title}
                </div>
                <div
                  className="text-xs"
                  style={{ color: i === 2 ? '#c9a84c' : '#4a5f72' }}
                >
                  {sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── User Journey Section ────────────────────────────────── */
function UserJourney() {
  const steps = [
    { num: 1, title: 'Visitor',     desc: 'Lands on website',     Icon: MousePointerClick },
    { num: 2, title: 'Joins',       desc: 'Creates profile',       Icon: UserCheck },
    { num: 3, title: 'Explores',    desc: 'Discovers members',     Icon: Compass },
    { num: 4, title: 'Attends',     desc: 'Events & sessions',     Icon: PartyPopper },
    { num: 5, title: 'Collaborates',desc: 'Finds opportunities',   Icon: Handshake },
  ]

  return (
    <section className="py-24 px-8 lg:px-16" style={{ background: '#f4f2ec' }}>
      <div className="max-w-7xl mx-auto">

        {/* Horizontal rule above */}
        <div
          className="w-full h-px mb-16"
          style={{ background: 'rgba(0,0,0,0.08)' }}
        />

        <SectionLabel>User Journey</SectionLabel>

        <h2
          className="text-center mb-3"
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(28px, 3.5vw, 48px)',
            fontWeight: 700,
            color: '#0b1929',
          }}
        >
          How a Member Experiences CREPNET
        </h2>
        <p className="text-center text-sm mb-16" style={{ color: '#6b7280' }}>
          Users don&apos;t just visit — they stay, engage, and grow within the platform.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 relative">
          {steps.map(({ num, title, desc, Icon }, i) => (
            <div
              key={i}
              className="step-connector relative flex flex-col items-center text-center"
            >
              {/* Circle with icon */}
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center mb-5 transition-all duration-200"
                style={{
                  background: num === 5 ? '#c9a84c' : '#0b1929',
                  border: '2px solid #c9a84c',
                }}
              >
                <Icon
                  size={16}
                  color={num === 5 ? '#0b1929' : '#c9a84c'}
                  strokeWidth={1.8}
                />
              </div>

              <span
                className="text-sm font-semibold mb-1"
                style={{ color: '#0b1929' }}
              >
                {title}
              </span>
              <span className="text-xs" style={{ color: '#6b7280' }}>
                {desc}
              </span>

              {/* Arrow between */}
              {i < steps.length - 1 && (
                <ArrowRight
                  size={14}
                  color="#c9a84c"
                  className="hidden lg:block absolute"
                  style={{ top: '13px', right: '-12px', opacity: 0.5 }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Tech Stack Section ──────────────────────────────────── */
function TechStack() {
  const stack = [
    {
      Icon: Monitor,
      name: 'Frontend — Next.js + Tailwind CSS',
      desc: 'Fast, modern, SEO-friendly UI',
    },
    {
      Icon: Server,
      name: 'Backend — Node.js + REST APIs',
      desc: 'Robust, server-side architecture',
    },
    {
      Icon: Database,
      name: 'Database — MongoDB',
      desc: 'Flexible, scalable data storage',
    },
    {
      Icon: Boxes,
      name: 'Architecture — Scalable & Modular',
      desc: 'Built to grow without rebuilding',
    },
  ]

  return (
    <section className="py-24 px-8 lg:px-16" style={{ background: '#f4f2ec' }}>
      <div className="max-w-7xl mx-auto">

        <div
          className="w-full h-px mb-16"
          style={{ background: 'rgba(0,0,0,0.08)' }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <SectionLabel>Technology</SectionLabel>
            <h2
              className="mb-4"
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 700,
                color: '#0b1929',
                lineHeight: 1.15,
              }}
            >
              Scalable Technology
              <br />
              Stack
            </h2>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#6b7280' }}>
              Built to grow without rebuilding — a modern, modular architecture engineered for
              the future.
            </p>
          </div>

          {/* Right — Stack items */}
          <div className="space-y-3">
            {stack.map(({ Icon, name, desc }, i) => (
              <div
                key={i}
                className="lift gold-hover flex items-center gap-4 p-5 bg-white"
                style={{ border: '1px solid rgba(0,0,0,0.07)' }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{
                    background: '#0b1929',
                    border: '1px solid rgba(201,168,76,0.2)',
                  }}
                >
                  <Icon size={16} color="#c9a84c" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#0b1929' }}>
                    {name}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: '#6b7280' }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── EXPORT ──────────────────────────────────────────────── */
export default function EcosystemJourney() {
  return (
    <>
      <Solution />
      <UserJourney />
      <TechStack />
    </>
  )
}