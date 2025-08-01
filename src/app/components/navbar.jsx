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
    <nav className="bg-gradient-to-r from-purple-800 to-purple-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
       <ul className="flex items-center font-semibold text-[16px] relative  rounded-md ">

          <li  className="px-4  border-r border-white/30">
            <Link href="/" className="hover:text-yellow-300 transition">প্রচ্ছদ</Link>
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
                <li><Link href="/principal-info" className="block px-6 py-3 hover:bg-purple-900">প্রধান শিক্ষকের তথ্য</Link></li>
                <li><Link href="/about" className="block px-6 py-3 hover:bg-purple-900">প্রতিষ্ঠানের ইতিহাস</Link></li>
                <li><Link href="/mission" className="block px-6 py-3 hover:bg-purple-900">প্রতিষ্ঠানের লক্ষ্য</Link></li>
                <li><Link href="/teachers" className="block px-6 py-3 hover:bg-purple-900">শিক্ষকদের তালিকা</Link></li>
                <li><Link href="/committee" className="block px-6 py-3 hover:bg-purple-900">পরিচালনা পর্ষদ</Link></li>
                <li><Link href="/students-honor" className="block px-6 py-3 hover:bg-purple-900">কৃতি শিক্ষার্থী</Link></li>
              </ul>
            )}
          </li>

          {/* শিক্ষার্থীর তথ্য */}
          <li  className="px-4  border-r border-white/30">
            <Link href="/student-info" className="hover:text-yellow-300 transition">শিক্ষার্থীর তথ্য</Link>
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
                <li><Link href="/room-number" className="block px-6 py-3 hover:bg-purple-900">কক্ষ সংখ্যা</Link></li>
                <li><Link href="/computer-usage" className="block px-6 py-3 hover:bg-purple-900">কম্পিউটার-ব্যবহার</Link></li>
                <li><Link href="/printer-list" className="block px-6 py-3 hover:bg-purple-900">মুদ্রণযন্ত্র তালিকা</Link></li>
                <li><Link href="/holiday-list" className="block px-6 py-3 hover:bg-purple-900">ছুটির তালিকা</Link></li>
                <li><Link href="/support" className="block px-6 py-3 hover:bg-purple-900">সহপাঠ</Link></li>
              </ul>
            )}
          </li>

          <li  className="px-4  border-r border-white/30"><Link href="/admission" className="hover:text-yellow-300 transition">ভর্তি কার্যক্রম</Link></li>
          <li  className="px-4 border-r border-white/30"><Link href="/routine" className="hover:text-yellow-300 transition">রুটিন</Link></li>
          <li  className="px-4 border-r border-white/30"><Link href="/notice" className="hover:text-yellow-300 transition">নোটিশ</Link></li>
          <li  className="px-4 border-r border-white/30"><Link href="/gallery" className="hover:text-yellow-300 transition">গ্যালারী</Link></li>
          <li  className="px-4  border-r border-white/30"><Link href="/news" className="hover:text-yellow-300 transition">সাম্প্রতিক খবর</Link></li>
          <li  className="px-4 border-white/30"><Link href="/contact" className="hover:text-yellow-300 transition">যোগাযোগ</Link></li>
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
