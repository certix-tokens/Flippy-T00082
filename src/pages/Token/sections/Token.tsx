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
              <h1 className='font-jack text-5xl font-normal text-white md:text-[150px] xl:text-[198px]'>TOKENOMICS</h1>
            </div>

            <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 place-items-center justify-center gap-6 w-full max-w-6xl mx-auto py-8'>

              <div className='flex justify-center'>
                <img src={Toke1} alt="Token 1" className='absolute top-[340px]' />
              </div>
              <div className='flex justify-center'>
                <img src={Toke2} alt="Token 2" className='absolute top-110' />
              </div>
              <div className='flex justify-center'>
                <img src={Toke3} alt="Token 3" className='absolute  top-[340px] ' />
              </div>

            </div>

        </div>

    </div>
  )
}

export default Token