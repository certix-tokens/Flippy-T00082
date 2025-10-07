import { motion } from 'framer-motion';
import heroBg from '../../../assets/Images/herobg.png';
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
    <div className="relative z-0 h-auto md:h-[87vh] overflow-y-hidden overflow-x-hidden">
      {/* Stage Curtain Animation */}
      <motion.div
        className="fixed top-0 left-0 w-1/2 h-full bg-black z-[999]"
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{ duration: 1.8, ease: 'easeInOut' }}
      />
      <motion.div
        className="fixed top-0 right-0 w-1/2 h-full bg-black z-[999]"
        initial={{ x: 0 }}
        animate={{ x: '100%' }}
        transition={{ duration: 1.8, ease: 'easeInOut' }}
      />

      {/* Spotlight effect */}
      <motion.div
        className="absolute inset-0 bg-radial from-transparent via-transparent to-black pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 0.2] }}
        transition={{ duration: 2.2, ease: 'easeOut', delay: 1.3 }}
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.8) 100%)',
        }}
      />

      {/* Background Layer */}
      <motion.div
        className="absolute inset-0 scale-x-[-1] bg-cover bg-[position:56%_center] md:bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.3, ease: 'easeOut', delay: 1.2 }}
      />

      {/* Content Layer */}
      <motion.div
        className="relative z-10 flex min-h-screen flex-col items-center justify-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Title Curve */}
        <motion.svg
          viewBox="0 0 1200 400"
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-[1200px] h-[400px]"
        >
          <path id="curve" d="M 100 300 Q 600 0 1100 300" fill="transparent" />
          <motion.text
            fill="white"
            className="font-jacks md:text-[150px] text-[50px]"
            textAnchor="middle"
            dominantBaseline="middle"
            initial={{ opacity: 0, letterSpacing: '-0.05em', y: 30 }}
            animate={{ opacity: 1, letterSpacing: '0em', y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 2 }}
          >
            <textPath href="#curve" startOffset="50%">
              FLIPPY
            </textPath>
          </motion.text>
        </motion.svg>

        {/* Text Section */}
        <motion.div
          className="md:mt-[470px] mt-[604px] flex md:w-full w-[500px] justify-center px-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          <div className="rounded-2xl xl:-mt-60 -mt-60 md:w-[1000px] w-[345px] h-auto bg-[#9318182B]/17 p-6 backdrop-blur-xs xl:h-50">
            <p className="hidden md:block font-jel mb-[20px] px-4 text-[11px] md:text-[20px] font-medium text-white">
              Welcome to Flippy!
            </p>
            <p className="hidden md:block font-jel px-4 text-[11px] md:text-[20px] leading-8 font-medium text-white">
              Step into the spotlight of penguin-inspired tokens. Join Flippy
              and take center stage in the world of crypto, where excitement
              meets creativity! Waddle your way to exclusive rewards, connect
              with a vibrant community, and shine with every performance.
            </p>
            <p className="text-[11px] text-white font-jel md:hidden">
              This is a short explanation. Flippy is a fun and interactive platform. Keep it short, clear, and engaging to capture attention.
            </p>
          </div>
        </motion.div>

        {/* Buttons Section */}
        <motion.div
          className="mt-6 xl:-mt-5 gap-[89px] hidden md:flex"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8 }}
        >
          <motion.button
            className="h-[66px] w-[173px] rounded-[18px] border border-black bg-gradient-to-b from-[#4B181B] via-[#9B282F] to-[#B13940] text-white font-jel text-[24px]"
            whileHover={{ scale: 1.05, y: -2, boxShadow: '0px 10px 25px rgba(0,0,0,0.25)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
          >
            Join Now
          </motion.button>
          <motion.button
            className="h-[66px] w-[173px] rounded-[18px] border border-black bg-gradient-to-b from-[#4B181B] via-[#9B282F] to-[#B13940] text-white font-jel text-[24px]"
            whileHover={{ scale: 1.05, y: -2, boxShadow: '0px 10px 25px rgba(0,0,0,0.25)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
          >
            Buy Now
          </motion.button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="grid grid-cols-4 gap-[36px] xl:-mt-5"
          variants={container}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.8 }}
        >
          {items.map((item, i) => (
            <motion.div key={i} className="flex items-center justify-center">
              <motion.img
                src={item.path}
                alt={item.alt ?? ''}
                className="mt-[36px] h-[40px] w-[40px] mb-4 md:mb-0"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3 + i * 0.25, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.15, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
