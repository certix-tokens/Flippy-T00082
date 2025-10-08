import Roadmapbg from '../../../assets/Images/roadmapbg.png';
import { useState } from 'react';
import gif1 from '../../../assets/Images/gif/2gif.gif';
import gif2 from '../../../assets/Images/gif/1gif.gif';
import gif3 from '../../../assets/Images/gif/5gif.gif';
import gif4 from '../../../assets/Images/gif/3gif.gif';
import gif5 from '../../../assets/Images/gif/4gif.gif';
import { motion, Variants } from 'framer-motion';

function Roadmap() {
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
    <div className="relative h-auto w-full overflow-x-hidden md:h-[86.5vh]">
      <motion.div
        className="relative inset-0 h-auto w-full bg-cover bg-[position:60%_center] sm:bg-[position:60%_center] md:h-[86.5vh] md:bg-center"
        style={{ backgroundImage: `url(${Roadmapbg})` }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className="pt-[100px] text-center">
          <motion.h1
            className="font-jack text-5xl font-normal text-white md:text-7xl xl:text-8xl"
            variants={titleVariant}
            initial="hidden"
            animate="show"
          >
            ROAD MAP
          </motion.h1>
        </div>

        {/* Mobile pyramid layout (1-2-2) */}

        <div className="mt-10 grid grid-cols-1 gap-10 overflow-y-hidden px-4 pb-20 sm:hidden sm:pl-30">
          <div
            className="group flex cursor-pointer justify-center space-x-5 sm:space-x-30"
            onClick={() => toggleOpacity(0)}
          >
            <img src={gif1} alt=" Road map stage 1" className="h-auto w-30" />
            <div
              className={`h-auto max-w-[169px] rounded-[11px] bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-[18px] py-[18px] transition-opacity duration-300 ${activeIndex === 0 ? 'opacity-100' : 'opacity-0'}`}
            >
              <p className="font-jel text-center text-[12px] text-white">S-1</p>
              <p className="font-jel text-center text-[12px] text-white">
                This is a short explanation. make it short and clear to keep
                students attentive.
              </p>
            </div>
          </div>

          <div
            className="group flex cursor-pointer justify-center space-x-5 sm:space-x-30"
            onClick={() => toggleOpacity(1)}
          >
            <img src={gif2} alt="Road map stage 2" className="h-auto w-30" />
            <div
              className={`h-auto max-w-[169px] rounded-[11px] bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-[18px] py-[18px] transition-opacity duration-300 ${activeIndex === 1 ? 'opacity-100' : 'opacity-0'}`}
            >
              <p className="font-jel text-center text-[12px] text-white">S-2</p>
              <p className="font-jel text-center text-[12px] text-white">
                This is a short explanation. make it short and clear to keep
                students attentive.
              </p>
            </div>
          </div>

          <div
            className="group flex cursor-pointer justify-center space-x-5 sm:space-x-30"
            onClick={() => toggleOpacity(2)}
          >
            <img src={gif3} alt="Road map stage 3" className="h-auto w-30" />
            <div
              className={`h-auto max-w-[169px] rounded-[11px] bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-[18px] py-[18px] transition-opacity duration-300 ${activeIndex === 2 ? 'opacity-100' : 'opacity-0'}`}
            >
              <p className="font-jel text-center text-[12px] text-white">S-3</p>
              <p className="font-jel text-center text-[12px] text-white">
                This is a short explanation. make it short and clear to keep
                students attentive.
              </p>
            </div>
          </div>

          <div
            className="group flex cursor-pointer justify-center space-x-5 sm:space-x-30"
            onClick={() => toggleOpacity(3)}
          >
            <img src={gif4} alt="Road map stage 4" className="h-auto w-30" />
            <div
              className={`h-auto max-w-[169px] rounded-[11px] bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-[18px] py-[18px] transition-opacity duration-300 ${activeIndex === 3 ? 'opacity-100' : 'opacity-0'}`}
            >
              <p className="font-jel text-center text-[12px] text-white">S-4</p>
              <p className="font-jel text-center text-[12px] text-white">
                This is a short explanation. make it short and clear to keep
                students attentive.
              </p>
            </div>
          </div>

          <div
            className="group flex cursor-pointer justify-center space-x-5 sm:space-x-30"
            onClick={() => toggleOpacity(4)}
          >
            <img src={gif5} alt="Road map stage 5" className="h-auto w-30" />
            <div
              className={`h-auto max-w-[169px] rounded-[11px] bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-[18px] py-[18px] transition-opacity duration-300 ${activeIndex === 4 ? 'opacity-100' : 'opacity-0'}`}
            >
              <p className="font-jel text-center text-[12px] text-white">S-5</p>
              <p className="font-jel text-center text-[12px] text-white">
                This is a short explanation. make it short and clear to keep
                students attentive.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop layout (unchanged) */}
        <div className="hidden grid-cols-5 px-30 sm:flex md:grid">
          {/* image 1 */}

          <div
            className="group -ml-40 flex flex-row justify-center"
            onClick={() => toggleOpacity(0)}
          >
            <div
              className={`absolute rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-8 text-left text-white transition-opacity duration-300 sm:top-[60%] sm:left-10 sm:h-25 sm:w-[100px] md:top-[51%] md:h-40 md:w-[120px] md:opacity-0 md:group-hover:opacity-100 lg:top-[50%] lg:left-25 lg:w-[180px] xl:top-[43%] xl:w-[260px] 2xl:top-[50%] ${activeIndex === 0 ? 'opacity-100' : 'opacity-0'} `}
            >
              <p className="font-jel text-center sm:text-[6px] md:text-[10px] lg:text-[12px] xl:text-[16px]">
                S-1
              </p>
              <p className="font-jel text-left sm:text-[6px] md:text-[12px] lg:text-[12px] xl:text-[16px]">
                This is a short explanation. make it short and clear to keep
                students
              </p>
            </div>
            <div className="flex">
              <motion.img
                src={gif1}
                alt=""
                className="absolute h-auto sm:top-[68%] sm:left-10 sm:w-[100px] md:top-[62%] md:left-5 md:w-[150px] md:group-hover:top-[65%] lg:top-[59%] lg:w-[170px] lg:group-hover:top-[62%] xl:top-[53%] xl:left-5 xl:w-[222px] xl:group-hover:top-[55%] 2xl:top-[57%] 2xl:left-30 2xl:group-hover:top-[62%] 2xl:group-hover:w-[200px]"
                initial={{ x: '-100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: 'tween',
                  ease: [0.22, 1, 0.36, 1],
                  duration: 1.2,
                  delay: 1.2,
                }}
              />
            </div>
          </div>

          {/* image 2 */}

          <div
            className="group flex flex-row justify-center"
            onClick={() => toggleOpacity(1)}
          >
            <div
           className={`absolute rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-8 text-left text-white transition-opacity duration-300 sm:top-[50%] sm:left-30 sm:h-25 sm:w-[100px] md:top-[48%] md:left-45 md:h-40 md:w-[120px] md:opacity-0 md:group-hover:opacity-100 lg:top-[45%] lg:w-[180px] xl:top-[39%] xl:left-65 xl:w-[260px] 2xl:top-[45%] 2xl:left-115 ${activeIndex === 1 ? 'opacity-100' : 'opacity-0'} `}
            >
              <p className="font-jel text-center sm:text-[6px] md:text-[12px] lg:text-[12px] xl:text-[16px]">
                S-2
              </p>
              <p className="font-jel text-left sm:text-[6px] md:text-[12px] lg:text-[12px] xl:text-[16px]">
                This is a short explanation. make it short and clear to keep
                students
              </p>
            </div>
            <div className="flex">
              <motion.img
                src={gif2}
                alt=""
                className="group-hover:transition-300 absolute h-auto sm:top-[58%] sm:left-30 sm:w-[100px] md:top-[54%] md:left-40 md:w-[150px] md:group-hover:top-[62%] lg:top-[51%] lg:w-[170px] lg:group-hover:top-[57%] xl:top-[45%] xl:left-70 xl:w-[222px] xl:group-hover:top-[50%] 2xl:top-[47%] 2xl:left-120 2xl:group-hover:top-[56%] 2xl:group-hover:w-[200px]"
             initial={{ x: "-100vw", y: "100vh", opacity: 0 }} 
  animate={{ x: 0, y: 0, opacity: 1 }} 
  transition={{
    type: "tween",
    ease: [0.22, 1, 0.36, 1],
    duration: 1.2,
    delay: 0.8,
  }}
              />
            </div>
          </div>

          {/* image 3 */}

          <div
            className="group flex flex-row justify-center"
            onClick={() => toggleOpacity(2)}
          >
            <div
              className={`absolute rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-8 text-left text-white transition-opacity duration-300 sm:top-[50%] sm:left-80 sm:h-25 sm:w-[100px] md:top-[49%] md:left-95 md:h-40 md:w-[120px] md:opacity-0 md:group-hover:opacity-100 lg:top-[45%] lg:left-110 lg:w-[180px] xl:top-[40%] xl:left-140 xl:w-[260px] 2xl:top-[45%] 2xl:left-200 ${activeIndex === 2 ? 'opacity-100' : 'opacity-0'} `}
            >
              <p className="font-jel text-center sm:text-[6px] md:text-[12px] lg:text-[12px] xl:text-[16px]">
                S-3
              </p>
              <p className="font-jel text-left sm:text-[6px] md:text-[12px] lg:text-[12px] xl:text-[16px]">
                This is a short explanation. make it short and clear to keep
                students
              </p>
            </div>

            <div className="flex justify-center">
              <motion.img
                src={gif3}
                alt=""
                className="absolute sm:top-[60%] sm:left-80 sm:w-[100px] md:top-[54%] md:left-90 md:w-[150px] md:group-hover:top-[64%] lg:top-[52%] lg:left-130 lg:w-[170px] lg:group-hover:top-[59%] xl:top-[47%] xl:left-155 xl:w-[222px] xl:group-hover:top-[52%] 2xl:top-[49%] 2xl:left-200 2xl:group-hover:top-[56%]"
                initial={{ y: '100vw', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: 'tween',
                  ease: [0.22, 1, 0.36, 1],
                  duration: 1.2,
                  delay: 0.1,
                }}
              />
            </div>
          </div>

          {/* image 4 */}

          <div
            className="group flex flex-row justify-center"
            onClick={() => toggleOpacity(3)}
          >
            <div
              className={`absolute rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-8 text-left text-white transition-opacity duration-300 sm:top-[52%] sm:right-30 sm:h-25 sm:w-[100px] md:top-[51%] md:right-45 md:h-40 md:w-[120px] md:opacity-0 md:group-hover:opacity-100 lg:top-[48%] lg:w-[180px] xl:top-[43%] xl:right-60 xl:w-[260px] 2xl:top-[46%] 2xl:right-120 ${activeIndex === 3 ? 'opacity-100' : 'opacity-0'}`}
            >
              <p className="font-jel text-center sm:text-[6px] md:text-[12px] lg:text-[12px] xl:text-[16px]">
                S-4
              </p>
              <p className="font-jel text-left sm:text-[6px] md:text-[12px] lg:text-[12px] xl:text-[16px]">
                This is a short explanation. make it short and clear to keep
                students
              </p>
            </div>
            <motion.img
              src={gif4}
              alt=""
              className="absolute h-auto sm:top-[61%] sm:right-30 sm:w-[100px] md:top-[57%] md:right-40 md:w-[150px] md:group-hover:top-[66%] lg:top-[55%] lg:w-[170px] lg:group-hover:top-[61%] xl:top-[50%] xl:right-60 xl:w-[222px] xl:group-hover:top-[55%] 2xl:top-[52%] 2xl:right-120 2xl:group-hover:top-[59%]"

                      initial={{ x: "100vw", y: "100vh", opacity: 0 }} 
  animate={{ x: 0, y: 0, opacity: 1 }} 
  transition={{
    type: "tween",
    ease: [0.22, 1, 0.36, 1],
    duration: 1.2,
    delay: 0.8,
  }}
        
            />
          </div>

          {/* image 5 */}
          <div
            className="group flex flex-row justify-center"
            onClick={() => toggleOpacity(4)}
          >
            <div
              className={`absolute rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-8 text-left text-white transition-opacity duration-300 sm:top-[60%] sm:right-10 sm:h-25 sm:w-[100px] md:top-[56%] md:right-10 md:h-40 md:w-[120px] md:opacity-0 md:group-hover:opacity-100 lg:top-[54%] lg:w-[180px] xl:top-[48%] xl:right-5 xl:w-[260px] 2xl:top-[54%] 2xl:right-25 ${activeIndex === 4 ? 'opacity-100' : 'opacity-0'}`}
            >
              <p className="font-jel text-center sm:text-[6px] md:text-[12px] lg:text-[16px] xl:text-[16px]">
                S-5
              </p>
              <p className="font-jel text-left sm:text-[6px] md:text-[12px] lg:text-[12px] xl:text-[16px]">
                This is a short explanation. make it short and clear to keep
                students
              </p>
            </div>
            <motion.img
              src={gif5}
              alt=""
              className="absolute h-auto sm:top-[68%] sm:right-10 sm:w-[100px] md:top-[65%] md:right-5 md:w-[150px] md:group-hover:top-[70%] lg:top-[62%] lg:w-[170px] lg:group-hover:top-[65%] xl:top-[59%] xl:right-5 xl:w-[222px] 2xl:top-[62%] 2xl:right-30 2xl:group-hover:top-[65%]"
                  initial={{ x: '100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: 'tween',
                  ease: [0.22, 1, 0.36, 1],
                  duration: 1.2,
                  delay: 1.2,
                }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Roadmap;
