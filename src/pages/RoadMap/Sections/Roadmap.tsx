import Roadmapbg from '../../../assets/Images/roadmapbg.png';
import { useState } from 'react';
import gif1 from '../../../assets/Images/gif/2gif.gif';
import gif2 from '../../../assets/Images/gif/1gif.gif';
import gif3 from '../../../assets/Images/gif/5gif.gif';
import gif4 from '../../../assets/Images/gif/3gif.gif';
import gif5 from '../../../assets/Images/gif/4gif.gif';

function Roadmap() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleOpacity = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative h-[100vh] w-full overflow-visible">
      <div
        className="relative inset-0 h-[100vh] w-full bg-cover bg-[position:60%_center] sm:bg-[position:60%_center] md:bg-center"
        style={{ backgroundImage: `url(${Roadmapbg})` }}
      >
        <div className="pt-[100px] text-center">
          <h1 className="font-jack text-5xl font-normal text-white md:text-7xl xl:text-8xl">
            ROAD MAP
          </h1>
        </div>

        {/* Mobile pyramid layout (1-2-2) */}

        <div className="mt-10 grid grid-cols-1 gap-10 overflow-y-hidden px-4 pb-20 sm:hidden sm:pl-30">
          <div
            className="group flex cursor-pointer justify-center space-x-5 sm:space-x-30"
            onClick={() => toggleOpacity(0)}
          >
            <img src={gif1} alt=" Road map stage 1" className="h-auto w-30" />
            <div
              className={`h-auto max-w-[169px] rounded-[11px] bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-[18px] py-[18px] transition-opacity duration-300 ${activeIndex === 0 ? 'opacity-100' : 'opacity-0'}`}
            >
              <p className="font-jel text-center text-[12px] text-white">S-1</p>
              <p className="font-jel text-center text-[12px] text-white">
                This is a short explanation. make it short and clear to keep
                students attentive.
              </p>
            </div>
          </div>

          <div
            className="group flex cursor-pointer justify-center space-x-5 sm:space-x-30"
            onClick={() => toggleOpacity(1)}
          >
            <img src={gif2} alt="Road map stage 2" className="h-auto w-30" />
            <div
              className={`h-auto max-w-[169px] rounded-[11px] bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-[18px] py-[18px] transition-opacity duration-300 ${activeIndex === 1 ? 'opacity-100' : 'opacity-0'}`}
            >
              <p className="font-jel text-center text-[12px] text-white">S-2</p>
              <p className="font-jel text-center text-[12px] text-white">
                This is a short explanation. make it short and clear to keep
                students attentive.
              </p>
            </div>
          </div>

          <div
            className="group flex cursor-pointer justify-center space-x-5 sm:space-x-30"
            onClick={() => toggleOpacity(2)}
          >
            <img src={gif3} alt="Road map stage 3" className="h-auto w-30" />
            <div
              className={`h-auto max-w-[169px] rounded-[11px] bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-[18px] py-[18px] transition-opacity duration-300 ${activeIndex === 2 ? 'opacity-100' : 'opacity-0'}`}
            >
              <p className="font-jel text-center text-[12px] text-white">S-3</p>
              <p className="font-jel text-center text-[12px] text-white">
                This is a short explanation. make it short and clear to keep
                students attentive.
              </p>
            </div>
          </div>

          <div
            className="group flex cursor-pointer justify-center space-x-5 sm:space-x-30"
            onClick={() => toggleOpacity(3)}
          >
            <img src={gif4} alt="Road map stage 4" className="h-auto w-30" />
            <div
              className={`h-auto max-w-[169px] rounded-[11px] bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-[18px] py-[18px] transition-opacity duration-300 ${activeIndex === 3 ? 'opacity-100' : 'opacity-0'}`}
            >
              <p className="font-jel text-center text-[12px] text-white">S-4</p>
              <p className="font-jel text-center text-[12px] text-white">
                This is a short explanation. make it short and clear to keep
                students attentive.
              </p>
            </div>
          </div>

          <div
            className="group flex cursor-pointer justify-center space-x-5 sm:space-x-30"
            onClick={() => toggleOpacity(4)}
          >
            <img src={gif5} alt="Road map stage 5" className="h-auto w-30" />
            <div
              className={`h-auto max-w-[169px] rounded-[11px] bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-[18px] py-[18px] transition-opacity duration-300 ${activeIndex === 4 ? 'opacity-100' : 'opacity-0'}`}
            >
              <p className="font-jel text-center text-[12px] text-white">S-5</p>
              <p className="font-jel text-center text-[12px] text-white">
                This is a short explanation. make it short and clear to keep
                students attentive.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop layout (unchanged) */}
        <div className="hidden grid-cols-5 px-30 sm:flex md:grid">
          {/* image 1 */}

          <div
            className="group -ml-40 flex flex-row justify-center"
            onClick={() => toggleOpacity(0)}
          >
            <div
              className={`absolute rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-8 text-left text-white transition-opacity duration-300 sm:bottom-[30%] sm:left-10 sm:h-25 sm:w-[100px] md:bottom-[33%] md:h-40 md:w-[120px] md:opacity-0 md:group-hover:opacity-100 lg:bottom-[35%] lg:left-5 lg:w-[180px] xl:top-[43%] xl:w-[260px] 2xl:top-[50%] ${activeIndex === 0 ? 'opacity-100' : 'opacity-0'} `}
            >
              <p className="font-jel text-center sm:text-[6px] md:text-[10px] lg:text-[12px] xl:text-[16px]">
                S-1
              </p>
              <p className="font-jel text-left sm:text-[6px] md:text-[12px] lg:text-[12px] xl:text-[16px]">
                This is a short explanation. make it short and clear to keep
                students
              </p>
            </div>
            <div className="flex">
              <img
                src={gif1}
                alt=""
                className="absolute h-auto sm:bottom-[17%] sm:left-10 sm:w-[100px] md:bottom-[17%] md:left-5 md:w-[150px] md:group-hover:bottom-[15%] lg:bottom-[18%] lg:w-[170px] lg:group-hover:bottom-[14%] xl:top-[53%] xl:left-5 xl:w-[222px] xl:group-hover:top-[55%] 2xl:top-[57%] 2xl:left-30 2xl:group-hover:top-[62%] 2xl:group-hover:w-[200px]"
              />
            </div>
          </div>

          {/* image 2 */}

          <div
            className="group flex flex-row justify-center"
            onClick={() => toggleOpacity(1)}
          >
            <div
              className={`absolute rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-8 text-left text-white transition-opacity duration-300 sm:bottom-[38%] sm:left-30 sm:h-25 sm:w-[100px] md:bottom-[38%] md:left-45 md:h-40 md:w-[120px] md:opacity-0 md:group-hover:opacity-100 lg:bottom-[40%] lg:w-[180px] xl:top-[39%] xl:left-65 xl:w-[260px] 2xl:top-[45%] 2xl:left-115 ${activeIndex === 1 ? 'opacity-100' : 'opacity-0'} `}
            >
              <p className="font-jel text-center sm:text-[6px] md:text-[12px] lg:text-[12px] xl:text-[16px]">
                S-2
              </p>
              <p className="font-jel text-left sm:text-[6px] md:text-[12px] lg:text-[12px] xl:text-[16px]">
                This is a short explanation. make it short and clear to keep
                students
              </p>
            </div>
            <div className="flex">
              <img
                src={gif2}
                alt=""
                className="group-hover:transition-300 absolute h-auto sm:bottom-[25%] sm:left-30 sm:w-[100px] md:bottom-[24%] md:left-40 md:w-[150px] md:group-hover:bottom-[20%] lg:bottom-[24%] lg:w-[170px] lg:group-hover:bottom-[20%] xl:top-[45%] xl:left-70 xl:w-[222px] xl:group-hover:top-[50%] 2xl:top-[47%] 2xl:left-120 2xl:group-hover:top-[56%] 2xl:group-hover:w-[200px]"
              />
            </div>
          </div>

          {/* image 3 */}

          <div
            className="group flex flex-row justify-center"
            onClick={() => toggleOpacity(2)}
          >
            <div
              className={`absolute rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-8 text-left text-white transition-opacity duration-300 sm:bottom-[38%] sm:left-80 sm:h-25 sm:w-[100px] md:bottom-[37%] md:left-95 md:h-40 md:w-[120px] md:opacity-0 md:group-hover:opacity-100 lg:bottom-[38%] lg:left-110 lg:w-[180px] xl:top-[40%] xl:left-140 xl:w-[260px] 2xl:top-[45%] 2xl:left-200 ${activeIndex === 2 ? 'opacity-100' : 'opacity-0'} `}
            >
              <p className="font-jel text-center sm:text-[6px] md:text-[12px] lg:text-[12px] xl:text-[16px]">
                S-3
              </p>
              <p className="font-jel text-left sm:text-[6px] md:text-[12px] lg:text-[12px] xl:text-[16px]">
                This is a short explanation. make it short and clear to keep
                students
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src={gif3}
                alt=""
                className="absolute sm:bottom-[25%] sm:left-80 sm:w-[100px] md:bottom-[24%] md:left-90 md:w-[150px] md:group-hover:bottom-[20%] lg:bottom-[24%] lg:left-110 lg:w-[170px] lg:group-hover:bottom-[20%] xl:top-[47%] xl:left-140 xl:w-[222px] xl:group-hover:top-[52%] 2xl:top-[49%] 2xl:left-200 2xl:group-hover:top-[56%]"
              />
            </div>
          </div>

          {/* image 4 */}

          <div
            className="group flex flex-row justify-center"
            onClick={() => toggleOpacity(3)}
          >
            <div
              className={`absolute rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-8 text-left text-white transition-opacity duration-300 sm:bottom-[36%] sm:right-30 sm:h-25 sm:w-[100px] md:bottom-[35%] md:right-45 md:h-40 md:w-[120px] md:opacity-0 md:group-hover:opacity-100 lg:bottom-[35%] lg:w-[180px] xl:top-[43%] xl:right-60 xl:w-[260px] 2xl:top-[46%] 2xl:right-120 ${activeIndex === 3 ? 'opacity-100' : 'opacity-0'}`}
            >
              <p className="font-jel text-center sm:text-[6px] md:text-[12px] lg:text-[12px] xl:text-[16px]">
                S-4
              </p>
              <p className="font-jel text-left sm:text-[6px] md:text-[12px] lg:text-[12px] xl:text-[16px]">
                This is a short explanation. make it short and clear to keep
                students
              </p>
            </div>
            <img
              src={gif4}
              alt=""
              className="absolute h-auto sm:right-30 sm:bottom-[25%] sm:w-[100px] md:bottom-[24%] md:right-40 md:w-[150px] md:group-hover:bottom-[20%] lg:bottom-[24%] lg:w-[170px] lg:group-hover:bottom-[20%] xl:top-[50%] xl:right-60 xl:w-[222px] xl:group-hover:top-[55%] 2xl:top-[52%] 2xl:right-120 2xl:group-hover:top-[59%]"
            />
          </div>

          {/* image 5 */}
          <div
            className="group flex flex-row justify-center"
            onClick={() => toggleOpacity(4)}
          >
            <div
              className={`absolute rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-8 text-left text-white transition-opacity duration-300 sm:bottom-[30%] sm:right-10 sm:h-25 sm:w-[100px] md:bottom-[32%] md:right-10 md:h-40 md:w-[120px] md:opacity-0 md:group-hover:opacity-100 lg:bottom-[35%] lg:w-[180px] xl:top-[48%] xl:right-5 xl:w-[260px] 2xl:top-[54%] 2xl:right-25 ${activeIndex === 4 ? 'opacity-100' : 'opacity-0'}`}
            >
              <p className="font-jel text-center sm:text-[6px] md:text-[12px] lg:text-[16px] xl:text-[16px]">
                S-5
              </p>
              <p className="font-jel text-left sm:text-[6px] md:text-[12px] lg:text-[12px] xl:text-[16px]">
                This is a short explanation. make it short and clear to keep
                students
              </p>
            </div>
            <img
              src={gif5}
              alt=""
              className="absolute h-auto sm:right-10 sm:bottom-[18%] sm:w-[100px] md:bottom-[17%] md:right-5 md:w-[150px] md:group-hover:bottom-[15%] lg:bottom-[18%] lg:w-[170px] lg:group-hover:bottom-[16%] xl:top-[59%] xl:right-5 xl:w-[222px] 2xl:top-[62%] 2xl:right-30 2xl:group-hover:top-[65%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
