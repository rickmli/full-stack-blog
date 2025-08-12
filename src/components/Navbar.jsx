import { useState } from 'react';
import Image from './Image';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-16 w-full items-center justify-between md:h-20">
      {/* LOGO */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <span>lamalog</span>
      </div>
      {/* MOBILE Button */}
      <Image src="/logo.png" alt="logo" width="32" height="32" />
      <button
        className="cursor-pointer text-4xl md:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? 'X' : '≡'}
      </button>
      {/* MOBILE LINK LIST */}
      <div
        className={`absolute top-16 flex h-screen w-full flex-col items-center justify-center gap-8 text-lg font-medium transition-all ease-in-out ${
          open ? 'right-0' : '-right-[100%]'
        }`}
      >
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Polular</a>
        <a href="/">About</a>
        <a href="/">
          <button className="rounded-3xl bg-blue-800 px-4 py-2 text-white">
            Login 👋
          </button>
        </a>
      </div>
      {/* DESKTOP */}
      <div className="hidden items-center gap-8 font-medium md:flex xl:gap-12">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Polular</a>
        <a href="/">About</a>
        <a href="/">
          <button className="rounded-3xl bg-blue-800 px-4 py-2 text-white">
            Login 👋
          </button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
