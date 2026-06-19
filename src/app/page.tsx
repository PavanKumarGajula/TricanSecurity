import type { Metadata } from 'next';
import Link from 'next/link';
import VideoThumbs from '@/components/VideoThumbs';
import StatIcons from '@/components/StatIcons';
import HomePageClient from '@/components/HomePageClient';

export const metadata: Metadata = {
  title: 'Trican Security Inc. — Maryland Security Systems',
  description:
    'Trican Security is a locally owned Maryland integrator serving businesses and government agencies across the state, the Baltimore–Washington corridor, and Virginia.',
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="vhero">
        <video id="vhero-bg-vid" className="vhero-video" src="/videos/evangel.mp4" autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
        <div className="vhero-overlay" aria-hidden="true" />
        <div className="vhero-wrap">
          <div className="vhero-inner">
            <div className="vhero-content">
              <div className="vhero-eyebrow">
                <span className="vhero-dot dot-pulse-green" aria-hidden="true" />
                <span className="vhero-eyebrow-text">Maryland's Trusted Security Integrator</span>
              </div>
              <h1 className="hero-headline vhero-h1">Protecting what<br />matters most.</h1>
              <p className="vhero-body">Locally owned. Government-certified. Serving businesses and agencies across Maryland, Baltimore–Washington, and Virginia.</p>
              <div className="vhero-ctas">
                <Link href="/contact" className="vhero-cta-primary">
                  Get a free assessment
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <Link href="/work" className="vhero-cta-ghost">See our work</Link>
              </div>
              <div className="vhero-proof">
                <div className="vhero-badges">
                  <span className="vhero-badge">MBE Certified</span>
                  <span className="vhero-badge">NICET Fire</span>
                  <span className="vhero-badge">FIPS 201</span>
                </div>
                <span className="vhero-proof-sep" aria-hidden="true" />
                <p className="vhero-proof-text">Licensed &amp; insured · MD, DC &amp; VA</p>
              </div>
            </div>
          </div>
          <div className="vhero-bottom">
            <div className="vhero-bottom-left">
              <p className="vhero-tagline">Every layer of protection. One team.</p>
            </div>
            <VideoThumbs className="vhero-thumbs-cards" />
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="bg-canvas wwd-band">
        <div className="page-container">
          <div className="wwd-head fade-up">
            <p className="eyebrow">What we do</p>
            <h2 className="wwd-h2">Every layer, designed to work together.</h2>
          </div>
          <div className="wwd-timeline fade-up">
            <span className="wwd-t-dot" /><span className="wwd-t-line" />
            <span className="wwd-t-lbl">Every layer of protection</span>
            <span className="wwd-t-dot" /><span className="wwd-t-line" />
            <span className="wwd-t-lbl">One team</span>
            <span className="wwd-t-dot" />
          </div>
          <div className="wwd-row-clip">
            <div className="wwd-cards">
              {[
                { href: '/services#surveillance',   cls: 'wwd-c-surv',    img: '/images/wwd-surveillance.jpg',    contain: false, title: 'Surveillance',       sub: 'Cameras chosen for your space',    desc: 'Video analytics, license plate recognition, thermal and radar options, all viewable from your phone.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="13" height="9" rx="2" /><path d="M15 9l7-3v9l-7-3" /><circle cx="7" cy="10.5" r="1.6" /></svg> },
                { href: '/services#access-control', cls: 'wwd-c-access',  img: '/images/wwd-access.png',          contain: true,  title: 'Access control',     sub: 'The right people in',              desc: 'Badge access, smart cards, biometrics, intercoms, and touch-free entry, with a log of every door event.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="12" height="18" rx="2" /><circle cx="10" cy="9" r="2.4" /><path d="M7 17c.6-2 5.4-2 6 0" /><path d="M20 9v6" /></svg> },
                { href: '/services#alarms',          cls: 'wwd-c-fire',   img: '/images/wwd-fire.png',            contain: true,  title: 'Alarms & fire',      sub: 'Protection around the clock',      desc: 'Intrusion detection with video-verified alarms and 24/7 monitoring, plus NICET-certified fire alarm systems.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 16H3z" /><path d="M12 10v4" /><circle cx="12" cy="16.6" r=".6" /></svg> },
                { href: '/services#network',         cls: 'wwd-c-network', img: '/images/panel.png',              contain: true,  title: 'Network & cabling',  sub: 'The backbone behind every system', desc: 'Every camera, badge reader, and alarm panel runs on your network, so we build that too: structured cabling, racks, and WiFi.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="7" rx="1.5" /><rect x="3" y="13" width="18" height="7" rx="1.5" /><circle cx="7" cy="7.5" r=".7" /><circle cx="7" cy="16.5" r=".7" /></svg> },
                { href: '/services#rentals',         cls: 'wwd-c-rentals', img: '/images/mobile_surveillance.png', contain: true, title: 'Trailer rentals',    sub: 'Deployed in 10 minutes',           desc: 'Rugged, solar powered, and self contained, with live streaming over cellular. Short and long term rentals.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="15" height="9" rx="1.5" /><circle cx="7" cy="18.5" r="1.8" /><circle cx="14" cy="18.5" r="1.8" /><path d="M17 11h5" /></svg> },
                { href: '/services#alarms',          cls: 'wwd-c-pers',   img: '/images/wearable_pendant.png',    contain: true,  title: 'Emergency response', sub: 'Protecting people in the field',   desc: "Personal emergency response with two-way voice and GPS, proven protecting Queen Anne's County health workers.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.4" /><path d="M5 20c.8-4 13.2-4 14 0" /><path d="M19 4l2 2M21 4l-2 2" /></svg> },
              ].map((card, i, arr) => (
                <div key={card.title} className="wwd-card-wrap">
                  {i < arr.length - 1 && (
                    <span className="wwd-conn" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h3l2-5 3 10 2-5h6" /></svg>
                    </span>
                  )}
                  <Link className={`wwd-card ${card.cls} fade-up`} href={card.href}>
                    <div className="wwd-card-img-wrap">
                      <img src={card.img} alt="" className={`wwd-card-img${card.contain ? ' wwd-card-img--contain' : ''}`} />
                    </div>
                    <div className="wwd-card-body">
                      <div className="wwd-card-header">
                        <span className="wwd-icon-circle">{card.icon}</span>
                        <p className="wwd-card-title">{card.title}</p>
                      </div>
                      <p className="wwd-card-sub">{card.sub}</p>
                      <p className="wwd-card-desc">{card.desc}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="wwd-arrows">
            <button className="wwd-arrow wwd-arrow-prev" aria-label="Previous service" disabled>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
            </button>
            <span className="wwd-arrow-label">1 / 6</span>
            <button className="wwd-arrow wwd-arrow-next" aria-label="Next service">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── Why Trican ── */}
      <section className="bg-canvas why-band">
        <div className="page-container">
          <div className="why-grid">
            <div className="why-area-badge fade-up">
              <span className="why-badge"><span className="why-badge-dot" />Why Trican</span>
            </div>
            <h2 className="why-area-head fade-up">
              One client saved over <span className="why-stat">$30,000</span> vs. the national companies.
            </h2>
            <div className="why-area-widget fade-up">
              <div className="why-widget">
                <p className="why-widget-lbl">System status</p>
                <p className="why-widget-val"><span className="why-widget-dot" />Armed</p>
                <div className="why-testimonial">
                  <div className="why-stars" aria-label="5 out of 5 stars">
                    {[0,1,2,3,4].map(i => (
                      <svg key={i} viewBox="0 0 16 16" style={{ fill: 'var(--color-warning-500)' }} aria-hidden="true">
                        <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.5l-3.71 1.95.71-4.13L2 5.5l4.15-.75L8 1z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="why-quote">&ldquo;They came in, listened to what we actually needed, and delivered exactly that — cleaner install, better coverage, under budget.&rdquo;</blockquote>
                  <div className="why-quote-author">
                    <span className="why-quote-avatar">JM</span>
                    <div>
                      <p className="why-quote-name">J. Morris</p>
                      <p className="why-quote-role">Operations Manager, RDC</p>
                    </div>
                  </div>
                </div>
                <div className="why-widget-row">
                  <span className="why-widget-lbl">Monitoring &amp; response</span>
                  <span className="why-widget-num">24/7</span>
                </div>
              </div>
            </div>
            <div className="why-col-mid fade-up">
              <p className="why-body">That client also ended up with more features than before. Our model is simple: we listen first, then design around the risks a site actually has. If a piece of equipment won't earn its keep, it doesn't go in the quote.</p>
              <div className="why-cta-row">
                <Link href="/contact" className="why-pill">Get a free assessment</Link>
                <Link href="/contact" className="why-circle" aria-label="Get a free assessment">↗</Link>
              </div>
              <hr className="why-hr" />
              <div className="why-feature">
                <span className="why-feat-icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="14" width="24" height="24" rx="3" /><rect x="16" y="8" width="24" height="24" rx="3" /></svg>
                </span>
                <div>
                  <h3 className="why-feat-title">One team, end to end</h3>
                  <p className="why-feat-desc">Installers and software engineers together — most installers stop where the wiring ends. We don't.</p>
                </div>
              </div>
              <div className="why-feature">
                <span className="why-feat-icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="10" y="10" width="28" height="28" rx="3" transform="rotate(45 24 24)" /><circle cx="24" cy="24" r="3" /></svg>
                </span>
                <div>
                  <h3 className="why-feat-title">Built around your budget</h3>
                  <p className="why-feat-desc">We design around your objectives and your budget — then we stand behind the work.</p>
                </div>
              </div>
            </div>
            <div className="why-col-photo fade-up">
              <div className="why-photo">
                <img src="/images/why_trican.png" alt="Trican security installation" className="why-photo-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-canvas py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: 1600 }}>
          <StatIcons />
        </div>
      </section>

      {/* ── Featured Project ── */}
      <section className="bg-canvas fp-band">
        <div className="page-container">
          <div className="fp-head fade-up">
            <div className="fp-head-text">
              <p className="eyebrow">Featured project</p>
              <h2 className="fp-h2">One campus, every layer<br />working as one.</h2>
              <p className="fp-head-body">A 100,000 sq ft cathedral and outlying buildings — Evangel Cathedral, Maryland. Six systems Trican designed, installed, and integrated into one.</p>
            </div>
            <Link className="fp-pill" href="/work">See more of our work <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="fp-stage">
            <div className="fp-col fp-col-left">
              <div className="fp-callout fade-up"><h3 className="fp-callout-h">Smart card access</h3><p className="fp-callout-p">Role-based credentials across the campus, fully integrated with the camera system.</p></div>
              <div className="fp-callout fade-up"><h3 className="fp-callout-h">Video surveillance</h3><p className="fp-callout-p">Coverage of the 100,000 sq ft cathedral and its outlying buildings.</p></div>
              <div className="fp-callout fade-up"><h3 className="fp-callout-h">Audio analytics</h3><p className="fp-callout-p">Sound-event detection layered on top of the video system.</p></div>
            </div>
            <div className="fp-phone-col fade-up">
              <div className="fp-phone">
                <span className="fp-notch" aria-hidden="true" />
                <div className="fp-screen">
                  <div className="fp-app">
                    <div className="fp-app-top">
                      <span className="fp-brand"><span className="fp-mark">T</span><span className="fp-brand-name">Trican</span></span>
                      <span className="fp-live"><i className="fp-rec-dot" />Live</span>
                    </div>
                    <h4 className="fp-app-title">Evangel Cathedral</h4>
                    <p className="fp-app-meta">Live site overview · demo</p>
                    <div className="fp-armed"><span className="fp-armed-dot" /><span className="fp-armed-text">All zones armed</span></div>
                    <div className="fp-cams">
                      <div className="fp-cam"><span className="fp-rec"><i />Rec</span><span className="fp-cam-name">Sanctuary</span></div>
                      <div className="fp-cam"><span className="fp-rec"><i />Rec</span><span className="fp-cam-name">Lobby</span></div>
                      <div className="fp-cam"><span className="fp-rec"><i />Rec</span><span className="fp-cam-name">East lot</span></div>
                      <div className="fp-cam"><span className="fp-rec"><i />Rec</span><span className="fp-cam-name">Hall B</span></div>
                    </div>
                    <p className="fp-log-h">Access events</p>
                    <div className="fp-ev"><span className="fp-ev-who">Staff badge</span><span className="fp-ev-door">Main entry</span><span className="fp-tag fp-granted">Granted</span></div>
                    <div className="fp-ev"><span className="fp-ev-who">Service</span><span className="fp-ev-door">Hall B</span><span className="fp-tag fp-granted">Granted</span></div>
                    <div className="fp-ev"><span className="fp-ev-who">Unknown</span><span className="fp-ev-door">East door</span><span className="fp-tag fp-denied">Denied</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fp-col fp-col-right">
              <div className="fp-callout fade-up"><h3 className="fp-callout-h">Lockdown capability</h3><p className="fp-callout-p">One action secures every controlled door across the property.</p></div>
              <div className="fp-callout fade-up"><h3 className="fp-callout-h">Auto-open schedules</h3><p className="fp-callout-p">Doors follow the weekly service calendar without staff intervention.</p></div>
              <div className="fp-callout fade-up"><h3 className="fp-callout-h">Two-factor entry</h3><p className="fp-callout-p">High-security authentication for sensitive areas.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="bg-canvas py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center fade-up" style={{ maxWidth: 1600 }}>
          <h2 className="font-display font-semibold text-3xl lg:text-4xl text-ink tracking-tight max-w-2xl mx-auto mb-6">
            Not sure what you need? That's normal.
          </h2>
          <p className="font-body text-ink-muted max-w-lg mx-auto leading-relaxed mb-10">
            Call 410-645-7121 and we'll walk the property with you, then put together options that fit your budget. No pressure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">Schedule a Site Walk</Link>
            <a href="tel:4106457121" className="btn-ghost">Call 410-645-7121</a>
          </div>
        </div>
      </section>

      <HomePageClient />
    </>
  );
}
