import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Trican Security Inc. — Maryland',
  description:
    'Local experts with serious credentials. Trican Security has expert installers and dedicated software engineers on the same team — AXIS, Milestone, NICET, ASSA ABLOY certified.',
};

const certifications = [
  'AXIS Certified Network Video Professional & Companion Specialist',
  'Milestone Certified Business-ready Professional (MCBP)',
  'ASSA ABLOY Certified Integrator',
  'Cisco Certified',
  'BICSI TECH Certified',
  'Corning Fiber Certified',
  'NICET Certified Fire Alarm Systems',
  'Certified Fire Alarm Technician (CFAT) Level II',
  'Certified Alarm Technician Level 1',
];

const memberships = [
  'Electronic Security Association',
  'Baltimore County Chamber of Commerce',
  'Maryland Hispanic Chamber of Commerce',
  'TeKnowledge World Wide',
];

const bizCerts = [
  'Maryland Minority Business Enterprise (MBE)',
  'Baltimore City MBE',
  'Howard County EBOM',
  'Maryland Small Business Reserve',
  'VA DCJS Licensed',
];

export default function AboutPage() {
  return (
    <div className="pt-16 lg:pt-20">

      {/* ── Hero ── */}
      <section className="relative bg-canvas section-pad-hero overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-blue-400 opacity-20" />
        <div className="relative page-container">
          <div className="max-w-3xl fade-up">
            <p className="eyebrow">About</p>
            <h1 className="font-display font-semibold text-[52px] lg:text-[64px] text-ink tracking-tight leading-[1.04] mb-6">
              Local experts. Serious credentials.
            </h1>
            <p className="font-body text-ink-muted text-lg leading-relaxed max-w-2xl">
              Security systems have gotten complicated. Cameras, badge readers, alarms, fire panels, and networks all need to talk to each other, and most installers stop where the wiring ends. We don't.
            </p>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="bg-canvas section-pad">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div className="fade-up">
              <p className="eyebrow">Our Story</p>
              <h2 className="font-display font-semibold text-3xl lg:text-4xl text-ink tracking-tight mb-6">
                One team. Every layer.
              </h2>
              <p className="font-body text-ink-muted leading-relaxed mb-4">
                Trican Security has expert installers and dedicated software engineers on the same team, so even the most complex integration ends up as one system that simply works. That's what we mean by our promise: every layer of protection, one team.
              </p>
              <p className="font-body text-ink-muted leading-relaxed mb-4">
                We're based in Maryland and we take the local part seriously. Modern technology has made advanced security affordable for even the smallest businesses, and we think they deserve the same protection as the big players.
              </p>
              <p className="font-body text-ink-muted leading-relaxed">
                Whatever your size, we design around your objectives and your budget — then we stand behind the work.
              </p>
            </div>
            <div className="fade-up flex flex-col gap-5">
              {[
                { title: 'Installers + Software Engineers', body: 'Both disciplines on one team — no finger-pointing between vendors when integration gets complex.' },
                { title: 'Designed Around Your Risks',     body: "We walk your property and listen before we recommend. You never pay for equipment you don't need." },
                { title: 'Locally Owned, Maryland-Based',  body: 'Serving the Baltimore–DC region. We answer our phones and we stand behind our installations.' },
              ].map((item) => (
                <div key={item.title} className="bg-canvas px-7 py-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <p className="font-body font-semibold text-sm text-ink">{item.title}</p>
                  </div>
                  <p className="font-body text-sm text-ink-muted leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="bg-canvas section-pad">
        <div className="page-container">
          <div className="mb-12 fade-up">
            <p className="eyebrow">Credentials</p>
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-ink tracking-tight">
              Certified on the industry's leading platforms.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 fade-up">
            <div>
              <p className="font-body font-semibold text-[11px] tracking-[1.4px] uppercase text-ink-muted mb-5">Certifications</p>
              <ul className="flex flex-col">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-3.5 px-5 py-3.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    <span className="font-body text-sm text-ink-muted">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-body font-semibold text-[11px] tracking-[1.4px] uppercase text-ink-muted mb-5">Memberships</p>
              <ul className="flex flex-col mb-10">
                {memberships.map((m) => (
                  <li key={m} className="flex items-center gap-3.5 px-5 py-3.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    <span className="font-body text-sm text-ink-muted">{m}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body font-semibold text-[11px] tracking-[1.4px] uppercase text-ink-muted mb-5">Business Certifications</p>
              <ul className="flex flex-col">
                {bizCerts.map((m) => (
                  <li key={m} className="flex items-center gap-3.5 px-5 py-3.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-success-500 shrink-0" />
                    <span className="font-body text-sm text-ink-muted">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-canvas section-pad-sm">
        <div className="page-container">
          <div className="panel-spotlight max-w-3xl fade-up">
            <p className="font-body font-semibold text-[11px] tracking-[1.5px] uppercase text-white/60 mb-3">Get started</p>
            <h2 className="font-display font-semibold text-3xl text-ink tracking-tight mb-5">
              Ready to work with a team that actually listens?
            </h2>
            <p className="font-body text-white/85 leading-relaxed max-w-md mb-8">
              Get a free assessment — no pressure, no obligation. We'll walk your site, listen to your concerns, and put together options that fit your budget.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/contact" className="btn-primary">Get a Free Assessment</Link>
              <a href="tel:4106457121" className="font-body text-sm text-white/70 hover:text-white inline-flex items-center gap-2 transition-colors mt-1">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call 410-645-7121
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
