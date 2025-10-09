import { useEffect, useState } from 'react';
import Plogo from '../../assets/Images/plogo.png';
import Close from '../../assets/Images/Vector.png';

type Item = {
  name: string;
  path: string;
};

const items: Item[] = [
  { name: 'HOME', path: '/' },
  { name: 'About us', path: '/about_us' },
  { name: 'How to Buy', path: '/how-to-buy' },
  { name: 'Road Map', path: '/road-map' },
  { name: 'Tokenomics', path: '/toke' },
  { name: 'Join Community', path: '/join' },
];

function NavItem() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previous || '';
      };
    }

    // Ensure unlock when closed
    document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 z-100 bg-[#4B181B] h-[72px]">
      {/* Header */}
      <div className="relative z-50 flex items-center justify-between px-6 h-full md:justify-center">
        {/* Logo on LEFT */}
        <img src={Plogo} alt="Logo" className="ml-[15px] h-[37px] w-[30px] md:hidden" />

        {/* Desktop Menu */}
        <nav className="font-jel hidden gap-[69px] text-[12px] xl:text-[16px] font-normal text-white md:flex">
          {items.map((item) => (
            <a key={item.name} href={item.path}>
              {item.name}
            </a>
          ))}
        </nav>

        {/* Hamburger Icon on RIGHT (only when menu closed) */}
        {!isOpen && (
          <div className="cursor-pointer text-2xl text-white md:hidden" onClick={() => setIsOpen(true)}>
            ☰
          </div>
        )}
      </div>

      {/* Backdrop (click outside to close) */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white/50 md:hidden" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Mobile Menu slides from RIGHT */}
      <div
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 h-full max-w-[277px] overflow-y-auto overscroll-contain transform rounded-l-[20px] bg-gradient-to-b from-[#4B181B] from-30% via-[#9B282F] to-[#B13940] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-60 flex flex-col gap-y-8 px-6 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end">
          <button className="mt-2 cursor-pointer text-2xl text-white" onClick={() => setIsOpen(false)}>
            <img src={Close} alt="Close menu" className="mt-2" />
          </button>
        </div>
        {/* Top bar inside menu (Logo + Close) */}
        <div className="mt-1 flex items-center justify-between gap-3">
          <img src={Plogo} alt="Logo" className="h-[37px] w-[30px]" />
          <div className="font-jack text-[18px] font-normal text-white">FLIPPY</div>
        </div>

        {/* Menu Items */}
        {items.map((item) => (
          <a
            key={item.name}
            href={item.path}
            className="font-jel flex h-[43px] w-[220px] items-center justify-center rounded-[20px] text-center text-[15px] font-normal text-white active:bg-[#E1363952]"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </a>
        ))}

        {/* Buttons */}
        <div className="mt-[109px] mb-8 flex flex-col items-center gap-[39px]">
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
