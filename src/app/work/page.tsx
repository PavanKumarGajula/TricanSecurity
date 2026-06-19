import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Work — Trican Security Inc.',
  description:
    'Case studies, client reviews, and community work from Trican Security — Maryland\'s locally owned security systems company.',
};

const caseStudies = [
  {
    client:   'Evangel Cathedral',
    location: 'Maryland',
    body:     'A 100,000 sq ft cathedral plus outlying buildings. Smart card access control fully integrated with video surveillance, audio analytics with lockdown capability, auto-open schedules for weekly services, and high security two-factor authentication.',
    tags:     ['Access Control', 'Surveillance', 'Audio Analytics', 'Smart Card'],
  },
  {
    client:   "Queen Anne's County Department of Health",
    location: 'Maryland',
    body:     'Mobile surveillance systems installed inside Mobile Health Unit vans to protect employees in the field, with personal emergency response, two-way voice communication, and GPS coordinates.',
    tags:     ['Mobile Surveillance', 'Emergency Response', 'GPS', 'Government'],
  },
  {
    client:   'ReLink Medical',
    location: 'White Marsh, MD',
    body:     'Complete buildout for a new warehouse: structured cabling, wireless access points, surveillance cameras, network rack construction, and cloud based door access control.',
    tags:     ['Network Cabling', 'Surveillance', 'Access Control', 'WiFi'],
  },
  {
    client:   'Touba Bollo LLC',
    location: 'Baltimore',
    body:     'Intrusion detection fully integrated with video surveillance across multiple Baltimore locations.',
    tags:     ['Alarms', 'Surveillance', 'Multi-Site'],
  },
];

const reviews = [
  {
    quote:  'Trican provided a comprehensive assessment of our security needs and door retrofit — and saved us over $30,000 compared to quotes from the big companies. Totally pleased with the quality of work and the price.',
    author: 'Moses Hammett',
    title:  'Director, Masjid Ul-Haqq, Baltimore',
  },
  {
    quote:  'I wanted a company that would address my issues, not just sell me an expensive system. I saved money switching to Trican and gained more features than I ever had before. Patient, punctual, and they got the job done.',
    author: 'Nekia',
    title:  'Baltimore',
  },
  {
    quote:  'Excellent service! They went above and beyond to make sure my needs were met. A+.',
    author: '3D Cleaning Services',
    title:  'Owings Mills',
  },
  {
    quote:  'Awesome service and very reliable. Would definitely recommend!',
    author: 'First Point Home Inspections',
    title:  'Baltimore',
  },
  {
    quote:  'Best experience purchasing equipment I had no clue about. They answered all my questions and found the most affordable solution that fit my needs.',
    author: 'Brehdapp.com LLC',
    title:  '',
  },
];

export default function WorkPage() {
  return (
    <div className="pt-16 lg:pt-20">

      {/* ── Hero ── */}
      <section className="relative bg-canvas section-pad-hero overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-blue-400 opacity-20" />
        <div className="relative page-container">
          <div className="max-w-2xl fade-up">
            <p className="eyebrow">Our Work</p>
            <h1 className="font-display font-semibold text-[52px] lg:text-[64px] text-ink tracking-tight leading-[1.04] mb-6">
              Results we're proud to stand behind.
            </h1>
            <p className="font-body text-ink-muted text-lg leading-relaxed">
              From government field deployments to warehouse buildouts to multi-building campuses — here's a sample of what we've built.
            </p>
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="bg-canvas section-pad">
        <div className="page-container">
          <div className="mb-12 fade-up">
            <p className="eyebrow">Case Studies</p>
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-ink tracking-tight">
              Projects we've delivered.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {caseStudies.map((cs) => (
              <div key={cs.client} className="card-base fade-up">
                <p className="font-body text-[11px] font-semibold tracking-[1.3px] uppercase text-blue-400 mb-3">{cs.location}</p>
                <h3 className="font-display font-semibold text-xl text-ink mb-4 leading-snug">{cs.client}</h3>
                <p className="font-body text-sm text-ink-muted leading-relaxed mb-6">{cs.body}</p>
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="font-body text-[11px] font-medium tracking-wide text-ink-muted px-2.5 py-1">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section id="reviews" className="bg-canvas section-pad">
        <div className="page-container">
          <div className="mb-12 fade-up">
            <p className="eyebrow">Client Reviews</p>
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-ink tracking-tight">
              Don't take our word for it.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.author} className="bg-canvas p-8 shadow-card fade-up">
                <p className="font-body text-sm text-ink leading-relaxed mb-6">"{r.quote}"</p>
                <div>
                  <p className="font-body font-semibold text-sm text-ink">{r.author}</p>
                  {r.title && <p className="font-body text-xs text-ink-muted mt-0.5">{r.title}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Community ── */}
      <section className="bg-canvas section-pad">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div className="fade-up">
              <p className="eyebrow">In the Community</p>
              <h2 className="font-display font-semibold text-3xl lg:text-4xl text-ink tracking-tight mb-6">
                Security is a community effort.
              </h2>
              <p className="font-body text-ink-muted leading-relaxed mb-4">
                We were proud to be part of the TeksGiving Charity Project, which selected Berachah Church for its commitment to the community it serves. The church received over $175,000 in technology upgrades — surveillance, access control, network infrastructure, and WiFi access points — and our team helped make it happen.
              </p>
              <p className="font-body text-ink-muted leading-relaxed">
                We're active members of the TeKnowledge Worldwide community and share their passion for charitable projects. Public service isn't a side note for us; it's part of why we do this work.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span className="inline-flex items-center gap-2 font-body text-sm text-ink-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-success-500" />
                  $175,000+ in technology donated
                </span>
              </div>
            </div>
            <div className="fade-up">
              <div className="bg-canvas aspect-video flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-ink-muted ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                  </div>
                  <p className="font-body text-sm text-ink-muted">TeksGiving Charity Project</p>
                  <p className="font-body text-xs text-ink-muted mt-1 opacity-60">YouTube embed — Berachah Church</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-canvas section-pad-sm">
        <div className="page-container text-center fade-up">
          <h2 className="font-display font-semibold text-3xl lg:text-4xl text-ink tracking-tight max-w-xl mx-auto mb-6">
            Want results like these for your property?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">Get a Free Assessment</Link>
            <a href="tel:4106457121" className="btn-ghost">Call 410-645-7121</a>
          </div>
        </div>
      </section>

    </div>
  );
}
