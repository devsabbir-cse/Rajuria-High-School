'use client';
import { BiPlayCircle } from 'react-icons/bi';
import { FaRss } from 'react-icons/fa';
import Image from 'next/image';
import dummyImage from '../gallery/img/image.png';
import img from '../contact/image.png';

const galleryData = [
  { title: 'আমাদের ক্লাসরুম', date: '11 Oct 2024', img: dummyImage, isVideo: false },
  { title: 'আমাদের ক্লাসরুম', date: '11 Oct 2023', img: dummyImage, isVideo: true },
  { title: 'আমাদের ক্লাসরুম', date: '11 Oct 2024', img: dummyImage, isVideo: false },
  { title: 'আমাদের ক্লাসরুম', date: '11 Oct 2029', img: dummyImage, isVideo: true },
  { title: 'আমাদের ক্লাসরুম', date: '11 Oct 2025', img: dummyImage, isVideo: false },
  { title: 'আমাদের ক্লাসরুম', date: '11 Oct 2024', img: dummyImage, isVideo: false },
  { title: 'আমাদের ক্লাসরুম', date: '11 Oct 2023', img: dummyImage, isVideo: true },
  { title: 'আমাদের ক্লাসরুম', date: '11 Oct 2024', img: dummyImage, isVideo: false },
  { title: 'আমাদের ক্লাসরুম', date: '11 Oct 2029', img: dummyImage, isVideo: true },
  { title: 'আমাদের ক্লাসরুম', date: '11 Oct 2025', img: dummyImage, isVideo: false },
  { title: 'আমাদের ক্লাসরুম', date: '11 Oct 2024', img: dummyImage, isVideo: false },
  { title: 'আমাদের ক্লাসরুম', date: '11 Oct 2023', img: dummyImage, isVideo: true },
  { title: 'আমাদের ক্লাসরুম', date: '11 Oct 2024', img: dummyImage, isVideo: false },
  { title: 'আমাদের ক্লাসরুম', date: '11 Oct 2029', img: dummyImage, isVideo: true },
  { title: 'আমাদের ক্লাসরুম', date: '11 Oct 2025', img: dummyImage, isVideo: false },
];

const menuItems = [
  { title: 'সম্প্রতি সংবাদ', color: 'bg-orange-400' },
  { title: 'ফটো গ্যালারী', color: 'bg-cyan-500' },
  { title: 'ভিডিও গ্যালারী', color: 'bg-red-500' },
  { title: 'আমাদের অর্জন', color: 'bg-sky-500' },
  { title: 'শিক্ষার্থীদের লেখা', color: 'bg-indigo-700' },
];

const Page = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 py-10 max-w-screen-xl mx-auto">
      
      

      {/* Gallery Section */}
      <div className="w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">সংবাদ ও মিডিয়া সেন্টার</h1>
        <Image src={img} alt="Divider" width={120} height={30} className="mx-auto mb-6" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-h-[800px] overflow-y-auto px-2">
          {galleryData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="relative w-full h-40">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {item.isVideo && (
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

      {/* Sidebar */}
      <div className="flex flex-col gap-3 w-full max-w-xs mt-20">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`flex items-center gap-3 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:opacity-90 transition ${item.color}`}
          >
            <FaRss className="text-white text-lg" />
            <span>{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Page;
