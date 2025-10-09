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
    <div className="relative h-[86.5vh] overflow-x-hidden overflow-y-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-[position:70%_center] md:bg-center"
        style={{ backgroundImage: `url(${Tokenbg})` }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className="mt-[100px] text-center">
          <motion.h1
            className="font-jack text-[40px] font-normal text-white md:text-[90px] 2xl:text-[150px]"
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
              className={`-h-30 absolute top-[47%] left-2 rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-4 2xl:px-10 2xl:py-10 text-center text-white transition-opacity duration-300 sm:top-[42%] sm:left-15 md:top-[40%] md:opacity-0 md:group-hover:opacity-100 lg:top-[40%] lg:left-50 lg:text-[15px] xl:top-[40%] xl:left-40 xl:w-[200px] 2xl:top-[40%] 2xl:left-80 ${activeIndex === 0 ? 'opacity-100' : 'opacity-0'}`}
            >
              <p className="font-jel">0%</p>
              <p className="font-jel">Buy Tax</p>
            </div>
            <div className="flex">
              <motion.img
                src={Toke1}
                alt="Token 1"
                className="absolute top-[60%] left-2 h-auto w-[150px] sm:top-[55%] sm:left-10 sm:w-[200px] md:top-[49%] md:left-10 md:w-[250px] md:group-hover:top-[52%] lg:top-[48%] lg:left-35 lg:group-hover:top-[50%] xl:top-[48%] xl:w-[250px] xl:group-hover:top-[50%] 2xl:top-[35%] 2xl:left-60 2xl:w-[447px]"
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
              className={`absolute top-[55%] 2xl:h-30 md:20 rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-4  2xl:px-10 2xl:py-10 text-center text-white transition-opacity duration-300 sm:top-[50%] md:top-[47%] md:opacity-0 md:group-hover:opacity-100 lg:top-[48%] xl:top-[43%] xl:w-[200px] 2xl:top-[40%] ${activeIndex === 1 ? 'opacity-100' : 'opacity-0'} `}
            >
              <p className="font-jel">0%</p>
              <p className="font-jel">Sell Tax</p>
            </div>
            <div className="flex justify-center">
              <motion.img
                src={Toke2}
                alt="Token 2"
                className="absolute top-[65%] h-auto w-[150px] sm:top-[58%] sm:w-[200px] md:top-[53%] md:w-[250px] md:group-hover:top-[55%] lg:top-[52%] lg:group-hover:top-[55%] xl:top-[48%] xl:w-[250px] xl:group-hover:top-[50%] 2xl:top-[40%] 2xl:w-[447px] 2xl:group-hover:top-[45%]"
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
              className={`absolute top-[47%] right-2 2xl:h-30 md:h-20 text-center rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-4  2xl:px-10 2xl:py-10text-center text-white transition-opacity duration-300 sm:top-[43%] sm:right-15 md:top-[40%] md:right-25 md:opacity-0 md:group-hover:opacity-100 lg:top-[42%] lg:right-45 lg:text-[15px] xl:top-[40%] xl:right-40 xl:w-[200px] 2xl:top-[37%] 2xl:right-60 ${activeIndex === 2 ? 'opacity-100' : 'opacity-0'} `}
            >
              <p className="font-jel">0%</p>
              <p className="font-jel">Liquiity Tax</p>
            </div>

            <div className="flex">
              <motion.img
                src={Toke3}
                alt="Token 3"
                className="absolute top-[60%] right-2 h-auto w-[150px] sm:top-[55%] sm:right-10 sm:w-[200px] md:top-[50%] md:right-15 md:w-[250px] lg:top-[48%] lg:right-35 lg:group-hover:top-[52%] xl:top-[48%] xl:w-[250px] xl:group-hover:top-[50%] 2xl:top-[35%] 2xl:w-[447px] 2xl:group-hover:top-[45%]"
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
