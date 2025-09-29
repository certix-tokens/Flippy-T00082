import Howtobuybg from '../../../assets/Images/howtobuy.png';
import Howtobuypng from '../../../assets/Images/howtobuypng.png';
import { motion } from 'framer-motion';

function HowToBuy() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-[position:70%_center] md:bg-center"
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
            <p className="h-50 w-[260px] rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-10 py-8 text-left text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
           <ol className='list-disc space-y-4 font-jel'>
            <li>Make Wallet</li>
            <li>Get some eth</li>
            <li>swich eth for & Telang</li>
            <li>Go to uniswap</li>
           </ol>
            </p>
          </div>

          <div>
            <motion.img
              src={Howtobuypng}
              alt="How to buy illustration"
              loading="lazy"
              className="absolute top-40 md:top-30  sm:top-30 h-auto max-w-full group-hover:scale-90 2xl:top-50"
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
