import Aboutusbg from '../../../assets/Images/aboutus-bg.webp';
import pengif from "../../../assets/Images/P1-v2.gif";
const Aboutus = () => {
  return (
       <section id="main"
        aria-label="Hero section"
        className="
          relative mx-auto w-full max-w-[1920px] overflow-hidden
          h-[100vh]
          flex items-center justify-center
          bg-cover bg-center
        "
        style={{ backgroundImage: `url(${Aboutusbg})` }}
      >

      <div className='absolute  2xl:top-[150px] max-w-[926px]'>
        <h1 className='font-jack text-white font-normal 2xl:text-[150px]'>ABOUT US</h1>

      </div>

      <div className='absolute 2xl:bottom-30 flex justify-center items-center mx-auto'>
        
        <img src={pengif} alt="About Us" className='w-[348px] h-[448px]' />
      </div>
    </section>
  )
}

export default Aboutus