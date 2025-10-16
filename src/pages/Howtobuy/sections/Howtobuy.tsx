import Howtobuybg from '../../../assets/Images/howtobuy.webp';
import pengugif from '../../../assets/Images/P1-v2.gif';
import { motion,  Variants  } from 'framer-motion';
import { useState } from 'react';
function HowToBuy() {
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
    <motion.section
      className="relative h-[100vh] w-full overflow-x-hidden  bg-cover bg-[position:70%_center] md:bg-center"
      style={{ backgroundImage: `url(${Howtobuybg})` }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <div className="absolute w-full top-30 text-center">
        <motion.h1 className="font-jack text-[40px] font-normal text-white sm:text-[90px]  2xl:text-[90px]"

        variants={titleVariant}
              initial="hidden"
              animate="show"
                      >
          HOW TO BUY
        </motion.h1>
      </div>

      <div className="mt-8 flex items-center justify-center md:mt-16" onClick={() => toggleOpacity(0)}>
        <div className="grid-col-2 md:grid-row-1 group grid">
          <div className="flex justify-center">
            <div className={`absolute bottom-65 xl:left-110 2xl:left-125 2xl:bottom-100 xl:bottom-50 lg:bottom-60 md:bottom-60 sm:bottom-60  h-50 w-[260px] rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-10 py-8 text-left text-white  xl:h-40 2xl:h-60 xl:w-[200px] 2xl:w-[460px] xl:opacity-0 xl:group-hover:opacity-100 2xl:px-12 ${activeIndex === 0 ? 'opacity-100' : 'opacity-0'}  `}>
              <motion.ol className="font-jel list-disc space-y-4 xl:text-[10px] 2xl:text-[20px]"
              variants={titleVariant}
              initial="hidden"
              animate="show"
              >
                <li>Make Wallet</li>
                <li>Get some eth</li>
                <li>swich eth for & Telang</li>
                <li>Go to uniswap</li>
              </motion.ol>
            </div>
          </div>

          <div className="flex justify-center">
            <motion.img
              src={pengugif}
              alt="How to buy illustration"
              loading="lazy"
              className="absolute bottom-30 left-1/2 z-0 h-auto w-[130px] 2xl:w-[243px] max-w-full -translate-x-1/2 transform group-hover:scale-110 md:bottom-30 xl:bottom-28 2xl:bottom-30 3xl:bottom-40"
              initial={{ x: '50vw', opacity: 0 }}
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
    </motion.section>
  );
}

export default HowToBuy;
