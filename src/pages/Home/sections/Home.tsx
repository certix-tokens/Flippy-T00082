import { motion } from 'framer-motion';
import heroBg from '../../../assets/Images/herobg.webp';
import Tele from '../../../assets/Images/tele.png';
import X from '../../../assets/Images/twitter.png';
import build from '../../../assets/Images/build.png';
import Z from '../../../assets/Images/z.png';

type Item = {
  path: string;
  alt?: string;
};

const items: Item[] = [
  { path: Tele, alt: 'Telegram' },
  { path: X, alt: 'Twitter/X' },
  { path: build, alt: 'Build' },
  { path: Z, alt: 'Z Platform' },
];

// Animation variants
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

function Home() {
  return (
    <div className="relative z-0 min-h-[100svh] md:min-h-[100vh] overflow-x-hidden overflow-y-hidden">
      {/* 🎭 Realistic Stage Curtains */}
      <motion.div
        className="absolute top-0 left-0 z-[50] h-full w-1/2"
        style={{
          background: `
            repeating-linear-gradient(
              90deg,
              #3b0a0a 0%,
              #4d0e0e 3%,
              #2a0505 6%,
              #4d0e0e 9%,
              #3b0a0a 12%
            ),
            linear-gradient(to right, #1a0000, #7b1b1b 40%, #3b0a0a 80%)
          `,
          backgroundBlendMode: 'multiply',
          boxShadow: 'inset -15px 0 25px rgba(0,0,0,0.6)',
        }}
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-4%', '-100%'] }}
        transition={{
          duration: 2.2,
          times: [0, 0.2, 1],
          ease: ['easeInOut', 'easeOut'],
          delay: 0.2,
        }}
      />
      <motion.div
        className="absolute top-0 right-0 z-[50] h-full w-1/2"
        style={{
          background: `
            repeating-linear-gradient(
              90deg,
              #3b0a0a 0%,
              #4d0e0e 3%,
              #2a0505 6%,
              #4d0e0e 9%,
              #3b0a0a 12%
            ),
            linear-gradient(to left, #1a0000, #7b1b1b 40%, #3b0a0a 80%)
          `,
          backgroundBlendMode: 'multiply',
          boxShadow: 'inset 15px 0 25px rgba(0,0,0,0.6)',
        }}
        initial={{ x: 0 }}
        animate={{ x: ['0%', '4%', '100%'] }}
        transition={{
          duration: 2.2,
          times: [0, 0.2, 1],
          ease: ['easeInOut', 'easeOut'],
          delay: 0.2,
        }}
      />

      {/* Background Layer */}
      <motion.div
        className="absolute inset-0 md:h-screen w-screen scale-x-[-1] bg-cover bg-[position:56%_center] md:bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.3, ease: 'easeOut', delay: 0.3 }}
      />

      {/* Content Layer */}
      <motion.div
        className="relative z-10 flex min-h-screen flex-col items-center justify-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.svg
          viewBox="0 0 1200 400"
          className="absolute md:top-[2%] -top-[0%] left-1/2 h-[400px] w-[1200px] -translate-x-1/2"
        >
          <path id="curve" d="M 100 300 Q 600 0 1100 300" fill="transparent" />
          <motion.text
            fill="white"
            className="font-jacks text-[50px] md:text-[100px] 2xl:text-[140px]"
            textAnchor="middle"
            dominantBaseline="middle"
            initial={{ opacity: 0, letterSpacing: '-0.05em', y: 30 }}
            animate={{ opacity: 1, letterSpacing: '0em', y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          >
            <textPath href="#curve" startOffset="50%">
              FLIPPY
            </textPath>
          </motion.text>
        </motion.svg>

        <div className='absolute bottom-[10%] 2xl:bottom-[10%]'>
          <motion.div
            className="mt-[604px] flex w-[500px] justify-center px-2 md:mt-[470px] md:w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="h-40 w-[345px] rounded-2xl bg-[#9318182B]/17 p-6 backdrop-blur-sm md:w-[800px] xl:-mt-50 xl:h-40 2xl:-mt-50 2xl:h-auto 2xl:w-[1000px]">
              <p className="font-jel mb-[20px] hidden px-4 text-[11px] font-medium text-white md:block md:text-[14px] 2xl:text-[20px]">
                Welcome to Flippy!
              </p>
              <p className="font-jel hidden px-4 text-[11px] leading-8 font-medium text-white md:block md:text-[12px] 2xl:text-[20px]">
                Step into the spotlight of penguin-inspired tokens. Join Flippy
                and take center stage in the world of crypto, where excitement
                meets creativity! Waddle your way to exclusive rewards, connect
                with a vibrant community, and shine with every performance.
              </p>
              <p className="font-jel text-[11px] text-white md:hidden">
                This is a short explanation. Flippy is a fun and interactive
                platform. Keep it short, clear, and engaging to capture
                attention. Flippy is a fun and interactive platform. Keep it
                short, clear, and engaging to capture attention. This is a short
                explanation. Make it short and clear to keep students attentive.
                This is a short explanation.
              </p>
            </div>
          </motion.div>

          {/* Buttons Section */}
          <motion.div className="mt-6 hidden gap-[50px] justify-center md:flex xl:-mt-5 2xl:mt-2">
            <motion.button
              className="font-jel rounded-[18px] border border-black bg-gradient-to-b from-[#4B181B] via-[#9B282F] to-[#B13940] text-[24px] text-white md:h-[60px] md:w-[150px] 2xl:h-[66px] 2xl:w-[173px]"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: '0px 10px 25px rgba(0,0,0,0.25)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            >
              Join Now
            </motion.button>
            <motion.button
              className="font-jel rounded-[18px] border border-black bg-gradient-to-b from-[#4B181B] via-[#9B282F] to-[#B13940] text-[24px] text-white md:h-[60px] md:w-[150px] 2xl:h-[66px] 2xl:w-[173px]"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: '0px 10px 25px rgba(0,0,0,0.25)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            >
              Buy Now
            </motion.button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex gap-14 justify-center"
            variants={container}
          >
            {items.map((item, i) => (
              <motion.div key={i} className="flex items-center justify-center">
                <motion.img
                  src={item.path}
                  alt={item.alt ?? ''}
                  className="mt-[36px] mb-4 h-[30px] w-[30px] md:h-[40px] md:w-[40px] md:mb-0"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3 + i * 0.25,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
