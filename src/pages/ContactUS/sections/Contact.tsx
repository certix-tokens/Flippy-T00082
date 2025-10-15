import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  Variants,
} from 'framer-motion';
import { useState } from 'react';
import Contactus from '../../../assets/Images/aboutus-bg.webp';
import Pengleft from '../../../assets/Images/prngleft.png';
import Pengright from '../../../assets/Images/pengright.png';
import pengif from '../../../assets/Images/P1-v2.gif';

function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPenguinHovered, setIsPenguinHovered] = useState(false);

  // Mouse tracking for penguin
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const penguinRotateX = useSpring(
    useTransform(mouseY, [-300, 300], [15, -15]),
    {
      stiffness: 150,
      damping: 20,
    }
  );
  const penguinRotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-15, 15]),
    {
      stiffness: 150,
      damping: 20,
    }
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

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

  const penguinLeftVariant: Variants = {
    hidden: { opacity: 0, x: -250, y: 150, rotate: -15 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: { delay: 1, type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const penguinRightVariant: Variants = {
    hidden: { opacity: 0, x: 250, y: 150, rotate: 15 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: { delay: 1, type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="relative z-0 min-h-[100svh] overflow-hidden md:min-h-[100dvh]">
      <motion.div
        className="absolute inset-0 bg-cover bg-[position:70%_center] md:bg-center"
        style={{ backgroundImage: `url(${Contactus})` }}
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div
          className="relative flex h-full w-full flex-col items-center"
          onMouseMove={handleMouseMove}
        >
          <div className="group absolute top-[10%] text-center">
            {/* Animated Title */}
            <motion.h1
              className="font-jacks text-5xl font-normal text-white opacity-100 group-hover:opacity-0 md:text-[90px] 2xl:text-[150px]"
              variants={titleVariant}
              initial="hidden"
              animate="show"
            >
              About us
            </motion.h1>
          </div>
          {/* Content Box with Stagger Animation */}

          <div className="relative flex h-full w-full items-center justify-center">
            <motion.div
              className="absolute md:bottom-[32%] xl:bottom-[32%] 2xl:bottom-[40%] left-1/2 hidden -translate-x-1/2 overflow-hidden rounded-3xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] text-center md:block md:w-[600px] lg:w-[800px] xl:w-[600px] 2xl:w-[1500px]"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8,
                y: isHovered ? 0 : 50,
              }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                duration: 0.5,
              }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{
                boxShadow: '0 20px 60px rgba(177, 57, 64, 0.6)',
                scale: 1.02,
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="font-jel mx-auto h-auto text-left text-[20px] text-white md:px-8 md:py-8 md:text-[8px] lg:text-[10px] xl:text-[10px] 2xl:px-20 2xl:py-20 2xl:text-[20px]">
                  This is a short explanation. Flippy is a fun and interactive
                  platform. Keep it short, clear, and engaging to capture
                  attention. Flippy is a fun and interactive platform. Keep it
                  short, clear, and engaging to capture attention. This is a
                  short explanation. Make it short and clear to keep students
                  attentive. This is a short explanation. Flippy is a fun and
                  interactive platform. Keep it short, clear, and engaging to
                  capture attention. This is a short explanation. Make it short
                  and clear to keep students attentive. This is a short
                  explanation. Flippy is a fun and interactive platform. Keep it
                  short, clear, and engaging to capture attention. This is a
                  short explanation. Make it short and clear to keep students
                  attentive. This is a short explanation. Flippy is a fun and
                  interactive platform. Keep it short, clear, and engaging to
                  capture attention. This is a short explanation. Make it short
                  and clear to keep students attentive. This is a short engaging
                  Flippy is a fun and interactive platform. Keep it short,
                  clear, and engaging to capture attention. This is a short
                  explanation. Make it short and clear to keep students
                  attentive.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div
          className="flex justify-center overflow-hidden"
          onClick={() => toggleOpacity(0)}
        >
          <div
            className={`absolute bottom-75 h-auto w-[150px] rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-3 text-center text-white transition-opacity duration-300 md:hidden lg:hidden xl:hidden 2xl:hidden ${activeIndex === 0 ? 'opacity-100' : 'opacity-0'}`}
          >
            <p className="font-jel text-[8px]">
              This is a short explanation. Flippy is a fun and interactive
              platform. Keep it short, clear, and engaging to capture attention.
              Flippy is a fun and interactive platform. Keep it short, clear,
              and engaging to capture attention.
            </p>
          </div>

          <div className="flex justify-center">
            <motion.img
              src={pengif}
              alt="Penguin mascot"
              className="absolute bottom-[10%] left-1/2 h-auto w-[200px] -translate-x-1/2 cursor-pointer sm:bottom-[10%] md:bottom-[10%] md:w-[200px] lg:bottom-[10%] xl:bottom-[10%] xl:w-[200px] 2xl:bottom-[10%] 2xl:w-[280px]"
              initial={{ x: '-60vw', opacity: 0, rotate: -20 }}
              animate={{
                x: 0,
                opacity: 1,
                rotate: 0,
                scale: isPenguinHovered ? 1.15 : isHovered ? 1.1 : 1,
              }}
              transition={{
                type: 'spring',
                stiffness: 90,
                damping: 16,
                mass: 0.8,
              }}
              style={{
                rotateX: penguinRotateX,
                rotateY: penguinRotateY,
                transformStyle: 'preserve-3d',
              }}
              whileHover={{
                scale: 1.2,
                filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.8))',
              }}
              whileTap={{
                scale: 0.95,
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 1 },
              }}
              onHoverStart={() => setIsPenguinHovered(true)}
              onHoverEnd={() => setIsPenguinHovered(false)}
            />

            {/* Floating Animation for Side Penguins */}
            <motion.img
              src={Pengleft}
              alt="Left decoration"
              className="absolute bottom-[10%] left-0 block h-auto w-[100px] sm:bottom-[10%] md:hidden"
              variants={penguinLeftVariant}
              initial="hidden"
              animate="show"
              transition={{
                x: { type: 'spring', stiffness: 100, damping: 15 },
                opacity: { duration: 0.5 },
              }}
            />
            <motion.img
              src={Pengright}
              alt="Right decoration"
              className="absolute right-0 bottom-[10%] block h-auto w-[100px] sm:bottom-[10%] md:hidden"
              variants={penguinRightVariant}
              initial="hidden"
              animate="show"
              transition={{
                x: { type: 'spring', stiffness: 100, damping: 15 },
                opacity: { duration: 0.5 },
              }}
            />
          </div>
        </div>

        {/* Interactive Penguin */}

        {/* Floating Particles Effect */}
        {isPenguinHovered && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-2 w-2 rounded-full bg-white"
                style={{
                  left: '50%',
                  bottom: '35%',
                }}
                initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos((i * Math.PI * 2) / 8) * 100,
                  y: Math.sin((i * Math.PI * 2) / 8) * 100,
                  opacity: [1, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </>
        )}
      </motion.div>
    </div>
  );
}

export default Contact;
