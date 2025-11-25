import React from 'react';
import { Facebook, Twitter, Youtube } from 'lucide-react';
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div
      className="relative w-full bg-no-repeat bg-bottom bg-cover mt-3"
      style={{
        backgroundImage: "url('/footer/footer.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">

        {/* Column 1: School Info */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">রাজুরিয়া উচ্চ বিদ্যালয়</h2>
          <p className="text-sm mb-3">প্রধান শিক্ষক : মোঃ শামসুল হুদা</p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" aria-label="Facebook">
              <Facebook className="text-blue-600 hover:scale-110 transition" />
            </a>
            <a href="#" aria-label="Gmail">
              <SiGmail className="text-red-600 hover:scale-110 transition" size={20} />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="text-blue-400 hover:scale-110 transition" />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube className="text-red-500 hover:scale-110 transition" />
            </a>
          </div>
        </div>

        {/* Column 2: Contact Info */}
        <div className="text-center md:text-left md:border-l md:border-r px-0 md:px-4 py-4 md:py-0">
          <h3 className="font-semibold text-base mb-2">যোগাযোগ :</h3>
          <p className="text-sm">রাজুরিয়া, খানসামা, দিনাজপুর</p>
          <p className="text-sm">মোবাইল : 01722938548</p>
          <p className="text-sm">
            ইমেইল :
            <a href="mailto:kayempurhs1964@gmail.com" className="text-blue-600 hover:underline ml-1">
              kayempurhs1964@gmail.com
            </a>
          </p>
        </div>

        {/* Column 3: Credits */}
        <div className="text-center md:text-right mt-4 md:mt-0">
          <p className="text-sm">পরিকল্পনা ও ব্যবস্থাপনায়</p>
          <p className="text-sm font-semibold">মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর</p>
          <p className="text-sm">
            প্রযুক্তি সহায়তায় <span className="text-red-600 font-bold"><a href='https://devsabbir.vercel.app/' target='_blank'>টেক সাব্বির</a> </span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
