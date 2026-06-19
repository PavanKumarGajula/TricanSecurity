import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Government Contracting — Trican Security Inc.',
  description:
    'FIPS 201 and PIV experienced, DUNS registered, CAGE coded. Trican Security is a certified Maryland MBE providing compliant security systems for government agencies.',
};

const credentials = [
  { label: 'DUNS',                             value: '116914590'  },
  { label: 'CAGE Code',                         value: '87PT8'      },
  { label: 'MD Small Business Reserve',         value: 'SB12-35995' },
  { label: 'MDOT Minority Business Enterprise', value: '19-124'     },
  { label: 'Baltimore City MBE',                value: '22-377843'  },
  { label: 'Howard County EBOM',                value: '19-137'     },
  { label: 'VA DCJS License',                   value: '11-19991'   },
];

const naics = [
  { code: '561621', desc: 'Security Systems Services'         },
  { code: '541690', desc: 'Scientific & Technical Consulting' },
  { code: '238210', desc: 'Electrical Contractors'            },
];

const expertise = [
  'FIPS 201 / PIV Card Access Control',
  'AXIS Certified Network Video Professional',
  'Milestone MCBP Certified',
  'NICET Certified Fire Alarm Systems',
  'ASSA ABLOY Certified Integrator',
];

export default function GovernmentPage() {
  return (
    <div className="pt-16 lg:pt-20">

      {/* ── Hero ── */}
      <section className="relative bg-canvas section-pad-hero overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-blue-400 opacity-20" />
        <div className="relative page-container">
          <div className="max-w-3xl fade-up">
            <p className="eyebrow">Government</p>
            <h1 className="font-display font-semibold text-[52px] lg:text-[64px] text-ink tracking-tight leading-[1.04] mb-6">
              Compliant, certified, and ready to contract.
            </h1>
            <p className="font-body text-ink-muted text-lg leading-relaxed max-w-2xl mb-10">
              Government security comes with strict requirements, and we know them well. We're experienced with FIPS 201 and PIV card access control, and we make modernizing an outdated system straightforward. Licensed and insured.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a href="#credentials" className="btn-primary">View Credentials</a>
              <Link href="/contact" className="btn-ghost">
                Contact us
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Credentials ── */}
      <section id="credentials" className="bg-canvas section-pad">
        <div className="page-container">
          <div className="mb-12 fade-up">
            <p className="eyebrow">Contracting Credentials</p>
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-ink tracking-tight">
              Registration &amp; certifications.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 fade-up">
            <div>
              <p className="font-body font-semibold text-[11px] tracking-[1.4px] uppercase text-ink-muted mb-4">Registrations &amp; Licenses</p>
              <div>
                {credentials.map((c) => (
                  <div key={c.label} className="flex items-center justify-between px-5 py-4">
                    <span className="font-body text-sm text-ink-muted">{c.label}</span>
                    <span className="font-mono text-sm text-ink">{c.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <p className="font-body font-semibold text-[11px] tracking-[1.4px] uppercase text-ink-muted mb-4">NAICS Codes</p>
                <div>
                  {naics.map((n) => (
                    <div key={n.code} className="flex items-center justify-between px-5 py-4">
                      <span className="font-body text-sm text-ink-muted">{n.desc}</span>
                      <span className="font-mono text-sm text-blue-400">{n.code}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-body font-semibold text-[11px] tracking-[1.4px] uppercase text-ink-muted mb-4">Security Expertise</p>
                <ul className="flex flex-col">
                  {expertise.map((cert) => (
                    <li key={cert} className="flex items-center gap-3 px-5 py-3.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span className="font-body text-sm text-ink-muted">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Case Study ── */}
      <section className="bg-canvas section-pad">
        <div className="page-container">
          <div className="fade-up mb-12">
            <p className="eyebrow">Case Study</p>
            <h2 className="font-display font-semibold text-3xl lg:text-4xl text-ink tracking-tight">
              Government field work.
            </h2>
          </div>
          <div className="panel-spotlight fade-up max-w-4xl">
            <p className="font-body font-semibold text-[11px] tracking-[1.5px] uppercase text-white/60 mb-3">
              Queen Anne's County Department of Health
            </p>
            <h3 className="font-display font-semibold text-2xl lg:text-3xl text-ink leading-tight mb-5">
              Protecting health workers in the field.
            </h3>
            <p className="font-body text-white/85 leading-relaxed max-w-xl mb-8">
              Mobile surveillance systems installed inside Mobile Health Unit vans to protect employees in the field, with personal emergency response, two-way voice communication, and GPS coordinates for dispatch and incident response.
            </p>
            <Link href="/work" className="btn-primary">View all case studies</Link>
          </div>
        </div>
      </section>

      {/* ── Download + CTA ── */}
      <section className="bg-canvas section-pad-sm">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center fade-up">
            <div>
              <p className="eyebrow">Capability Statement</p>
              <h2 className="font-display font-semibold text-2xl lg:text-3xl text-ink tracking-tight mb-4">
                Download our capability statement.
              </h2>
              <p className="font-body text-ink-muted leading-relaxed mb-8">
                Our capability statement covers registrations, certifications, core competencies, and past performance. Available as a PDF for procurement purposes.
              </p>
              <a
                href="/capability-statement.pdf"
                className="btn-secondary"
                target="_blank"
                rel="noopener"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download PDF
              </a>
            </div>
            <div>
              <h2 className="font-display font-semibold text-2xl text-ink tracking-tight mb-4">
                Ready to discuss your requirements?
              </h2>
              <p className="font-body text-ink-muted leading-relaxed mb-6">
                Call 410-645-7121 or email info@tricansecurity.com and we'll walk through your project and certifications together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:4106457121" className="btn-primary">Call 410-645-7121</a>
                <a href="mailto:info@tricansecurity.com" className="btn-ghost">info@tricansecurity.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
