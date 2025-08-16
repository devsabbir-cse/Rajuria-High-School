'use client'
import React, { useEffect, useRef, useState } from 'react';

const News_ticker = ({ label = "জরুরি ঘোষণা :" }) => {
  const contentRef = useRef(null);
  const [duration, setDuration] = useState(15);
  const [endX, setEndX] = useState('-150%');

  useEffect(() => {
    if (contentRef.current) {
      const containerWidth = contentRef.current.parentElement.offsetWidth; // wrapper width
      const contentWidth = contentRef.current.scrollWidth; // text width

      const speed = 100; // px per second (change to make faster/slower)
      const totalDistance = containerWidth + contentWidth; // full travel

      setDuration(totalDistance / speed);
      setEndX(`-${contentWidth}px`);
    }
  },[]); // children change হলে আবার হিসাব হবে

  return (
    <div className="flex items-center bg-[#f3f3f3] text-black text-sm font-medium py-2 overflow-hidden relative">
      {/* লেবেল */}
      <div className="bg-purple-700 text-white px-5 py-1 rounded-r-md z-10">
        {label}
      </div>

      {/* নিউজ টেক্সট */}
      <div
        ref={contentRef}
        className="w-[730px] whitespace-nowrap flex items-center gap-6 animate-custom-marquee"
        style={{
          animationDuration: `${duration}s`,
          '--endX': endX
        }}
      >
                <span className="font-semibold text-black">এইটটি প্রকাশ বিষয়েঃ</span>
        <span className="bg-blue-500 text-white px-2 py-0.5 rounded text-xs">
          September 29, 2023
        </span>
        <span className="text-black">
          📢 ওয়েবসাইট রক্ষণাবেক্ষণ চলছে
          প্রিয় দর্শনার্থী, বর্তমানে রাজুরিয়া উচ্চ বিদ্যালয়ের অফিসিয়াল ওয়েবসাইটে প্রযুক্তিগত আপডেট ও সংস্কার কাজ চলছে। 📍 অতিরিক্ত তথ্য: সাম্প্রতিক সামরিক পরিস্থিতি ও নিরাপত্তাজনিত সমস্যার কারণে কিছু অনলাইন সেবা সাময়িকভাবে বন্ধ রয়েছে।💡 আমরা যত দ্রুত সম্ভব সব সেবা পুনরায় চালু করার চেষ্টা করছি। আপনাদের অসুবিধার জন্য আন্তরিকভাবে দুঃখিত।
        </span>
      </div>

      {/* Internal CSS */}
      <style jsx>{`
        @keyframes custom-marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(var(--endX));
          }
        }
        .animate-custom-marquee {
          animation-name: custom-marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};

export default News_ticker;
