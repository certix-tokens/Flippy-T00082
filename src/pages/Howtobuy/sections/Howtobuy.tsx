import Howtobuybg from '../../../assets/Images/howtobuy.png';
import Howtobuypng from '../../../assets/Images/howtobuypng.png';

function HowToBuy() {
  return (
    <section
      className="min-h-screen bg-cover bg-[position:70%_center] md:bg-center"
      style={{ backgroundImage: `url(${Howtobuybg})` }}
    >
      <div className="text-center pt-[65px]">
        <h1 className="font-jack text-white font-normal text-5xl md:text-7xl xl:text-8xl">
          HOW TO BUY
        </h1>
      </div>

      <div className="flex justify-center mt-12 md:mt-16">
        <img
          src={Howtobuypng}
          alt="How to buy illustration"
          loading="lazy"
          className=" h-auto bottom-[100px] absolute"
        />
      </div>
    </section>
  );
}

export default HowToBuy;
