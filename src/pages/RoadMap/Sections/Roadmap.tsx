import { useEffect, useMemo, useState, useRef } from 'react';
import Roadmapbg from '../../../assets/Images/roadmapbg.png';
import gif1 from '../../../assets/Images/gif/2gif.gif';
import gif2 from '../../../assets/Images/gif/1gif.gif';
import gif3 from '../../../assets/Images/gif/5gif.gif';
import gif4 from '../../../assets/Images/gif/3gif.gif';
import gif5 from '../../../assets/Images/gif/4gif.gif';

function Roadmap() {
  // ------------------ STATE
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // tooltip toggle
  const [focus, setFocus] = useState<number | null>(null);             // focused penguin
  const [lightsDim, setLightsDim] = useState(0.88);                    // house lights dimmer 0..1
  const [entered, setEntered] = useState<boolean[]>([false, false, false, false, false]);
  const [highlight, setHighlight] = useState<number | null>(null);     // landing spotlight burst
  const [showLoopLights, setShowLoopLights] = useState(false);         // post-show light rig
  const [speed, setSpeed] = useState(1.0);                             // 0.5×–1.5× speed
  const [rigOn, setRigOn] = useState(true);                            // beams on/off
  const [washOn, setWashOn] = useState(true);                          // color wash on/off
  const [playing, setPlaying] = useState(true);                        // play/pause after show
  const [runId, setRunId] = useState(0);                               // restart key

  const stageRef = useRef<HTMLDivElement>(null);
  const [mx, setMx] = useState(50); // mouse % X
  const [my, setMy] = useState(50); // mouse % Y

  const pengs = [gif1, gif2, gif3, gif4, gif5];

  // ------------------ LAYOUT CONFIG
  const pengPos: string[] = [
    'sm:left-[10%] sm:bottom-[14%] md:left-[12%] md:bottom-[16%] xl:left-[14%] xl:bottom-[8%] 2xl:left-[16%] 2xl:bottom-[11%]',
    'sm:left-[30%] sm:bottom-[24%] md:left-[32%] md:bottom-[24%] xl:left-[34%] xl:bottom-[18%] 2xl:left-[36%] 2xl:bottom-[19%]',
    'sm:left-1/2 sm:bottom-[24%] md:left-1/2 md:bottom-[24%] xl:left-1/2 xl:bottom-[20%] 2xl:left-1/2 2xl:bottom-[21%]',
    'sm:left-[70%] sm:bottom-[24%] md:left-[68%] md:bottom-[24%] xl:left-[66%] xl:bottom-[18%] 2xl:left-[64%] 2xl:bottom-[19%]',
    'sm:left-[90%] sm:bottom-[14%] md:left-[88%] md:bottom-[16%] xl:left-[86%] xl:bottom-[8%] 2xl:left-[84%] 2xl:bottom-[11%]',
  ];

  const tipPos: string[] = [
    '-top-[70px] -left-[10px] sm:-top-[70px] md:-top-[90px] xl:-top-[90px]',
    '-top-[90px] left-[10px]  sm:-top-[60px] md:-top-[80px] xl:-top-[90px]',
    '-top-[110px] left-1/2 -translate-x-1/2 sm:-top-[60px] md:-top-[60px] xl:-top-[90px]',
    '-top-[90px]  left-[10px]  sm:-top-[60px] md:-top-[80px] xl:-top-[90px]',
    '-top-[70px]  left-[10px]  sm:-top-[60px] md:-top-[60px] xl:-top-[100px]',
  ];

  const pengSize: string[] = [
    'h-[90px]  sm:h-[120px] md:h-[160px] xl:h-[200px] 2xl:h-[240px]',
    'h-[100px] sm:h-[130px] md:h-[170px] xl:h-[210px] 2xl:h-[250px]',
    'h-[110px] sm:h-[140px] md:h-[180px] xl:h-[220px] 2xl:h-[260px]',
    'h-[100px] sm:h-[130px] md:h-[170px] xl:h-[210px] 2xl:h-[250px]',
    'h-[90px]  sm:h-[120px] md:h-[160px] xl:h-[200px] 2xl:h-[240px]',
  ];

  // ------------------ UTILS
  // clamp speed and reflect into CSS variables for durations
  const s = Math.min(1.5, Math.max(0.5, speed));
  useEffect(() => {
    // base durations scaled by speed
    const ENTER_DUR = Math.round(950 / s);
    const SPOTLIGHT_MS = Math.round(1000 / s);
    document.documentElement.style.setProperty('--enter-dur', `${ENTER_DUR}ms`);
    document.documentElement.style.setProperty('--spotlight-dur', `${SPOTLIGHT_MS}ms`);
    document.documentElement.style.setProperty('--beam-swing-a', `${Math.round(10000 / s)}ms`);
    document.documentElement.style.setProperty('--beam-swing-b', `${Math.round(8000 / s)}ms`);
    document.documentElement.style.setProperty('--beam-pulse',   `${Math.round(6000 / s)}ms`);
    document.documentElement.style.setProperty('--wash-cycle',   `${Math.round(10000 / s)}ms`);
    document.documentElement.style.setProperty('--glow-breathe', `${Math.round(5000 / s)}ms`);
    document.documentElement.style.setProperty('--bob',          `${Math.round(2600 / s)}ms`);
  }, [s]);

  // prevent horizontal scrollbars on mobile
  useEffect(() => {
    const prev = document.body.style.overflowX;
    document.body.style.overflowX = 'hidden';
    return () => { document.body.style.overflowX = prev; };
  }, []);

  // ------------------ MOUSE SPOTLIGHT (desktop)
  const onMouseMove = (e: React.MouseEvent) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMx(Math.max(0, Math.min(100, x)));
    setMy(Math.max(0, Math.min(100, y)));
  };

  // ------------------ KEYBOARD CONTROL
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setFocus((prev) => (prev === null ? 0 : Math.min(4, prev + 1)));
      } else if (e.key === 'ArrowLeft') {
        setFocus((prev) => (prev === null ? 4 : Math.max(0, prev - 1)));
      } else if (e.key === 'Enter') {
        setActiveIndex((prev) => {
          if (focus === null) return prev;
          return prev === focus ? null : focus;
        });
      } else if (e.key === 'Escape') {
        setFocus(null);
        setActiveIndex(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [focus]);

  // ------------------ SHOW SEQUENCE (entrance then loop rig)
  useEffect(() => {
    // reset state for a fresh run
    setLightsDim(0.88);
    setEntered([false, false, false, false, false]);
    setHighlight(null);
    setShowLoopLights(false);
    setFocus(null);
    setActiveIndex(null);

    const ENTER_DELAY = Math.round(700 / s); // stagger
    const START_DELAY = Math.round(400 / s);
    const ENTER_DUR = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--enter-dur')) || 950;
    const timers: number[] = [];

    timers.push(window.setTimeout(() => setLightsDim(0.82), START_DELAY));

    pengs.forEach((_, i) => {
      const t = START_DELAY + 300 / s + i * ENTER_DELAY;
      timers.push(
        window.setTimeout(() => {
          setEntered((prev) => {
            const copy = [...prev];
            copy[i] = true;
            return copy;
          });
          setHighlight(i);
          const SPOT = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--spotlight-dur')) || 1000;
          window.setTimeout(() => setHighlight((p) => (p === i ? null : p)), SPOT);

          const target = Math.max(0.18, 0.88 - (i + 1) * 0.14);
          setLightsDim((prev) => (prev > target ? target : prev));
        }, t)
      );
    });

    const endAt = START_DELAY + 300 / s + (pengs.length - 1) * ENTER_DELAY + ENTER_DUR + 400 / s;
    timers.push(
      window.setTimeout(() => {
        setLightsDim(0);
        setShowLoopLights(true);
        setPlaying(true);
      }, endAt + 900 / s)
    );

    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runId, s]);

  // ------------------ STYLES (memo)
  const cursorSpot = useMemo(() => {
    // prettier-ignore
    return `radial-gradient(18vmax 12vmax at ${mx}% ${my}%, rgba(255,255,220,0.14), rgba(255,255,220,0.05) 40%, rgba(0,0,0,0) 60%)`;
  }, [mx, my]);

  // ------------------ HANDLERS
  const togglePenguin = (i: number) => {
    setFocus((prev) => (prev === i ? null : i));         // focus toggle
    setActiveIndex((prev) => (prev === i ? null : i));   // show tooltip
  };
  const replay = () => setRunId((k) => k + 1);

  // ------------------ RENDER
  return (
    <>
      {/* keyframes and animation helpers */}
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

        /* post-show rigs */
        @keyframes sweepYaw {
          0%   { transform: rotate(-18deg); }
          50%  { transform: rotate( 18deg); }
          100% { transform: rotate(-18deg); }
        }
        @keyframes beamPulse {
          0%,100% { opacity: .25; }
          50%     { opacity: .55; }
        }
        @keyframes washHue {
          0%   { filter: hue-rotate(0deg)    saturate(1.0) brightness(1.0); }
          50%  { filter: hue-rotate(24deg)   saturate(1.05) brightness(1.02); }
          100% { filter: hue-rotate(0deg)    saturate(1.0) brightness(1.0); }
        }
        @keyframes glowBreathe {
          0%,100% { opacity: .55; }
          50%     { opacity: .85; }
        }
        @keyframes bob {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-3px); }
        }
      `}</style>

      {/* Controls (top-right) */}
      <div className="pointer-events-auto fixed right-3 top-3 z-[50] hidden select-none sm:flex items-center gap-2 rounded-xl bg-black/40 px-3 py-2 text-white backdrop-blur-md">
        <button
          className="rounded-md bg-white/10 px-2 py-1 text-sm hover:bg-white/20"
          onClick={replay}
          title="Replay show"
        >
          Replay
        </button>
        <button
          className="rounded-md bg-white/10 px-2 py-1 text-sm hover:bg-white/20"
          onClick={() => setPlaying((p) => !p)}
          title="Play / Pause idle lights"
        >
          {playing ? 'Pause Lights' : 'Play Lights'}
        </button>
        <label className="ml-2 flex items-center gap-2 text-xs">
          Speed
          <input
            type="range"
            min={0.5}
            max={1.5}
            step={0.1}
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            className="accent-white"
          />
          <span className="w-10 text-right">{speed.toFixed(1)}×</span>
        </label>
        <label className="ml-2 flex items-center gap-1 text-xs">
          <input type="checkbox" checked={rigOn} onChange={(e) => setRigOn(e.target.checked)} />
          Beams
        </label>
        <label className="ml-1 flex items-center gap-1 text-xs">
          <input type="checkbox" checked={washOn} onChange={(e) => setWashOn(e.target.checked)} />
          Wash
        </label>
      </div>

      {/* wrapper: mobile-safe height + scroll, kill horizontal overflow */}
      <div className="relative min-h-[100svh] md:h-[100vh] w-full overflow-x-hidden overflow-y-auto">
        {/* background image + global dim overlay */}
        <div
          ref={stageRef}
          className="relative inset-0 min-h-[100svh] md:h-[100vh] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${Roadmapbg})` }}
          onMouseMove={onMouseMove}
        >
          {/* global dim overlay during entrance */}
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-black transition-opacity duration-[900ms] ease-[cubic-bezier(.22,.68,.2,1)]"
            style={{ opacity: lightsDim }}
          />

          {/* cursor spotlight (desktop only, subtle) */}
          <div
            className="pointer-events-none absolute inset-0 z-[2] hidden sm:block"
            style={{
              background: cursorSpot,
              mixBlendMode: 'screen',
              opacity: 0.6,
              transition: 'opacity 300ms ease',
            }}
          />

          {/* post-show color wash */}
          {showLoopLights && washOn && (
            <div
              className={`hidden sm:block pointer-events-none absolute inset-0 z-[2]`}
              style={{
                animation: playing ? 'washHue var(--wash-cycle, 10000ms) ease-in-out infinite' : 'none',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-400/0 via-cyan-300/6 to-amber-200/12 mix-blend-screen" />
            </div>
          )}

          {/* Title */}
          <div className="relative z-[3] pt-[90px] text-center md:pt-[100px]">
            <h1 className="font-jack text-5xl font-normal text-white md:text-7xl xl:text-8xl">
              ROAD MAP
            </h1>
          </div>

          {/* ---------- MOBILE (your pyramid) ---------- */}
          <div className="relative z-[3] mt-10 grid grid-cols-1 gap-10 px-4 pb-24 sm:hidden">
            {[gif1, gif2, gif3, gif4, gif5].map((src, i) => (
              <div
                key={i}
                className="group flex cursor-pointer items-start justify-center gap-4"
                onClick={() => {
                  setActiveIndex((prev) => (prev === i ? null : i));
                }}
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
              className={`pointer-events-none absolute inset-x-[10%] bottom-[10%] z-[3] h-12 rounded-full blur-2xl bg-amber-200/35`}
              style={{
                animation: showLoopLights && playing ? 'glowBreathe var(--glow-breathe, 5000ms) ease-in-out infinite' : 'none',
                opacity: lightsDim > 0.3 ? 0.4 : 0.75,
                transition: 'opacity 900ms cubic-bezier(.22,.68,.2,1)',
              }}
            />

            {/* moving beam rigs */}
            {showLoopLights && rigOn && (
              <div className="pointer-events-none absolute left-1/2 top-[10%] z-[3] w-[1200px] max-w-[92%] -translate-x-1/2">
                <div className="relative mx-auto grid max-w-[980px] grid-cols-6 gap-3">
                  {[0, 1, 2, 3].map((b) => (
                    <div key={b} className="relative h-10 w-10 place-self-center">
                      {/* head */}
                      <div className="absolute inset-0 rounded-full bg-neutral-300/60 shadow-[0_0_20px_6px_rgba(255,255,255,0.18)]" />
                      {/* beam A (swing) */}
                      <div
                        className="absolute left-1/2 top-full h-[30vh] w-[24vw] -translate-x-1/2 origin-top bg-gradient-to-b from-white/30 via-white/9 to-transparent blur-[1px] mix-blend-screen"
                        style={{
                          animation: playing
                            ? `sweepYaw var(--beam-swing-a, 10000ms) ease-in-out infinite alternate`
                            : 'none',
                          animationDelay: `${b * 0.6}s`,
                          transformOrigin: 'top center',
                          opacity: 0.35,
                        }}
                      />
                      {/* beam B (pulse) */}
                      <div
                        className="absolute left-1/2 top-full h-[22vh] w-[18vw] -translate-x-1/2 origin-top bg-gradient-to-b from-white/26 via-white/8 to-transparent mix-blend-screen"
                        style={{
                          animation: playing ? `beamPulse var(--beam-pulse, 6000ms) ease-in-out infinite` : 'none',
                          animationDelay: `${b * 0.8}s`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* penguins layer */}
            <div className="absolute inset-0 z-[4]">
              {pengs.map((src, i) => {
                const isFocused = focus === i;
                const isDim = focus !== null && focus !== i;
                return (
                  <div
                    key={i}
                    className={`group absolute z-30 flex items-end justify-center -translate-x-1/2 ${pengPos[i]} ${
                      entered[i] ? 'animate-peng-enter' : 'opacity-0'
                    }`}
                    onClick={() => togglePenguin(i)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') togglePenguin(i);
                    }}
                  >
                    {/* landing spotlight */}
                    <div
                      className={`pointer-events-none absolute -bottom-2 left-1/2 h-12 w-28 -translate-x-1/2 rounded-full bg-amber-100/40 blur-md ${
                        highlight === i ? 'animate-spotlight' : 'opacity-0'
                      }`}
                    />

                    {/* focus ring pulse */}
                    {isFocused && (
                      <div className="pointer-events-none absolute -bottom-3 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full ring-2 ring-amber-200/70 blur-[0.5px]" />
                    )}

                    {/* tooltip */}
                    <div
                      className={`absolute ${tipPos[i]} w-[160px] rounded-[11px] bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-3 py-3 text-white shadow-xl transition-opacity duration-400 ease-[cubic-bezier(.22,.68,.2,1)] md:w-[200px] xl:w-[240px] ${
                        (activeIndex === i || isFocused) ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'
                      }`}
                    >
                      <p className="font-jel text-center text-[10px] md:text-[12px] xl:text-[16px]">{`S-${i + 1}`}</p>
                      <p className="font-jel text-left text-[10px] md:text-[12px] xl:text-[16px]">
                        This is a short explanation. make it short and clear to keep students
                      </p>
                    </div>

                    {/* penguin image */}
                    <img
                      src={src}
                      alt={`Penguin ${i + 1}`}
                      className={`${pengSize[i]} w-auto select-none object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.45)] transition-transform duration-400 ease-[cubic-bezier(.22,.68,.2,1)] ${showLoopLights && playing ? 'animate-[bob_var(--bob,2600ms)_ease-in-out_infinite]' : ''} ${isFocused ? 'scale-[1.08]' : ''} ${isDim ? 'opacity-35 blur-[0.5px]' : ''}`}
                      draggable={false}
                      style={{ animationDelay: showLoopLights ? `${i * 0.2}s` : undefined }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Roadmap;
