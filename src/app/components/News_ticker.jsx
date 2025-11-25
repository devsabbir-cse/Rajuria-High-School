'use client'
import React, { useEffect, useRef, useState } from 'react';
import { useGlobalData } from './../context/GlobalDataContext';

const News_ticker = () => {
  const { newsTicker } = useGlobalData();
  const contentRef = useRef(null);
  const [duration, setDuration] = useState(15);
  const [endX, setEndX] = useState('-150%');

  useEffect(() => {
    if (!newsTicker.length) return;  // no data → skip

    if (contentRef.current) {
      const containerWidth = contentRef.current.parentElement.offsetWidth;
      const contentWidth = contentRef.current.scrollWidth;

      const speed = 80; // px/sec (তুমি বাড়াতে/কমাতে পারো)
      const totalDistance = containerWidth + contentWidth;

      setDuration(totalDistance / speed);
      setEndX(`-${contentWidth}px`);
    }
  }, [newsTicker]);  // 🔥 main fix

  return (
    <div className="flex items-center bg-[#f3f3f3] text-black text-sm font-medium py-2 overflow-hidden relative">
      <div className="bg-purple-700 text-white px-5 py-1 rounded-r-md z-10">
        জরুরি ঘোষণা :
      </div>

      <div
        ref={contentRef}
        className="w-[730px] whitespace-nowrap flex items-center gap-6 animate-custom-marquee"
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
