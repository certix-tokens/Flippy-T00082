import Tokenbg from '../../../assets/Images/tokenomicsbg.png';

function Token() {
  return (
            <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0  bg-cover bg-[position:70%_center] 
 md:bg-center"
        style={{ backgroundImage: `url(${Tokenbg})` }}>
            
            

        </div>

    </div>
  )
}

export default Token