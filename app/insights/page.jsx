'use client'

import { useState, useEffect, useRef } from 'react'
import { BookOpen, TrendingUp, BarChart2, Globe, ArrowRight, Clock, ChevronRight, Search, Bookmark, Share2, Eye } from 'lucide-react'

const featured = {
  tag: 'Market Outlook',
  title: '2025 H2 Commercial Real Estate Outlook: Navigating Rate Cuts and Supply Constraints',
  excerpt: 'As the Fed signals a cautious easing cycle, CRE investors face a dual challenge: falling cap rates and persistent supply shortages across tier-1 office and industrial markets. This deep-dive analysis breaks down asset class performance and where smart capital is flowing.',
  author: 'Dr. Alexandra Reed, CFA',
  firm: 'CREPNET Research Desk',
  readTime: '12 min read',
  date: 'June 28, 2025',
  views: '8.4K',
  image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85',
}

const articles = [
  { tag: 'Office', title: 'The Flight-to-Quality Playbook: How Trophy Office Is Defying the Vacancy Narrative', author: 'Marcus DeLeon', date: 'Jun 20', readTime: '8 min', Icon: TrendingUp, views: '5.1K', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80' },
  { tag: 'Industrial', title: 'Nearshoring Boom Fuels Sunbelt Industrial Demand Through 2026', author: 'Sarah Kimura', date: 'Jun 17', readTime: '6 min', Icon: Globe, views: '3.8K', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80' },
  { tag: 'Capital Markets', title: 'Bridge Loan Spreads Tighten as Regional Banks Return to CRE Lending', author: 'Ethan Wallace', date: 'Jun 14', readTime: '10 min', Icon: BarChart2, views: '6.2K', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80' },
  { tag: 'Retail', title: 'Experiential Retail Vacancies Hit 5-Year Low — What It Means for Landlords', author: 'Priya Sanjana', date: 'Jun 10', readTime: '7 min', Icon: TrendingUp, views: '2.9K', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80' },
  { tag: 'Multifamily', title: 'Rent Growth Moderates in Top 10 MSAs While Secondary Markets Surge', author: 'Carlos Vega', date: 'Jun 6', readTime: '9 min', Icon: BarChart2, views: '4.5K', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80' },
  { tag: 'Life Sciences', title: 'Lab Space Oversupply in Boston-Cambridge: A Temporary Correction or Structural Shift?', author: 'Dr. Jana Obi', date: 'Jun 2', readTime: '11 min', Icon: Globe, views: '3.3K', image: 'https://images.unsplash.com/photo-1576671081803-e3ff83d06940?w=600&q=80' },
]

const categories = ['All', 'Market Outlook', 'Office', 'Industrial', 'Multifamily', 'Retail', 'Capital Markets', 'Life Sciences']

const tagColor = {
  Office: { color: '#60a5fa', bg: 'rgba(59,130,246,0.1)', border: 'rgba(59,130,246,0.2)' },
  Industrial: { color: '#34d399', bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.2)' },
  'Capital Markets': { color: '#c9a84c', bg: 'rgba(201,168,76,0.1)', border: 'rgba(201,168,76,0.2)' },
  Retail: { color: '#f472b6', bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.2)' },
  Multifamily: { color: '#a78bfa', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.2)' },
  'Life Sciences': { color: '#2dd4bf', bg: 'rgba(45,212,191,0.1)', border: 'rgba(45,212,191,0.2)' },
  'Market Outlook': { color: '#c9a84c', bg: 'rgba(201,168,76,0.1)', border: 'rgba(201,168,76,0.2)' },
}

const trending = [
  { num: '01', title: 'Cap Rate Compression Returns to Gateway Cities', tag: 'Market Outlook' },
  { num: '02', title: 'Data Centers as the New Industrial: Where Investors Are Betting', tag: 'Industrial' },
  { num: '03', title: 'Opportunity Zones: 2025 Deadline Strategies', tag: 'Capital Markets' },
  { num: '04', title: 'The Death (and Rebirth) of the Mall', tag: 'Retail' },
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

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [heroRef, heroInView] = useInView(0.05)
  const [articlesRef, articlesInView] = useInView(0.05)
  const [trendingRef, trendingInView] = useInView(0.1)

  const filtered = articles.filter(a => {
    const matchCat = activeCategory === 'All' || a.tag === activeCategory
    const matchSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.author.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div style={{ background: '#0b1929', minHeight: '100vh', color: '#fff', fontFamily: 'Georgia, serif', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }

        .fade-up { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-up.in { opacity: 1; transform: none; }

        .art-card { opacity: 0; transform: translateY(22px); transition: opacity 0.6s ease, transform 0.6s ease, border-color 0.2s, box-shadow 0.2s; overflow: hidden; }
        .art-card.in { opacity: 1; transform: none; }
        .art-card:hover { border-color: rgba(201,168,76,0.45) !important; box-shadow: 0 16px 40px rgba(0,0,0,0.4); }
        .art-card:hover .art-img { transform: scale(1.07); }
        .art-img { transition: transform 0.55s ease; }

        .cat-btn { transition: all 0.2s; cursor: pointer; font-family: 'DM Sans', sans-serif; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600; padding: 8px 16px; border: 1px solid rgba(201,168,76,0.15); background: transparent; color: #8a9bb0; }
        .cat-btn.active { background: #c9a84c; color: #0b1929; border-color: #c9a84c; }
        .cat-btn:not(.active):hover { border-color: rgba(201,168,76,0.5); color: #c9a84c; }

        .trend-row { transition: background 0.2s, border-color 0.2s, transform 0.2s; cursor: pointer; }
        .trend-row:hover { background: rgba(201,168,76,0.06) !important; border-color: rgba(201,168,76,0.3) !important; transform: translateX(4px); }

        .search-wrap { position: relative; }
        .search-wrap input:focus { outline: none; border-color: rgba(201,168,76,0.5) !important; }

        .featured-img { transition: transform 0.6s ease; }
        .featured-wrap:hover .featured-img { transform: scale(1.03); }

        .dot-grid { background-image: radial-gradient(circle, rgba(201,168,76,0.1) 1px, transparent 1px); background-size: 28px 28px; }
      `}</style>

      {/* ── HERO ── */}
      <section ref={heroRef} style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px 48px' }}>
        <div className={`fade-up ${heroInView ? 'in' : ''}`} style={{ transitionDelay: '0s' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', border: '1px solid rgba(201,168,76,0.4)', color: '#c9a84c', background: 'rgba(201,168,76,0.06)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, marginBottom: 24 }}>
            <BookOpen size={10} /> Insights & Research
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <div className={`fade-up ${heroInView ? 'in' : ''}`} style={{ transitionDelay: '0.1s' }}>
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(34px,5.5vw,64px)', fontWeight: 800, lineHeight: 1.04 }}>
                Intelligence That<br /><em style={{ color: '#c9a84c' }}>Moves Capital</em>
              </h1>
            </div>
            <div className={`fade-up ${heroInView ? 'in' : ''}`} style={{ transitionDelay: '0.18s' }}>
              <p style={{ marginTop: 16, maxWidth: 460, fontSize: 15, lineHeight: 1.8, color: '#8a9bb0', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>
                Exclusive research, market analyses, and deal intelligence authored by CRE's top minds — available only to CREPNET members.
              </p>
            </div>
          </div>

          {/* Search */}
          <div className={`fade-up ${heroInView ? 'in' : ''}`} style={{ transitionDelay: '0.24s' }}>
            <div className="search-wrap">
              <Search size={14} color="#8a9bb0" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
              <input
                placeholder="Search articles, authors…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{ padding: '13px 16px 13px 40px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.2)', color: '#fff', fontSize: 13, fontFamily: 'DM Sans, sans-serif', width: 280, transition: 'border-color 0.2s' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px 40px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {categories.map(cat => (
            <button key={cat} className={`cat-btn ${activeCategory === cat ? 'active' : ''}`} onClick={() => setActiveCategory(cat)}>{cat}</button>
          ))}
        </div>
      </section>

      {/* ── FEATURED + TRENDING (2-col) ── */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px 64px', display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>

        {/* Featured Article */}
        <div className="featured-wrap fade-up in" style={{ flex: '1 1 540px', border: '1px solid rgba(201,168,76,0.2)', overflow: 'hidden', cursor: 'pointer', background: 'rgba(255,255,255,0.02)', transition: 'border-color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'}>
          <div style={{ height: 280, overflow: 'hidden', position: 'relative' }}>
            <img className="featured-img" src={featured.image} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,25,41,0.85) 0%, transparent 60%)' }} />
            <div style={{ position: 'absolute', top: 16, left: 16, display: 'flex', gap: 8 }}>
              <span style={{ padding: '4px 10px', background: '#c9a84c', color: '#0b1929', fontSize: 9, fontWeight: 700, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}>★ Editor's Pick</span>
              <span style={{ padding: '4px 10px', background: tagColor['Market Outlook'].bg, color: tagColor['Market Outlook'].color, border: `1px solid ${tagColor['Market Outlook'].border}`, fontSize: 9, fontWeight: 700, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{featured.tag}</span>
            </div>
          </div>
          <div style={{ padding: '28px 32px 32px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(18px,2.5vw,24px)', fontWeight: 700, lineHeight: 1.3, marginBottom: 14 }}>{featured.title}</h2>
            <p style={{ fontSize: 13, color: '#8a9bb0', lineHeight: 1.75, fontFamily: 'DM Sans, sans-serif', marginBottom: 24 }}>{featured.excerpt}</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, paddingTop: 18, borderTop: '1px solid rgba(201,168,76,0.1)' }}>
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, color: '#fff', fontFamily: 'DM Sans, sans-serif' }}>{featured.author}</p>
                <p style={{ fontSize: 11, color: '#8a9bb0', fontFamily: 'DM Sans, sans-serif', marginTop: 2 }}>{featured.firm}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 11, color: '#8a9bb0', fontFamily: 'DM Sans, sans-serif' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={10} /> {featured.readTime}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Eye size={10} /> {featured.views}</span>
                </div>
                <button style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, color: '#c9a84c', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.06em' }}>
                  READ REPORT <ArrowRight size={10} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trending Sidebar */}
        <div ref={trendingRef} style={{ flex: '0 1 300px', minWidth: 260 }}>
          <div className={`fade-up ${trendingInView ? 'in' : ''}`} style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c9a84c', fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>Trending Now</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {trending.map((t, i) => {
              const tc = tagColor[t.tag] || tagColor['Market Outlook']
              return (
                <div key={t.num}
                  className={`trend-row fade-up ${trendingInView ? 'in' : ''}`}
                  style={{ transitionDelay: `${i * 0.08}s`, padding: '18px 16px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(201,168,76,0.1)', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 24, fontWeight: 700, color: 'rgba(201,168,76,0.25)', lineHeight: 1, flexShrink: 0 }}>{t.num}</span>
                  <div>
                    <span style={{ fontSize: 9, fontWeight: 700, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', color: tc.color, display: 'block', marginBottom: 6 }}>{t.tag}</span>
                    <p style={{ fontSize: 12, fontWeight: 600, color: '#fff', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.45 }}>{t.title}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Newsletter CTA */}
          <div style={{ marginTop: 16, padding: '24px 20px', background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)' }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#fff', fontFamily: 'Playfair Display, serif', marginBottom: 8 }}>Weekly Intelligence Brief</p>
            <p style={{ fontSize: 11, color: '#8a9bb0', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.6, marginBottom: 14 }}>Get our top 5 CRE insights every Monday morning.</p>
            <input placeholder="your@email.com" style={{ width: '100%', padding: '10px 12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.2)', color: '#fff', fontSize: 12, fontFamily: 'DM Sans, sans-serif', marginBottom: 8, outline: 'none' }} />
            <button style={{ width: '100%', padding: '10px', background: '#c9a84c', color: '#0b1929', fontSize: 11, fontWeight: 700, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.06em', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#b8941e'}
              onMouseLeave={e => e.currentTarget.style.background = '#c9a84c'}>
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      {/* ── ARTICLE GRID ── */}
      <section ref={articlesRef} style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28, flexWrap: 'wrap', gap: 12 }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(20px,3vw,30px)', fontWeight: 700 }}>
            {activeCategory === 'All' ? 'Latest Insights' : activeCategory}
            <span style={{ fontSize: 14, color: '#8a9bb0', fontFamily: 'DM Sans, sans-serif', fontWeight: 400, marginLeft: 12 }}>({filtered.length})</span>
          </h2>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, color: '#c9a84c', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.06em' }}>
            VIEW ALL <ArrowRight size={10} />
          </button>
        </div>

        {filtered.length === 0 ? (
          <p style={{ color: '#8a9bb0', fontFamily: 'DM Sans, sans-serif', fontSize: 14 }}>No articles match your search.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 16 }}>
            {filtered.map((a, i) => {
              const tc = tagColor[a.tag] || tagColor['Market Outlook']
              return (
                <div key={a.title}
                  className={`art-card ${articlesInView ? 'in' : ''}`}
                  style={{ transitionDelay: `${i * 0.08}s`, background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(201,168,76,0.12)', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
                    <img className="art-img" src={a.image} alt={a.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,25,41,0.7) 0%, transparent 60%)' }} />
                    <span style={{ position: 'absolute', top: 12, left: 12, padding: '4px 10px', background: tc.bg, color: tc.color, border: `1px solid ${tc.border}`, fontSize: 9, fontWeight: 700, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{a.tag}</span>
                  </div>
                  <div style={{ padding: '20px 22px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ fontSize: 14, fontWeight: 600, color: '#fff', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.5, flex: 1, marginBottom: 18 }}>{a.title}</h3>
                    <div style={{ paddingTop: 14, borderTop: '1px solid rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <p style={{ fontSize: 11, fontWeight: 600, color: '#8a9bb0', fontFamily: 'DM Sans, sans-serif' }}>{a.author}</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 10, color: '#3a5065', fontFamily: 'DM Sans, sans-serif', marginTop: 3 }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}><Clock size={9} /> {a.readTime}</span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}><Eye size={9} /> {a.views}</span>
                          <span>{a.date}</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: 10 }}>
                        <Bookmark size={13} color="#3a5065" style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                          onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'}
                          onMouseLeave={e => e.currentTarget.style.color = '#3a5065'} />
                        <ChevronRight size={14} color="#c9a84c" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </section>
    </div>
  )
}