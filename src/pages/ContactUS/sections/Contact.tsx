import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useState } from 'react';
import Contactus from '../../../assets/Images/aboutus-bg.png';
import Aboutus from '../../../assets/Images/aboutpenguine.png';
import Pengleft from '../../../assets/Images/prngleft.png';
import Pengright from '../../../assets/Images/pengright.png';

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

  return (
    <div className="relative min-h-screen h-auto">
      <motion.div
        className="absolute inset-0 bg-cover bg-[position:70%_center] md:bg-center"
        style={{ backgroundImage: `url(${Contactus})` }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div
          className="flex min-h-screen h-full overflow-hidden flex-col items-center"
          onMouseMove={handleMouseMove}
        >
          <div className="mt-[184px] text-center md:mt-[50px] lg:mt-[100px] xl:mt-[50px]">
            {/* Animated Title */}
            <motion.h1
              className="font-jacks 2xl:[150px] text-5xl font-normal text-white md:text-7xl xl:text-8xl"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: isHovered ? 0 : 1 }}
              transition={{
                y: { type: 'spring', stiffness: 100, damping: 15 },
                opacity: { duration: 0.3 },
              }}
            >
              {['A', 'B', 'O', 'U', 'T', ' ', 'U', 'S'].map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.1,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.2,
                    color: '#FFD700',
                    textShadow: '0 0 20px rgba(255, 215, 0, 0.8)',
                  }}
                  className="inline-block"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </motion.h1>

            {/* Content Box with Stagger Animation */}
            <motion.div
              className="mx-auto -mt-40 hidden overflow-hidden rounded-3xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] text-center md:mt-10 md:block md:w-[600px] lg:mt-5 lg:block lg:w-[800px] xl:mt-20 xl:block xl:w-[1000px] 2xl:-mt-20 2xl:block 2xl:w-[1500px]"
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
                <p className="font-jel mx-auto px-20 py-20 text-left text-[20px] text-white md:text-[8px] lg:text-[8px] xl:text-[10px] 2xl:text-[20px]">
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
          <div className="group overflow-hidden">
            <div className="mt-40 w-[400px] rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-8 py-18 text-center text-white md:hidden lg:hidden xl:hidden 2xl:hidden opacity-0 transition-opacity duration-300 group-active:opacity-100">
              <p className="font-jel text-[10px]">
                This is a short explanation. Flippy is a fun and interactive
                platform. Keep it short, clear, and engaging to capture
                attention. Flippy is a fun and interactive platform. Keep it
                short, clear, and engaging to capture attention.
              </p>
            </div>

            <div className="flex justify-center">
              <motion.img
                src={Aboutus}
                alt="Penguin mascot"
                className="absolute bottom-35 h-auto w-[300px] cursor-pointer md:bottom-40 md:h-[448px] md:w-[448px] xl:bottom-0 xl:mb-40 xl:h-[300px] xl:w-[300px] 2xl:bottom-40 2xl:-mb-10 2xl:h-auto 2xl:w-[400px]"
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
                  transition: { duration: 0.5 },
                }}
                onHoverStart={() => setIsPenguinHovered(true)}
                onHoverEnd={() => setIsPenguinHovered(false)}
              />

              {/* Floating Animation for Side Penguins */}
              <motion.img
                src={Pengleft}
                alt="Left decoration"
                className="absolute bottom-40 left-0 block md:hidden"
                initial={{ x: -100, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  y: [0, -15, 0],
                }}
                transition={{
                  x: { type: 'spring', stiffness: 100, damping: 15 },
                  opacity: { duration: 0.5 },
                  y: {
                    repeat: Infinity,
                    duration: 3,
                    ease: 'easeInOut',
                  },
                }}
              />
              <motion.img
                src={Pengright}
                alt="Right decoration"
                className="absolute right-0 bottom-40 block md:hidden"
                initial={{ x: 100, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  y: [0, -15, 0],
                }}
                transition={{
                  x: { type: 'spring', stiffness: 100, damping: 15 },
                  opacity: { duration: 0.5 },
                  y: {
                    repeat: Infinity,
                    duration: 3,
                    ease: 'easeInOut',
                    delay: 1.5,
                  },
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
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
