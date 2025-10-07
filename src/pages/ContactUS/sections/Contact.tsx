import { motion, useMotionValue, useTransform, useSpring, Variants } from 'framer-motion';
import { useState } from 'react';
import Contactus from '../../../assets/Images/aboutus-bg.png';
import Pengleft from '../../../assets/Images/prngleft.png';
import Pengright from '../../../assets/Images/pengright.png';
import pengif from '../../../assets/Images/P1-v2.gif';

function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPenguinHovered, setIsPenguinHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // 3D Motion for penguin
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

  const toggleOpacity = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // ✨ Stage entrance animation variants ✨
  const bgVariant: Variants = {
    hidden: { opacity: 0, scale: 1.1 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
  };

  const titleVariant: Variants = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.8, duration: 0.8, type: 'spring', stiffness: 100 },
    },
  };

  const penguinMainVariant: Variants = {
    hidden: { opacity: 0, y: 300, scale: 0.8 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: 1.3, type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const penguinLeftVariant: Variants = {
    hidden: { opacity: 0, x: -250, y: 150, rotate: -15 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: { delay: 1.8, type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const penguinRightVariant: Variants = {
    hidden: { opacity: 0, x: 250, y: 150, rotate: 15 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: { delay: 2.1, type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="relative z-0 h-[86.5vh] overflow-y-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-[position:70%_center] md:bg-center"
        style={{ backgroundImage: `url(${Contactus})` }}
       initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div
          className="relative flex h-full w-full flex-col items-center"
          onMouseMove={handleMouseMove}
        >
          <div className="group mt-[100px] text-center md:mt-[50px] lg:mt-[100px] xl:mt-[50px]">
            {/* Animated Title */}
            <motion.h1
              className="font-jacks 2xl:[150px] text-5xl font-normal text-white opacity-100 group-hover:opacity-0 md:text-7xl xl:text-8xl"
              variants={titleVariant}
              initial="hidden"
              animate="show"
            >
              About us
            </motion.h1>

            {/* Content Box with Stagger Animation */}
            <motion.div
              className="mx-auto -mt-40 hidden overflow-hidden rounded-3xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] text-center md:mt-10 md:block md:w-[600px] lg:mt-5 lg:block lg:w-[800px] xl:mt-10 xl:block xl:w-[1000px] 2xl:-mt-20 2xl:block 2xl:w-[1500px]"
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
                <p className="font-jel mx-auto h-auto px-20 py-20 text-left text-[20px] text-white md:text-[8px] lg:text-[8px] xl:text-[10px] 2xl:text-[20px]">
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

          {/* Penguins Section */}
          <div
            className="flex justify-center overflow-hidden"
            onClick={() => toggleOpacity(0)}
          >
            <div
              className={`absolute top-[32%] h-auto w-[150px] rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-3 text-center text-white transition-opacity duration-300 md:hidden lg:hidden xl:hidden 2xl:hidden ${
                activeIndex === 0 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <p className="font-jel text-[8px]">
                This is a short explanation. Flippy is a fun and interactive
                platform. Keep it short, clear, and engaging to capture
                attention. Flippy is a fun and interactive platform. Keep it
                short, clear, and engaging to capture attention.
              </p>
            </div>

            <div className="flex justify-center">
              {/* Center Penguin */}
              <motion.img
                src={pengif}
                alt="Penguin mascot"
                className="absolute top-[48%] left-1/2 h-auto w-[200px] -translate-x-1/2 cursor-pointer sm:top-[60%] md:top-[50%] md:w-[200px] lg:top-[48%] xl:top-[50%] xl:w-[200px] 2xl:top-[50%] 2xl:w-[280px]"
                variants={penguinMainVariant}
                initial="hidden"
                animate="show"
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
                  transition: { duration: 0.5 },
                }}
                onHoverStart={() => setIsPenguinHovered(true)}
                onHoverEnd={() => setIsPenguinHovered(false)}
              />

              {/* Left Penguin */}
              <motion.img
                src={Pengleft}
                alt="Left decoration"
                className="absolute top-[53%] left-0 block h-auto w-[100px] sm:top-[60%] md:hidden"
                variants={penguinLeftVariant}
                initial="hidden"
                animate="show"
                transition={{
                  x: { type: 'spring', stiffness: 100, damping: 15 },
                  opacity: { duration: 0.5 },
                }}
              />

              {/* Right Penguin */}
              <motion.img
                src={Pengright}
                alt="Right decoration"
                className="absolute top-[55%] right-0 block h-auto w-[100px] sm:top-[60%] md:hidden"
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

          {/* Floating Particles Effect */}
          {isPenguinHovered &&
            [...Array(8)].map((_, i) => (
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
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
