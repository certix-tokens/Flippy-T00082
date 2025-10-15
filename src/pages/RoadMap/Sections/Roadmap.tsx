import { useState, useEffect } from 'react';
import Roadmapbg from '../../../assets/Images/roadmapbg.png';
import gif1 from '../../../assets/Images/gif/2gif.gif';
import gif2 from '../../../assets/Images/gif/1gif.gif';
import gif3 from '../../../assets/Images/gif/5gif.gif';
import gif4 from '../../../assets/Images/gif/3gif.gif';
import gif5 from '../../../assets/Images/gif/4gif.gif';

function Roadmap() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleOpacity = (index: number) =>
    setActiveIndex((prev) => (prev === index ? null : index));

  const pengs = [gif1, gif2, gif3, gif4, gif5];

  // prevent horizontal scroll bar on mobile
  useEffect(() => {
    const prev = document.body.style.overflowX;
    document.body.style.overflowX = 'hidden';
    return () => { document.body.style.overflowX = prev; };
  }, []);

  // ---- Penguin Positions (desktop+) ----
  const pengPos: string[] = [
    'sm:left-[10%] sm:bottom-[14%] md:left-[12%] md:bottom-[16%] xl:left-[14%] xl:bottom-[8%] 2xl:left-[16%] 2xl:bottom-[11%]',
    'sm:left-[30%] sm:bottom-[24%] md:left-[32%] md:bottom-[24%] xl:left-[34%] xl:bottom-[18%] 2xl:left-[36%] 2xl:bottom-[19%]',
    'sm:left-1/2 sm:bottom-[24%] md:left-1/2 md:bottom-[24%] xl:left-1/2 xl:bottom-[20%] 2xl:left-1/2 2xl:bottom-[21%]',
    'sm:left-[70%] sm:bottom-[24%] md:left-[68%] md:bottom-[24%] xl:left-[66%] xl:bottom-[18%] 2xl:left-[64%] 2xl:bottom-[19%]',
    'sm:left-[90%] sm:bottom-[14%] md:left-[88%] md:bottom-[16%] xl:left-[86%] xl:bottom-[8%] 2xl:left-[84%] 2xl:bottom-[11%]',
  ];

  // ---- Tooltip Positions (desktop+) ----
  const tipPos: string[] = [
    '-top-[70px] -left-[10px] sm:-top-[70px] md:-top-[90px] xl:-top-[90px]',
    '-top-[90px] left-[10px]  sm:-top-[60px] md:-top-[80px] xl:-top-[90px]',
    '-top-[110px] left-1/2 -translate-x-1/2 sm:-top-[60px] md:-top-[60px] xl:-top-[90px]',
    '-top-[90px]  left-[10px]  sm:-top-[60px] md:-top-[80px] xl:-top-[90px]',
    '-top-[70px]  left-[10px]  sm:-top-[60px] md:-top-[60px] xl:-top-[100px]',
  ];

  // ---- Penguin Sizes per screen ----
  const pengSize: string[] = [
    'h-[90px]  sm:h-[120px] md:h-[160px] xl:h-[200px] 2xl:h-[240px]',
    'h-[100px] sm:h-[130px] md:h-[170px] xl:h-[210px] 2xl:h-[250px]',
    'h-[110px] sm:h-[140px] md:h-[180px] xl:h-[220px] 2xl:h-[260px]',
    'h-[100px] sm:h-[130px] md:h-[170px] xl:h-[210px] 2xl:h-[250px]',
    'h-[90px]  sm:h-[120px] md:h-[160px] xl:h-[200px] 2xl:h-[240px]',
  ];

  // ====== SHOWTIME (entrance + post-show loop) ======
  const [lightsDim, setLightsDim] = useState(0.88); // start dark
  const [entered, setEntered] = useState<boolean[]>(Array(pengs.length).fill(false));
  const [highlight, setHighlight] = useState<number | null>(null);
  const [showLoopLights, setShowLoopLights] = useState(false); // music-stage lights after entrance

  useEffect(() => {
    const ENTER_DELAY = 700;   // gap between penguins
    const ENTER_DUR = 950;     // penguin enter animation duration
    const SPOTLIGHT_MS = 1000; // spotlight linger
    const START_DELAY = 400;   // pause before first penguin
    document.documentElement.style.setProperty('--enter-dur', `${ENTER_DUR}ms`);
    document.documentElement.style.setProperty('--spotlight-dur', `${SPOTLIGHT_MS}ms`);

    const timers: number[] = [];
    timers.push(window.setTimeout(() => setLightsDim(0.82), START_DELAY));

    pengs.forEach((_, i) => {
      const t = START_DELAY + 300 + i * ENTER_DELAY;
      timers.push(
        window.setTimeout(() => {
          setEntered((prev) => { const c = [...prev]; c[i] = true; return c; });
          setHighlight(i);
          window.setTimeout(() => setHighlight((p) => (p === i ? null : p)), SPOTLIGHT_MS);
          const target = Math.max(0.18, 0.88 - (i + 1) * 0.14);
          setLightsDim((prev) => (prev > target ? target : prev));
        }, t)
      );
    });

    // when entrance done -> lights up + start loop lights
    const endAt = START_DELAY + 300 + (pengs.length - 1) * ENTER_DELAY + ENTER_DUR + 400;
    timers.push(
      window.setTimeout(() => {
        setLightsDim(0);
        setShowLoopLights(true);
      }, endAt + 900)
    );

    return () => { timers.forEach(clearTimeout); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* keyframes for entrance + stage lights */}
      <style>{`
        /* entrance */
        @keyframes pengEnter {
          0%   { opacity: 0; transform: translateY(32px) scale(0.985); }
          40%  { opacity: 1; transform: translateY(6px)  scale(1.005); }
          70%  { opacity: 1; transform: translateY(-2px) scale(1.010); }
          100% { opacity: 1; transform: translateY(0)    scale(1.000); }
        }
        .animate-peng-enter {
          animation: pengEnter var(--enter-dur, 950ms) cubic-bezier(.22,.68,.2,1) both;
        }
        @keyframes spotlightPop {
          0%   { opacity: 0; transform: scale(0.9); }
          45%  { opacity: .6; transform: scale(1.04); }
          100% { opacity: 0; transform: scale(1.0); }
        }
        .animate-spotlight {
          animation: spotlightPop var(--spotlight-dur, 1000ms) ease-out forwards;
        }

        /* === post-show music stage === */

        /* sweeping beams: swing gently L<->R and pulse */
        @keyframes sweepYaw {
          0%   { transform: rotate(-18deg); }
          50%  { transform: rotate( 18deg); }
          100% { transform: rotate(-18deg); }
        }
        @keyframes beamPulse {
          0%,100% { opacity: .25; }
          50%     { opacity: .55; }
        }

        /* color wash across scene (very subtle) */
        @keyframes washHue {
          0%   { filter: hue-rotate(0deg)    saturate(1.0) brightness(1.0); }
          50%  { filter: hue-rotate(24deg)   saturate(1.05) brightness(1.02); }
          100% { filter: hue-rotate(0deg)    saturate(1.0) brightness(1.0); }
        }

        /* shimmer on the stage glow band */
        @keyframes glowBreathe {
          0%,100% { opacity: .55; }
          50%     { opacity: .85; }
        }

        /* tiny idle bob for penguins */
        @keyframes bob {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-3px); }
        }
        .animate-bob {
          animation: bob 2600ms ease-in-out infinite;
        }
      `}</style>

      {/* wrapper */}
      <div className="relative min-h-[100svh] md:h-[100vh] w-full overflow-x-hidden overflow-y-auto">
        {/* background */}
        <div
          className="relative inset-0 min-h-[100svh] md:h-[100vh] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${Roadmapbg})` }}
        >
          {/* global dim overlay during entrance */}
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-black transition-opacity duration-[900ms] ease-[cubic-bezier(.22,.68,.2,1)]"
            style={{ opacity: lightsDim }}
          />

          {/* subtle post-show color wash (desktop only) */}
          {showLoopLights && (
            <div className="hidden sm:block pointer-events-none absolute inset-0 z-[1] animate-[washHue_10s_ease-in-out_infinite]">
              {/* faint gradient overlay; mix as screen to tint highlights only */}
              <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/0 via-cyan-400/5 to-amber-300/10 mix-blend-screen" />
            </div>
          )}

          {/* Title */}
          <div className="relative z-[2] pt-[90px] text-center md:pt-[100px]">
            <h1 className="font-jack text-5xl font-normal text-white md:text-7xl xl:text-8xl">
              ROAD MAP
            </h1>
          </div>

          {/* ---------- MOBILE (pyramid) ---------- */}
          <div className="relative z-[2] mt-10 grid grid-cols-1 gap-10 px-4 pb-24 sm:hidden">
            {[gif1, gif2, gif3, gif4, gif5].map((src, i) => (
              <div
                key={i}
                className="group flex cursor-pointer items-start justify-center gap-4"
                onClick={() => toggleOpacity(i)}
              >
                <img src={src} alt={`Road map stage ${i + 1}`} className="h-auto w-24 shrink-0" />
                <div
                  className={`h-auto max-w-[200px] rounded-[11px] bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-[14px] py-[14px] transition-opacity duration-500 ease-[cubic-bezier(.22,.68,.2,1)] ${
                    activeIndex === i ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <p className="font-jel text-center text-[12px] text-white">{`S-${i + 1}`}</p>
                  <p className="font-jel text-center text-[12px] text-white">
                    This is a short explanation. make it short and clear to keep students attentive.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ---------- DESKTOP SHOWTIME ---------- */}
          <div className="hidden sm:block">
            {/* stage glow band */}
            <div
              className={`pointer-events-none absolute inset-x-[10%] bottom-[10%] z-[2] h-12 rounded-full blur-2xl bg-amber-200/35 ${
                showLoopLights ? 'animate-[glowBreathe_5s_ease-in-out_infinite]' : 'opacity-70'
              }`}
            />

            {/* post-show moving rigs (beams) */}
            {showLoopLights && (
              <div className="pointer-events-none absolute left-1/2 top-[10%] z-[2] w-[1200px] max-w-[92%] -translate-x-1/2">
                <div className="relative mx-auto grid max-w-[980px] grid-cols-6 gap-3">
                  {/* 4 beams with different timings/directions */}
                  {[0, 1, 2, 3].map((b) => (
                    <div key={b} className="relative h-10 w-10 place-self-center">
                      {/* head */}
                      <div className="absolute inset-0 rounded-full bg-neutral-300/60 shadow-[0_0_20px_6px_rgba(255,255,255,0.2)]" />
                      {/* beam */}
                      <div
                        className={`
                          absolute left-1/2 top-full h-[30vh] w-[24vw] -translate-x-1/2 origin-top
                          bg-gradient-to-b from-white/35 via-white/10 to-transparent
                          blur-[1px] mix-blend-screen
                          ${b % 2 ? 'animate-[sweepYaw_8s_ease-in-out_infinite]' : 'animate-[sweepYaw_10s_ease-in-out_infinite]'}
                        `}
                        style={{
                          animationDirection: b % 2 ? 'alternate' as const : 'alternate-reverse' as const,
                          animationDelay: `${b * 0.6}s`,
                          opacity: 0.35,
                        }}
                      />
                      {/* beam pulse */}
                      <div
                        className="absolute left-1/2 top-full h-[24vh] w-[18vw] -translate-x-1/2 origin-top bg-gradient-to-b from-white/30 via-white/8 to-transparent mix-blend-screen animate-[beamPulse_6s_ease-in-out_infinite]"
                        style={{ animationDelay: `${b * 0.8}s` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* penguins layer */}
            <div className="absolute inset-0 z-[3]">
              {pengs.map((src, i) => (
                <div
                  key={i}
                  className={`group absolute z-30 flex items-end justify-center -translate-x-1/2 ${pengPos[i]} ${
                    entered[i] ? 'animate-peng-enter' : 'opacity-0'
                  }`}
                  onClick={() => toggleOpacity(i)}
                >
                  {/* landing spotlight */}
                  <div
                    className={`pointer-events-none absolute -bottom-2 left-1/2 h-12 w-28 -translate-x-1/2 rounded-full bg-amber-100/40 blur-md ${
                      highlight === i ? 'animate-spotlight' : 'opacity-0'
                    }`}
                  />
                  {/* tooltip */}
                  <div
                    className={`absolute ${tipPos[i]} w-[160px] rounded-[11px] bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-3 py-3 text-white shadow-xl transition-opacity duration-400 ease-[cubic-bezier(.22,.68,.2,1)] md:w-[200px] xl:w-[240px] ${
                      activeIndex === i ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'
                    }`}
                  >
                    <p className="font-jel text-center text-[10px] md:text-[12px] xl:text-[16px]">{`S-${i + 1}`}</p>
                    <p className="font-jel text-left text-[10px] md:text-[12px] xl:text-[16px]">
                      This is a short explanation. make it short and clear to keep students
                    </p>
                  </div>
                  {/* penguin (idle bob once show lights start) */}
                  <img
                    src={src}
                    alt={`Penguin ${i + 1}`}
                    className={`${pengSize[i]} w-auto select-none object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.45)] transition-transform duration-400 ease-[cubic-bezier(.22,.68,.2,1)] group-hover:-translate-y-1 ${showLoopLights ? 'animate-bob' : ''}`}
                    draggable={false}
                    style={{ animationDelay: showLoopLights ? `${i * 0.2}s` : undefined }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Roadmap;
