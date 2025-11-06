'use client';
import Image from 'next/image';
import img from '../contact/image.png';
import dummyImage from './img/image.png';
import { useRouter } from 'next/navigation';
import galleryData from "@/app/Json/galleryData.json"

const Gallery = () => {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/pages/gallery/details/${id}`);
  };

  return (
    <div className="w-full mx-auto px-4 py-10 text-center relative">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">📸 গ্যালারী</h1>
      <Image
        src={img}
        alt="Divider"
        width={120}
        height={30}
        className="mx-auto mb-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {galleryData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.03] transition-transform duration-300 w-[250px] cursor-pointer hover:bg-gradient-to-r from-indigo-500 to-purple-500 hover:text-white"
            onClick={() => handleClick(item.id)}
          >
            <div className="relative w-full h-40">
              <Image
                src={item.img}
                alt={item.title}
                width={120}
                height={30}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold ">{item.title}</h3>
              <p className="text-md ">{item.date}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
