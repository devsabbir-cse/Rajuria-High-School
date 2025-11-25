"use client";
import Link from "next/link";
import { useState, useRef } from "react";

const HeaderNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const timeoutRef = useRef(null);

  const handleMouseEnter = (menu) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  return (
    <div className="w-full">

      {/* -------------------- HEADER -------------------- */}
      <div
        className="relative bg-cover bg-center text-black h-[160px] 
        flex md:block items-center justify-between px-4"
        style={{
          backgroundImage: "url('/header/header_Img.jpg')",
        }}
      >
        {/* Logo */}
        <div className="md:absolute md:left-[80px] md:top-1/2 md:-translate-y-1/2">
          <Link href="/User">
            <img
              className="h-[80px] w-[80px] md:h-[120px] md:w-[120px] object-contain"
              src="/header/monogram.png"
              alt="monogram"
            />
          </Link>
        </div>

        {/* Center text */}
        <div className="
          text-center 
          md:absolute md:left-1/2 md:top-1/2 
          md:-translate-x-1/2 md:-translate-y-1/2">

          <h1 className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-[rgb(103,49,143)]">
            <Link href="/User"> রাজুরিয়া উচ্চ বিদ্যালয়</Link>
          </h1>

          <h2 className="text-lg md:text-2xl mb-2 md:mb-3 font-bold text-[rgb(103,49,143)]">
            রাজুরিয়া, বিরল, দিনাজপুর
          </h2>

          <p className="text-sm md:text-lg bg-[rgb(103,49,143)] inline-block px-3 py-1 md:px-4 md:py-2 rounded-full text-white font-semibold">
            School Code : 7930 | EIIN : 120616
          </p>
        </div>
      </div>

      {/* -------------------- NAVBAR -------------------- */}
      <nav className="bg-gradient-to-r from-purple-800 to-purple-900 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center">

          {/* Desktop Logo Placeholder (optional) */}

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center font-semibold text-[16px]">

            <li className="px-4 border-r border-white/30">
              <Link href="/User" className="hover:text-yellow-300">
                প্রচ্ছদ
              </Link>
            </li>

            {/* Desktop Dropdown */}
            <li
              className="relative px-4 border-r border-white/30"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <span className="cursor-pointer hover:text-yellow-300">
                আমাদের সম্পর্কে ▾
              </span>

              {openDropdown === "about" && (
                <ul className="absolute top-full left-0 mt-3 w-60 bg-purple-800 shadow-2xl rounded-md overflow-hidden animate-fade-in">
                  
                  <li>
                    <Link href="/User/pages/aboutUs/principal-info" className="block px-6 py-3 hover:bg-purple-900">
                      প্রধান শিক্ষকের তথ্য
                    </Link>
                  </li>

                  <li>
                    <Link href="/User/pages/aboutUs/teachers" className="block px-6 py-3 hover:bg-purple-900">
                      শিক্ষকবৃন্দ
                    </Link>
                  </li>

                  <li>
                    <Link href="/User/pages/aboutUs/committee" className="block px-6 py-3 hover:bg-purple-900">
                      পরিচালনা পর্ষদ
                    </Link>
                  </li>

                  <li>
                    <Link href="/User/pages/aboutUs/stuff-information" className="block px-6 py-3 hover:bg-purple-900">
                      কর্মচারীবৃন্দ
                    </Link>
                  </li>

                  <li>
                    <Link href="/User/pages/aboutUs/about" className="block px-6 py-3 hover:bg-purple-900">
                      প্রতিষ্ঠানের ইতিহাস
                    </Link>
                  </li>

                </ul>
              )}
            </li>

            <li className="px-4 border-r border-white/30">
              <Link href="/User/pages/student-info" className="hover:text-yellow-300">
                শিক্ষার্থীর তথ্য
              </Link>
            </li>

            <li className="px-4 border-r border-white/30">
              <Link href="/User/pages/admission" className="hover:text-yellow-300">
                ভর্তি কার্যক্রম
              </Link>
            </li>

            <li className="px-4 border-r border-white/30">
              <Link href="/User/pages/routine" className="hover:text-yellow-300">
                ক্লাস রুটিন
              </Link>
            </li>

            <li className="px-4 border-r border-white/30">
              <Link href="/User/pages/notice" className="hover:text-yellow-300">
                নোটিশ
              </Link>
            </li>

            <li className="px-4 border-r border-white/30">
              <Link href="/User/pages/gallery" className="hover:text-yellow-300">
                গ্যালারী
              </Link>
            </li>

            <li className="px-4">
              <Link href="/User/pages/contact" className="hover:text-yellow-300">
                যোগাযোগ
              </Link>
            </li>

          </ul>

        </div>

        {/* ------------ MOBILE MENU ------------ */}
        {mobileMenuOpen && (
          <ul className="md:hidden flex flex-col bg-purple-900 text-white px-6 py-3 space-y-2 animate-fade-in">

            <li>
              <Link href="/User" className="block py-2">প্রচ্ছদ</Link>
            </li>

            {/* Mobile Dropdown */}
            <li className="border-t border-white/20 pt-2">
              <details className="group">
                <summary className="cursor-pointer py-2">
                  আমাদের সম্পর্কে ▾
                </summary>

                <div className="ml-4 flex flex-col space-y-2">

                  <Link href="/User/pages/aboutUs/principal-info">প্রধান শিক্ষকের তথ্য</Link>
                  <Link href="/User/pages/aboutUs/teachers">শিক্ষকবৃন্দ</Link>
                  <Link href="/User/pages/aboutUs/committee">পরিচালনা পর্ষদ</Link>
                  <Link href="/User/pages/aboutUs/stuff-information">কর্মচারীবৃন্দ</Link>
                  <Link href="/User/pages/aboutUs/about">প্রতিষ্ঠানের ইতিহাস</Link>

                </div>
              </details>
            </li>

            <li><Link href="/User/pages/student-info">শিক্ষার্থীর তথ্য</Link></li>
            <li><Link href="/User/pages/admission">ভর্তি কার্যক্রম</Link></li>
            <li><Link href="/User/pages/routine">ক্লাস রুটিন</Link></li>
            <li><Link href="/User/pages/notice">নোটিশ</Link></li>
            <li><Link href="/User/pages/gallery">গ্যালারী</Link></li>
            <li><Link href="/User/pages/contact">যোগাযোগ</Link></li>

          </ul>
        )}

        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
          }
        `}</style>
      </nav>
    </div>
  );
};

export default HeaderNavbar;
