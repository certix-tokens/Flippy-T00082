import Roadmapbg from '../../../assets/Images/roadmapbg.webp';
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

  // Roadmap data for better maintainability
  const roadmapSteps = [
    { id: 0, gif: gif1, alt: "Road map stage 1", stage: "S-1" },
    { id: 1, gif: gif2, alt: "Road map stage 2", stage: "S-2" },
    { id: 2, gif: gif3, alt: "Road map stage 3", stage: "S-3" },
    { id: 3, gif: gif4, alt: "Road map stage 4", stage: "S-4" },
    { id: 4, gif: gif5, alt: "Road map stage 5", stage: "S-5" },
  ];

  const descriptionText = "This is a short explanation. make it short and clear to keep students attentive.";

  // Desktop configuration for each step
  const desktopConfigs = [
    // Stage 1
    {
      boxClasses: "sm:top-[60%] sm:left-10 md:top-[51%] md:left-1 lg:top-[50%] lg:left-2 xl:top-[45%] 2xl:top-[32%] 2xl:left-20 z-0",
      imageClasses: "z-90 sm:top-[55%] sm:left-10 sm:w-[100px] md:top-[62%] md:left-5 md:w-[150px] lg:top-[59%] lg:w-[170px] xl:top-[50%] xl:left-5 xl:w-[222px] 2xl:top-[50%] 2xl:left-30",
      animation: { x: '-100vw', opacity: 0 }
    },
    // Stage 2
    {
      boxClasses: "sm:top-[50%] sm:left-30 md:top-[48%] md:left-10 lg:top-[45%] lg:left-3 xl:top-[42%] xl:left-10 2xl:top-[22%] 2xl:left-20 z-0",
      imageClasses: "z-90 sm:top-[50%] sm:left-2 sm:w-[100px] md:top-[45%] md:left-10 md:w-[150px] lg:left-10 lg:top-[45%] lg:w-[170px] xl:top-[40%] xl:left-10 xl:w-[222px] 2xl:top-[40%] 2xl:left-20",
      animation: { x: "-100vw", y: "100vh", opacity: 0 }
    },
    // Stage 3
    {
      boxClasses: "z-0 sm:top-[70%] sm:left-10 md:top-[49%] md:left-10 lg:top-[45%] lg:left-6 xl:top-[42%] xl:left-20 2xl:top-[30%] 2xl:left-20",
      imageClasses: "z-90 sm:top-[52%] sm:left-1 sm:w-[100px] md:top-[46%] md:left-10 md:w-[150px] lg:top-[47%] lg:left-16 lg:w-[170px] xl:top-[43%] xl:left-20 xl:w-[222px] 2xl:top-[40%] 2xl:left-20",
      animation: { y: '100vw', opacity: 0 }
    },
    // Stage 4
    {
      boxClasses: "z-0 sm:top-[52%] sm:right-30 md:top-[51%] md:-right-12 lg:-right-18 lg:top-[48%] xl:top-[44%] xl:-right-20 2xl:top-[28%] 2xl:right-10",
      imageClasses: "z-90 sm:top-[54%] sm:right-5 sm:w-[100px] md:top-[49%] md:-right-12 md:w-[150px] lg:top-[49%] lg:-right-10 lg:w-[170px] xl:top-[46%] xl:-right-20 xl:w-[222px] 2xl:top-[45%] 2xl:right-10",
      animation: { x: "100vw", y: "100vh", opacity: 0 }
    },
    // Stage 5
    {
      boxClasses: "sm:top-[60%] sm:right-10 md:top-[56%] md:right-5 lg:top-[53%] xl:top-[55%] xl:right-5 2xl:top-[39%] 2xl:right-25 z-0",
      imageClasses: " z-90 sm:top-[58%] sm:right-10 sm:w-[100px] md:top-[65%] md:right-5 md:w-[150px] lg:top-[62%] lg:w-[170px] xl:top-[54%] xl:right-5 xl:w-[222px] 2xl:top-[55%] 2xl:right-30",
      animation: { x: '100vw', opacity: 0 }
    }
  ];

  return (
    <div className="relative h-auto w-full overflow-hidden">
      <motion.div
        className="relative inset-0 w-full bg-cover bg-[position:60%_center]  md:bg-center overflow-hidden "
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

        {/* Mobile Layout */}
        <div className="mt-10 grid grid-cols-1 gap-8 px-4 pb-20 sm:hidden">
          {roadmapSteps.map((step, index) => (
            <div
              key={step.id}
              className="group flex cursor-pointer justify-center space-x-4"
              onClick={() => toggleOpacity(index)}
            >
              <img 
                src={step.gif} 
                alt={step.alt} 
                className="h-auto w-24 transition-transform duration-300 hover:scale-105" 
              />
              <div
                className={`h-auto  max-w-[169px]  rounded-[11px] bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-4 transition-all duration-300 ${
                  activeIndex === index 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95'
                }`}
              >
                <p className="font-jel text-center text-xs text-white">{step.stage}</p>
                <p className="font-jel text-center text-xs text-white mt-2">
                  {descriptionText}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:grid sm:grid-cols-5 relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-[900px]">
          {roadmapSteps.map((step, index) => {
            const config = desktopConfigs[index];
            const animationDelay = index === 0 || index === 4 ? 1.2 : index === 1 || index === 3 ? 0.8 : 0.1;
            
            return (
              <div
                key={step.id}
                className="group flex flex-row justify-center relative"
                
              >
                {/* Description Box */}
                <div
                  className={`absolute rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-6 text-left text-white opacity-0 transition-all duration-300 z-10 w-[180px] md:w-[150px] lg:w-[220px] xl:w-[200px] 2xl:w-[260px] ${
                    config.boxClasses
                  } ${
                    activeIndex === index || activeIndex === null
                      ? 'md:opacity-0' 
                      : 'md:opacity-0'
                  } md:group-hover:opacity-100`}
                >
                  <p className="font-jel text-center text-sm md:text-[8px] lg:text-[10px] 2xl:text-lg">
                    {step.stage}
                  </p>
                  <p className="font-jel text-left text-xs md:text-[8px] lg:text-[10px] 2xl:text-lg mt-2">
                    {descriptionText}
                  </p>
                </div>

                {/* Animated Image */}
                <motion.img
                  src={step.gif}
                  alt={step.alt}
                  className={`absolute h-auto transition-all duration-300 cursor-pointer hover:scale-110 ${
                    config.imageClasses
                  } ${
                    index === 0 ? 'md:group-hover:top-[65%] lg:group-hover:top-[62%] xl:group-hover:top-[55%] 2xl:group-hover:top-[52%]' :
                    index === 1 ? 'md:group-hover:top-[62%] lg:group-hover:top-[57%] xl:group-hover:top-[50%] 2xl:group-hover:top-[42%]' :
                    index === 2 ? 'md:group-hover:top-[64%] lg:group-hover:top-[59%] xl:group-hover:top-[52%] 2xl:group-hover:top-[46%]' :
                    index === 3 ? 'md:group-hover:top-[66%] lg:group-hover:top-[61%] xl:group-hover:top-[55%] 2xl:group-hover:top-[47%]' :
                    'md:group-hover:top-[70%] lg:group-hover:top-[65%] 2xl:group-hover:top-[59%]'
                  }`}
                  initial={config.animation}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  transition={{
                    type: 'tween',
                    ease: [0.22, 1, 0.36, 1],
                    duration: 1.2,
                    delay: animationDelay,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default Roadmap;