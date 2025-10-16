import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Roadmapbg from '../../../assets/Images/roadmapbg.png';
import gif1 from '../../../assets/Images/gif/2gif.gif';
import gif2 from '../../../assets/Images/gif/1gif.gif';
import gif3 from '../../../assets/Images/gif/5gif.gif';
import gif4 from '../../../assets/Images/gif/3gif.gif';
import gif5 from '../../../assets/Images/gif/4gif.gif';

function Roadmap() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleOpacity = (index: number) =>
    setActiveIndex(activeIndex === index ? null : index);

  const pengs = [gif1, gif2, gif3, gif4, gif5];

  // keep body from horizontal scroll
  useEffect(() => {
    const prev = document.body.style.overflowX;
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = prev;
    };
  }, []);

  // ---- Positions / tooltip positions / sizes (unchanged) ----
  const pengPos: string[] = [
    'sm:left-[10%] sm:bottom-[14%] md:left-[12%] md:bottom-[16%] xl:left-[14%] xl:bottom-[8%] 2xl:left-[16%] 2xl:bottom-[11%]',
    'sm:left-[30%] sm:bottom-[24%] md:left-[32%] md:bottom-[24%] xl:left-[34%] xl:bottom-[18%] 2xl:left-[36%] 2xl:bottom-[19%]',
    'sm:left-1/2 sm:bottom-[24%] md:left-1/2 md:bottom-[24%] xl:left-1/2 xl:bottom-[20%] 2xl:left-1/2 2xl:bottom-[21%]',
    'sm:left-[70%] sm:bottom-[24%] md:left-[68%] md:bottom-[24%] xl:left-[66%] xl:bottom-[18%] 2xl:left-[64%] 2xl:bottom-[19%]',
    'sm:left-[90%] sm:bottom-[14%] md:left-[88%] md:bottom-[16%] xl:left-[86%] xl:bottom-[8%] 2xl:left-[84%] 2xl:bottom-[11%]',
  ];

  const tipPos: string[] = [
    '-top-[70px] -left-[10px] sm:-top-[70px] md:-top-[90px] xl:-top-[90px]',
    '-top-[90px] left-[px] sm:-top-[60px] md:-top-[80px] xl:-top-[90px]',
    '-top-[110px] left-1/2 -translate-x-1/2 sm:-top-[60px] md:-top-[60px] xl:-top-[90px]',
    '-top-[90px] left-[px] sm:-top-[60px] md:-top-[80px] xl:-top-[90px]',
    '-top-[70px] left-[px] sm:-top-[60px] md:-top-[60px] xl:-top-[100px]',
  ];

  const pengSize: string[] = [
    'h-[90px]  sm:h-[120px] md:h-[160px] xl:h-[200px] 2xl:h-[240px]',
    'h-[100px] sm:h-[130px] md:h-[170px] xl:h-[210px] 2xl:h-[250px]',
    'h-[110px] sm:h-[140px] md:h-[180px] xl:h-[220px] 2xl:h-[260px]',
    'h-[100px] sm:h-[130px] md:h-[170px] xl:h-[210px] 2xl:h-[250px]',
    'h-[90px]  sm:h-[120px] md:h-[160px] xl:h-[200px] 2xl:h-[240px]',
  ];

  // ---- Framer Motion: parent + smoother children ----
  const parentVariants = {
    hidden: {},
    show: {
      transition: {
        // gentler rhythm
        delayChildren: 0.18,
        staggerChildren: 0.12,
        when: 'beforeChildren',
      },
    },
  } as const;

  // unified spring for buttery motion
  const SPRING = {
    type: 'spring' as const,
    stiffness: 90,
    damping: 18,
    mass: 0.6,
    bounce: 0.12,
    restDelta: 0.001,
  };

  const pengVariants = [
    // 1️⃣ from left
    {
      hidden: { x: '-45vw', y: 0, scale: 0.9 },
      show:   { x: 0, y: 0, scale: 1, transition: SPRING },
    },
    // 2️⃣ bottom-left → top-right (slight angle)
    {
      hidden: { x: '-20vw', y: '100vh', scale: 0.85, rotate: -5 },
      show:   { x: 0, y: 0, scale: 1, rotate: 0, transition: SPRING },
    },
    // 3️⃣ straight bottom (center)
    {
      hidden: { y: '100vh', scale: 0.9 },
      show:   { y: 0, scale: 1, transition: SPRING },
    },
    // 4️⃣ bottom-right → top-left (slight angle)
    {
      hidden: { x: '20vw', y: '100vh', scale: 0.85, rotate: 5 },
      show:   { x: 0, y: 0, scale: 1, rotate: 0, transition: SPRING },
    },
    // 5️⃣ from right
    {
      hidden: { x: '45vw', y: 0, scale: 0.9 },
      show:   { x: 0, y: 0, scale: 1, transition: SPRING },
    },
  ] as const;

  return (
    <div className="relative min-h-[100svh] md:h-[100vh] w-full overflow-x-hidden overflow-y-auto">
      <div
        className="relative inset-0 min-h-[100svh] md:h-[100vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${Roadmapbg})` }}
      >
        {/* Title (unchanged) */}
        <div className="pt-[90px] text-center md:pt-[100px]">
          <h1 className="font-jack text-5xl font-normal text-white md:text-7xl xl:text-8xl 2xl:text-[90px]">
            ROAD MAP
          </h1>
        </div>

        {/* ---------- MOBILE (original pyramid 1-2-2) ---------- */}
        <motion.div
          className="mt-10 grid grid-cols-1 gap-10 px-4 pb-24 sm:hidden"
          variants={parentVariants}
          initial="hidden"
          animate="show"
        >
          {[gif1, gif2, gif3, gif4, gif5].map((src, i) => (
            <motion.div
              key={i}
              className="group flex cursor-pointer items-start justify-center gap-4 will-change-transform"
              onClick={() => toggleOpacity(i)}
              variants={pengVariants[i]}
            >
              {/* prevent images from pushing layout wide */}
              <img
                src={src}
                alt={`Road map stage ${i + 1}`}
                className="h-auto w-24 shrink-0"
                draggable={false}
              />
              <div
                className={`h-auto max-w-[200px] rounded-[11px] bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-[14px] py-[14px] transition-opacity duration-300 ${
                  activeIndex === i ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="font-jel text-center text-[12px] text-white">{`S-${i + 1}`}</p>
                <p className="font-jel text-center text-[12px] text-white">
                  This is a short explanation. make it short and clear to keep students attentive.
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ---------- DESKTOP (positions/sizes/tooltips) ---------- */}
        <div className="hidden sm:block">
          <motion.div
            className="absolute inset-0"
            variants={parentVariants}
            initial="hidden"
            animate="show"
          >
            {pengs.map((src, i) => (
              <motion.div
                key={i}
                className={`group absolute z-30 flex items-end justify-center -translate-x-1/2 will-change-transform ${pengPos[i]}`}
                onClick={() => toggleOpacity(i)}
                variants={pengVariants[i]} // unique motion per penguin
              >
                {/* Tooltip (unchanged behavior) */}
                <div
                  className={`absolute ${tipPos[i]} w-[160px] rounded-[11px] bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-3 py-3 text-white shadow-xl transition-opacity duration-300 md:w-[200px] xl:w-[240px] ${
                    activeIndex === i ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'
                  }`}
                >
                  <p className="font-jel text-center text-[10px] md:text-[12px] xl:text-[16px]">{`S-${i + 1}`}</p>
                  <p className="font-jel text-left text-[10px] md:text-[12px] xl:text-[16px]">
                    This is a short explanation. make it short and clear to keep students
                  </p>
                </div>

                {/* Penguin image (responsive size, unchanged classes) */}
                <img
                  src={src}
                  alt={`Penguin ${i + 1}`}
                  className={`${pengSize[i]} w-auto select-none object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.45)] transition-all duration-300 group-hover:-translate-y-1`}
                  draggable={false}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* subtle footlight glow (unchanged) */}
          <div className="pointer-events-none absolute inset-x-[10%] bottom-[10%] h-12 rounded-full bg-amber-200/25 blur-2xl" />
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
