import heroBg from '../../../assets/Images/herobg.png';
import Tele from '../../../assets/Images/tele.png';
import X from '../../../assets/Images/twitter.png';
import build from '../../../assets/Images/build.png';
import Z from '../../../assets/Images/z.png';

type Item = {
  path: string;
};

const items: Item[] = [
  { path: Tele },
  { path: X },
  { path: build },
  { path: Z },
];

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Layer */}
      <div
        className="absolute inset-0 scale-x-[-1] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Content Layer */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center">
   <svg
  viewBox="0 0 1200 400"
  className="absolute -top-16 left-1/2 -translate-x-1/2 w-[1200px] h-[400px]"
>
  {/* Curve Path */}
  <path
    id="curve"
    d="M 100 300 Q 600 0 1100 300"
    fill="transparent"
  />

  {/* Text on Curve */}
  <text
    fill="white"
    
    className="font-jacks md:text-[150px] text-[50px]"
    textAnchor="middle"
    dominantBaseline="middle"
  >
    <textPath href="#curve" startOffset="50%">
      FLIPPY
    </textPath>
  </text>
</svg>


        {/* Text Section */}
        <div className="mt-[470px] flex w-full justify-center px-2">
          <div className="md:w-[1000px] w-[345px] h-[122px]rounded-lg bg-[#9318182B]/5 p-6 backdrop-blur-sm">
            <p className="font-jel mb-[20px] px-4 text-[11px] md:text-[20px] font-medium text-white">
              Welcome to Flippy!
            </p>
            <p className="font-jel px-4 text-[11px] md:text-[20px] leading-8 font-medium text-white">
              Step into the spotlight of penguin-inspired tokens. Join Flippy
              and take center stage in the world of crypto, where excitement
              meets creativity! Waddle your way to exclusive rewards, connect
              with a vibrant community, and shine with every performance.
            </p>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex mt-6  gap-[89px] hidden  md:flex">
          <button className="h-[44px] w-[129px] rounded-[18px] border border-black bg-gradient-to-b from-[#4B181B] via-[#9B282F] to-[#B13940] text-white">
            Join Now
          </button>
          <button className="h-[44px] w-[129px] rounded-[18px] border border-black bg-gradient-to-b from-[#4B181B] via-[#9B282F] to-[#B13940] text-white">
            Buy Now
          </button>
        </div>
        <div className="grid grid-cols-4 gap-[36px]">
          {items.map((item) => (
            <div>
              <img
                src={item.path}
                alt=""
                className="mt-[36px] h-[40px] w-[40px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
