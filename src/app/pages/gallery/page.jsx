'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import galleryData from "@/app/Json/galleryData.json"

const Gallery = () => {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/pages/gallery/details/${id}`);
  };

  return (
    <div className="w-full mx-auto px-4 text-center relative">
      <h1 className="text-3xl font-bold mb-5 text-[#5B168E]">গ্যালারী</h1>      

      {/* Scrollable Grid */}
      <div className="h-[600px] overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
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
                  width={250}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-md">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
