import Joinbg from '../../../assets/Images/joinbg.png';
import { motion } from 'framer-motion';


function join() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-[position:70%_center] md:bg-center"
        style={{ backgroundImage: `url(${Joinbg})` }}>


        <div className='text-center mt-[155px]'>
          <motion.h1
            className='font-jack text-5xl font-normal text-white md:text-7xl xl:text-8xl'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.1 }}
          >
            JOIN COMMUNITY
          </motion.h1>
          <motion.p
            className='font-jel text-white '
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.2 }}
          >
            This is a short explanation. Flippy is a fun and interactive platform. Keep it short, clear, and engaging to capture attention. Flippy is a fun and interactive platform. Keep it short, clear, and engaging to capture attention. This is a short explanation. Make it short and clear to keep students attentive. This is a short explanation.
          </motion.p>
        </div>

        </div>
    </div>
  );
}

export default join;
