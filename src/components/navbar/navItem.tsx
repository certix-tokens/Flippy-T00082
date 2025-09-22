import { useState } from 'react';
import Plogo from '../../assets/Images/plogo.png';
import Close from '../../assets/Images/Vector.png'
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
      {/* Header */}
      <div className="relative z-50 flex items-center justify-between px-6 py-8 md:justify-center">
        {/* Logo on LEFT */}
        <img
          src={Plogo}
          alt="Logo"
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

        {/* Hamburger Icon on RIGHT (only when menu closed) */}
        {!isOpen && (
          <div
            className="cursor-pointer text-2xl text-white md:hidden"
            onClick={() => setIsOpen(true)}
          >
            ☰
          </div>
        )}
      </div>

      {/* Backdrop (click outside to close) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-white/50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Menu slides from RIGHT */}
      <div
        className={`fixed top-0 right-0 h-full w-64 transform rounded-l-[20px] bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50 flex flex-col gap-y-8 px-6 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end">
          <div
            className="mt-2 cursor-pointer text-2xl text-white"
            onClick={() => setIsOpen(false)}
          >
           <img src={Close} alt="" className='mt-2' />
          </div>
        </div>
        {/* Top bar inside menu (Logo + Close) */}
        <div className="mt-1 flex items-center justify-between gap-3">
          <img src={Plogo} alt="Logo" className="h-[37px] w-[30px]" />
          <div className="font-jack text-[18px] font-normal text-white">FLIPPY</div>
        </div>

        {/* Brand Name */}

        {/* Menu Items */}
        {items.map((item) => (
          <a
            key={item.name}
            href="#"
            className="font-jel flex h-[43px] w-[220px] items-center justify-center rounded-[20px] text-center text-[15px] font-normal text-white active:bg-[#E1363952]"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </a>
        ))}

        {/* Buttons */}
        <div className="mt-[109px] flex flex-col items-center gap-[39px]">
          <button className="border border-black h-[44px] w-[129px] rounded-[18px] bg-gradient-to-b from-[#4B181B] via-[#9B282F] to-[#B13940] text-white">
            Join Now
          </button>

          <button className="border border-black h-[44px] w-[129px] rounded-[18px] bg-gradient-to-b from-[#4B181B] via-[#9B282F] to-[#B13940] text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavItem;
