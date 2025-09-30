import Tokenbg from '../../../assets/Images/tokenomicsbg.png';
import Toke1 from '../../../assets/Images/toke1.png';
import Toke2 from '../../../assets/Images/toke2.png';
import Toke3 from '../../../assets/Images/toke3.png';
function Token() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-[position:70%_center] md:bg-center"
        style={{ backgroundImage: `url(${Tokenbg})` }}
      >
        <div className="mt-[100px] text-center">
          <h1 className="font-jack text-[40px font-normal text-white md:text-[100px] xl:text-[150px]">
            TOKENOMICS
          </h1>
        </div>

        <div className="mx-auto grid w-full max-w-6xl grid-cols-3 place-items-center justify-center gap-6 py-8 sm:grid-cols-3 lg:grid-cols-3">
          {/* left image */}

          <div className="group flex justify-center">
            <div className="mt-60 h-30 w-[260px] rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-10 py-10 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:mt-20 lg:text-[15px] xl:mt-20 2xl:mt-20">
              <p className="font-jel">0%</p>
              <p className="font-jel">Buy Tax</p>
            </div>
            <img
              src={Toke1}
              alt="Token 1"
              className="absolute top-120 h-auto w-[150px] sm:top-100 sm:h-auto sm:w-[300px] xl:top-[400px] 2xl:top-[500px]"
            />
          </div>

          {/* middle image  */}

          <div className="group flex justify-center group">
            <div className="mt-60 h-30 w-[260px] rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-10 py-10 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:mt-20 lg:text-[15px] xl:mt-20 2xl:mt-35">
              <p className="font-jel">0%</p>
              <p className="font-jel">Sell Tax</p>
            </div>
            <img
              src={Toke2}
              alt="Token 2"
              className="absolute top-130 h-auto w-[150px] sm:top-110 sm:h-auto sm:w-[300px] xl:top-110 2xl:top-[520px]"
            />
          </div>

          {/* right image  */}
          <div className="flex justify-center group">
            <div className="mt-60 h-30 w-[260px] rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-10 py-10 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:mt-20 lg:text-[15px] xl:mt-20 2xl:mt-20">
              <p className="font-jel">0%</p>
              <p className="font-jel">Liquiity Tax</p>
            </div>
            <img
              src={Toke3}
              alt="Token 3"
              className="absolute top-120 h-auto w-[150px] sm:top-100 sm:h-auto sm:w-[300px] xl:top-[400px] 2xl:top-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Token;
