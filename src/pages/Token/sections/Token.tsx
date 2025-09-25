import Tokenbg from '../../../assets/Images/tokenomicsbg.png';

function Token() {
  return (
            <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0  bg-cover bg-[position:70%_center] 
 md:bg-center"
        style={{ backgroundImage: `url(${Tokenbg})` }}>
            
            <div className='text-center mt-[155px]'>
              <h1 className='font-jack text-5xl font-normal text-white md:text-7xl xl:text-8xl'>TOKENOMICS</h1>
            </div>

        </div>

    </div>
  )
}

export default Token