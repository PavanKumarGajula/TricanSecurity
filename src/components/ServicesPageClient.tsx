'use client';

import { useState, useEffect } from 'react';

export default function ServicesPageClient() {
  const [activeAc, setActiveAc] = useState(0);

  // Sticky nav active state via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.svc-section');
    const navLinks = document.querySelectorAll<HTMLElement>('.svc-nav-link');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.remove('is-active'));
            const link = document.querySelector<HTMLElement>(
              `.svc-nav-link[data-target="${entry.target.id}"]`
            );
            if (link) link.classList.add('is-active');
          }
        });
      },
      { rootMargin: '-35% 0px -65% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Sync access-control preview slide via DOM (the slides live in the server component)
  useEffect(() => {
    const slides = document.querySelectorAll<HTMLElement>('#ac-preview .ac-slide');
    slides.forEach((el, n) => el.classList.toggle('ac-slide--active', n === activeAc));
  }, [activeAc]);

  return (
    <>
      {/* Access control hover items — rendered as overlay over server HTML */}
      <div
        id="ac-list-client"
        style={{ display: 'contents' }}
        onMouseLeave={() => {}}
      >
        {/* The actual ac-item elements are in the page JSX; we wire events via useEffect */}
      </div>
      <AcWire activeAc={activeAc} setActiveAc={setActiveAc} />
    </>
  );
}

function AcWire({ activeAc, setActiveAc }: { activeAc: number; setActiveAc: (i: number) => void }) {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('#ac-list .ac-item'));

    function setActive(i: number) {
      items.forEach((el, n) => el.classList.toggle('ac-item--active', n === i));
      setActiveAc(i);
    }

    items.forEach((el, i) => {
      el.addEventListener('mouseenter', () => setActive(i));
      el.addEventListener('click',      () => setActive(i));
    });

    // Apply initial active state
    items.forEach((el, n) => el.classList.toggle('ac-item--active', n === activeAc));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
