'use client';
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BiPlayCircle } from 'react-icons/bi';
import Image from 'next/image';
import dummyImage from '../gallery/img/image.png';
import vdo from '../gallery/img/vdo.webp';
import img from '../contact/image.png';

const galleryData = [
  { title: 'আমাদের ক্লাসরুম', date: '11 Oct 2024', img: dummyImage },
  { title: 'আমাদের ক্লাসরুম', date: '11 Oct 2023', img: dummyImage },
  { title: 'আমাদের ক্লাসরুম', date: '11 Oct 2024', img: dummyImage },
  { title: 'আমাদের ক্লাসরুম', date: '11 Oct 2029', img: dummyImage },
  { title: 'আমাদের ক্লাসরুম', date: '11 Oct 2025', img: dummyImage },
  { title: 'আমাদের ক্লাসরুম', date: '11 Oct 2026', img: dummyImage },
];

const galleryVdoData = [
  { title: 'আমাদের ভিডিও', date: '11 Oct 2024', img: vdo },
  { title: 'আমাদের ভিডিও', date: '11 Oct 2023', img: vdo },
  { title: 'আমাদের ভিডিও', date: '11 Oct 2024', img: vdo },
  { title: 'আমাদের ভিডিও', date: '11 Oct 2028', img: vdo },
  { title: 'আমাদের ভিডিও', date: '11 Oct 2027', img: vdo },
  { title: 'আমাদের ভিডিও', date: '11 Oct 2025', img: vdo },
];

const Gallery = () => {
  const photoScrollRef = useRef(null);
  const videoScrollRef = useRef(null);

  const handleScroll = (ref, direction) => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollAmount = clientWidth * 0.85;
      ref.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const Section = ({ title, data, isVideo, scrollRef }) => (
    <div className="w-full mx-auto px-4 py-10 text-center relative">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
      <Image src={img} alt="Divider" width={120} height={30} className="mx-auto mb-6" />

      {/* Arrow Buttons */}
      <button
        onClick={() => handleScroll(scrollRef, 'left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-purple-600 text-white p-2 rounded-full shadow-md hover:bg-purple-700"
      >
        <FaChevronLeft size={18} />
      </button>
      <button
        onClick={() => handleScroll(scrollRef, 'right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-purple-600 text-white p-2 rounded-full shadow-md hover:bg-purple-700"
      >
        <FaChevronRight size={18} />
      </button>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 py-4 px-6 scrollbar-hide scroll-smooth"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="min-w-[250px] bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.03] transition-transform duration-300"
          >
            <div className="relative w-full h-40">
              <Image
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {isVideo && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <BiPlayCircle className="text-white text-5xl drop-shadow-xl" />
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <Section title="📸 ফটো গ্যালারী" data={galleryData} isVideo={false} scrollRef={photoScrollRef} />
      <Section title="🎥 ভিডিও গ্যালারী" data={galleryVdoData} isVideo={true} scrollRef={videoScrollRef} />
    </div>
  );
};

export default Gallery;
