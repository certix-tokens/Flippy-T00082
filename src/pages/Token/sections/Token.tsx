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
            <div className="mt-90 h-30 w-[260px] rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-10 py-10 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:mt-40 lg:text-[15px] xl:mt-5 2xl:mt-40 md:mt-40 sm:mt-45">
              <p className="font-jel">0%</p>
              <p className="font-jel">Buy Tax</p>
            </div>
            <img
              src={Toke1}
              alt="Token 1"
              className="absolute top-145 h-auto w-[150px] sm:top-120 sm:h-auto sm:w-[250px] xl:top-[500px] 2xl:top-[550px] group-hover:mt-10 lg:top-[500px] md:top-[500px]  "
            />
          </div>

          {/* middle image  */}

          <div className="group flex justify-center group">
            <div className="mt-110 h-30 w-[260px] rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-10 py-10 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:mt-70 lg:text-[15px] xl:mt-60 2xl:mt-60 md:mt-70 sm:mt-90 ">
              <p className="font-jel">0%</p>
              <p className="font-jel">Sell Tax</p>
            </div>
            <img
              src={Toke2}
              alt="Token 2"
              className="absolute top-160 h-auto w-[150px] sm:top-140 sm:h-auto sm:w-[250px] xl:top-140 2xl:top-[580px] lg:top-[550px] group-hover:mt-10 md:top-[550px]"
            />
          </div>

          {/* right image  */}
          <div className="flex justify-center group">
            <div className="mt-65 h-30 w-[260px] rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-10 py-10 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:mt-30 lg:text-[15px] xl:mt-10 2xl:mt-30 md:mt-30 sm:mt-40">
              <p className="font-jel">0%</p>
              <p className="font-jel">Liquiity Tax</p>
            </div>
            <img
              src={Toke3}
              alt="Token 3"
              className="absolute top-145 h-auto w-[150px] sm:top-120 sm:h-auto sm:w-[250px] xl:top-[500px] 2xl:top-[550px] group-hover:mt-10 lg:top-[500px] md:top-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Token;
