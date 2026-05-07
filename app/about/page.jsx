'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Building2, TrendingUp, Shield, Globe, Users, Award, ChevronRight, Star, MapPin, Quote } from 'lucide-react'

// ── DATA ──
const milestones = [
  { year: '2009', title: 'Founded in the Downturn', desc: 'Born during the financial crisis, CREPNET was built by investors who understood that the best networks form when markets demand clarity.' },
  { year: '2013', title: 'National Expansion', desc: 'Crossed 1,000 members across 24 US cities. Launched our first annual summit in Chicago — 340 attendees, 18 speakers.' },
  { year: '2017', title: 'Research Division Launch', desc: 'Introduced the CREPNET Intelligence Desk — proprietary cap rate trackers, market forecasts, and exclusive deal flow reports.' },
  { year: '2021', title: '$50B Milestone', desc: 'Member transactions crossed $50 billion in cumulative deal volume. Platform expanded to 120 markets across North America.' },
  { year: '2024', title: 'Global Reach', desc: 'Over 12,400 verified members. $94B+ in deal volume. 180+ markets. The most trusted name in commercial real estate networking.' },
]

const values = [
  { Icon: Shield, title: 'Verified Integrity', desc: 'Every member undergoes rigorous background verification. Trust is not assumed — it is earned and continuously maintained.' },
  { Icon: Globe, title: 'Market Depth', desc: 'Coverage across 180+ markets with granular data on cap rates, vacancy trends, and capital flows updated in real time.' },
  { Icon: TrendingUp, title: 'Deal-First Culture', desc: 'We exist to close transactions. Every feature, event, and piece of research is engineered to move capital efficiently.' },
  { Icon: Users, title: 'Curated Community', desc: 'Quality over quantity. We cap membership growth to maintain signal-to-noise in every conversation and connection.' },
]

const team = [
  { name: 'Dr. Alexandra Reed', title: 'Chief Executive Officer', bg: 'AR', spec: 'Capital Markets · 22 yrs', quote: 'Great real estate is made in the relationships, not the spreadsheets.' },
  { name: 'Marcus DeLeon', title: 'President & Co-Founder', bg: 'MD', spec: 'Investment Strategy · 19 yrs', quote: 'We built the network we wish had existed when we were starting out.' },
  { name: 'Sarah Kimura', title: 'Chief Research Officer', bg: 'SK', spec: 'Market Intelligence · 16 yrs', quote: 'Data without context is noise. We provide the context.' },
  { name: 'Ethan Wallace', title: 'Head of Member Experience', bg: 'EW', spec: 'Brokerage & Advisory · 14 yrs', quote: 'Every introduction we facilitate is a deal waiting to happen.' },
]

const awards = [
  { year: '2024', org: 'Commercial Observer', title: 'Top CRE Networking Platform' },
  { year: '2023', org: 'GlobeSt.', title: 'Best Real Estate Intelligence Tool' },
  { year: '2022', org: 'Bisnow', title: 'Most Influential CRE Community' },
  { year: '2021', org: 'CoStar', title: 'Deal Volume Leader — Private Networks' },
]

const stats = [
  { val: '$94B+', lbl: 'Total Deal Volume', icon: TrendingUp },
  { val: '12,400+', lbl: 'Verified Members', icon: Users },
  { val: '180+', lbl: 'Markets Covered', icon: Globe },
  { val: '15', lbl: 'Years in Operation', icon: Building2 },
]

// ── HOOK ──
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

function AnimatedCounter({ target }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView(0.3)
  const num = parseInt(target.replace(/\D/g, ''))
  useEffect(() => {
    if (!inView) return
    let n = 0
    const step = Math.ceil(num / 60)
    const t = setInterval(() => { n += step; if (n >= num) { setCount(num); clearInterval(t) } else setCount(n) }, 22)
    return () => clearInterval(t)
  }, [inView, num])
  const suffix = target.replace(/[\d,]/g, '')
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

// ── PAGE ──
export default function AboutPage() {
  const [heroRef, heroInView] = useInView(0.05)
  const [missionRef, missionInView] = useInView(0.08)
  const [timelineRef, timelineInView] = useInView(0.05)
  const [valuesRef, valuesInView] = useInView(0.05)
  const [teamRef, teamInView] = useInView(0.05)
  const [awardsRef, awardsInView] = useInView(0.1)
  const [ctaRef, ctaInView] = useInView(0.1)

  return (
    <div style={{ background: '#0b1929', minHeight: '100vh', color: '#fff', fontFamily: 'Georgia, serif', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }

        :root {
          --gold: #c9a84c;
          --gold-dim: rgba(201,168,76,0.12);
          --gold-border: rgba(201,168,76,0.22);
          --navy: #0b1929;
          --navy-2: #0f2137;
          --slate: #8a9bb0;
          --cream: #f5f0e6;
        }

        /* Animations */
        .fade-up   { opacity:0; transform:translateY(32px); transition:opacity .8s ease, transform .8s ease; }
        .fade-up.in{ opacity:1; transform:none; }

        .fade-left   { opacity:0; transform:translateX(-40px); transition:opacity .85s ease, transform .85s ease; }
        .fade-left.in{ opacity:1; transform:none; }

        .fade-right   { opacity:0; transform:translateX(40px); transition:opacity .85s ease, transform .85s ease; }
        .fade-right.in{ opacity:1; transform:none; }

        .scale-in   { opacity:0; transform:scale(.93); transition:opacity .75s ease, transform .75s ease; }
        .scale-in.in{ opacity:1; transform:none; }

        /* Hero */
        .hero-bg { position:absolute; inset:0; background:
          linear-gradient(105deg, rgba(11,25,41,.97) 0%, rgba(11,25,41,.85) 55%, rgba(11,25,41,.55) 100%); }

        /* Dot grid */
        .dot-grid { background-image:radial-gradient(circle, rgba(201,168,76,.11) 1px, transparent 1px); background-size:28px 28px; }

        /* Diagonal band */
        .diag-band { position:absolute; top:0; right:-10%; width:52%; height:100%;
          background:linear-gradient(160deg, transparent 40%, rgba(201,168,76,.04) 100%);
          clip-path:polygon(20% 0,100% 0,100% 100%,0 100%); pointer-events:none; }

        /* Gold rule */
        .gold-rule { height:1px; background:linear-gradient(90deg,#c9a84c 0%,rgba(201,168,76,0) 100%); }

        /* Timeline */
        .timeline-line { position:absolute; left:50%; top:0; bottom:0; width:1px;
          background:linear-gradient(to bottom,transparent,rgba(201,168,76,.3) 10%,rgba(201,168,76,.3) 90%,transparent); }
        @media(max-width:768px){ .timeline-line{ left:20px; } }

        .tl-dot { position:absolute; left:50%; top:28px; transform:translateX(-50%);
          width:12px; height:12px; background:#c9a84c; border:2px solid #0b1929;
          box-shadow:0 0 0 4px rgba(201,168,76,.2); }
        @media(max-width:768px){ .tl-dot{ left:20px; } }

        .tl-card { transition:border-color .2s, box-shadow .2s; }
        .tl-card:hover { border-color:rgba(201,168,76,.45) !important; box-shadow:0 12px 40px rgba(0,0,0,.3); }

        /* Value cards */
        .val-card { transition:background .25s, border-color .25s, transform .25s; }
        .val-card:hover { background:rgba(201,168,76,.07) !important; border-color:rgba(201,168,76,.4) !important; transform:translateY(-4px); }

        /* Team cards */
        .team-card { transition:border-color .25s, box-shadow .25s, transform .25s; overflow:hidden; }
        .team-card:hover { border-color:rgba(201,168,76,.45) !important; box-shadow:0 20px 48px rgba(0,0,0,.4); transform:translateY(-5px); }
        .team-card:hover .tc-reveal { max-height:80px !important; opacity:1 !important; }
        .tc-reveal { max-height:0; opacity:0; transition:max-height .4s ease, opacity .4s ease; overflow:hidden; }

        /* Buttons */
        .btn-gold { transition:background .22s, transform .18s, box-shadow .22s; cursor:pointer; border:none; }
        .btn-gold:hover { background:#b8941e !important; transform:translateY(-2px); box-shadow:0 8px 24px rgba(201,168,76,.35); }
        .btn-outline-gold { transition:all .22s; cursor:pointer; }
        .btn-outline-gold:hover { background:rgba(201,168,76,.1) !important; border-color:rgba(201,168,76,.6) !important; transform:translateY(-1px); }

        /* Awards */
        .award-row { transition:background .2s, border-color .2s, padding-left .2s; }
        .award-row:hover { background:rgba(201,168,76,.05) !important; border-color:rgba(201,168,76,.35) !important; padding-left:20px !important; }

        @media(max-width:768px){
          .hero-cols{ flex-direction:column !important; }
          .hero-img-wrap{ width:100% !important; height:280px !important; }
          .mission-cols{ flex-direction:column !important; }
          .team-grid{ grid-template-columns:1fr 1fr !important; }
        }
        @media(max-width:500px){
          .team-grid{ grid-template-columns:1fr !important; }
        }
      `}</style>

      {/* ══════════════════ HERO ══════════════════ */}
      <section ref={heroRef} style={{ position:'relative', overflow:'hidden', minHeight:'92vh', display:'flex', alignItems:'center' }}>
        {/* BG image */}
        <div style={{ position:'absolute', inset:0, zIndex:0 }}>
          <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=85"
            alt="" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 30%', display:'block' }} />
          <div className="hero-bg" />
          <div className="dot-grid" style={{ position:'absolute', inset:0, opacity:.55 }} />
          <div className="diag-band" />
        </div>

        <div style={{ position:'relative', zIndex:1, maxWidth:1280, margin:'0 auto', padding:'80px 24px', width:'100%' }}>
          <div className="hero-cols" style={{ display:'flex', alignItems:'center', gap:72 }}>
            {/* Text */}
            <div style={{ flex:'1 1 480px', minWidth:0 }}>
              <div className={`fade-up ${heroInView?'in':''}`} style={{ transitionDelay:'0s' }}>
                <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 14px', border:'1px solid rgba(201,168,76,.4)', color:'#c9a84c', background:'rgba(201,168,76,.06)', fontSize:10, letterSpacing:'.14em', textTransform:'uppercase', fontFamily:"'DM Sans',sans-serif", fontWeight:700, marginBottom:28 }}>
                  <Building2 size={10} /> Our Story
                </div>
              </div>

              <div className={`fade-up ${heroInView?'in':''}`} style={{ transitionDelay:'.12s' }}>
                <h1 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:'clamp(44px,6.5vw,88px)', fontWeight:600, lineHeight:1.0, letterSpacing:'-.01em' }}>
                  Built by<br />
                  <em style={{ color:'#c9a84c', fontStyle:'italic' }}>Dealmakers,</em><br />
                  For Dealmakers
                </h1>
              </div>

              <div className={`fade-up ${heroInView?'in':''}`} style={{ transitionDelay:'.22s' }}>
                <p style={{ marginTop:24, maxWidth:500, fontSize:16, lineHeight:1.85, color:'#8a9bb0', fontFamily:"'DM Sans',sans-serif", fontWeight:300 }}>
                  CREPNET was founded in 2009 by a team of commercial real estate veterans who believed the industry deserved better than cold calls, broker lists, and luck. Today we are the most trusted private network in CRE — 12,400 members, 180+ markets, $94 billion in verified deal volume.
                </p>
              </div>

              <div className={`fade-up ${heroInView?'in':''}`} style={{ transitionDelay:'.32s', display:'flex', gap:12, marginTop:40, flexWrap:'wrap' }}>
                <button className="btn-gold" style={{ display:'flex', alignItems:'center', gap:8, padding:'15px 34px', background:'#c9a84c', color:'#0b1929', fontSize:13, fontWeight:700, fontFamily:"'DM Sans',sans-serif", letterSpacing:'.05em' }}>
                  Apply for Membership <ArrowRight size={14} />
                </button>
                <button className="btn-outline-gold" style={{ display:'flex', alignItems:'center', gap:8, padding:'15px 26px', background:'transparent', color:'#c9a84c', fontSize:13, fontFamily:"'DM Sans',sans-serif", border:'1px solid rgba(201,168,76,.35)' }}>
                  Our Mission <ChevronRight size={14} />
                </button>
              </div>

              {/* Mini stats */}
              <div className={`fade-up ${heroInView?'in':''}`} style={{ transitionDelay:'.44s', display:'flex', flexWrap:'wrap', gap:36, marginTop:56, paddingTop:32, borderTop:'1px solid rgba(201,168,76,.12)' }}>
                {[['$94B+','Deal Volume'],['12,400+','Members'],['15 yrs','In Operation']].map(([v,l])=>(
                  <div key={l}>
                    <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(24px,3vw,34px)', fontWeight:700, color:'#fff' }}>{v}</p>
                    <p style={{ fontSize:10, letterSpacing:'.1em', textTransform:'uppercase', color:'#8a9bb0', fontFamily:"'DM Sans',sans-serif", marginTop:4 }}>{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — stacked images */}
            <div className={`fade-right hero-img-wrap ${heroInView?'in':''}`} style={{ flex:'0 1 420px', minWidth:280, position:'relative', height:560 }}>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=85"
                alt="CRE team" style={{ width:'85%', height:'72%', objectFit:'cover', display:'block', position:'absolute', top:0, right:0 }} />
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80"
                alt="Skyline" style={{ width:'62%', height:'44%', objectFit:'cover', display:'block', position:'absolute', bottom:0, left:0, border:'4px solid #0b1929' }} />
              {/* Gold frame */}
              <div style={{ position:'absolute', bottom:-16, right:-16, width:'50%', height:'50%', border:'2px solid rgba(201,168,76,.28)', pointerEvents:'none' }} />
              {/* Badge */}
              <div style={{ position:'absolute', top:24, left:-24, background:'#0b1929', border:'1px solid rgba(201,168,76,.35)', padding:'14px 18px', boxShadow:'0 16px 48px rgba(0,0,0,.6)' }}>
                <p style={{ fontSize:9, color:'#8a9bb0', fontFamily:"'DM Sans',sans-serif", textTransform:'uppercase', letterSpacing:'.12em' }}>Founded</p>
                <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:28, fontWeight:700, color:'#c9a84c', marginTop:2, lineHeight:1 }}>2009</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ ANIMATED STATS ══════════════════ */}
      <section style={{ background:'#0f2137', borderTop:'1px solid rgba(201,168,76,.1)', borderBottom:'1px solid rgba(201,168,76,.1)' }}>
        <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))' }}>
          {stats.map(({ val, lbl, icon:Icon }, i) => (
            <div key={lbl} style={{ padding:'44px 32px', display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', borderRight: i < stats.length-1 ? '1px solid rgba(201,168,76,.08)' : 'none' }}>
              <div style={{ width:44, height:44, background:'rgba(201,168,76,.1)', border:'1px solid rgba(201,168,76,.2)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:16 }}>
                <Icon size={18} color="#c9a84c" strokeWidth={1.5} />
              </div>
              <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(30px,4vw,48px)', fontWeight:700, color:'#fff' }}>
                <AnimatedCounter target={val} />
              </p>
              <p style={{ fontSize:10, letterSpacing:'.12em', textTransform:'uppercase', color:'#8a9bb0', fontFamily:"'DM Sans',sans-serif", marginTop:8 }}>{lbl}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════ MISSION ══════════════════ */}
      <section ref={missionRef} style={{ maxWidth:1280, margin:'0 auto', padding:'96px 24px' }}>
        <div className="mission-cols" style={{ display:'flex', gap:72, alignItems:'center', flexWrap:'wrap' }}>
          {/* Image */}
          <div className={`scale-in ${missionInView?'in':''}`} style={{ flex:'0 1 480px', minWidth:280, position:'relative' }}>
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85"
              alt="Mission" style={{ width:'100%', aspectRatio:'4/3', objectFit:'cover', display:'block' }} />
            {/* Overlay pull-quote */}
            <div style={{ position:'absolute', bottom:-28, right:-28, background:'#c9a84c', padding:'22px 26px', maxWidth:260 }}>
              <Quote size={18} color="#0b1929" style={{ marginBottom:8 }} />
              <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:17, fontWeight:600, color:'#0b1929', lineHeight:1.5 }}>
                "We built the network we wish had existed when we were starting out."
              </p>
              <p style={{ fontSize:10, fontFamily:"'DM Sans',sans-serif", fontWeight:700, color:'rgba(11,25,41,.7)', marginTop:10, letterSpacing:'.08em', textTransform:'uppercase' }}>— Marcus DeLeon, Co-Founder</p>
            </div>
          </div>

          {/* Text */}
          <div style={{ flex:'1 1 380px', minWidth:0 }}>
            <div className={`fade-up ${missionInView?'in':''}`} style={{ transitionDelay:'0s' }}>
              <p style={{ fontSize:10, letterSpacing:'.14em', textTransform:'uppercase', color:'#c9a84c', fontFamily:"'DM Sans',sans-serif", fontWeight:700, marginBottom:14 }}>Our Mission</p>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(32px,4.5vw,56px)', fontWeight:600, lineHeight:1.08, marginBottom:24 }}>
                Turning Connections<br /><em style={{ color:'#c9a84c' }}>Into Closed Deals</em>
              </h2>
            </div>
            <div className={`fade-up ${missionInView?'in':''}`} style={{ transitionDelay:'.12s' }}>
              <p style={{ fontSize:15, color:'#8a9bb0', lineHeight:1.88, fontFamily:"'DM Sans',sans-serif", fontWeight:300, marginBottom:20 }}>
                Commercial real estate has always been a relationship business. But for too long, those relationships depended entirely on who you happened to meet at a conference or whose desk you sat next to early in your career.
              </p>
              <p style={{ fontSize:15, color:'#8a9bb0', lineHeight:1.88, fontFamily:"'DM Sans',sans-serif", fontWeight:300, marginBottom:32 }}>
                CREPNET changes that equation. We systematically identify and connect the right people — vetted investors, experienced brokers, active developers — and give them the intelligence, tools, and forums they need to transact with confidence.
              </p>
            </div>
            <div className={`fade-up ${missionInView?'in':''}`} style={{ transitionDelay:'.24s' }}>
              <div className="gold-rule" style={{ marginBottom:28 }} />
              {['Curated membership — every applicant reviewed by our team', 'Proprietary market data across 180+ US metros', 'Live deal rooms, co-investment matching & partner introductions'].map(item=>(
                <div key={item} style={{ display:'flex', alignItems:'flex-start', gap:12, marginBottom:14 }}>
                  <Star size={12} color="#c9a84c" fill="#c9a84c" style={{ marginTop:3, flexShrink:0 }} />
                  <p style={{ fontSize:13, color:'#8a9bb0', fontFamily:"'DM Sans',sans-serif", lineHeight:1.6 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ TIMELINE ══════════════════ */}
      <section ref={timelineRef} style={{ background:'#0f2137', padding:'96px 0', position:'relative' }}>
        <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px' }}>
          <div className={`fade-up ${timelineInView?'in':''}`} style={{ textAlign:'center', marginBottom:72 }}>
            <p style={{ fontSize:10, letterSpacing:'.14em', textTransform:'uppercase', color:'#c9a84c', fontFamily:"'DM Sans',sans-serif", fontWeight:700, marginBottom:14 }}>Our Journey</p>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(30px,4.5vw,56px)', fontWeight:600, lineHeight:1.08 }}>
              15 Years of <em style={{ color:'#c9a84c' }}>Building Trust</em>
            </h2>
          </div>

          <div style={{ position:'relative', paddingBottom:40 }}>
            <div className="timeline-line" />
            {milestones.map((m, i) => (
              <div key={m.year}
                className={`fade-up ${timelineInView?'in':''}`}
                style={{ transitionDelay:`${i*.12}s`, display:'flex', justifyContent: i%2===0 ? 'flex-end' : 'flex-start', marginBottom:40, paddingBottom:0 }}>
                <div className="tl-dot" />
                <div className={`tl-card`}
                  style={{ width:'calc(50% - 36px)', marginRight: i%2===0 ? 0 : 'auto', marginLeft: i%2===0 ? 'auto' : 0, background:'rgba(255,255,255,.025)', border:'1px solid rgba(201,168,76,.14)', padding:'28px 30px' }}>
                  <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:36, fontWeight:700, color:'rgba(201,168,76,.25)', lineHeight:1, marginBottom:8 }}>{m.year}</p>
                  <h3 style={{ fontSize:16, fontWeight:700, color:'#fff', fontFamily:"'DM Sans',sans-serif", marginBottom:10 }}>{m.title}</h3>
                  <p style={{ fontSize:13, color:'#8a9bb0', fontFamily:"'DM Sans',sans-serif", lineHeight:1.7 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ VALUES ══════════════════ */}
      <section ref={valuesRef} style={{ maxWidth:1280, margin:'0 auto', padding:'96px 24px' }}>
        <div className={`fade-up ${valuesInView?'in':''}`} style={{ textAlign:'center', marginBottom:56 }}>
          <p style={{ fontSize:10, letterSpacing:'.14em', textTransform:'uppercase', color:'#c9a84c', fontFamily:"'DM Sans',sans-serif", fontWeight:700, marginBottom:14 }}>What We Stand For</p>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(30px,4.5vw,56px)', fontWeight:600, lineHeight:1.08 }}>
            The <em style={{ color:'#c9a84c' }}>Principles</em> We Build On
          </h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:16 }}>
          {values.map(({ Icon, title, desc }, i) => (
            <div key={title}
              className={`val-card fade-up ${valuesInView?'in':''}`}
              style={{ transitionDelay:`${i*.09}s`, padding:'36px 30px', background:'rgba(255,255,255,.025)', border:'1px solid rgba(201,168,76,.12)' }}>
              <div style={{ width:52, height:52, background:'rgba(201,168,76,.1)', border:'1px solid rgba(201,168,76,.22)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:22 }}>
                <Icon size={20} color="#c9a84c" strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize:17, fontWeight:700, color:'#fff', fontFamily:"'Cormorant Garamond',serif", marginBottom:12 }}>{title}</h3>
              <div style={{ width:32, height:1.5, background:'#c9a84c', marginBottom:16 }} />
              <p style={{ fontSize:13, color:'#8a9bb0', fontFamily:"'DM Sans',sans-serif", lineHeight:1.75 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════ TEAM ══════════════════ */}
      <section ref={teamRef} style={{ background:'var(--cream, #f5f0e6)', padding:'96px 0' }}>
        <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px' }}>
          <div className={`fade-up ${teamInView?'in':''}`} style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:16, marginBottom:52 }}>
            <div>
              <p style={{ fontSize:10, letterSpacing:'.14em', textTransform:'uppercase', color:'#c9a84c', fontFamily:"'DM Sans',sans-serif", fontWeight:700, marginBottom:14 }}>The People</p>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(30px,4.5vw,52px)', fontWeight:600, lineHeight:1.08, color:'#0b1929' }}>
                Leadership <em style={{ color:'#c9a84c' }}>Team</em>
              </h2>
            </div>
            <p style={{ fontSize:14, color:'#6a7a8a', fontFamily:"'DM Sans',sans-serif", maxWidth:380, lineHeight:1.75 }}>Veteran operators who have collectively brokered, acquired, and managed billions in commercial real estate assets across every major market.</p>
          </div>

          <div className="team-grid" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16 }}>
            {team.map((m, i) => (
              <div key={m.name}
                className={`team-card fade-up ${teamInView?'in':''}`}
                style={{ transitionDelay:`${i*.1}s`, background:'#fff', border:'1px solid rgba(201,168,76,.18)', cursor:'default' }}>
                {/* Color block avatar */}
                <div style={{ height:200, background:`linear-gradient(135deg, #0b1929 0%, #1a3a5c 100%)`, position:'relative', display:'flex', alignItems:'flex-end', justifyContent:'flex-start', padding:'20px 24px' }}>
                  <div className="dot-grid" style={{ position:'absolute', inset:0, opacity:.6 }} />
                  <div style={{ position:'absolute', top:20, right:20, width:64, height:64, background:'rgba(201,168,76,.15)', border:'1px solid rgba(201,168,76,.3)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, fontWeight:700, color:'#c9a84c', fontFamily:"'DM Sans',sans-serif" }}>{m.bg}</div>
                  {/* Gold accent bar */}
                  <div style={{ position:'absolute', bottom:0, left:0, right:0, height:3, background:'#c9a84c' }} />
                </div>

                <div style={{ padding:'22px 24px 26px' }}>
                  <p style={{ fontSize:16, fontWeight:700, color:'#0b1929', fontFamily:"'Cormorant Garamond',serif" }}>{m.name}</p>
                  <p style={{ fontSize:12, color:'#c9a84c', fontFamily:"'DM Sans',sans-serif", marginTop:3, fontWeight:600 }}>{m.title}</p>
                  <p style={{ fontSize:11, color:'#8a9bb0', fontFamily:"'DM Sans',sans-serif", marginTop:2 }}>{m.spec}</p>
                  {/* Hover reveal quote */}
                  <div className="tc-reveal" style={{ marginTop:0 }}>
                    <div style={{ marginTop:16, paddingTop:16, borderTop:'1px solid rgba(201,168,76,.2)' }}>
                      <Quote size={11} color="#c9a84c" style={{ marginBottom:6 }} />
                      <p style={{ fontSize:12, color:'#5a6a7a', fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic', lineHeight:1.6 }}>"{m.quote}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ AWARDS ══════════════════ */}
      <section ref={awardsRef} style={{ maxWidth:1280, margin:'0 auto', padding:'96px 24px' }}>
        <div style={{ display:'flex', gap:64, flexWrap:'wrap', alignItems:'flex-start' }}>
          <div style={{ flex:'0 1 360px' }}>
            <div className={`fade-up ${awardsInView?'in':''}`}>
              <p style={{ fontSize:10, letterSpacing:'.14em', textTransform:'uppercase', color:'#c9a84c', fontFamily:"'DM Sans',sans-serif", fontWeight:700, marginBottom:14 }}>Recognition</p>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(28px,4vw,48px)', fontWeight:600, lineHeight:1.1, marginBottom:24 }}>
                Industry <em style={{ color:'#c9a84c' }}>Awards &<br />Recognition</em>
              </h2>
              <p style={{ fontSize:14, color:'#8a9bb0', fontFamily:"'DM Sans',sans-serif", lineHeight:1.8 }}>Recognized by the most respected voices in commercial real estate for platform integrity, market impact, and member value.</p>
            </div>
            {/* Large award number */}
            <div className={`fade-up ${awardsInView?'in':''}`} style={{ transitionDelay:'.18s', marginTop:48, padding:'32px', background:'rgba(201,168,76,.06)', border:'1px solid rgba(201,168,76,.18)' }}>
              <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:72, fontWeight:700, color:'#c9a84c', lineHeight:1 }}>4×</p>
              <p style={{ fontSize:12, color:'#8a9bb0', fontFamily:"'DM Sans',sans-serif", marginTop:8, lineHeight:1.65 }}>Industry award winner — named the most trusted CRE network platform four years running.</p>
            </div>
          </div>

          <div style={{ flex:'1 1 340px' }}>
            <div style={{ display:'flex', flexDirection:'column', gap:4 }}>
              {awards.map((a, i) => (
                <div key={a.title}
                  className={`award-row fade-up ${awardsInView?'in':''}`}
                  style={{ transitionDelay:`${i*.1}s`, padding:'22px 16px', border:'1px solid rgba(201,168,76,.1)', background:'rgba(255,255,255,.02)', display:'flex', gap:20, alignItems:'center', transition:'all .22s' }}>
                  <div style={{ textAlign:'center', minWidth:44 }}>
                    <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:26, fontWeight:700, color:'rgba(201,168,76,.4)', lineHeight:1 }}>{a.year}</p>
                  </div>
                  <div style={{ flex:1 }}>
                    <p style={{ fontSize:11, color:'#c9a84c', fontFamily:"'DM Sans',sans-serif", fontWeight:600, letterSpacing:'.06em', textTransform:'uppercase', marginBottom:4 }}>{a.org}</p>
                    <p style={{ fontSize:14, color:'#fff', fontFamily:"'Cormorant Garamond',serif", fontWeight:600 }}>{a.title}</p>
                  </div>
                  <Award size={16} color="rgba(201,168,76,.4)" />
                </div>
              ))}
            </div>

            {/* Press logos placeholder */}
            <div className={`fade-up ${awardsInView?'in':''}`} style={{ transitionDelay:'.44s', marginTop:24, padding:'20px 16px', border:'1px solid rgba(201,168,76,.1)', background:'rgba(255,255,255,.015)', display:'flex', gap:24, alignItems:'center', flexWrap:'wrap' }}>
              <p style={{ fontSize:10, letterSpacing:'.1em', textTransform:'uppercase', color:'#3a5065', fontFamily:"'DM Sans',sans-serif", fontWeight:600, flexShrink:0 }}>As seen in</p>
              {['CoStar','GlobeSt.','Bisnow','C.O.','RealPage'].map(p=>(
                <span key={p} style={{ fontSize:12, fontWeight:700, color:'#4a6070', fontFamily:"'DM Sans',sans-serif", letterSpacing:'.04em' }}>{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ TESTIMONIAL BAND ══════════════════ */}
      <section style={{ background:'#0f2137', borderTop:'1px solid rgba(201,168,76,.1)', borderBottom:'1px solid rgba(201,168,76,.1)', padding:'72px 0', position:'relative', overflow:'hidden' }}>
        <div className="dot-grid" style={{ position:'absolute', inset:0, opacity:.4, pointerEvents:'none' }} />
        <div style={{ position:'relative', maxWidth:860, margin:'0 auto', padding:'0 24px', textAlign:'center' }}>
          <Quote size={32} color="rgba(201,168,76,.3)" style={{ margin:'0 auto 24px' }} />
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(20px,3.5vw,34px)', fontWeight:600, lineHeight:1.45, color:'#fff', marginBottom:32 }}>
            "CREPNET is the only platform where I've walked in cold and walked out with a co-GP on a <span style={{ color:'#c9a84c' }}>$28 million industrial acquisition</span>. The quality of introductions is unlike anything else in the market."
          </p>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:16 }}>
            <div style={{ width:44, height:44, background:'rgba(201,168,76,.15)', border:'1px solid rgba(201,168,76,.3)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:12, fontWeight:700, color:'#c9a84c', fontFamily:"'DM Sans',sans-serif" }}>CM</div>
            <div style={{ textAlign:'left' }}>
              <p style={{ fontSize:13, fontWeight:600, color:'#fff', fontFamily:"'DM Sans',sans-serif" }}>Carlos Mendez</p>
              <p style={{ fontSize:11, color:'#8a9bb0', fontFamily:"'DM Sans',sans-serif" }}>Asset Manager · Vantage CRE Group · Miami, FL</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA ══════════════════ */}
      <section ref={ctaRef} style={{ maxWidth:1280, margin:'0 auto', padding:'96px 24px 100px' }}>
        <div className={`fade-up ${ctaInView?'in':''}`} style={{ position:'relative', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:36, padding:'64px 56px', background:'rgba(201,168,76,.05)', border:'1px solid rgba(201,168,76,.22)' }}>
          <div className="dot-grid" style={{ position:'absolute', inset:0, opacity:.4, pointerEvents:'none' }} />
          <div style={{ position:'absolute', top:-100, right:-100, width:400, height:400, border:'100px solid rgba(201,168,76,.04)', borderRadius:'50%', pointerEvents:'none' }} />
          <div style={{ position:'relative' }}>
            <p style={{ fontSize:10, letterSpacing:'.14em', textTransform:'uppercase', color:'#c9a84c', fontFamily:"'DM Sans',sans-serif", fontWeight:700, marginBottom:14 }}>Join CREPNET</p>
            <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(28px,4vw,52px)', fontWeight:600, lineHeight:1.1 }}>
              Become Part of the<br /><em style={{ color:'#c9a84c' }}>Inner Circle</em>
            </h3>
            <p style={{ fontSize:14, color:'#8a9bb0', fontFamily:"'DM Sans',sans-serif", marginTop:14, maxWidth:460, lineHeight:1.8 }}>
              Membership is selective. Applications are reviewed by our team within 5 business days. Join 12,400+ professionals who have made CREPNET the cornerstone of their deal strategy.
            </p>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:12, position:'relative', flexShrink:0 }}>
            <button className="btn-gold" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8, padding:'17px 40px', background:'#c9a84c', color:'#0b1929', fontSize:13, fontWeight:700, fontFamily:"'DM Sans',sans-serif", letterSpacing:'.05em' }}>
              Apply for Membership <ArrowRight size={14} />
            </button>
            <button className="btn-outline-gold" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8, padding:'15px 32px', background:'transparent', color:'#c9a84c', fontSize:12, fontFamily:"'DM Sans',sans-serif", border:'1px solid rgba(201,168,76,.35)' }}>
              Schedule a Discovery Call
            </button>
            <p style={{ fontSize:10, color:'#3a5065', fontFamily:"'DM Sans',sans-serif", textAlign:'center', letterSpacing:'.06em', textTransform:'uppercase' }}>
              Limited spots available each quarter
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}