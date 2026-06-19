'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const links = [
  { href: '/',           label: 'Home'       },
  { href: '/services',   label: 'Services'   },
  { href: '/government', label: 'Government' },
  { href: '/work',       label: 'Our Work'   },
  { href: '/about',      label: 'About'      },
  { href: '/contact',    label: 'Contact'    },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header id="site-nav" className={`nav-shell${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav-gradient" aria-hidden="true" />

      <div className="nav-bar">
        <Link href="/" className="nav-logo" aria-label="Trican Security">
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none" aria-hidden="true">
            <path
              d="M10 1L1.5 4.8v5.6c0 4.9 3.6 9.5 8.5 10.6 4.9-1.1 8.5-5.7 8.5-10.6V4.8L10 1z"
              fill="rgba(0,153,255,0.1)"
              stroke="#0099ff"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
            <path
              d="M6.5 11l2.5 2.5L13.5 8.5"
              stroke="#0099ff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="logo-name">TRICAN</span>
          <span className="logo-sep" aria-hidden="true" />
          <span className="logo-type">SECURITY</span>
        </Link>

        <nav className="nav-links" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link${isActive(l.href) ? ' is-active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="tel:4106457121" className="nav-phone" aria-label="Call us">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.91 19.79 19.79 0 01.01 1.27 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
            </svg>
            410-645-7121
          </a>

          <Link href="/contact" className="nav-cta">
            <span>Free Assessment</span>
            <svg
              className="cta-arrow"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          <button
            className="nav-hamburger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="hb-line" />
            <span className="hb-line hb-line--mid" />
            <span className="hb-line" />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-drawer">
          <nav className="mobile-links">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`mobile-link${isActive(l.href) ? ' is-active' : ''}`}
              >
                <span>{l.label}</span>
                {isActive(l.href) && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0099ff"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </Link>
            ))}
          </nav>
          <div className="mobile-bottom">
            <Link href="/contact" className="nav-cta mobile-cta">
              Free Assessment
            </Link>
            <a href="tel:4106457121" className="mobile-tel">
              410-645-7121
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
