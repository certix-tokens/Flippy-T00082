import { useState } from 'react';
import Plogo from '../../assets/Images/plogo.png';
import { Dice1 } from 'lucide-react';
type Item = {
  name: string;
};

const items: Item[] = [
  { name: 'HOME' },
  { name: 'About us' },
  { name: 'How to Buy' },
  { name: 'Road Map' },
  { name: 'Tokenomics' },
  { name: 'Join Community' },
];

function NavItem() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-auto w-full bg-[#4B181B]">
      <div className="relative z-50 flex items-center justify-between px-6 py-8 md:justify-center">
        {/* Logo on LEFT */}
        {/* <div className="text-white font-bold text-xl md:hidden">Logo</div> */}
        <img
          src={Plogo}
          alt=""
          className="ml-[15px] h-[37px] w-[30px] md:hidden"
        />

        {/* Desktop Menu */}
        <nav className="font-jel hidden gap-[69px] text-[16px] font-normal text-white md:flex">
          {items.map((item) => (
            <a key={item.name} href="#">
              {item.name}
            </a>
          ))}
        </nav>

        {/* Hamburger / Close Icon on RIGHT */}
        <div
          className="cursor-pointer text-2xl text-white md:hidden top-0 right-2 "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'X' : '☰'}
        </div>
      </div>

      {/* Mobile Menu slides from RIGHT */}
      <div
        className={`fixed overflow-y-auto  overscroll-contain top-0 right-0 h-full w-64 transform rounded-l-[20px] bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40 flex flex-col gap-y-8 px-6 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between">
          <div>
            <img src={Plogo} alt="" className="ml-[15px] h-[37px] w-[30px] mt-[40px]" />
          </div>
          <div className="text-white mt-[53px] mb-[48px] font-jac text-[18px]">FLIPPY</div>
        </div>
        {items.map((item) => (
          
          <a
            key={item.name}
            href="#"
            className="font-jel flex h-[43px] w-[220px] items-center justify-center rounded-[20px] border-b border-gray-700 bg-[#ed6b6d52] text-center text-[15px] font-normal text-white"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </a>
        ))}
        <div className='flex flex-col  items-center gap-[39px] mt-[109px]'>
          <button className="h-[44px] w-[129px] rounded-[18px] bg-gradient-to-b from-[#4B181B] from-0% via-[#9B282F] via-50% to-[#B13940] to-100% text-white">
            Join Now
          </button>

          <button className="h-[44px] w-[129px] rounded-[18px] bg-gradient-to-b from-[#4B181B] from-0% via-[#9B282F] via-50% to-[#B13940] to-100% text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavItem;
