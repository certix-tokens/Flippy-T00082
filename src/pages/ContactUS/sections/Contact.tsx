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

      <div className='text-center mt-[184px]'>
        <h1 className='font-jacks text-white font-normal text-[40px]  md:text-[150px]'>ABOUT US</h1>
      </div>


      <div className='flex justify-center '>
        <img src={Aboutus} alt="" className='absolute md:w-[448px] md:h-[448px] md:bottom-40 bottom-45 w-[300px] h-[300px]' />
        <img src={Pengleft} alt="" className='absolute left-0 bottom-45 md:hidden block' />
        <img src={Pengright} alt="" className='absolute right-0 bottom-45 md:hidden block ' />
      </div>
    </div>
    </div>
  )
}

export default Contact