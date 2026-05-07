'use client'

import { useState, useEffect, useRef } from 'react'
import { Calendar, MapPin, Clock, Users, Mic, Building2, ArrowRight, Filter, ChevronDown, Play, Globe, Star, X } from 'lucide-react'

const featured = {
  title: 'CRE Summit 2025 — The Future of Commercial Real Estate',
  date: 'September 18–20, 2025',
  location: 'Marriott Marquis, New York, NY',
  type: 'Annual Conference',
  attendees: 1200,
  speakers: 48,
  desc: 'Three days of keynotes, deal-making sessions, and networking with the most influential figures in commercial real estate. Featuring live deal showcases, market outlook panels, and one-on-one broker matchmaking.',
  image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1400&q=85',
}

const events = [
  { title: 'NYC Office Market Mid-Year Review', date: 'Jul 12, 2025', time: '10:00 AM EST', location: 'Virtual / Online', type: 'Webinar', attendees: 340, month: 'JUL', day: '12', Icon: Mic },
  { title: 'Industrial & Logistics Deal Forum', date: 'Jul 24, 2025', time: '9:00 AM CST', location: 'Chicago, IL', type: 'In-Person', attendees: 180, month: 'JUL', day: '24', Icon: Building2 },
  { title: 'Multifamily Investment Roundtable', date: 'Aug 3, 2025', time: '2:00 PM PST', location: 'Los Angeles, CA', type: 'In-Person', attendees: 95, month: 'AUG', day: '03', Icon: Users },
  { title: 'Capital Markets & Financing Outlook', date: 'Aug 14, 2025', time: '11:00 AM EST', location: 'Virtual / Online', type: 'Webinar', attendees: 510, month: 'AUG', day: '14', Icon: Mic },
  { title: 'Southeast CRE Investor Breakfast', date: 'Aug 22, 2025', time: '8:00 AM EST', location: 'Miami, FL', type: 'In-Person', attendees: 120, month: 'AUG', day: '22', Icon: Building2 },
  { title: 'Life Sciences Real Estate Deep Dive', date: 'Sep 4, 2025', time: '1:00 PM EST', location: 'Boston, MA', type: 'In-Person', attendees: 75, month: 'SEP', day: '04', Icon: Mic },
]

const filters = ['All Events', 'Webinar', 'In-Person', 'Conference']

const speakers = [
  { name: 'Alexandra Reed', title: 'Chief Investment Officer', firm: 'Apex Capital', av: 'AR' },
  { name: 'Marcus DeLeon', title: 'Managing Director', firm: 'Meridian CRE', av: 'MD' },
  { name: 'Sarah Kimura', title: 'VP Acquisitions', firm: 'Vantage Group', av: 'SK' },
  { name: 'Ethan Wallace', title: 'Senior Analyst', firm: 'Horizon REIT', av: 'EW' },
]

function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState('All Events')
  const [heroRef, heroInView] = useInView(0.05)
  const [eventsRef, eventsInView] = useInView(0.05)
  const [speakersRef, speakersInView] = useInView(0.05)

  const filtered = activeFilter === 'All Events' ? events : events.filter(e => e.type === activeFilter || (activeFilter === 'Conference' && e.type === 'In-Person'))

  return (
    <div style={{ background: '#0b1929', minHeight: '100vh', color: '#fff', fontFamily: 'Georgia, serif', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }

        .fade-up { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-up.in { opacity: 1; transform: none; }

        .ev-card { opacity: 0; transform: translateY(20px); transition: opacity 0.55s ease, transform 0.55s ease, border-color 0.2s, box-shadow 0.2s; }
        .ev-card.in { opacity: 1; transform: none; }
        .ev-card:hover { border-color: rgba(201,168,76,0.45) !important; box-shadow: 0 12px 40px rgba(0,0,0,0.3); }

        .filter-btn { transition: all 0.2s ease; cursor: pointer; font-family: 'DM Sans', sans-serif; }
        .filter-btn.active { background: #c9a84c !important; color: #0b1929 !important; border-color: #c9a84c !important; }
        .filter-btn:not(.active):hover { border-color: rgba(201,168,76,0.5) !important; color: #c9a84c !important; }

        .btn-gold { transition: background 0.22s, transform 0.18s, box-shadow 0.22s; cursor: pointer; }
        .btn-gold:hover { background: #b8941e !important; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(201,168,76,0.3); }

        .speaker-card { transition: border-color 0.2s, transform 0.25s, background 0.2s; }
        .speaker-card:hover { border-color: rgba(201,168,76,0.4) !important; transform: translateY(-4px); background: rgba(201,168,76,0.06) !important; }

        .ticker { display: flex; gap: 48px; animation: ticker 22s linear infinite; white-space: nowrap; }
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        .hero-img { animation: heroReveal 1s cubic-bezier(.22,1,.36,1) both; }
        @keyframes heroReveal { from { opacity: 0; transform: scale(1.04); } to { opacity: 1; transform: scale(1); } }

        .dot-grid { background-image: radial-gradient(circle, rgba(201,168,76,0.12) 1px, transparent 1px); background-size: 28px 28px; }

        .badge-pill { display: inline-flex; align-items: center; gap: 6px; padding: 5px 12px; border-radius: 0; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; font-family: 'DM Sans', sans-serif; font-weight: 600; }
        .webinar-badge { background: rgba(59,130,246,0.12); color: #60a5fa; border: 1px solid rgba(59,130,246,0.25); }
        .inperson-badge { background: rgba(201,168,76,0.12); color: #c9a84c; border: 1px solid rgba(201,168,76,0.25); }

        @media (max-width: 768px) { .hero-split { flex-direction: column !important; } .hero-img-col { height: 260px !important; } }
      `}</style>

      {/* ── TICKER ── */}
      <div style={{ background: '#c9a84c', padding: '10px 0', overflow: 'hidden' }}>
        <div className="ticker">
          {[...Array(2)].map((_, ti) => (
            ['CRE Summit 2025 · New York', 'Industrial Forum · Chicago', 'Capital Markets Webinar', 'Multifamily Roundtable · LA', 'Investor Breakfast · Miami', 'Life Sciences Deep Dive · Boston'].map((t, i) => (
              <span key={`${ti}-${i}`} style={{ fontSize: 11, fontWeight: 700, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0b1929', display: 'flex', alignItems: 'center', gap: 12 }}>
                <Star size={8} fill="#0b1929" /> {t}
              </span>
            ))
          ))}
        </div>
      </div>

      {/* ── HERO ── */}
      <section ref={heroRef} style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background image with overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img className="hero-img" src={featured.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(11,25,41,0.97) 0%, rgba(11,25,41,0.85) 55%, rgba(11,25,41,0.4) 100%)' }} />
          <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', padding: '96px 24px 80px' }}>
          <div className={`fade-up ${heroInView ? 'in' : ''}`} style={{ transitionDelay: '0s' }}>
            <div className="badge-pill" style={{ background: 'rgba(201,168,76,0.1)', color: '#c9a84c', border: '1px solid rgba(201,168,76,0.35)', marginBottom: 24 }}>
              <Calendar size={10} /> Events & Conferences
            </div>
          </div>

          <div className={`fade-up ${heroInView ? 'in' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(38px,6vw,72px)', fontWeight: 800, lineHeight: 1.04, maxWidth: 700 }}>
              Where <em style={{ color: '#c9a84c' }}>Deals</em><br />Begin
            </h1>
          </div>

          <div className={`fade-up ${heroInView ? 'in' : ''}`} style={{ transitionDelay: '0.18s' }}>
            <p style={{ marginTop: 20, maxWidth: 500, fontSize: 15, lineHeight: 1.8, color: '#8a9bb0', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
              In-person summits, virtual panels, and exclusive roundtables connecting CRE professionals across every asset class and market.
            </p>
          </div>

          <div className={`fade-up ${heroInView ? 'in' : ''}`} style={{ transitionDelay: '0.26s', display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 36 }}>
            <button className="btn-gold" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 32px', background: '#c9a84c', color: '#0b1929', fontSize: 13, fontWeight: 700, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.05em', border: 'none' }}>
              Browse All Events <ArrowRight size={14} />
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 24px', background: 'rgba(255,255,255,0.06)', color: '#fff', fontSize: 13, fontFamily: 'DM Sans, sans-serif', border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}>
              <Play size={12} fill="#fff" /> Watch Recap
            </button>
          </div>

          {/* Quick stats row */}
          <div className={`fade-up ${heroInView ? 'in' : ''}`} style={{ transitionDelay: '0.34s', display: 'flex', flexWrap: 'wrap', gap: 32, marginTop: 56 }}>
            {[['24+', 'Events This Year'], ['6,200+', 'Total Attendees'], ['180+', 'Expert Speakers'], ['12', 'Cities Covered']].map(([val, lbl]) => (
              <div key={lbl}>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 28, fontWeight: 700, color: '#c9a84c' }}>{val}</p>
                <p style={{ fontSize: 11, color: '#8a9bb0', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 2 }}>{lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED EVENT ── */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px 0' }}>
        <div style={{ position: 'relative', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.25)', background: 'rgba(201,168,76,0.04)' }}>
          <div className="dot-grid" style={{ position: 'absolute', top: 0, right: 0, width: 300, height: 300, opacity: 0.5, pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1, padding: '48px 40px', display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'center' }}>
            {/* Date block */}
            <div style={{ textAlign: 'center', padding: '20px 28px', background: '#c9a84c', color: '#0b1929', minWidth: 100 }}>
              <p style={{ fontSize: 11, fontWeight: 700, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.1em' }}>SEP</p>
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 48, fontWeight: 800, lineHeight: 1 }}>18</p>
              <p style={{ fontSize: 11, fontWeight: 600, fontFamily: 'DM Sans, sans-serif' }}>— 20</p>
            </div>
            <div style={{ flex: 1, minWidth: 260 }}>
              <div className="badge-pill" style={{ background: 'rgba(201,168,76,0.15)', color: '#c9a84c', border: '1px solid rgba(201,168,76,0.3)', marginBottom: 14 }}>
                ★ Featured Event
              </div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(20px,3vw,30px)', fontWeight: 700, lineHeight: 1.2, maxWidth: 560 }}>{featured.title}</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginTop: 16, marginBottom: 16 }}>
                {[{ icon: MapPin, text: featured.location }, { icon: Users, text: `${featured.attendees.toLocaleString()} attendees` }, { icon: Mic, text: `${featured.speakers} speakers` }].map(({ icon: Icon, text }) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#8a9bb0', fontFamily: 'DM Sans, sans-serif' }}>
                    <Icon size={12} color="#c9a84c" /> {text}
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 13, color: '#8a9bb0', lineHeight: 1.75, fontFamily: 'DM Sans, sans-serif', maxWidth: 580, marginBottom: 24 }}>{featured.desc}</p>
              <button className="btn-gold" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '13px 28px', background: '#c9a84c', color: '#0b1929', fontSize: 12, fontWeight: 700, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.05em', border: 'none' }}>
                Register Now <ArrowRight size={13} />
              </button>
            </div>
            {/* Speakers preview */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 200 }}>
              <p style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8a9bb0', fontFamily: 'DM Sans, sans-serif', marginBottom: 4 }}>Confirmed Speakers</p>
              {speakers.map(sp => (
                <div key={sp.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 32, height: 32, background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, color: '#c9a84c', fontFamily: 'DM Sans, sans-serif', flexShrink: 0 }}>{sp.av}</div>
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 600, color: '#fff', fontFamily: 'DM Sans, sans-serif' }}>{sp.name}</p>
                    <p style={{ fontSize: 10, color: '#8a9bb0', fontFamily: 'DM Sans, sans-serif' }}>{sp.firm}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ── */}
      <section ref={eventsRef} style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, marginBottom: 32 }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c9a84c', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, marginBottom: 8 }}>On The Calendar</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(22px,3vw,36px)', fontWeight: 700 }}>Upcoming Events</h2>
          </div>
          {/* Filters */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {filters.map(f => (
              <button key={f} className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
                style={{ padding: '8px 16px', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'transparent', color: '#8a9bb0', border: '1px solid rgba(201,168,76,0.2)' }}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 16 }}>
          {filtered.map((ev, i) => (
            <div key={ev.title}
              className={`ev-card ${eventsInView ? 'in' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s`, background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(201,168,76,0.12)', cursor: 'pointer' }}>
              {/* Top color band */}
              <div style={{ height: 3, background: ev.type === 'Webinar' ? 'rgba(59,130,246,0.7)' : '#c9a84c' }} />
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
                  {/* Date badge */}
                  <div style={{ textAlign: 'center', padding: '8px 14px', background: ev.type === 'Webinar' ? 'rgba(59,130,246,0.1)' : 'rgba(201,168,76,0.1)', border: `1px solid ${ev.type === 'Webinar' ? 'rgba(59,130,246,0.25)' : 'rgba(201,168,76,0.25)'}` }}>
                    <p style={{ fontSize: 9, fontWeight: 700, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.1em', color: ev.type === 'Webinar' ? '#60a5fa' : '#c9a84c' }}>{ev.month}</p>
                    <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 700, color: '#fff', lineHeight: 1 }}>{ev.day}</p>
                  </div>
                  <span className={`badge-pill ${ev.type === 'Webinar' ? 'webinar-badge' : 'inperson-badge'}`}>{ev.type}</span>
                </div>

                <h3 style={{ fontSize: 14, fontWeight: 600, color: '#fff', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.45, marginBottom: 16 }}>{ev.title}</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {[{ icon: Clock, text: ev.time }, { icon: MapPin, text: ev.location }].map(({ icon: Icon, text }) => (
                    <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, color: '#8a9bb0', fontFamily: 'DM Sans, sans-serif' }}>
                      <Icon size={11} /> {text}
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#8a9bb0', fontFamily: 'DM Sans, sans-serif' }}>
                    <Users size={11} /> {ev.attendees.toLocaleString()} registered
                  </div>
                  <button style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, fontWeight: 700, color: ev.type === 'Webinar' ? '#60a5fa' : '#c9a84c', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.06em' }}>
                    RSVP <ArrowRight size={10} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SPEAKERS SECTION ── */}
      <section ref={speakersRef} style={{ background: '#f5f0e6', padding: '72px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div className={`fade-up ${speakersInView ? 'in' : ''}`} style={{ marginBottom: 40 }}>
            <p style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c9a84c', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, marginBottom: 10 }}>Confirmed Speakers</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px,3.5vw,40px)', fontWeight: 700, color: '#0b1929' }}>Voices Shaping the <em style={{ color: '#c9a84c' }}>Industry</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 16 }}>
            {[...speakers, ...speakers].slice(0, 8).map((sp, i) => (
              <div key={`${sp.name}-${i}`}
                className={`speaker-card fade-up ${speakersInView ? 'in' : ''}`}
                style={{ transitionDelay: `${i * 0.07}s`, background: '#fff', border: '1px solid rgba(201,168,76,0.15)', padding: '28px 24px', cursor: 'pointer' }}>
                <div style={{ width: 52, height: 52, background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#c9a84c', fontFamily: 'DM Sans, sans-serif', marginBottom: 16 }}>{sp.av}</div>
                <p style={{ fontSize: 14, fontWeight: 700, color: '#0b1929', fontFamily: 'DM Sans, sans-serif' }}>{sp.name}</p>
                <p style={{ fontSize: 12, color: '#c9a84c', fontFamily: 'DM Sans, sans-serif', marginTop: 3 }}>{sp.title}</p>
                <p style={{ fontSize: 11, color: '#8a9bb0', fontFamily: 'DM Sans, sans-serif', marginTop: 2 }}>{sp.firm}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.2)', padding: '56px 40px', display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
          <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(22px,3vw,36px)', fontWeight: 700 }}>Submit Your Event</h3>
            <p style={{ fontSize: 14, color: '#8a9bb0', fontFamily: 'DM Sans, sans-serif', marginTop: 10, maxWidth: 400, lineHeight: 1.7 }}>Hosting a CRE event? List it on CREPNET and reach 12,400+ qualified professionals.</p>
          </div>
          <button className="btn-gold" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '15px 32px', background: '#c9a84c', color: '#0b1929', fontSize: 13, fontWeight: 700, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.05em', border: 'none', flexShrink: 0, position: 'relative' }}>
            Submit Event <ArrowRight size={14} />
          </button>
        </div>
      </section>
    </div>
  )
}