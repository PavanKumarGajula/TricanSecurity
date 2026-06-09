import { useRef, useEffect, useState } from 'react';

const CARDS = [
  { src: '/videos/evangel.mp4',     poster: '/images/evangel-poster.jpg',     caption: 'Camera Installation' },
  { src: '/videos/relink.mp4',      poster: '/images/relink-poster.jpg',      caption: 'Badge Access Control' },
  { src: '/videos/queen-annes.mp4', poster: '/images/queen-annes-poster.jpg', caption: 'Network & Connectivity' },
];

const BR       = 3;  // border-radius — sharp corners suit a security brand
const SW       = 6;  // stroke width — doubled
const DURATION = 5;  // seconds per card

function getCardSize(): number {
  if (typeof window === 'undefined') return 180;
  if (window.innerWidth <= 600)  return 110;
  if (window.innerWidth <= 1024) return 140;
  return 180;
}

function calcPerim(size: number): number {
  const RW = size - SW;
  const RH = size - SW;
  return 2 * (RW - 2 * BR) + 2 * (RH - 2 * BR) + 2 * Math.PI * BR;
}

interface Props { className?: string; }

export default function VideoThumbs({ className }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [reduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [cardSize, setCardSize] = useState(getCardSize);

  // Keep perimRef current so the RAF closure always uses the right value
  const perimRef = useRef(calcPerim(cardSize));
  useEffect(() => { perimRef.current = calcPerim(cardSize); }, [cardSize]);

  useEffect(() => {
    const onResize = () => setCardSize(getCardSize());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const videoRefs  = useRef<(HTMLVideoElement | null)[]>([null, null, null]);
  const strokeRefs = useRef<(SVGRectElement   | null)[]>([null, null, null]);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef       = useRef<number>(0);
  const timerRef     = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startRef     = useRef<number>(0);
  const activeRef    = useRef(0);
  const visibleRef   = useRef(true);

  const syncBg = (idx: number) => {
    const bg = document.getElementById('vhero-bg-vid') as HTMLVideoElement | null;
    if (!bg) return;
    bg.src    = CARDS[idx].src;
    bg.poster = CARDS[idx].poster;
    bg.load();
    bg.play().catch(() => {});
  };

  const stopRaf   = () => cancelAnimationFrame(rafRef.current);
  const stopTimer = () => { if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; } };

  // rAF drives strokeDashoffset based on wall-clock elapsed vs DURATION
  const startRaf = (idx: number) => {
    stopRaf();
    const rect = strokeRefs.current[idx];
    if (!rect) return;
    startRef.current = performance.now();
    const run = (now: number) => {
      const p = Math.min((now - startRef.current) / (DURATION * 1000), 1);
      rect.style.strokeDashoffset = String(perimRef.current * (1 - p));
      rafRef.current = requestAnimationFrame(run);
    };
    rafRef.current = requestAnimationFrame(run);
  };

  const activateCard = (idx: number) => {
    stopTimer();
    syncBg(idx);
    videoRefs.current.forEach((v, i) => {
      if (!v || i === idx) return;
      v.pause();
      // don't reset currentTime — avoids black frame on seek
    });
    // Reset all progress strokes
    strokeRefs.current.forEach(r => { if (r) r.style.strokeDashoffset = String(perimRef.current); });

    const vid = videoRefs.current[idx];
    if (!vid) return;
    vid.currentTime = 0;
    vid.play().catch(() => {});
    startRaf(idx);

    // Advance after DURATION seconds regardless of video length
    timerRef.current = setTimeout(() => {
      stopRaf();
      const next = (activeRef.current + 1) % CARDS.length;
      activeRef.current = next;
      setActiveIdx(next);
      activateCard(next);
    }, DURATION * 1000);
  };

  useEffect(() => {
    if (reduced) return;
    const t = setTimeout(() => activateCard(0), 80);
    return () => {
      clearTimeout(t);
      stopRaf();
      stopTimer();
      videoRefs.current.forEach(v => { if (v) { v.pause(); } });
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (reduced) return;
    const onVis = () => {
      const vid = videoRefs.current[activeRef.current];
      if (!vid) return;
      if (document.hidden) { vid.pause(); stopRaf(); stopTimer(); }
      else if (visibleRef.current) { vid.play().catch(() => {}); startRaf(activeRef.current); }
    };
    document.addEventListener('visibilitychange', onVis);

    const obs = new IntersectionObserver(([e]) => {
      visibleRef.current = e.isIntersecting;
      const vid = videoRefs.current[activeRef.current];
      if (!vid) return;
      if (!e.isIntersecting) { vid.pause(); stopRaf(); stopTimer(); }
      else if (!document.hidden) { vid.play().catch(() => {}); startRaf(activeRef.current); }
    }, { threshold: 0.1 });
    if (containerRef.current) obs.observe(containerRef.current);

    return () => {
      document.removeEventListener('visibilitychange', onVis);
      obs.disconnect();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = (idx: number) => {
    stopRaf();
    activeRef.current = idx;
    setActiveIdx(idx);
    if (reduced) {
      const vid = videoRefs.current[idx];
      if (vid) { vid.currentTime = 0; vid.play().catch(() => {}); startRaf(idx); }
    } else {
      activateCard(idx);
    }
  };

  // Derived geometry — recomputed on every render when cardSize changes
  const inset = SW / 2;
  const RX = inset, RY = inset;
  const RW = cardSize - SW;
  const RH = cardSize - SW;
  const PERIM = calcPerim(cardSize);

  return (
    <div ref={containerRef} className={className} style={{ display: 'flex', gap: 14, alignItems: 'flex-end' }}>
      {CARDS.map((card, i) => {
        const isActive = i === activeIdx;
        return (
          <button
            key={i}
            onClick={() => handleClick(i)}
            aria-label={card.caption}
            style={{
              position: 'relative',
              width: cardSize,
              height: cardSize,
              borderRadius: BR,
              flexShrink: 0,
              cursor: 'pointer',
              padding: 5,
              outline: 'none',
              display: 'block',
              boxSizing: 'border-box',
              // Glass background — no CSS border, SVG owns the border
              background: 'rgba(255,255,255,0.07)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              border: 'none',
            }}
            onFocus={e => { e.currentTarget.style.boxShadow = '0 0 0 2px #0099ff, 0 0 0 6px rgba(0,153,255,.15)'; }}
            onBlur={e  => { e.currentTarget.style.boxShadow = ''; }}
          >
            {/* Video inset inside the glass frame */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: 1,
              overflow: 'hidden',
            }}>
              <video
                ref={el => { videoRefs.current[i] = el; }}
                src={card.src}
                poster={card.poster}
                muted
                playsInline
                preload="metadata"
                aria-label={card.caption}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  opacity: isActive ? 1 : 0.6,
                  transition: 'opacity 0.35s ease',
                }}
              />
              {/* Left-to-right gradient so caption text stays readable */}
              <div aria-hidden="true" style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)',
                pointerEvents: 'none',
              }} />
              {/* Caption text bottom-left */}
              <span style={{
                position: 'absolute',
                bottom: 8,
                left: 8,
                right: 8,
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 600,
                fontSize: 10,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.88)',
                lineHeight: 1.3,
                pointerEvents: 'none',
                textShadow: '0 1px 4px rgba(0,0,0,0.6)',
              }}>
                {card.caption}
              </span>
            </div>

            {/* SVG border drawn over the glass frame */}
            <svg
              aria-hidden="true"
              style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'visible' }}
              width={cardSize}
              height={cardSize}
              fill="none"
            >
              {/* Static track ring */}
              <rect
                x={RX} y={RY} width={RW} height={RH} rx={BR}
                stroke="rgba(255,255,255,0.13)"
                strokeWidth={SW}
              />
              {/* Progress fill — blue, clockwise, driven by rAF */}
              <rect
                ref={el => { strokeRefs.current[i] = el; }}
                x={RX} y={RY} width={RW} height={RH} rx={BR}
                stroke={isActive || (reduced && i === activeIdx) ? '#0099ff' : 'none'}
                strokeWidth={SW}
                strokeDasharray={PERIM}
                strokeDashoffset={PERIM}
                strokeLinecap="butt"
              />
            </svg>
          </button>
        );
      })}
    </div>
  );
}
