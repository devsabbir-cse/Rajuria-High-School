'use client';
import Link from 'next/link';
import { useState, useRef } from 'react';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
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
    <nav className="bg-gradient-to-r from-purple-800 to-purple-900 text-white shadow-md sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4">
       <ul className="flex items-center font-semibold text-[16px] relative  rounded-md ">

          <li  className="px-4  border-r border-white/30">
            <Link href="/User" className="hover:text-yellow-300 transition">প্রচ্ছদ</Link>
          </li>

          {/* আমাদের সম্পর্কে */}
          <li
            className="relative px-4  border-r border-white/30 "
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="cursor-pointer hover:text-yellow-300 transition">আমাদের সম্পর্কে ▾</span>
            {openDropdown === 'about' && (
              <ul className="absolute top-full left-0 mt-3 w-64 bg-purple-800 text-white shadow-2xl rounded-md z-50 overflow-hidden animate-fade-in">
                <li><Link href="/User/pages/aboutUs/principal-info" className="block px-6 py-3 hover:bg-purple-900">প্রধান শিক্ষকের তথ্য</Link></li>
                <li><Link href="/User/pages/aboutUs/about" className="block px-6 py-3 hover:bg-purple-900">প্রতিষ্ঠানের ইতিহাস</Link></li>
                <li><Link href="/User/pages/aboutUs/committee" className="block px-6 py-3 hover:bg-purple-900">পরিচালনা পর্ষদ</Link></li>
                <li><Link href="/User/pages/aboutUs/teachers" className="block px-6 py-3 hover:bg-purple-900">শিক্ষকদের তালিকা</Link></li>
                <li><Link href="/User/pages/aboutUs/stuff-information" className="block px-6 py-3 hover:bg-purple-900">কর্মচারীবৃন্দ</Link></li>
                <li><Link href="/User/pages/aboutUs/students-honor" className="block px-6 py-3 hover:bg-purple-900">কৃতি শিক্ষার্থী</Link></li>
              </ul>
            )}
          </li>

          {/* শিক্ষার্থীর তথ্য */}
          <li  className="px-4  border-r border-white/30">
            <Link href="/User/pages/student-info" className="hover:text-yellow-300 transition">শিক্ষার্থীর তথ্য</Link>
          </li>

          {/* একাডেমিক তথ্য */}
          <li
            className="relative px-4  border-r border-white/30"
            onMouseEnter={() => handleMouseEnter('academic')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="cursor-pointer hover:text-yellow-300 transition">একাডেমিক তথ্য ▾</span>
            {openDropdown === 'academic' && (
              <ul className="absolute top-full left-0 mt-3 w-64 bg-purple-800 text-white shadow-2xl rounded-md z-50 overflow-hidden animate-fade-in">
                <li><Link href="/User/pages/academicData/room-number" className="block px-6 py-3 hover:bg-purple-900">কক্ষ সংখ্যা</Link></li>
                <li><Link href="/User/pages/academicData/computer-usage" className="block px-6 py-3 hover:bg-purple-900">কম্পিউটার-ব্যবহার</Link></li>
                <li><Link href="/User/pages/academicData/entry-post-list" className="block px-6 py-3 hover:bg-purple-900">শূণ্যপদের তালিকা</Link></li>
                <li><Link href="/User/pages/academicData/holiday-list" className="block px-6 py-3 hover:bg-purple-900">ছুটির তালিকা</Link></li>
                <li><Link href="/User/pages/academicData/extracurricular" className="block px-6 py-3 hover:bg-purple-900">সহপাঠ</Link></li>
              </ul>
            )}
          </li>

          <li  className="px-4  border-r border-white/30"><Link href="/User/pages/admission" className="hover:text-yellow-300 transition">ভর্তি কার্যক্রম</Link></li>
          <li  className="px-4 border-r border-white/30"><Link href="/User/pages/routine" className="hover:text-yellow-300 transition">রুটিন</Link></li>
          <li  className="px-4 border-r border-white/30"><Link href="/User/pages/notice" className="hover:text-yellow-300 transition">নোটিশ</Link></li>
          <li  className="px-4 border-r border-white/30"><Link href="/User/pages/gallery" className="hover:text-yellow-300 transition">গ্যালারী</Link></li>
          <li  className="px-4  border-r border-white/30"><Link href="/User/pages/postNews" className="hover:text-yellow-300 transition">সাম্প্রতিক খবর</Link></li>
          <li  className="px-4 border-white/30"><Link href="/User/pages/contact" className="hover:text-yellow-300 transition">যোগাযোগ</Link></li>
        </ul>
      </div>

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
