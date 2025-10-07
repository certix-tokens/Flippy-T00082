import Joinbg from '../../../assets/Images/joinbg.png';
import { motion ,Variants } from 'framer-motion';
import Tele from '../../../assets/Images/tele.png';
import twitter from '../../../assets/Images/twitter.png';
import chart from '../../../assets/Images/build.png';
import z from '../../../assets/Images/z.png';
import Joinimg from '../../../assets/Images/join.png';

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

  return (
    <div className="relative h-[87vh] overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Joinbg})` }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className="flex min-h-screen items-start justify-center px-4 sm:px-6 md:px-0">
          <div className="absolute top-[10%] max-w-[300px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1592px] text-center">
            {/* Heading */}
            <motion.h1
              className="font-jack mx-auto text-4xl font-normal break-words text-white sm:text-[45px] md:text-7xl  lg:text-[94px] xl:text-[110px] 2xl:text-[150px]"

               variants={titleVariant}
              initial="hidden"
              animate="show"
            
            >
              JOIN COMMUNITY
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              className="font-jel mx-auto mt-10 sm:text-left text-sm break-words text-white sm:mt-6 sm:text-[12px] text-[10px] md:text-lg lg:text-[15px] xl:text-[20px]"

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

            {/* Icons */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-14 md:flex-1">
              {items.map((item, index) => (
                <div className='flex justify-center '>
                  <img
                    key={index}
                    src={item.path}
                    className={`${item.class} object-contain xl:mt-10 lg:mt-15 md:mt-20 sm:mt-15 mt-10 `}
                    alt={`icon-${index}`}
                  />
                </div>
              ))}
            </div>
            <div className='flex'>
              <motion.img src={Joinimg} alt="" className='absolute 2xl:right-60 2xl:top-[67%] xl:right-10 xl:top-[70%] lg:right-5 h-auto lg:w-[280px] lg:top-[65%] md:w-[230px] md:-right-5 md:top-[70%] xl:w-[320px] sm:w-[200px] sm:right-0 sm:top-[110%] w-[190px] -right-20'
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
      </motion.div>
    </div>
  );
}

export default Join;
