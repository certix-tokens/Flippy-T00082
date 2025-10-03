import Howtobuybg from '../../../assets/Images/howtobuy.png';
import pengugif from '../../../assets/Images/P1-v2.gif';
import { motion } from 'framer-motion';

function HowToBuy() {
  return (
    <section
      className="relative h-[86vh] overflow-hidden bg-cover bg-[position:70%_center] md:bg-center"
      style={{ backgroundImage: `url(${Howtobuybg})` }}
    >
      <div className="pt-[65px] text-center">
        <h1 className="font-jack text-[40px] font-normal text-white sm:text-[90px]  xl:text-[120px] 2xl:text-[150px] ">
          HOW TO BUY
        </h1>
      </div>

      <div className="relative mt-12 flex items-center justify-center md:mt-16">
        <div className="grid-col-2 md:grid-row-1 group grid mt-10">
          <div>
            <p className="h-50 2xl:h-60 w-[260px] 2xl:w-[460px] rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] 2xl:px-12  px-10 py-8 text-left text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 mt-20 2xl:-ml-40 md:mt-10 sm:mt-2 xl:mt-2">
           <ol className='list-disc space-y-4 font-jel 2xl:text-[20px]'>
            <li>Make Wallet</li>
            <li>Get some eth</li>
            <li>swich eth for & Telang</li>
            <li>Go to uniswap</li>
           </ol>
            </p>
          </div>

          <div>
            <motion.img
              src={pengugif}
              alt="How to buy illustration"
              loading="lazy"
              className=" absolute top-70 md:top-60 2xl:group-hover:ml-40  sm:top-50 h-auto max-w-full group-hover:scale-90 2xl:-mt-30 xl:top-50 w-[280px]"
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
    </section>
  );
}

export default HowToBuy;
