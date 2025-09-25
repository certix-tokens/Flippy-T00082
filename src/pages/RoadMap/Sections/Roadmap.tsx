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
        <div className="text-center mt-[155px]">
          <h1 className="font-jack text-5xl font-normal text-white md:text-7xl xl:text-8xl">
            ROAD MAP
          </h1>
        </div>

        {/* Mobile pyramid layout (1-2-2) */}
        <div className="md:hidden px-6 mt-10">
          <div className="flex justify-center">
            <img src={Pen3} alt="Road map stage 3" className="w-28 h-auto" />
          </div>
          <div className="mt-6 flex items-center justify-center gap-6">
            <img src={Pen2} alt="Road map stage 2" className="w-24 h-auto" />
            <img src={Pen4} alt="Road map stage 4" className="w-24 h-auto" />
          </div>
          <div className="mt-6 flex items-center justify-center gap-6">
            <img src={Pen1} alt="Road map stage 1" className="w-20 h-auto" />
            <img src={Pen5} alt="Road map stage 5" className="w-20 h-auto" />
          </div>
        </div>

        {/* Desktop layout (unchanged) */}
        <div className='hidden md:grid grid-cols-5 px-30'>
          <div><img src={Pen1} alt="" className='absolute bottom-30' /></div>
          <div><img src={Pen2} alt="" className='absolute bottom-[230px] ml-10'/></div>
          <div><img src={Pen3} alt=""  className='absolute bottom-[200px]'/></div>
          <div><img src={Pen4} alt="" className='absolute bottom-[200px]' /></div>
          <div><img src={Pen5} alt="" className='absolute bottom-30 ml-20'/></div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
