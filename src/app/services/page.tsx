import type { Metadata } from 'next';
import Link from 'next/link';
import ServicesPageClient from '@/components/ServicesPageClient';

export const metadata: Metadata = {
  title: 'Security Services — Trican Security Inc.',
  description:
    'Surveillance, access control, alarms, fire alarms, network infrastructure, and mobile trailer rentals for businesses and government agencies across Maryland.',
};

const useCards = [
  { title: 'Office Space',          body: "Protect your people, equipment, and data. Badge access, cameras, and alarms — plus network and WiFi upgrades while we're at it." },
  { title: 'Retail',                body: 'Cover merchandise and registers, deter theft, and add secure guest WiFi your customers will appreciate.' },
  { title: 'Warehouse & Logistics', body: 'Watch deliveries and inventory, and cut liability exposure from personnel and equipment incidents.' },
  { title: 'Multi-Tenant',          body: 'Modern intercom systems let tenants grant access to guests from their phone — manage the whole property from your office.' },
];

const trailerFeats = [
  'Live streaming & recorded playback over cellular',
  'Panoramic, zoom, thermal, and radar cameras',
  'Blue strobe warning light to deter intruders',
  'Runs indefinitely on sunlight',
  'Ideal for lay-down yards, construction sites, parking lots',
  'Short and long term rentals',
];

const processSteps = [
  {
    n: '01',
    title: 'Free Site Assessment',
    body: "We walk your property, listen to your concerns, and identify every vulnerability. No sales pitch — just a clear picture of what you're dealing with.",
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>',
  },
  {
    n: '02',
    title: 'Tailored Design',
    body: "We build a solution specific to your space, budget, and risk profile — not a package off a shelf. You'll see exactly what you're getting before anything is ordered.",
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
  },
  {
    n: '03',
    title: 'Install & Ongoing Support',
    body: "Our certified technicians handle every layer — no subcontractors. After install, we're your single point of contact for service, monitoring, and upgrades.",
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/><path d="M12 6v6l4 2"/></svg>',
  },
];

const workCards = [
  { img: '/images/wwd-surveillance.jpg',    contain: false, cap: 'Evangel Cathedral · Smart card + video' },
  { img: '/images/wearable_pendant.png',    contain: true,  cap: "Queen Anne's County · Mobile health units" },
  { img: '/images/network-hero.png',        contain: true,  cap: 'ReLink Medical · Network buildout' },
  { img: '/images/mobile_surveillance.png', contain: true,  cap: 'Mobile surveillance trailer' },
  { img: '/images/wwd-access.png',          contain: true,  cap: 'Badge access & smart cards' },
  { img: '/images/alarm-hero.png',          contain: true,  cap: 'Fire alarm systems · NICET certified' },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="svc-hero">
        <div className="svc-hero-content">
          <span className="svc-kicker">
            <span className="svc-kicker-dot" aria-hidden="true" />
            Every layer of protection. One team.
            <span className="svc-kicker-dot" aria-hidden="true" />
          </span>
          <h1 className="svc-hero-h1">Cameras, badges, alarms, fire, network. One team builds it all.</h1>
          <p className="svc-hero-sub"><b>Locally owned and Maryland-based.</b> One team for surveillance, access, alarms, fire, and network — across Maryland, the Baltimore–Washington corridor, and Virginia.</p>
          <div className="svc-hero-actions">
            <Link className="btn-primary" href="/contact">Get a Free Assessment</Link>
            <a className="btn-ghost" href="tel:4106457121">Call 410-645-7121</a>
          </div>
        </div>

        <div className="svc-strip-wrap">
          <div className="svc-strip-label">
            <span className="svc-strip-ln" aria-hidden="true" />
            <span className="svc-strip-t">Selected work · Maryland &amp; the DC region</span>
            <span className="svc-strip-ln" aria-hidden="true" />
          </div>
          <div className="svc-strip" aria-hidden="true">
            <div className="svc-track">
              {[...workCards, ...workCards].map((c, i) => (
                <div key={i} className="svc-wcard">
                  <div className="svc-wthumb">
                    <span className="svc-vfc svc-vfc-a" /><span className="svc-vfc svc-vfc-b" />
                    <img src={c.img} alt="" className={`svc-wimg${c.contain ? ' svc-wimg--contain' : ''}`} />
                  </div>
                  <div className="svc-wfoot"><span className="svc-wonline" /><span className="svc-wcap">{c.cap}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky Services Nav ── */}
      <nav className="svc-nav" id="svc-nav" aria-label="Jump to service">
        <div className="svc-nav-inner">
          <a href="#surveillance" className="svc-nav-link" data-target="surveillance">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="13" height="9" rx="2" /><path d="M15 9l7-3v9l-7-3" /></svg>
            Surveillance
          </a>
          <a href="#access-control" className="svc-nav-link" data-target="access-control">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="12" height="18" rx="2" /><circle cx="10" cy="9" r="2" /><path d="M7 17c.6-2 5.4-2 6 0" /></svg>
            Access Control
          </a>
          <a href="#alarms" className="svc-nav-link" data-target="alarms">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></svg>
            Alarms &amp; Fire
          </a>
          <a href="#network" className="svc-nav-link" data-target="network">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="7" rx="1.5" /><rect x="3" y="13" width="18" height="7" rx="1.5" /><circle cx="7" cy="7.5" r=".7" /><circle cx="7" cy="16.5" r=".7" /></svg>
            Network
          </a>
          <a href="#rentals" className="svc-nav-link" data-target="rentals">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="15" height="9" rx="1.5" /><circle cx="7" cy="18.5" r="1.8" /><circle cx="14" cy="18.5" r="1.8" /><path d="M17 11h5" /></svg>
            Commercial &amp; Rentals
          </a>
        </div>
      </nav>


      {/* ── 01 Surveillance ── */}
      <section id="surveillance" className="svc-section svc-surv">
        <div className="svc-num" aria-hidden="true">01</div>
        <div className="page-container">

          <div className="bn-head fade-up">
            <div className="bn-head-left">
              <span className="bn-pill bn-pill--surv">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="13" height="9" rx="2" /><path d="M15 9l7-3v9l-7-3" /></svg>
                Surveillance
              </span>
              <h2 className="bn-h2">See everything that matters. From anywhere.</h2>
            </div>
            <p className="bn-sub">We design every camera system from scratch, then layer on analytics that turn footage into answers — all viewable from your phone or any computer.</p>
          </div>

          <div className="bn-grid fade-up">
            <div className="bn-card bn-w2">
              <div className="bn-visual"><img src="/images/services/cameras.png" alt="Camera systems" className="bn-img" /><span className="bn-vfc bn-vfc-a" /><span className="bn-vfc bn-vfc-b" /></div>
              <div className="bn-body"><h3 className="bn-title">Camera systems</h3><p className="bn-desc">Network, analog, thermal, radar, and discreet domes — chosen for your space, not off a shelf.</p></div>
            </div>
            <div className="bn-card">
              <div className="bn-visual"><img src="/images/services/Auto_tracking.png" alt="Auto tracking" className="bn-img" /><span className="bn-vfc bn-vfc-a" /><span className="bn-vfc bn-vfc-b" /></div>
              <div className="bn-body"><h3 className="bn-title">Auto tracking</h3><p className="bn-desc">Cameras that follow movement across open spaces and parking lots.</p></div>
            </div>
            <div className="bn-card">
              <div className="bn-visual"><img src="/images/services/Heat_mapping.png" alt="Heat mapping" className="bn-img" /><span className="bn-vfc bn-vfc-a" /><span className="bn-vfc bn-vfc-b" /></div>
              <div className="bn-body"><h3 className="bn-title">Heat mapping</h3><p className="bn-desc">Traffic patterns by visitor density and duration.</p></div>
            </div>
            <div className="bn-card">
              <div className="bn-visual"><img src="/images/services/people_count.png" alt="People counting" className="bn-img" /><span className="bn-vfc bn-vfc-a" /><span className="bn-vfc bn-vfc-b" /></div>
              <div className="bn-body"><h3 className="bn-title">People counting</h3><p className="bn-desc">Know exactly how many enter and exit any defined area.</p></div>
            </div>
            <div className="bn-card">
              <div className="bn-visual"><img src="/images/services/Licenseplate.png" alt="License plate recognition" className="bn-img" /><span className="bn-vfc bn-vfc-a" /><span className="bn-vfc bn-vfc-b" /></div>
              <div className="bn-body"><h3 className="bn-title">License plate recognition</h3><p className="bn-desc">Searchable plate data — use plates to open gates and garages.</p></div>
            </div>
            <div className="bn-card bn-w2">
              <div className="bn-visual"><img src="/images/services/audio.png" alt="Audio analytics" className="bn-img" /><span className="bn-vfc bn-vfc-a" /><span className="bn-vfc bn-vfc-b" /></div>
              <div className="bn-body"><h3 className="bn-title">Audio analytics</h3><p className="bn-desc">Detect aggression, glass break, and other sound events the cameras alone would miss.</p></div>
            </div>
          </div>

          <div className="bn-cta fade-up">
            <div className="svc-tags">
              <span className="svc-tag">AXIS Certified</span>
              <span className="svc-tag">Milestone MCBP</span>
              <span className="svc-tag">Thermal &amp; Radar</span>
            </div>
            <Link href="/contact" className="svc-inline-cta">
              Request a surveillance assessment
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

        </div>
      </section>


      {/* ── 02 Access Control ── */}
      <section id="access-control" className="svc-section svc-access">
        <div className="svc-num" aria-hidden="true">02</div>
        <div className="page-container">
          <div className="ac-split fade-up">

            <div className="ac-left">
              <span className="ac-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /><circle cx="12" cy="15.5" r="1.4" /></svg>
                Access Control &amp; Badge Access
              </span>
              <h2 className="ac-h2">The right people in. Everyone else out.</h2>
              <p className="ac-lead">Control exactly who comes in, through which doors, and at which times — with a log of every attempt for review and audit. Hover a control to see it in place.</p>
              <p className="ac-fips">For government facilities, we're experienced with <b>FIPS 201</b> and <b>PIV</b> card access control requirements.</p>

              <div className="ac-preview" id="ac-preview">
                {[
                  { img: '/images/wwd-access.png', alt: 'Badge access' },
                  null, null, null, null,
                  { img: '/images/badge-hero.png', alt: 'Vehicle & perimeter access' },
                ].map((slide, i) => (
                  <div key={i} className={`ac-slide${i === 0 ? ' ac-slide--active' : ''}`} data-i={i}>
                    {slide?.img && <img src={slide.img} alt={slide.alt} className="ac-slide-img" />}
                    <div className="ac-fallback">
                      <svg className="ac-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8.5" cy="11" r="2.2" />
                        <path d="M5.6 16.2c.5-1.5 1.6-2.2 2.9-2.2s2.4.7 2.9 2.2" /><path d="M15 9h4M15 12h4M15 15h2" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              <div className="svc-tags" style={{ marginTop: 28 }}>
                <span className="svc-tag">FIPS 201</span>
                <span className="svc-tag">PIV Experienced</span>
                <span className="svc-tag">ASSA ABLOY</span>
              </div>
              <Link href="/contact" className="svc-inline-cta" style={{ marginTop: 20, display: 'inline-flex' }}>
                Discuss your access control needs
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="ac-list" id="ac-list">
              {[
                { label: 'Badge access & smart cards', desc: 'Role-based permissions, time-of-day rules, and a full audit trail.' },
                { label: 'Biometrics & two-factor',    desc: 'High-security entry for your most sensitive areas.' },
                { label: 'Touch-free entry',            desc: 'Low-energy operators, wave-to-open switches, and electric strikes.' },
                { label: 'Intercom systems',            desc: 'See and speak with visitors before unlocking the door.' },
                { label: 'Multi-tenant access',         desc: 'Tenants buzz in guests from their own phones — Android or iPhone.' },
                { label: 'Vehicle & perimeter access',  desc: 'Gates tied to credentials or plates, with radar and sound detection.' },
              ].map((item, i) => (
                <div key={i} className={`ac-item${i === 0 ? ' ac-item--active' : ''}`} data-i={i}>
                  <span className="ac-idx">{String(i + 1).padStart(2, '0')}</span>
                  <div className="ac-txt"><h4>{item.label}</h4><p>{item.desc}</p></div>
                  <span className="ac-arrow">→</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* ── 03 Alarms & Fire ── */}
      <section id="alarms" className="svc-section svc-fire">
        <div className="svc-num" aria-hidden="true">03</div>
        <div className="page-container">

          <div className="al-head fade-up">
            <div className="al-head-left">
              <span className="al-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></svg>
                Alarms, Monitoring &amp; Fire
              </span>
              <h2 className="al-h2">Protection that never clocks out.</h2>
            </div>
            <p className="al-sub">Intrusion, fire, and emergency signals all route to one place — full-time monitoring with 24/7 incident response.</p>
          </div>

          <div className="al-diagram fade-up">
            <svg viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Signals routing to 24/7 monitoring">
              <g>
                <path className="al-trace-bg" d="M210 80 H300 V214 H372" />
                <path className="al-trace-flow al-d1" d="M210 80 H300 V214 H372" />
                <path className="al-trace-bg" d="M185 170 H295 V230 H372" />
                <path className="al-trace-flow al-d2" d="M185 170 H295 V230 H372" />
                <path className="al-trace-bg" d="M175 300 H300 V252 H372" />
                <path className="al-trace-flow al-d3" d="M175 300 H300 V252 H372" />
                <path className="al-trace-bg" d="M210 395 H310 V268 H372" />
                <path className="al-trace-flow al-d4" d="M210 395 H310 V268 H372" />
                <path className="al-trace-bg" d="M690 110 H600 V216 H528" />
                <path className="al-trace-flow al-d5" d="M690 110 H600 V216 H528" />
                <path className="al-trace-bg" d="M700 240 H600 V240 H528" />
                <path className="al-trace-flow al-d6" d="M700 240 H600 V240 H528" />
                <path className="al-trace-bg" d="M690 375 H600 V266 H528" />
                <path className="al-trace-flow al-d7" d="M690 375 H600 V266 H528" />
              </g>
              <rect className="al-chip-ring" x="372" y="186" width="156" height="108" rx="22" fill="none" stroke="#0099ff" strokeWidth="1" />
              <rect x="380" y="190" width="140" height="100" rx="20" fill="#1c1c1c" stroke="#2c2c2c" strokeWidth="2" />
              <g fill="#4a4a4a">
                <rect x="372" y="208" width="9" height="9" rx="2" /><rect x="372" y="224" width="9" height="9" rx="2" />
                <rect x="372" y="247" width="9" height="9" rx="2" /><rect x="372" y="263" width="9" height="9" rx="2" />
                <rect x="519" y="210" width="9" height="9" rx="2" /><rect x="519" y="236" width="9" height="9" rx="2" />
                <rect x="519" y="261" width="9" height="9" rx="2" />
              </g>
              <circle cx="416" cy="213" r="4" fill="#22c55e" />
              <text x="426" y="216" className="al-chip-cap" style={{ fontSize: 9, letterSpacing: '1.5px', fill: '#22c55e' }}>ONLINE</text>
              <text x="450" y="252" className="al-chip-num" textAnchor="middle">24/7</text>
              <text x="450" y="274" className="al-chip-cap" textAnchor="middle">MONITORING</text>
              <circle className="al-node" cx="210" cy="80" r="5" />
              <text x="198" y="76" className="al-lbl-name" textAnchor="end">Intrusion alarm</text>
              <text x="198" y="92" className="al-lbl-sub" textAnchor="end">Armed 24/7</text>
              <circle className="al-node" cx="185" cy="170" r="5" />
              <text x="173" y="166" className="al-lbl-name" textAnchor="end">Burglar alarm</text>
              <text x="173" y="182" className="al-lbl-sub" textAnchor="end">Monitored</text>
              <circle className="al-node" cx="175" cy="300" r="5" />
              <text x="163" y="296" className="al-lbl-name" textAnchor="end">Fire alarm</text>
              <text x="163" y="312" className="al-lbl-sub" textAnchor="end">NICET · CFAT II</text>
              <circle className="al-node" cx="210" cy="395" r="5" />
              <text x="198" y="391" className="al-lbl-name" textAnchor="end">Personal emergency</text>
              <text x="198" y="407" className="al-lbl-sub" textAnchor="end">Response · PERS</text>
              <circle className="al-node" cx="690" cy="110" r="5" />
              <text x="702" y="106" className="al-lbl-name" textAnchor="start">Video-verified</text>
              <text x="702" y="122" className="al-lbl-sub" textAnchor="start">Remote video</text>
              <circle className="al-node" cx="700" cy="240" r="5" />
              <text x="712" y="236" className="al-lbl-name" textAnchor="start">Mobile control</text>
              <text x="712" y="252" className="al-lbl-sub" textAnchor="start">Alarm.com</text>
              <circle className="al-node" cx="690" cy="375" r="5" />
              <text x="702" y="371" className="al-lbl-name" textAnchor="start">Real-time</text>
              <text x="702" y="387" className="al-lbl-sub" textAnchor="start">Notifications</text>
            </svg>
          </div>

          <div className="al-note fade-up">
            <div className="svc-tags">
              <span className="svc-tag">NICET Certified</span>
              <span className="svc-tag">CFAT Level II</span>
              <span className="svc-tag">Alarm.com</span>
            </div>
            <p className="al-note-p">Powered by the <b>Alarm.com</b> platform. Fire alarm systems designed and supported by NICET-certified technicians, including a Certified Fire Alarm Technician (CFAT) Level&nbsp;II. Personal emergency response proven protecting Queen Anne's County health workers.</p>
            <Link href="/contact" className="svc-inline-cta">
              Get monitoring coverage
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

        </div>
      </section>


      {/* ── 04 Network ── */}
      <section id="network" className="svc-section">
        <div className="page-container">

          <div className="nw-head fade-up">
            <div className="nw-head-left">
              <p className="nw-pill">04 — Network Infrastructure</p>
              <h2 className="nw-h2">The backbone behind every system.</h2>
            </div>
            <p className="nw-subhead">Every camera, badge reader, and alarm panel runs on your network — so we build that too. One contractor for security and infrastructure means no finger-pointing between vendors.</p>
          </div>

          <div className="nw-grid fade-up">
            <div className="nw-tile nw-tile--a">
              <div className="nw-watermark" aria-hidden="true">
                <svg viewBox="0 0 320 400" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMaxYMid meet">
                  <circle cx="160" cy="80"  r="16" stroke="#a78bfa" strokeWidth="1.5" />
                  <circle cx="60"  cy="200" r="12" stroke="#a78bfa" strokeWidth="1.5" />
                  <circle cx="260" cy="200" r="12" stroke="#a78bfa" strokeWidth="1.5" />
                  <circle cx="100" cy="320" r="10" stroke="#a78bfa" strokeWidth="1.5" />
                  <circle cx="220" cy="320" r="10" stroke="#a78bfa" strokeWidth="1.5" />
                  <circle cx="160" cy="340" r="8"  stroke="#a78bfa" strokeWidth="1.5" />
                  <line x1="160" y1="96"  x2="60"  y2="188" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="160" y1="96"  x2="260" y2="188" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="60"  y1="212" x2="100" y2="310" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="60"  y1="212" x2="160" y2="332" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="260" y1="212" x2="220" y2="310" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="260" y1="212" x2="160" y2="332" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
              </div>
              <div className="nw-tile-body">
                <div className="nw-chips">
                  <span className="nw-chip">BICSI TECH</span>
                  <span className="nw-chip">Corning Fiber</span>
                  <span className="nw-chip">Cisco Trained</span>
                </div>
                <h3 className="nw-tile-h3">Structured Cabling</h3>
                <p className="nw-tile-p">Certified-grade cable infrastructure designed to last — no rework, no guesswork. The right spec from day one.</p>
                <Link href="/contact" className="nw-cta">
                  Plan your infrastructure
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
            <div className="nw-tile nw-tile--b">
              <h3 className="nw-tile-h3">Wireless Access &amp; WiFi</h3>
              <p className="nw-tile-p">Coverage planning, WAP installation, and secure guest WiFi — designed around your floorplan, not bolted on after the fact.</p>
            </div>
            <div className="nw-tile nw-tile--c">
              <h3 className="nw-tile-h3">Racks &amp; Equipment Rooms</h3>
              <p className="nw-tile-p">Full equipment room buildout and long-term management.</p>
            </div>
            <div className="nw-tile nw-tile--d">
              <h3 className="nw-tile-h3">Network Design &amp; Upgrades</h3>
              <p className="nw-tile-p">Infrastructure design and Cisco-certified configuration upgrades.</p>
            </div>
            <div className="nw-tile nw-tile--e">
              <div className="nw-case-body">
                <p className="nw-case-label">Case Study</p>
                <h3 className="nw-case-h3">ReLink Medical — White Marsh Warehouse</h3>
                <p className="nw-case-p">Complete buildout for a new warehouse: cabling, wireless access points, cameras, network rack, and cloud access control. All by one team. No finger-pointing between vendors.</p>
              </div>
              <Link href="/contact" className="nw-case-link">
                Talk to our team
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

        </div>
      </section>


      {/* ── 05 Commercial & Rentals ── */}
      <section id="rentals" className="svc-section svc-rentals">
        <div className="svc-num" aria-hidden="true">05</div>
        <div className="page-container">

          <div className="svc-rentals-head fade-up">
            <p className="svc-eyebrow">05 — Commercial &amp; Rentals</p>
            <h2 className="svc-heading svc-heading--wide">Built for the way your business actually works.</h2>
          </div>

          <div className="svc-use-grid fade-up">
            {useCards.map((s) => (
              <div key={s.title} className="svc-use-card">
                <h3 className="svc-use-title">{s.title}</h3>
                <p className="svc-use-body">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="svc-trailer-wrap fade-up">
            <div className="svc-trailer-left">
              <div className="svc-trailer-badge">Solar Powered · Cellular · No Generator</div>
              <h3 className="svc-trailer-heading">Mobile Surveillance Trailers</h3>
              <p className="svc-trailer-body">Rugged, solar powered, and self contained. Delivered to your location and deployed in 10 minutes — no cords or generators required. Short and long term rentals available.</p>
              <Link href="/contact" className="svc-inline-cta" style={{ marginTop: 24 }}>
                Ask about trailer availability
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="svc-trailer-right">
              <ul className="svc-trailer-feats">
                {trailerFeats.map((f) => (
                  <li key={f} className="svc-trailer-feat">
                    <span className="svc-feat-dot" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="svc-temp-callout fade-up">
            <div className="svc-callout">
              <p className="svc-callout-label">Temporary Surveillance Units</p>
              <p className="svc-callout-body">Compact rental units with cellular connectivity, battery plus AC power, remote viewing and playback. Satisfies insurance requirements for continuous watch on sites with no or intermittent power.</p>
            </div>
          </div>

        </div>
      </section>


      {/* ── Process ── */}
      <section className="svc-process-section">
        <div className="page-container">
          <div className="svc-process-head fade-up">
            <p className="eyebrow">How it works</p>
            <h2 className="svc-process-h2">Simple from start to finish.</h2>
          </div>
          <div className="svc-process-grid">
            {processSteps.map((step) => (
              <div key={step.n} className="svc-step fade-up">
                <div className="svc-step-top">
                  <div className="svc-step-icon" dangerouslySetInnerHTML={{ __html: step.icon }} />
                  <span className="svc-step-num">{step.n}</span>
                </div>
                <h3 className="svc-step-title">{step.title}</h3>
                <p className="svc-step-body">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── CTA ── */}
      <section className="svc-cta-wrap">
        <div className="page-container">
          <div className="svc-cta-inner fade-up">
            <div className="svc-cta-left">
              <p className="eyebrow">Get started</p>
              <h2 className="svc-cta-heading">Ready to talk through what your site needs?</h2>
              <p className="svc-cta-body">We'll walk your property, listen to your concerns, and put together options that fit your budget. No obligation, no pressure.</p>
            </div>
            <div className="svc-cta-actions">
              <Link href="/contact" className="btn-primary btn-lg">Get a Free Assessment</Link>
              <a href="tel:4106457121" className="btn-ghost">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.91 19.79 19.79 0 01.01 1.27 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>
                Call 410-645-7121
              </a>
            </div>
          </div>
        </div>
      </section>

      <ServicesPageClient />
    </>
  );
}
