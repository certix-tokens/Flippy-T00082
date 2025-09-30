import Roadmapbg from '../../../assets/Images/roadmapbg.png';
import Pen1 from '../../../assets/Images/1.png';
import Pen2 from '../../../assets/Images/2.png';
import Pen3 from '../../../assets/Images/3.png';
import Pen4 from '../../../assets/Images/4.png';
import Pen5 from '../../../assets/Images/5.png';

function Roadmap() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-[position:70%_center] md:bg-center"
        style={{ backgroundImage: `url(${Roadmapbg})` }}
      >
        <div className="mt-[155px] text-center">
          <h1 className="font-jack text-5xl font-normal text-white md:text-7xl xl:text-8xl">
            ROAD MAP
          </h1>
        </div>

        {/* Mobile pyramid layout (1-2-2) */}
        <div className="mt-10 px-6 md:hidden">
          <div className="flex justify-center">
            <img src={Pen3} alt="Road map stage 3" className="h-auto w-28" />
          </div>
          <div className="mt-6 flex items-center justify-center gap-6">
            <img src={Pen2} alt="Road map stage 2" className="h-auto w-24" />
            <img src={Pen4} alt="Road map stage 4" className="h-auto w-24" />
          </div>
          <div className="mt-6 flex items-center justify-center gap-6">
            <img src={Pen1} alt="Road map stage 1" className="h-auto w-20" />
            <img src={Pen5} alt="Road map stage 5" className="h-auto w-20" />
          </div>
        </div>

        {/* Desktop layout (unchanged) */}
        <div className="hidden grid-cols-5 px-30 md:grid">
          {/* image 1 */}

          <div className="group -ml-40 flex flex-row justify-center">
            <div className="mt-50 h-40 w-[260px] rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-8 text-left text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:mt-60 lg:ml-10 lg:w-[200px] 2xl:h-50 lg:text-[15px] xl:mt-40 xl:h-50 2xl:mt-40">
              <p className="font-jel text-center lg:text-[12px] xl:text-[16px]">
                S-1
              </p>
              <p className="font-jel text-left lg:text-[12px] xl:text-[16px]">
                This is a short explanation. make it short and clear to keep
                students
              </p>
            </div>
            <img
              src={Pen1}
              alt=""
              className="absolute bottom-30 group-hover:-mb-8 group-hover:h-auto group-hover:w-[180px] md:h-auto md:w-40"
            />
          </div>

          {/* image 2 */}

          <div className="group flex flex-row justify-center">
            <div className="mt-40 h-50 w-[260px] rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-8 text-left text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:mt-40 lg:h-40 lg:w-[200px] lg:text-[15px] xl:mt-30 xl:h-50 2xl:mt-30 2xl:h-50">
              <p className="font-jel text-center lg:text-[12px] xl:text-[16px]">
                S-2
              </p>
              <p className="font-jel text-left lg:text-[12px] xl:text-[16px]">
                This is a short explanation. make it short and clear to keep
                students
              </p>
            </div>
            <img
              src={Pen2}
              alt=""
              className="absolute bottom-[230px] ml-10 group-hover:mb-[-70px] group-hover:h-auto group-hover:w-[180px] md:h-auto md:w-40"
            />
          </div>

          {/* image 3 */}

          <div className="group flex flex-row justify-center">
            <div className="mt-40 h-50 w-[260px] rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-8 text-left text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:mt-50 lg:h-40 lg:w-[200px] lg:text-[15px] xl:mt-30 xl:h-50 2xl:mt-30 2xl:h-50">
              <p className="font-jel text-center lg:text-[12px] xl:text-[16px]">
                S-3
              </p>
              <p className="font-jel text-left lg:text-[12px] xl:text-[16px]">
                This is a short explanation. make it short and clear to keep
                students
              </p>
            </div>
            <img
              src={Pen3}
              alt=""
              className="absolute bottom-[200px] group-hover:mb-[-50px] group-hover:h-auto group-hover:w-[180px] md:h-auto md:w-40"
            />
          </div>

          {/* image 4 */}

          <div className="group flex flex-row justify-center">
            <div className="mt-40 h-50 w-[260px] rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-8 text-left text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:mt-50 lg:h-40 lg:w-[200px] lg:text-[15px] xl:mt-40 xl:h-50 2xl:mt-35 2xl:h-50">
              <p className="font-jel text-center lg:text-[12px] xl:text-[16px]">
                S-4
              </p>
              <p className="font-jel text-left lg:text-[12px] xl:text-[16px]">
                This is a short explanation. make it short and clear to keep
                students
              </p>
            </div>
            <img
              src={Pen4}
              alt=""
              className="absolute bottom-[200px] group-hover:mb-[-50px] group-hover:h-auto group-hover:w-[180px] md:h-auto md:w-40"
            />
          </div>

          {/* image 5 */}
          <div className="group flex flex-row justify-center">
            <div className="mt-40 h-50 w-[260px] rounded-2xl bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] px-4 py-8 text-left text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:mt-70 lg:h-40 lg:w-[200px] lg:text-[15px] xl:mt-50 xl:h-50 2xl:mt-40 2xl:ml-10 2xl:h-50">
              <p className="font-jel text-center lg:text-[16px] xl:text-[24px]">
                S-5
              </p>
              <p className="font-jel text-left lg:text-[12px] xl:text-[16px]">
                This is a short explanation. make it short and clear to keep
                students
              </p>
            </div>
            <img
              src={Pen5}
              alt=""
              className="absolute bottom-30 ml-20 group-hover:-mb-8 group-hover:h-auto group-hover:w-[180px] md:h-auto md:w-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
