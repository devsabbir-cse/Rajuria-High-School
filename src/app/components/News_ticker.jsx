'use client'
import React from 'react';

const News_ticker = () => {
  return (
    <div className="flex items-center bg-[#f3f3f3] text-black text-sm font-medium py-2 overflow-hidden relative">
      {/* বাম দিকের লেবেল */}
      <div className="bg-purple-700 text-white px-3 py-1 mr-2 rounded-r-md z-10">
        জরুরি ঘোষণা :
      </div>

      {/* মূল নিউজ টেক্সট */}
      <div className="whitespace-nowrap flex items-center gap-6 animate-custom-marquee">
        <span className="font-semibold text-black">এইটটি প্রকাশ বিষয়েঃ</span>
        <span className="bg-blue-500 text-white px-2 py-0.5 rounded text-xs">
          September 29, 2023
        </span>
        <span className="text-black">
          সকল শ্রেণীর ক্লাস রুটিন ও শিক্ষার্থীদের ভর্তি প্রক্রিয়া ডিজিটাল করার বিষয়েঃ
        </span>
      </div>

      {/* Internal CSS */}
      <style jsx>{`
        @keyframes custom-marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-custom-marquee {
          animation: custom-marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default News_ticker;
