'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import galleryData from "@/app/Json/galleryData.json";

export default function GalleryDetails() {
  const params = useParams();
  const id = parseInt(params.id);
  const item = galleryData.find((g) => g.id === id);

  if (!item) return <p className="text-center text-lg text-red-600 mt-10">ছবি পাওয়া যায়নি 😢</p>;

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 py-10 px-4 flex justify-center items-center">
      <div className="w-full bg-white shadow-2xl rounded-3xl p-6 md:p-10  w-full text-gray-800 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,0,0,0.1)]">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 border-b-4 border-blue-300 inline-block pb-2">
          {item.title}
        </h1>

        {/* Date */}
        <p className="text-gray-500 text-sm md:text-base mb-5">📅 তারিখ: {item.date}</p>

        {/* Image */}
        <div className="relative w-full h-[550px] mb-8 rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-300">
          <Image
            src={item.img}
            alt={item.title}
            className="object-cover"
            fill
          />
        </div>

        {/* Description Paragraphs */}
        <div className="text-left space-y-4 leading-relaxed">
          {item.youtubeLink && (
            <a className="text-[17px] text-[#5B168D] underline " href={item.youtubeLink}>
              ভিডিও লিঙ্কঃ {item.youtubeLink}
            </a>
          )}
          {item.p1 && (
            <p className="text-[21px] text-gray-800 mt-5 text-justify">
              {item.p1}
            </p>
          )}
          {item.p2 && (
            <p className="text-[21px] text-gray-800 text-justify">
              {item.p2}
            </p>
          )}
          {item.p3 && (
            <p className="text-[21px] text-gray-800 text-justify">
              {item.p3}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
