// src/components/Join/Join.tsx
import Joinbg from '../../../assets/Images/joinbg.webp';
import { motion, Variants } from 'framer-motion';
import Tele from '../../../assets/Images/svg/Vector.svg';
import twitter from '../../../assets/Images/svg/twitter(6).svg';
import chart from '../../../assets/Images/svg/1952841104.svg';
import z from '../../../assets/Images/svg/Vector (1).svg';
import Joinimggif from '../../../assets/Images/gif/4gif.gif';
import { useState } from 'react';

type Item = {
  class: string;
  path: string;
};

const items: Item[] = [
  { class: 'w-8 h-8 md:w-16 md:h-16', path: Tele },
  { class: 'w-8 h-8 md:w-16 md:h-16', path: twitter },
  { class: 'w-8 h-8 md:w-16 md:h-16', path: chart },
  { class: 'w-8 h-8 md:w-16 md:h-16', path: z },
];

function Join() {
  const titleVariant: Variants = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.6, duration: 2, type: 'spring', stiffness: 100 },
    },
  };

  const [isSpinning, setIsSpinning] = useState(false);

  return (
    <div className="relative h-[86.5vh] overflow-hidden">
      {/* Background Layer */}
      <motion.div
        className="relative inset-0 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${Joinbg})` }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        {/* Floating GIF anchored to background */}
        <motion.img
          src={Joinimggif}
          alt="Join Animation"
          onClick={() => setIsSpinning(!isSpinning)}
          className="absolute top-[50%] md:top-[50%] lg:top-[40%] 2xl:top-[45%] 2xl:right-70  xl:right-40 xl:top-[48%] md:right-0 right-20 w-[180px] sm:w-[200px] md:w-[230px] lg:w-[260px] xl:w-[200px] 2xl:w-[300px] cursor-pointer"
          style={{ transformOrigin: 'center center', perspective: 1000 }}
          animate={{
            rotateY: isSpinning ? 360 : 0,
          }}
          transition={{
            duration: 1.5,
            ease: 'linear',
            repeat: isSpinning ? 1 : 0,
          }}
        />

        {/* Foreground Content */}
        <div className="flex min-h-screen items-start justify-center px-4 sm:px-6 md:px-0">
          <div className="absolute top-[10%] max-w-[300px] text-center sm:max-w-[500px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1000px] 2xl:max-w-[1592px]">
            {/* Heading */}
            <motion.h1
              className="font-jack mx-auto text-4xl font-normal break-words text-white sm:text-[45px] md:text-[90px] 2xl:text-[150px]"
              variants={titleVariant}
              initial="hidden"
              animate="show"
            >
              JOIN COMMUNITY
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              className="font-jel mx-auto mt-10 text-sm text-[10px] break-words text-white sm:mt-6 sm:text-left sm:text-[12px] md:text-lg lg:text-[15px] xl:text-[15px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              This is a short explanation. Flippy is a fun and interactive
              platform. Keep it short, clear, and engaging to capture attention.
              Flippy is a fun and interactive platform. Keep it short, clear,
              and engaging to capture attention. This is a short explanation.
              Make it short and clear to keep students attentive. This is a
              short explanation.
            </motion.p>

            {/* Social Icons */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-14 md:flex-1">
              {items.map((item, index) => (
                <div className="flex justify-center" key={index}>
                  <motion.img
                    src={item.path}
                    className={`${item.class} mt-10 object-contain sm:mt-15 md:mt-20 lg:mt-15 xl:mt-10`}
                    alt={`icon-${index}`}
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      filter:
                        'drop-shadow(0 0 8px rgba(255,255,255,0.7))',
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 15,
                    }}
                    variants={titleVariant}
                    initial="hidden"
                    animate="show"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Join;
