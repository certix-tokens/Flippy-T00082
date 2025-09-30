import Tokenbg from '../../../assets/Images/tokenomicsbg.png';
import Toke1 from '../../../assets/Images/toke1.png';
import Toke2 from '../../../assets/Images/toke2.png';
import Toke3 from '../../../assets/Images/toke3.png';
function Token() {
  return (
            <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0  bg-cover bg-[position:70%_center] 
 md:bg-center"
        style={{ backgroundImage: `url(${Tokenbg})` }}>
            
            <div className='text-center mt-[100px]'>
              <h1 className='font-jack text-[40px font-normal text-white md:text-[100px] xl:text-[150px]'>TOKENOMICS</h1>
            </div>

            <div className='grid grid-cols-3    sm:grid-cols-3 lg:grid-cols-3 place-items-center justify-center gap-6 w-full max-w-6xl mx-auto py-8'>

              <div className='flex justify-center'>
                <img src={Toke1} alt="Token 1" className='absolute sm:top-100 top-120 xl:top-[400px] 2xl:top-[500px] w-[150px] h-auto sm:w-[300px] sm:h-auto' />
              </div>
              <div className='flex justify-center'>
                <img src={Toke2} alt="Token 2" className='absolute sm:top-110 top-130 xl:top-110 2xl:top-[520px]  w-[150px] h-auto sm:w-[300px] sm:h-auto' />
              </div>
              <div className='flex justify-center'>
                <img src={Toke3} alt="Token 3" className='absolute sm:top-100 top-120  xl:top-[400px]  w-[150px] 2xl:top-[500px] h-auto sm:w-[300px] sm:h-auto' />
              </div>

            </div>

        </div>

    </div>
  )
}

export default Token