import { motion } from 'framer-motion';
import Contactus from '../../../assets/Images/aboutus-bg.png';
import Aboutus from '../../../assets/Images/aboutpenguine.png';
import Pengleft from '../../../assets/Images/prngleft.png';
import Pengright from '../../../assets/Images/pengright.png';

function Contact() {
  return (
    <div className="relative min-h-screen overflow-hidden">
    <div
        className="absolute inset-0  bg-cover bg-[position:70%_center] 
 md:bg-center"
        style={{ backgroundImage: `url(${Contactus})` }}
      >
<div className=' group flex flex-col items-center '>
      <div className='text-center mt-[184px] xl:mt-[50px] lg:mt-[100px] md:mt-[50px]'>
        <h1 className='font-jacks text-white font-normal text-5xl md:text-7xl xl:text-8xl 2xl:[150px] transition-opacity duration-300 group-hover:opacity-0'>ABOUT US</h1>

        <div className='-mt-40 xl:-mt-30 2xl:-mt-20 mx-20  bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] opacity-0 transition-opacity duration-300 group-hover:opacity-100  2xl:w-[1670px] md:w-[1670px] xl:w-[1200px]  text-center rounded-3xl'>
          <p className='px-20 py-20 mx-auto text-[20px] 2xl:text-[20px] xl:text-[10px] text-white font-jel text-left'>This is a short explanation. Flippy is a fun and interactive platform. Keep it short, clear, and engaging to capture attention. Flippy is a fun and interactive platform. Keep it short, clear, and engaging to capture attention. This is a short explanation. Make it short and clear to keep students attentive. This is a short explanation. Flippy is a fun and interactive platform. Keep it short, clear, and engaging to capture attention. This is a short explanation. Make it short and clear to keep students attentive. This is a short explanation. Flippy is a fun and interactive platform. Keep it short, clear, and engaging to capture attention. This is a short explanation. Make it short and clear to keep students attentive. This is a short explanation. Flippy is a fun and interactive platform. Keep it short, clear, and engaging to capture attention. This is a short explanation. Make it short and clear to keep students attentive. This is a short engaging Flippy is a fun and interactive platform. Keep it short, clear, and engaging to capture attention. This is a short explanation. Make it short and clear to keep students attentive.</p>
        </div>
      </div>


      <div className='flex justify-center '>
        <motion.img
          src={Aboutus}
          alt=""
          className='absolute md:w-[448px] md:h-[448px] md:bottom-40 bottom-35 2xl:bottom-40  w-[300px] h-[300px] xl:h-[300px] xl:w-[300px] 2xl:h-auto 2xl:w-[400px] xl:bottom-0 group-hover:scale-110'
          initial={{ x: '-60vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 90, damping: 16, mass: 0.8 }}
        />
        <img src={Pengleft} alt="" className='absolute left-0 bottom-40 md:hidden block' />
        <img src={Pengright} alt="" className='absolute right-0 bottom-40 md:hidden block ' />
      </div>
  </div>
    </div>
    </div>
  )
}

export default Contact