import Link from 'next/link';

const services = [
  { label: 'Surveillance',         href: '/services#surveillance'   },
  { label: 'Access Control',       href: '/services#access-control' },
  { label: 'Alarms & Monitoring',  href: '/services#alarms'         },
  { label: 'Fire Alarms',          href: '/services#alarms'         },
  { label: 'Network & Cabling',    href: '/services#network'        },
  { label: 'Trailer Rentals',      href: '/services#rentals'        },
];

const company = [
  { label: 'About',      href: '/about'      },
  { label: 'Our Work',   href: '/work'       },
  { label: 'Government', href: '/government' },
  { label: 'Contact',    href: '/contact'    },
];

export default function Footer() {
  return (
    <footer className="bg-canvas">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20" style={{ maxWidth: 1600 }}>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-4">
              <span className="font-display font-semibold text-lg text-ink tracking-tight">TRICAN</span>
              <span className="font-display font-semibold text-lg text-blue-400 tracking-tight ml-1.5">SECURITY</span>
            </Link>
            <p className="font-body text-sm text-ink-muted leading-relaxed max-w-[220px]">
              Every layer of protection. One team.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a href="tel:4106457121" className="footer-contact-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.91 19.79 19.79 0 01.01 1.27 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                </svg>
                410-645-7121
              </a>
              <a href="mailto:info@tricansecurity.com" className="footer-contact-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" />
                </svg>
                info@tricansecurity.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-body font-semibold text-[11px] tracking-[1.4px] uppercase text-ink-muted mb-5">Services</p>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.href + s.label}>
                  <Link href={s.href} className="font-body text-sm text-ink-muted hover:text-ink transition-colors duration-200">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-body font-semibold text-[11px] tracking-[1.4px] uppercase text-ink-muted mb-5">Company</p>
            <ul className="flex flex-col gap-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="font-body text-sm text-ink-muted hover:text-ink transition-colors duration-200">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="font-body font-semibold text-[11px] tracking-[1.4px] uppercase text-ink-muted mb-5">Get started</p>
            <p className="font-body text-sm text-ink-muted leading-relaxed mb-5">
              Free site assessment. No pressure, no obligation.
            </p>
            <Link href="/contact" className="btn-primary">Free Assessment</Link>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="font-body text-xs text-ink-muted">
            &copy; {new Date().getFullYear()} Trican Security Inc. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link href="/privacy-policy" className="footer-legal-link">Privacy Policy</Link>
            <span className="footer-legal-sep" aria-hidden="true" />
            <Link href="/terms" className="footer-legal-link">Terms of Service</Link>
            <span className="footer-legal-sep" aria-hidden="true" />
            <Link href="/sitemap" className="footer-legal-link">Sitemap</Link>
          </div>
          <p className="font-body text-xs text-ink-muted footer-certs">
            Licensed &amp; Insured · MBE Certified · AXIS · Milestone MCBP · NICET Fire · VA DCJS
          </p>
        </div>

      </div>
    </footer>
  );
}
