import Joinbg from '../../../assets/Images/joinbg.png';
import { motion } from 'framer-motion';
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
  { class: 'w-10 h-10 sm:w-16 sm:h-16', path: Tele },
  { class: 'w-10 h-10 sm:w-16 sm:h-16', path: twitter },
  { class: 'w-10 h-10 sm:w-16 sm:h-16', path: chart },
  { class: 'w-10 h-10 sm:w-16 sm:h-16', path: z },
  { class: 'w-36 h-36 sm:w-[370px] sm:h-[370px] mt-4 ml-60 sm:ml-0', path: Joinimg },
];

function Join() {
  return (
    <div className="relative h-[86vh] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Joinbg})` }}
      >
        <div className="flex min-h-screen items-start justify-center px-4 sm:px-6 md:px-0">
          <div className="mt-36 sm:mt-40 max-w-3xl text-center">
            {/* Heading */}
            <motion.h1
              className="font-jack mx-auto text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-normal text-white break-words"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.1 }}
            >
              JOIN COMMUNITY
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              className="font-jel mx-auto mt-10 sm:mt-6 text-sm sm:text-base md:text-lg text-white break-words"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.2 }}
            >
            This is a short explanation. Flippy is a fun and interactive platform. Keep it short, clear, and engaging to capture attention. Flippy is a fun and interactive platform. Keep it short, clear, and engaging to capture attention. This is a short explanation. Make it short and clear to keep students attentive. This is a short explanation.
            </motion.p>

            {/* Icons */}
            <div className="flex flex-wrap md:flex-1 justify-center items-center gap-6 sm:gap-14 mt-10 sm:mt-10">
              {items.map((item, index) => (
                <img
                  key={index}
                  src={item.path}
                  className={`${item.class} object-contain`}
                  alt={`icon-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
