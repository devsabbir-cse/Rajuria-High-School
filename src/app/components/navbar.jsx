"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(false);
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
    <nav className="bg-gradient-to-r from-purple-800 to-purple-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex md:justify-center justify-between items-center ">

        {/* LEFT - Logo or Title */}
        <Link href="/User" className="text-xl font-bold md:hidden">
          হোম
        </Link>

        {/* RIGHT - Desktop Menu */}
        <ul className="hidden md:flex items-center font-semibold text-[16px] relative rounded-md ">
          <li className="px-4 border-r border-white/30">
            <Link href="/User" className="hover:text-yellow-300">
              হোম
            </Link>
          </li>

          {/* আমাদের সম্পর্কে */}
          <li
            className="relative px-4 border-r border-white/30"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="cursor-pointer hover:text-yellow-300 transition">
              আমাদের সম্পর্কে ▾
            </span>

            {openDropdown === "about" && (
              <ul className="absolute top-full left-0 mt-3 w-64 bg-purple-800 text-white shadow-2xl rounded-md z-50 overflow-hidden animate-fade-in">
                <li>
                  <Link
                    href="/User/pages/aboutUs/principal-info"
                    className="block px-6 py-3 hover:bg-purple-900"
                  >
                    প্রধান শিক্ষকের তথ্য
                  </Link>
                </li>
                <li>
                  <Link
                    href="/User/pages/aboutUs/teachers"
                    className="block px-6 py-3 hover:bg-purple-900"
                  >
                    শিক্ষকবৃন্দ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/User/pages/aboutUs/committee"
                    className="block px-6 py-3 hover:bg-purple-900"
                  >
                    পরিচালনা পর্ষদ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/User/pages/aboutUs/stuff-information"
                    className="block px-6 py-3 hover:bg-purple-900"
                  >
                    কর্মচারীবৃন্দ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/User/pages/aboutUs/about"
                    className="block px-6 py-3 hover:bg-purple-900"
                  >
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

        {/* MOBILE MENU BUTTON (3 bar) */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU LIST */}
      {mobileOpen && (
        <div className="md:hidden bg-purple-900 text-white px-6 pb-6 space-y-3">

          <Link href="/User" className="block py-2 border-b border-white/20">
            হোম
          </Link>

          {/* Mobile submenu */}
          <div className="border-b border-white/20 pb-2">
            <button
              onClick={() => setMobileSubmenu(!mobileSubmenu)}
              className="w-full text-left py-2 flex justify-between items-center"
            >
              <span>আমাদের সম্পর্কে</span>
              <span>{mobileSubmenu ? "▴" : "▾"}</span>
            </button>

            {mobileSubmenu && (
              <ul className="ml-3 space-y-2">
                <li className="border-b border-white/20 py-2">
                  <Link href="/User/pages/aboutUs/principal-info">প্রধান শিক্ষকের তথ্য</Link>
                </li>
                <li className="border-b border-white/20 py-2">
                  <Link href="/User/pages/aboutUs/teachers">শিক্ষকবৃন্দ</Link>
                </li>
                <li className="border-b border-white/20 py-2">
                  <Link href="/User/pages/aboutUs/committee">পরিচালনা পর্ষদ</Link>
                </li>
                <li className="border-b border-white/20 py-2">
                  <Link href="/User/pages/aboutUs/stuff-information">কর্মচারীবৃন্দ</Link>
                </li>
                <li className="py-2">
                  <Link href="/User/pages/aboutUs/about">প্রতিষ্ঠানের ইতিহাস</Link>
                </li>
              </ul>
            )}

          </div>

          <Link href="/User/pages/student-info" className="block py-2 border-b border-white/20">
            শিক্ষার্থীর তথ্য
          </Link>

          <Link href="/User/pages/admission" className="block py-2 border-b border-white/20">
            ভর্তি কার্যক্রম
          </Link>

          <Link href="/User/pages/routine" className="block py-2 border-b border-white/20">
            ক্লাস রুটিন
          </Link>

          <Link href="/User/pages/notice" className="block py-2 border-b border-white/20">
            নোটিশ
          </Link>

          <Link href="/User/pages/gallery" className="block py-2 border-b border-white/20">
            গ্যালারী
          </Link>

          <Link href="/User/pages/contact" className="block py-2">
            যোগাযোগ
          </Link>
        </div>
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
  );
};

export default Navbar;
