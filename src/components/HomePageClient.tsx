'use client';

import { useEffect } from 'react';

export default function HomePageClient() {
  useEffect(() => {
    const clip      = document.querySelector<HTMLElement>('.wwd-row-clip');
    const prevBtn   = document.querySelector<HTMLButtonElement>('.wwd-arrow-prev');
    const nextBtn   = document.querySelector<HTMLButtonElement>('.wwd-arrow-next');
    const labelEl   = document.querySelector<HTMLElement>('.wwd-arrow-label');
    const totalCards = document.querySelectorAll('.wwd-card-wrap').length;

    if (!clip || !prevBtn || !nextBtn) return;

    const cardStep = () => {
      const first = clip.querySelector<HTMLElement>('.wwd-card');
      return first ? first.offsetWidth + 24 : 320;
    };
    const currentIndex = () =>
      Math.min(Math.round(clip.scrollLeft / cardStep()), totalCards - 1);
    const sync = () => {
      const idx = currentIndex();
      prevBtn.disabled = idx <= 0;
      nextBtn.disabled = idx >= totalCards - 1;
      if (labelEl) labelEl.textContent = `${idx + 1} / ${totalCards}`;
    };

    const onPrev = () => clip.scrollBy({ left: -cardStep(), behavior: 'smooth' });
    const onNext = () => clip.scrollBy({ left:  cardStep(), behavior: 'smooth' });

    prevBtn.addEventListener('click', onPrev);
    nextBtn.addEventListener('click', onNext);
    clip.addEventListener('scroll', sync, { passive: true });
    sync();

    return () => {
      prevBtn.removeEventListener('click', onPrev);
      nextBtn.removeEventListener('click', onNext);
      clip.removeEventListener('scroll', sync);
    };
  }, []);

  return null;
}
