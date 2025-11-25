import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center md:h-[160px] h-[120px] text-black flex items-center justify-between"
      style={{
        backgroundImage: "url('/header/header_Img.jpg')",
      }}
    >
      {/* Container inside header */}
      <div className="w-full max-w-[1350px] mx-auto relative flex items-center justify-between px-4 md:px-0">
        
        {/* Monogram */}
        <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
          <Link href="/User">
            <img
              className="h-[80px] w-[80px] md:h-[120px] md:w-[120px] object-contain"
              src="/header/monogram.png"
              alt="monogram"
            />
          </Link>
        </div>

        {/* Centered Text */}
        <div className="text-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <h1 className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-[rgb(103,49,143)]">
            <Link href="/User">রাজুরিয়া উচ্চ বিদ্যালয়</Link>
          </h1>
          <h2 className="text-lg md:text-2xl mb-2 md:mb-3 font-bold text-[rgb(103,49,143)]">
            রাজুরিয়া, বিরল, দিনাজপুর
          </h2>
          <p className="text-sm md:text-lg bg-[rgb(103,49,143)] inline-block px-3 py-1 md:px-4 md:py-2 rounded-full text-white font-semibold">
            School Code : 7930 | EIIN : 120616
          </p>
        </div>

      </div>
    </div>
  );
};

export default Header;
