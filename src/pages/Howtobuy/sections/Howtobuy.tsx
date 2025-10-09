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
      className="relative min-h-screen w-full overflow-x-hidden  bg-cover bg-[position:70%_center] md:bg-center"
      style={{ backgroundImage: `url(${Howtobuybg})` }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <div className="pt-[72px] text-center md:pt-[65px]">
        <motion.h1 className="font-jack text-[40px] font-normal text-white sm:text-[90px]  2xl:text-[150px]"

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
            <div className={`absolute top-[25%] xl:left-100 2xl:left-160 2xl:top-[35%] xl:top-[30%] h-50 w-[260px] rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-10 py-8 text-left text-white sm:mt-2 md:mt-10 xl:mt-2 2xl:-ml-40 2xl:h-60 2xl:w-[460px] xl:opacity-0 xl:group-hover:opacity-100 2xl:px-12 ${activeIndex === 0 ? 'opacity-100' : 'opacity-0'}  `}>
              <motion.ol className="font-jel list-disc space-y-4 2xl:text-[20px]"
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
              className="absolute top-[45%] left-1/2 z-0 h-auto w-[243px] max-w-full -translate-x-1/2 transform group-hover:scale-90 md:top-[48%] 2xl:top-[55%]"
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
