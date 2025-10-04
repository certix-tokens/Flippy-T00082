import Roadmapbg from '../../../assets/Images/roadmapbg.png';
import Pen1 from '../../../assets/Images/1.png';
import Pen2 from '../../../assets/Images/2.png';
import Pen3 from '../../../assets/Images/3.png';
import Pen4 from '../../../assets/Images/4.png';
import Pen5 from '../../../assets/Images/5.png';

function Roadmap() {
  return (
    <div className="relative  min-h-screen overflow-hidden w-full">
      <div
        className="fixed inset-0 bg-cover bg-[position:70%_center] md:bg-center"
        style={{ backgroundImage: `url(${Roadmapbg})` }}
      >
        <div className="mt-[155px] text-center">
          <h1 className="font-jack text-5xl font-normal text-white md:text-7xl xl:text-8xl">
            ROAD MAP
          </h1>
        </div>

        {/* Mobile pyramid layout (1-2-2) */}
        <div className="mt-10 grid grid-cols-1 gap-10 px-4 pb-20  overflow-y-auto md:hidden">
          <div className="flex space-x-5">
            <img src={Pen3} alt="Road map stage 3" className="h-auto w-30" />
            <div className="h-auto max-w-[169px] rounded-[11px] bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-[18px] py-[18px]">
              <p className="font-jel text-center text-[12px] text-white">S-1</p>
              <p className="font-jel text-center text-[12px] text-white">
                This is a short explanation. make it short and clear to keep
                students attentive.
              </p>
            </div>
          </div>
          <div className="flex space-x-5">
            <img src={Pen3} alt="Road map stage 3" className="h-auto w-30" />
            <div className="h-auto max-w-[169px] rounded-[11px] bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-[18px] py-[18px]">
              <p className="font-jel text-center text-[12px] text-white">S-1</p>
              <p className="font-jel text-center text-[12px] text-white">
                This is a short explanation. make it short and clear to keep
                students attentive.
              </p>
            </div>
          </div>
          <div className="flex space-x-5">
            <img src={Pen3} alt="Road map stage 3" className="h-auto w-30" />
            <div className="h-auto max-w-[169px] rounded-[11px] bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-[18px] py-[18px]">
              <p className="font-jel text-center text-[12px] text-white">S-1</p>
              <p className="font-jel text-center text-[12px] text-white">
                This is a short explanation. make it short and clear to keep
                students attentive.
              </p>
            </div>
          </div>
          <div className="flex space-x-5">
            <img src={Pen3} alt="Road map stage 3" className="h-auto w-30" />
            <div className="h-auto max-w-[169px] rounded-[11px] bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-[18px] py-[18px]">
              <p className="font-jel text-center text-[12px] text-white">S-1</p>
              <p className="font-jel text-center text-[12px] text-white">
                This is a short explanation. make it short and clear to keep
                students attentive.
              </p>
            </div>
          </div>
          <div className="flex space-x-5">
            <img src={Pen3} alt="Road map stage 3" className="h-auto w-30" />
            <div className="h-auto max-w-[169px] rounded-[11px] bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-[18px] py-[18px]">
              <p className="font-jel text-center text-[12px] text-white">S-1</p>
              <p className="font-jel text-center text-[12px] text-white">
                This is a short explanation. make it short and clear to keep
                students attentive.
              </p>
            </div>
          </div>
          
        </div>

        {/* Desktop layout (unchanged) */}
        <div className="hidden grid-cols-5 px-30 md:grid">
          {/* image 1 */}

          <div className="group -ml-40 flex flex-row justify-center">
            <div className="mt-50 h-40 w-[260px] rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-8 text-left text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:mt-75 md:ml-30 md:w-[200px] md:px-6 lg:mt-80 lg:ml-10 lg:w-[200px] lg:text-[15px] xl:mt-40 xl:ml-30 xl:h-50 2xl:mt-40 2xl:h-50">
              <p className="font-jel text-center md:text-[10px] lg:text-[12px] xl:text-[16px]">
                S-1
              </p>
              <p className="font-jel text-left md:text-[12px] lg:text-[12px] xl:text-[16px]">
                This is a short explanation. make it short and clear to keep
                students
              </p>
            </div>
            <img
              src={Pen1}
              alt=""
              className="absolute mt-30 group-hover:-mb-8 group-hover:h-auto group-hover:w-[180px] md:top-100 md:h-auto md:w-30 md:group-hover:-mr-40 md:group-hover:-mb-20 md:group-hover:w-30 xl:h-auto xl:w-[180px] xl:group-hover:w-[180px] 2xl:top-100 2xl:w-[222px] 2xl:group-hover:top-120 2xl:group-hover:w-[180px]"
            />
          </div>

          {/* image 2 */}

          <div className="group flex flex-row justify-center">
            <div className="mt-40 h-50 w-[260px] rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-8 text-left text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:mt-50 md:h-40 md:w-[200px] md:px-6 lg:mt-55 lg:h-40 lg:w-[200px] lg:text-[15px] xl:mt-20 xl:h-50 2xl:mt-20 2xl:mr-10 2xl:h-50">
              <p className="font-jel text-center md:text-[12px] lg:text-[12px] xl:text-[16px]">
                S-2
              </p>
              <p className="font-jel text-left md:text-[12px] lg:text-[12px] xl:text-[16px]">
                This is a short explanation. make it short and clear to keep
                students
              </p>
            </div>
            <img
              src={Pen2}
              alt=""
              className="absolute mt-[230px] ml-10 group-hover:mb-[-70px] group-hover:h-auto group-hover:w-[180px] md:mt-55 md:mr-30 md:h-auto md:w-30 md:group-hover:top-150 md:group-hover:w-30 xl:w-[180px] xl:group-hover:top-129 xl:group-hover:w-[180px] 2xl:top-50 2xl:w-[222px] 2xl:group-hover:top-75 2xl:group-hover:w-[180px]"
            />
          </div>

          {/* image 3 */}

          <div className="group flex flex-row justify-center">
            <div className="mt-40 h-50 w-[260px] rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-8 text-left text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:mt-50 md:h-40 md:w-[200px] lg:mt-55 lg:h-40 lg:w-[200px] lg:text-[15px] xl:mt-25 xl:h-50 2xl:mt-30 2xl:h-50">
              <p className="font-jel text-center md:text-[12px] lg:text-[12px] xl:text-[16px]">
                S-3
              </p>
              <p className="font-jel text-left md:text-[12px] lg:text-[12px] xl:text-[16px]">
                This is a short explanation. make it short and clear to keep
                students
              </p>
            </div>
            <img
              src={Pen3}
              alt=""
              className="bottom-[200px absolute group-hover:mb-[-50px] group-hover:h-auto group-hover:w-[180px] md:top-120 md:mr-5 md:h-auto md:w-30 md:group-hover:top-150 md:group-hover:w-30 xl:top-115 xl:w-[180px] xl:group-hover:top-135 xl:group-hover:w-[180px] 2xl:top-110 2xl:w-[222px] 2xl:group-hover:top-140 2xl:group-hover:w-[180px]"
            />
          </div>

          {/* image 4 */}

          <div className="group flex flex-row justify-center">
            <div className="mt-40 h-50 w-[260px] rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-8 text-left text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:mt-60 md:h-40 lg:mt-60 lg:h-40 lg:w-[200px] lg:text-[15px] xl:mt-35 xl:h-50 2xl:mt-35 2xl:h-50">
              <p className="font-jel text-center md:text-[12px] lg:text-[12px] xl:text-[16px]">
                S-4
              </p>
              <p className="font-jel text-left md:text-[12px] lg:text-[12px] xl:text-[16px]">
                This is a short explanation. make it short and clear to keep
                students
              </p>
            </div>
            <img
              src={Pen4}
              alt=""
              className="absolute bottom-[200px] group-hover:mb-[-50px] group-hover:h-auto group-hover:w-[180px] md:top-125 md:ml-30 md:h-auto md:w-30 md:group-hover:top-155 md:group-hover:w-30 xl:top-125 xl:w-[180px] xl:group-hover:top-140 xl:group-hover:w-[180px] 2xl:top-118 2xl:w-[222px] 2xl:group-hover:top-145 2xl:group-hover:w-[180px]"
            />
          </div>

          {/* image 5 */}
          <div className="group flex flex-row justify-center">
            <div className="mt-40 h-50 w-[260px] rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-8 text-left text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:mt-90 md:h-40 lg:mt-90 lg:h-40 lg:w-[200px] lg:text-[15px] xl:mt-70 xl:h-50 2xl:mt-70 2xl:ml-10 2xl:h-50">
              <p className="font-jel text-center md:text-[12px] lg:text-[16px] xl:text-[16px]">
                S-5
              </p>
              <p className="font-jel text-left md:text-[12px] lg:text-[12px] xl:text-[16px]">
                This is a short explanation. make it short and clear to keep
                students
              </p>
            </div>
            <img
              src={Pen5}
              alt=""
              className="absolute bottom-30 ml-20 group-hover:-mb-8 group-hover:h-auto group-hover:w-[180px] md:top-155 md:mr-30 md:ml-50 md:h-auto md:w-30 md:group-hover:top-180 md:group-hover:mr-20 md:group-hover:w-30 xl:w-[180px] xl:group-hover:w-[180px] 2xl:top-140 2xl:w-[222px] 2xl:group-hover:bottom-[10px] 2xl:group-hover:w-[180px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
