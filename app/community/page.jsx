'use client'

import { useState, useEffect, useRef } from 'react'
import { Users, MapPin, Building2, TrendingUp, Star, ArrowRight, Globe, ChevronRight, Sparkles, Shield, Zap } from 'lucide-react'

const members = [
  { name: 'James Whitfield', role: 'Investment Director', firm: 'Apex Capital Realty', deals: 42, location: 'New York, NY', specialty: 'Office Towers', avatar: 'JW' },
  { name: 'Priya Sharma', role: 'Senior Broker', firm: 'Meridian Partners', deals: 29, location: 'Chicago, IL', specialty: 'Industrial', avatar: 'PS' },
  { name: 'Carlos Mendez', role: 'Asset Manager', firm: 'Vantage CRE Group', deals: 67, location: 'Miami, FL', specialty: 'Mixed-Use', avatar: 'CM' },
  { name: 'Sarah Okafor', role: 'Development Lead', firm: 'Pinnacle Realty Corp', deals: 18, location: 'Dallas, TX', specialty: 'Retail Centers', avatar: 'SO' },
  { name: 'David Chen', role: 'Portfolio Manager', firm: 'Horizon REIT', deals: 55, location: 'Los Angeles, CA', specialty: 'Multifamily', avatar: 'DC' },
  { name: 'Elena Kovacs', role: 'Acquisitions VP', firm: 'Summit Capital RE', deals: 33, location: 'Seattle, WA', specialty: 'Life Sciences', avatar: 'EK' },
]

const stats = [
  { label: 'Active Members', value: '12,400+', Icon: Users },
  { label: 'Markets Covered', value: '180+', Icon: Globe },
  { label: 'Total Deal Volume', value: '$94B+', Icon: TrendingUp },
  { label: 'Avg. Deals/Member', value: '38', Icon: Building2 },
]

const spotlightCards = [
  {
    title: 'Exclusive Deal Flow',
    subtitle: 'Private Opportunities',
    description: 'Access off-market listings and co-investment opportunities unavailable anywhere else. Our members closed $12B in private deals last year alone.',
    cta: 'Explore Deals',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    accent: '#c9a84c',
  },
  {
    title: 'Market Intelligence',
    subtitle: 'Data-Driven Insights',
    description: 'Proprietary research, cap rate trackers, and real-time market signals curated by veteran analysts across 180+ metros.',
    cta: 'View Reports',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    accent: '#5b8dee',
  },
  {
    title: 'Annual Summit',
    subtitle: 'Flagship Event',
    description: 'Three days of keynotes, deal rooms, and networking with 2,000+ senior CRE professionals in one iconic venue.',
    cta: 'Reserve Your Seat',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    accent: '#e87d5a',
  },
]

const perks = [
  { Icon: Shield, title: 'Vetted Network', desc: 'Every member is background-checked and professionally verified.' },
  { Icon: Zap, title: 'Instant Introductions', desc: 'AI-matched warm intros to relevant contacts in your market.' },
  { Icon: Sparkles, title: 'Premium Resources', desc: 'Legal templates, LOI builders, and due-diligence checklists.' },
]

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView(0.3)
  const num = parseInt(target.replace(/\D/g, ''))
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(num / 60)
    const timer = setInterval(() => {
      start += step
      if (start >= num) { setCount(num); clearInterval(timer) }
      else setCount(start)
    }, 20)
    return () => clearInterval(timer)
  }, [inView, num])
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

export default function CommunityPage() {
  const [heroRef, heroInView] = useInView(0.1)
  const [statsRef, statsInView] = useInView(0.1)
  const [membersRef, membersInView] = useInView(0.05)
  const [spotRef, spotInView] = useInView(0.05)

  return (
    <div style={{ background: '#0b1929', minHeight: '100vh', color: '#fff', fontFamily: 'Georgia, serif', overflowX: 'hidden' }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .hero-text-enter { opacity: 0; transform: translateY(32px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .hero-text-enter.visible { opacity: 1; transform: translateY(0); }

        .hero-img-enter { opacity: 0; transform: scale(0.94) translateX(24px); transition: opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s; }
        .hero-img-enter.visible { opacity: 1; transform: scale(1) translateX(0); }

        .fade-up { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-up.visible { opacity: 1; transform: translateY(0); }

        .stat-card { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .stat-card.visible { opacity: 1; transform: translateY(0); }

        .member-card { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease, border-color 0.25s ease, box-shadow 0.25s ease; }
        .member-card.visible { opacity: 1; transform: translateY(0); }
        .member-card:hover { box-shadow: 0 12px 40px rgba(201,168,76,0.12); }

        .spot-card { opacity: 0; transform: translateY(32px) scale(0.97); transition: opacity 0.7s ease, transform 0.7s ease; overflow: hidden; }
        .spot-card.visible { opacity: 1; transform: translateY(0) scale(1); }
        .spot-card img { transition: transform 0.6s ease; }
        .spot-card:hover img { transform: scale(1.06); }
        .spot-card:hover .spot-overlay { opacity: 1; }

        .spot-overlay { transition: opacity 0.4s ease; opacity: 0.7; }

        .btn-gold { transition: background 0.22s ease, transform 0.18s ease, box-shadow 0.22s ease; }
        .btn-gold:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(201,168,76,0.35); }
        .btn-gold:active { transform: translateY(0); }

        .btn-outline { transition: background 0.22s ease, color 0.22s ease, transform 0.18s ease; }
        .btn-outline:hover { background: rgba(201,168,76,0.12); transform: translateY(-1px); }

        .perk-card { transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease; }
        .perk-card:hover { background: rgba(201,168,76,0.08) !important; border-color: rgba(201,168,76,0.35) !important; transform: translateY(-3px); }

        .gold-line { height: 2px; background: linear-gradient(90deg, #c9a84c, transparent); }

        .nav-dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(201,168,76,0.3); transition: background 0.2s, transform 0.2s; cursor: pointer; }
        .nav-dot.active { background: #c9a84c; transform: scale(1.4); }

        @media (max-width: 768px) {
          .hero-grid { flex-direction: column !important; }
          .hero-img-wrap { width: 100% !important; height: 280px !important; margin-top: 32px; }
          .spot-grid { flex-direction: column !important; }
          .spot-card { width: 100% !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section ref={heroRef} style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px 64px', display: 'flex', alignItems: 'center', gap: 64, flexWrap: 'wrap' }} className="hero-grid">

        {/* Left text */}
        <div style={{ flex: '1 1 420px', minWidth: 0 }}>
          <div className={`hero-text-enter ${heroInView ? 'visible' : ''}`} style={{ transitionDelay: '0s' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', border: '1px solid rgba(201,168,76,0.45)', color: '#c9a84c', background: 'rgba(201,168,76,0.06)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, marginBottom: 28 }}>
              <Users size={11} /> Community Hub
            </div>
          </div>

          <div className={`hero-text-enter ${heroInView ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(34px,5vw,60px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.01em' }}>
              Connect With<br />
              <em style={{ color: '#c9a84c', fontStyle: 'italic' }}>Top CREP</em><br />
              Professionals
            </h1>
          </div>

          <div className={`hero-text-enter ${heroInView ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <p style={{ marginTop: 20, maxWidth: 440, fontSize: 15, lineHeight: 1.75, color: '#8a9bb0', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
              A curated ecosystem of brokers, investors, developers, and asset managers driving commercial real estate forward across every major market.
            </p>
          </div>

          <div className={`hero-text-enter ${heroInView ? 'visible' : ''}`} style={{ transitionDelay: '0.32s', display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 36 }}>
            <button className="btn-gold" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 28px', background: '#c9a84c', color: '#0b1929', fontSize: 13, fontWeight: 700, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.04em', border: 'none', cursor: 'pointer' }}>
              Apply for Membership <ArrowRight size={14} />
            </button>
            <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 28px', background: 'transparent', color: '#c9a84c', fontSize: 13, fontWeight: 600, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.04em', border: '1px solid rgba(201,168,76,0.35)', cursor: 'pointer' }}>
              Browse Members
            </button>
          </div>

          {/* Trust indicators */}
          <div className={`hero-text-enter ${heroInView ? 'visible' : ''}`} style={{ transitionDelay: '0.44s', display: 'flex', alignItems: 'center', gap: 16, marginTop: 40 }}>
            <div style={{ display: 'flex' }}>
              {['JW','PS','CM','SO','DC'].map((av, i) => (
                <div key={av} style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(201,168,76,0.2)', border: '2px solid #0b1929', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, color: '#c9a84c', marginLeft: i === 0 ? 0 : -10, fontFamily: 'DM Sans, sans-serif' }}>{av}</div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: '#8a9bb0', fontFamily: 'DM Sans, sans-serif' }}>
              <span style={{ color: '#c9a84c', fontWeight: 600 }}>12,400+</span> professionals already inside
            </p>
          </div>
        </div>

        {/* Right image */}
        <div className={`hero-img-enter hero-img-wrap ${heroInView ? 'visible' : ''}`} style={{ flex: '0 0 480px', height: 520, position: 'relative' }}>
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=85"
            alt="CRE professionals networking"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {/* Gold border accent */}
          <div style={{ position: 'absolute', top: -12, right: -12, width: '60%', height: '60%', border: '2px solid rgba(201,168,76,0.3)', pointerEvents: 'none', zIndex: 0 }} />
          <div style={{ position: 'absolute', bottom: -12, left: -12, width: '40%', height: '30%', border: '2px solid rgba(201,168,76,0.15)', pointerEvents: 'none' }} />
          {/* Floating badge */}
          <div style={{ position: 'absolute', bottom: 24, left: -24, background: '#0b1929', border: '1px solid rgba(201,168,76,0.3)', padding: '14px 20px', boxShadow: '0 16px 48px rgba(0,0,0,0.5)' }}>
            <p style={{ fontSize: 11, color: '#8a9bb0', fontFamily: 'DM Sans, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Deal Volume 2024</p>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 24, fontWeight: 700, color: '#c9a84c', marginTop: 2 }}>$94B+</p>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div className="gold-line" />
      </div>

      {/* ── STATS ── */}
      <section ref={statsRef} style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {stats.map(({ label, value, Icon }, i) => (
            <div key={label} className={`stat-card ${statsInView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s`, padding: '28px 24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.12)' }}>
              <Icon size={18} color="#c9a84c" strokeWidth={1.5} style={{ marginBottom: 12 }} />
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px,3vw,36px)', fontWeight: 700, color: '#fff' }}>
                {statsInView ? <AnimatedCounter target={value} suffix={value.includes('+') ? '+' : value.includes('B') ? 'B+' : ''} /> : '0'}
              </p>
              <p style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 6, color: '#8a9bb0', fontFamily: 'DM Sans, sans-serif' }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CREAM SPOTLIGHT CARDS SECTION ── */}
      <section ref={spotRef} style={{ background: '#f5f0e6', padding: '80px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

          <div className={`fade-up ${spotInView ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', border: '1px solid rgba(10,25,41,0.2)', color: '#0b1929', background: 'rgba(10,25,41,0.06)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, marginBottom: 20 }}>
              <Sparkles size={11} /> What You Get
            </div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px,4vw,46px)', fontWeight: 800, color: '#0b1929', lineHeight: 1.1 }}>
              Everything You Need to<br />
              <em style={{ color: '#c9a84c', fontStyle: 'italic' }}>Close More Deals</em>
            </h2>
            <p style={{ marginTop: 16, color: '#5a6a7a', fontSize: 15, maxWidth: 480, margin: '16px auto 0', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>
              Membership unlocks an end-to-end toolkit for modern CRE professionals.
            </p>
          </div>

          {/* Spotlight cards — half image / half text */}
          <div className="spot-grid" style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {spotlightCards.map((card, i) => (
              <div
                key={card.title}
                className={`spot-card ${spotInView ? 'visible' : ''}`}
                style={{
                  transitionDelay: `${i * 0.15}s`,
                  flex: '1 1 300px',
                  minWidth: 260,
                  background: '#fff',
                  border: '1px solid rgba(201,168,76,0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  position: 'relative',
                }}
              >
                {/* Top half — image */}
                <div style={{ height: 220, overflow: 'hidden', position: 'relative' }}>
                  <img src={card.img} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  {/* Overlay */}
                  <div className="spot-overlay" style={{ position: 'absolute', inset: 0, background: `linear-gradient(160deg, rgba(11,25,41,0.5), ${card.accent}44)` }} />
                  {/* Subtitle badge on image */}
                  <div style={{ position: 'absolute', top: 16, left: 16, padding: '4px 10px', background: card.accent, color: '#0b1929', fontSize: 10, fontWeight: 700, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {card.subtitle}
                  </div>
                </div>

                {/* Bottom half — text + button */}
                <div style={{ padding: '28px 28px 32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 700, color: '#0b1929', lineHeight: 1.2 }}>{card.title}</h3>
                  <div style={{ width: 36, height: 2, background: card.accent, margin: '14px 0' }} />
                  <p style={{ fontSize: 14, color: '#5a6a7a', lineHeight: 1.72, fontFamily: 'DM Sans, sans-serif', flex: 1 }}>{card.description}</p>
                  <button
                    className="btn-outline"
                    style={{
                      marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 8,
                      padding: '11px 20px', background: 'transparent', color: '#0b1929',
                      fontSize: 12, fontWeight: 700, fontFamily: 'DM Sans, sans-serif',
                      letterSpacing: '0.06em', border: `1px solid ${card.accent}`,
                      cursor: 'pointer', alignSelf: 'flex-start',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = card.accent; e.currentTarget.style.color = '#0b1929' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0b1929' }}
                  >
                    {card.cta} <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Perks row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16, marginTop: 40 }}>
            {perks.map(({ Icon, title, desc }, i) => (
              <div key={title} className={`perk-card fade-up ${spotInView ? 'visible' : ''}`}
                style={{ transitionDelay: `${0.45 + i * 0.1}s`, padding: '22px 24px', background: 'rgba(11,25,41,0.04)', border: '1px solid rgba(11,25,41,0.1)', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 38, height: 38, background: 'rgba(201,168,76,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={16} color="#c9a84c" strokeWidth={1.6} />
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: '#0b1929', fontFamily: 'DM Sans, sans-serif' }}>{title}</p>
                  <p style={{ fontSize: 12, color: '#6a7a8a', marginTop: 4, lineHeight: 1.6, fontFamily: 'DM Sans, sans-serif' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED MEMBERS ── */}
      <section ref={membersRef} style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px' }}>
        <div className={`fade-up ${membersInView ? 'visible' : ''}`} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c9a84c', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, marginBottom: 10 }}>Our Network</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px,3.5vw,40px)', fontWeight: 700 }}>Featured Members</h2>
          </div>
          <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: 'transparent', color: '#c9a84c', fontSize: 12, fontWeight: 600, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.06em', border: '1px solid rgba(201,168,76,0.35)', cursor: 'pointer' }}>
            View All Members <ArrowRight size={12} />
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 16 }}>
          {members.map((m, i) => (
            <div key={m.name}
              className={`member-card ${membersInView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s`, padding: '24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.12)', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.12)'}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 18 }}>
                <div style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 13, fontWeight: 700, background: 'rgba(201,168,76,0.15)', color: '#c9a84c', border: '1px solid rgba(201,168,76,0.3)', fontFamily: 'DM Sans, sans-serif' }}>
                  {m.avatar}
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: 14, color: '#fff', fontFamily: 'DM Sans, sans-serif' }}>{m.name}</p>
                  <p style={{ fontSize: 12, color: '#c9a84c', marginTop: 2, fontFamily: 'DM Sans, sans-serif' }}>{m.role}</p>
                  <p style={{ fontSize: 12, color: '#8a9bb0', marginTop: 1, fontFamily: 'DM Sans, sans-serif' }}>{m.firm}</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, paddingTop: 16, borderTop: '1px solid rgba(201,168,76,0.1)', flexWrap: 'wrap', rowGap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#8a9bb0', fontFamily: 'DM Sans, sans-serif' }}>
                  <MapPin size={11} /> {m.location}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#8a9bb0', fontFamily: 'DM Sans, sans-serif' }}>
                  <Building2 size={11} /> {m.specialty}
                </div>
              </div>
              <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#c9a84c', fontWeight: 600, fontFamily: 'DM Sans, sans-serif' }}>
                <Star size={11} fill="#c9a84c" /> {m.deals} completed deals
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ position: 'relative', overflow: 'hidden', padding: '64px 48px', background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
          {/* BG decoration */}
          <div style={{ position: 'absolute', top: -60, right: -60, width: 280, height: 280, border: '60px solid rgba(201,168,76,0.05)', borderRadius: '50%', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -40, left: '30%', width: 160, height: 160, border: '40px solid rgba(201,168,76,0.04)', borderRadius: '50%', pointerEvents: 'none' }} />

          <div style={{ position: 'relative' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(22px,3vw,36px)', fontWeight: 700 }}>Ready to join the network?</h3>
            <p style={{ fontSize: 14, marginTop: 10, color: '#8a9bb0', maxWidth: 420, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.7 }}>Apply today and get access to the most active CRE community — vetted professionals, exclusive deals, and real connections.</p>
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', position: 'relative' }}>
            <button className="btn-gold" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '15px 32px', background: '#c9a84c', color: '#0b1929', fontSize: 13, fontWeight: 700, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.04em', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              Apply for Membership <ArrowRight size={14} />
            </button>
            <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '15px 28px', background: 'transparent', color: '#fff', fontSize: 13, fontWeight: 500, fontFamily: 'DM Sans, sans-serif', border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}