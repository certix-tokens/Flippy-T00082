import Tokenbg from '../../../assets/Images/tokenomicsbg.webp';
import Toke1 from '../../../assets/Images/toke1.png';
import Toke2 from '../../../assets/Images/toke2.png';
import Toke3 from '../../../assets/Images/toke3.png';
import { motion, Variants } from 'framer-motion';

import { useState } from 'react';
function Token() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleOpacity = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const titleVariant: Variants = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.6, duration: 2, type: 'spring', stiffness: 100 },
    },
  };

  return (
    <div className="relative h-[700px] sm:h-[100vh] overflow-x-hidden overflow-y-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-[position:70%_center] md:bg-center"
        style={{ backgroundImage: `url(${Tokenbg})` }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className="mt-[100px] text-center">
          <motion.h1
            className="font-jack text-[40px] font-normal text-white md:text-[90px] 2xl:text-[90px]"
            variants={titleVariant}
            initial="hidden"
            animate="show"
          >
            TOKENOMICS
          </motion.h1>
        </div>

        <div className="mx-auto grid w-full max-w-6xl grid-cols-3 place-items-center justify-center gap-6 py-8 sm:grid-cols-3 lg:grid-cols-3">
          {/* left image */}

          <div
            className="group flex justify-center"
            onClick={() => toggleOpacity(0)}
          >
            <div
              className={`-h-30 2xl:h-30  h-20 absolute bottom-70 left-8 rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-4 2xl:px-10 2xl:py-10 text-center text-white transition-opacity duration-300 sm:bottom-80 sm:left-22 md:bottom-84 md:left-30 md:opacity-0 md:group-hover:opacity-100 lg:bottom-90 lg:left-55 lg:text-[15px] xl:bottom-80 xl:left-40 xl:w-[200px] 2xl:bottom-105 2xl:left-85 ${activeIndex === 0 ? 'opacity-100' : 'opacity-0'}`}
            >
              <p className="font-jel">0%</p>
              <p className="font-jel">Buy Tax</p>
            </div>
            <div className="flex">
              <motion.img
                src={Toke1}
                alt="Token 1"
                className="absolute bottom-35 left-2 h-auto w-[150px] sm:bottom-35 sm:left-10 sm:w-[200px] md:bottom-30 md:left-10 md:w-[250px] md:group-hover:bottom-28 lg:bottom-30 lg:left-35 lg:group-hover:bottom-32 xl:bottom-23 xl:w-[250px] xl:group-hover:bottom-23 2xl:bottom-20 2xl:left-60 2xl:w-[370px]"
                initial={{ x: '-100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: 'tween',
                  ease: [0.22, 1, 0.36, 1],
                  duration: 1.2,
                }}
              />
            </div>
          </div>

          {/* middle image  */}

          <div
            className="group group flex justify-center"
            onClick={() => toggleOpacity(1)}
          >
            <div
              className={`absolute bottom-60 sm:h-20 2xl:h-30 md:20 rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-4  2xl:px-10 2xl:py-10 text-center text-white transition-opacity duration-300 sm:bottom-70 md:bottom-75 md:opacity-0 md:group-hover:opacity-100 lg:bottom-75 xl:bottom-73 xl:w-[200px] 2xl:bottom-95 ${activeIndex === 1 ? 'opacity-100' : 'opacity-0'} `}
            >
              <p className="font-jel">0%</p>
              <p className="font-jel">Sell Tax</p>
            </div>
            <div className="flex justify-center">
              <motion.img
                src={Toke2}
                alt="Token 2"
                className="absolute bottom-30  h-auto w-[150px] sm:bottom-30  sm:w-[200px] md:bottom-25 md:w-[250px] md:group-hover:bottom-23 lg:bottom-25 lg:group-hover:bottom-23 xl:bottom-22 xl:w-[250px] xl:group-hover:bottom-22 2xl:bottom-20 2xl:w-[370px] 2xl:group-hover:bottom-18"
                initial={{ y: '100vw', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: 'tween',
                  ease: [0.22, 1, 0.36, 1],
                  duration: 1.2,
                }}
              />
            </div>
          </div>

          {/* right image  */}
          <div
            className="group flex justify-center"
            onClick={() => toggleOpacity(2)}
          >
            <div
              className={`absolute bottom-70 right-8 2xl:h-30 sm:h-20 text-center rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-4  2xl:px-10 2xl:py-10text-center text-white transition-opacity duration-300 sm:bottom-80 sm:right-20 md:bottom-84 md:right-30 md:opacity-0 md:group-hover:opacity-100 lg:bottom-82 lg:right-50 lg:text-[15px] xl:bottom-75 xl:right-40 xl:w-[200px] 2xl:bottom-100 2xl:right-62 ${activeIndex === 2 ? 'opacity-100' : 'opacity-0'} `}
            >
              <p className="font-jel">0%</p>
              <p className="font-jel">Liquiity Tax</p>
            </div>

            <div className="flex">
              <motion.img
                src={Toke3}
                alt="Token 3"
                className="absolute bottom-35  right-2 h-auto w-[150px] sm:bottom-35  sm:right-10 sm:w-[200px] md:bottom-30 md:right-15 md:w-[250px] lg:bottom-30 lg:right-35 md:group-hover:bottom-28 lg:group-hover:bottom-28 xl:bottom-22 xl:w-[250px] xl:group-hover:bottom-22 2xl:bottom-20  2xl:w-[370px] 2xl:group-hover:bottom-18"
                initial={{ x: '100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: 'tween',
                  ease: [0.22, 1, 0.36, 1],
                  duration: 1.2,
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Token;
