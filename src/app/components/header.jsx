import React from 'react';

const Header = () => {
  return (
    <div
      className="relative bg-cover bg-center text-black h-[160px]"
      style={{
        backgroundImage: "url('/header/header_Img.jpg')",
      }}
    >
      {/* Monogram - positioned on the left */}
      <div className="absolute left-[80px] top-1/2 -translate-y-1/2">
        <img
          className="h-[120px] w-[120px] object-contain"
          src="/header/monogram.png"
          alt="monogram"
        />
      </div>

      {/* Centered Text */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl font-bold mb-2 text-[rgb(103,49,143)]">
          রাজুরিয়া উচ্চ বিদ্যালয়
        </h1>
        <h2 className="text-2xl mb-3 font-bold text-[rgb(103,49,143)]">
          রাজুরিয়া, খানসামা, দিনাজপুর
        </h2>
        <p className="text-lg bg-[rgb(103,49,143)] inline-block px-4 py-2 rounded-full text-white font-semibold">
          School Code : 7930 | EIIN : 120616
        </p>
      </div>
    </div>
  );
};

export default Header;
