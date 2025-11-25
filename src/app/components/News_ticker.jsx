'use client'
import React, { useEffect, useRef, useState } from 'react';
import { useGlobalData } from '@/app/context/GlobalDataContext';

const News_ticker = () => {
  const { newsTicker } = useGlobalData();
  const contentRef = useRef(null);
  const [duration, setDuration] = useState(15);
  const [endX, setEndX] = useState('-100%');

  useEffect(() => {

    
    if (!newsTicker.length) return;

    if (contentRef.current) {
      const containerWidth = contentRef.current.parentElement.offsetWidth; // dynamic container width
      const contentWidth = contentRef.current.scrollWidth;

      const speed = 80; // px/sec (adjustable)
      const totalDistance = containerWidth + contentWidth;

      setDuration(totalDistance / speed);
      setEndX(`-${contentWidth}px`);
    }
  }, [newsTicker]);

  return (
    <div className="flex items-center bg-[#f3f3f3] text-black text-sm sm:text-base font-medium py-2 overflow-hidden relative">
      {/* Label */}
      <div className="bg-purple-700 text-white px-3 sm:px-5 py-1 rounded-r-md z-10 flex-shrink-0 text-xs sm:text-sm">
        জরুরি ঘোষণা :
      </div>

      {/* Ticker Content */}
      <div
        ref={contentRef}
        className="flex whitespace-nowrap items-center gap-4 sm:gap-6 animate-custom-marquee w-full"
        style={{
          animationDuration: `${duration}s`,
          '--endX': endX
        }}
      >
        <span className="text-black">{newsTicker[0]?.news}</span>
      </div>

      <style jsx>{`
        @keyframes custom-marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(var(--endX)); }
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
