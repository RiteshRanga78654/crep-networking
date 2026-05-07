'use client'

import { Menu, X, Globe, Users, LayoutGrid, BookOpen, ArrowRight, Diamond } from 'lucide-react'
import { useState } from 'react'
import Link from "next/link";
/* ─── Dot Grid Background ─────────────────────────────────── */
function DotGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.18) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 80% 50%, black 20%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 80% 50%, black 20%, transparent 100%)',
      }}
    />
  )
}

/* ─── Navbar ──────────────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false)
const links = [
  { name: "Community", href: "/community" },
  { name: "Events", href: "/events" },
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/about" },
];

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: '#0b1929',
        borderBottom: '1px solid rgba(201,168,76,0.15)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 lg:px-16 py-4">

        {/* Logo */}
        <div className="flex   items-center gap-0.5 select-none flex-shrink-0">
          <span
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: '22px',
              fontWeight: 700,
              color: '#c9a84c',
              letterSpacing: '0.02em',
            }}
          >
            CREP
          </span>
          <span
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: '22px',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '0.02em',
            }}
          >
            NET
          </span>
        </div>

        {/* Desktop Nav */}
<nav className="hidden md:flex items-center gap-8 lg:gap-10">
  {links.map((l) => (
    <Link
      key={l.name}
      href={l.href}
      className="text-xs tracking-widest uppercase font-medium text-[#8a9bb0] hover:text-white transition whitespace-nowrap"
    >
      {l.name}
    </Link>
  ))}
</nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <button suppressHydrationWarning
            className="hidden md:flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-5 py-2.5 transition-all duration-200 flex-shrink-0"
            style={{ border: '1px solid #c9a84c', color: '#c9a84c', background: 'transparent' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#c9a84c'; e.currentTarget.style.color = '#0b1929' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#c9a84c' }}
          >
            Join Network
            <ArrowRight size={12} />
          </button>

          <button
            className="md:hidden p-1"
            style={{ color: '#c9a84c' }}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: '#0b1929', borderTop: '1px solid rgba(201,168,76,0.15)' }}
        >
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="text-sm tracking-widest uppercase py-2"
              style={{ color: '#8a9bb0', borderBottom: '1px solid rgba(201,168,76,0.08)' }}
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <button
            className="text-xs font-semibold tracking-widest uppercase px-6 py-3 mt-2 w-full transition-all duration-200"
            style={{ border: '1px solid #c9a84c', color: '#c9a84c', background: 'transparent' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#c9a84c'; e.currentTarget.style.color = '#0b1929' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#c9a84c' }}
          >
            Join Network
          </button>
        </div>
      )}
    </header>
  )
}

/* ─── Hero ────────────────────────────────────────────────── */
function Hero() {
  const platformCards = [
    { num: '01', label: 'Public Website',  Icon: Globe },
    { num: '02', label: 'Member Platform', Icon: Users },
    { num: '03', label: 'Events System',   Icon: LayoutGrid },
    { num: '04', label: 'Insights Hub',    Icon: BookOpen },
  ]

  return (
    <section className="relative overflow-hidden px-6 md:px-8 lg:px-16 pt-12 md:pt-16 pb-16 md:pb-20">
      <DotGrid />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

        {/* ── Left ── */}
        <div className="flex-1 w-full max-w-xl text-center lg:text-left">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 md:mb-8 text-xs tracking-widest uppercase font-medium"
            style={{
              border: '1px solid rgba(201,168,76,0.45)',
              color: '#c9a84c',
              background: 'rgba(201,168,76,0.06)',
            }}
          >
            <Diamond size={8} fill="#c9a84c" />
           Commercial Real Estate  Professional Network 
          </div>

          {/* Headline */}
          <h1
            className="leading-none mb-6 md:mb-7"
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: 'clamp(36px, 6vw, 68px)',
              fontWeight: 700,
              color: '#ffffff',
            }}
          >
            Building the
            <br />
            <em style={{ color: '#c9a84c', fontStyle: 'italic' }}>Future</em> of
            <br />
            CREP Networking
          </h1>

          {/* Body */}
          <p
            className="text-sm leading-relaxed mb-8 md:mb-10 max-w-sm mx-auto lg:mx-0"
            style={{ color: '#8a9bb0' }}
          >
            The most trusted professional ecosystem for commercial real estate —
            where relationships become opportunities.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
            <button
              className="flex items-center gap-2.5 px-6 md:px-8 py-3 md:py-3.5 text-sm font-semibold tracking-wide transition-all duration-200"
              style={{ background: '#c9a84c', color: '#0b1929' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#b8941e')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#c9a84c')}
            >
              Join the Network
              <ArrowRight size={14} />
            </button>
            <button
              className="flex items-center gap-2.5 px-6 md:px-8 py-3 md:py-3.5 text-sm font-semibold tracking-wide transition-all duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#ffffff', background: 'transparent' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#c9a84c'; e.currentTarget.style.color = '#c9a84c' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#ffffff' }}
            >
              Explore Platform
            </button>
          </div>

          {/* Trusted label */}
          <p className="mt-8 md:mt-10 text-xs tracking-widest uppercase" style={{ color: '#3a5065' }}>
            Trusted
          </p>
        </div>

        {/* ── Right — Platform Grid ── */}
        <div className="flex-1 w-full max-w-md lg:max-w-lg xl:max-w-xl">
          <div
            className="p-1.5"
            style={{
              border: '1px solid rgba(201,168,76,0.18)',
              background: 'rgba(255,255,255,0.02)',
            }}
          >
            <div className="grid grid-cols-2 gap-1.5">
              {platformCards.map(({ num, label, Icon }, i) => (
                <div
                  key={i}
                  className="lift cursor-pointer p-5 md:p-7 flex flex-col justify-between"
                  style={{
                    minHeight: '120px',
                    background: i === 0 ? 'rgba(201,168,76,0.1)' : 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(201,168,76,0.12)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: 'clamp(20px, 3vw, 28px)',
                      fontWeight: 400,
                      color: 'rgba(201,168,76,0.6)',
                      lineHeight: 1,
                    }}
                  >
                    {num}
                  </span>
                  <div className="flex flex-col gap-2">
                    <Icon size={16} color="#c9a84c" strokeWidth={1.5} />
                    <span className="text-xs tracking-widest uppercase" style={{ color: '#8a9bb0' }}>
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer label */}
            <div className="py-3 text-center">
              <span className="text-xs tracking-widest uppercase" style={{ color: '#3a5065' }}>
                A Full-Scale CRE Digital Ecosystem
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

/* ─── EXPORT ─────────────────────────────────────────────── */
export default function LandingHero() {
  return (
    <div className="relative grain" style={{ background: '#0b1929' }}>
      <Navbar />
      <Hero />
    </div>
  )
}