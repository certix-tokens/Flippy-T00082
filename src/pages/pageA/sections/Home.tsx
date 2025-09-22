import heroBg from "../../../assets/Images/herobg.png";
import Tele from '../../../assets/Images/tele.png'
import X from '../../../assets/Images/twitter.png'
import build from '../../../assets/Images/build.png'
import Z from '../../../assets/Images/z.png'
import Footer from '../../../components/navbar/footer'
type Item ={
  path: string;
};

const items: Item[]= [
{path:Tele},
{path:X},
{path:build},
{path:Z}

];




function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-x-[-1]"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <h1 className="absolute top-0 left-1/2 -translate-x-1/2 font-jacks text-white font-normal text-[56px] sm:text-[150px] text-center">
          FlIPPY
        </h1>

        {/* Text Section */}
        <div className="px-2 mt-[470px] w-full flex justify-center">
          <div className="bg-[#9318182B]/5 backdrop-blur-sm p-6 rounded-lg w-[780px]">
            <p className="text-white px-4 font-jel font-medium text-[15px] mb-[30px]">
              Welcome to Flippy!
            </p>
            <p className="px-4 font-jel text-white font-medium text-[15px] leading-8">
              Step into the spotlight of penguin-inspired tokens. Join Flippy
              and take center stage in the world of crypto, where excitement
              meets creativity! Waddle your way to exclusive rewards, connect
              with a vibrant community, and shine with every performance.
            </p>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="mt-6 flex gap-[89px] ">
          <button className="border border-black h-[44px] w-[129px] rounded-[18px] bg-gradient-to-b from-[#4B181B] via-[#9B282F] to-[#B13940] text-white">
            Join Now
          </button>
          <button className="border border-black h-[44px] w-[129px] rounded-[18px] bg-gradient-to-b from-[#4B181B] via-[#9B282F] to-[#B13940] text-white">
            Buy Now
          </button>
        </div>
        <div className="grid grid-cols-4 gap-[36px]">
          {items.map((item) => (
            
            <div>
            
            <img src={item.path} alt="" className="w-[40px] h-[40px] mt-[36px]" />
            </div>
          ))}
        </div>
        
      </div>
    
    </div>
  );
}

export default Home;
