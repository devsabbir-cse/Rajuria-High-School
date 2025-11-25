'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { getGalleryData } from '@/app/Get-Data/gallery';
import { useEffect, useState } from 'react';
import { useGlobalData } from '@/app/context/GlobalDataContext';
import { ClipLoader } from "react-spinners";

export default function GalleryDetails() {
const params = useParams();
  const id = params.id; // keep as string

  // const [galleryData, setGalleryData] = useState([]);
  const [item, setItem] = useState(null);

  const { galleryData, loading } = useGlobalData();

  useEffect(() => {
    const fetchGalleryData = async () => {

      // setGalleryData(data);

      const foundItem = galleryData.find((g) => String(g.id) === String(id));
      setItem(foundItem);
    };

    fetchGalleryData();
  }, [id]);

  // Debug: see item updates
  useEffect(() => {
    console.log("ITEM UPDATED:", item);
  }, [item]);

  // ✅ SHOW LOADER FIRST
    if (loading) {
      return (
        <div className="flex flex-col items-center w-full mt-10 mb-10">
          <ClipLoader color="#3B82F6" size={60} />
          <p className="mt-3 text-gray-600 text-lg font-semibold animate-pulse">
            Loading...
          </p>
        </div>
      );
    }

  if (!item)
    return (
      <p className="text-center text-lg text-red-600 mt-10">
        ছবি পাওয়া যায়নি 😢
      </p>
    );


  return (
    <div className=" px-4 flex justify-center items-center">
      <div className="w-full bg-white shadow-2xl rounded-3xl p-6 md:p-10 text-gray-800 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,0,0,0.1)]">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 border-b-4 border-blue-300 inline-block pb-2">
          {item.title}
        </h1>

        {/* Date */}
        <p className="text-gray-500 text-sm md:text-base mb-5">📅 তারিখ: {item.date}</p>

        <div className='h-[700px] overflow-x-auto'>
          {/* Image */}
          <div className="relative w-full h-[300px] mb-8 rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-300">
            <Image
              src={`https://drive.google.com/uc?export=download&id=${item.img}`}
              alt={item.title}
              className="object-contain"
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
            {item.p4 && (
              <p className="text-[21px] text-gray-800 text-justify">
                {item.p3}
              </p>
            )}
            {item.p5 && (
              <p className="text-[21px] text-gray-800 text-justify">
                {item.p3}
              </p>
            )}
            {item.p6 && (
              <p className="text-[21px] text-gray-800 text-justify">
                {item.p3}
              </p>
            )}
            {item.p7 && (
              <p className="text-[21px] text-gray-800 text-justify">
                {item.p3}
              </p>
            )}
            {item.p8 && (
              <p className="text-[21px] text-gray-800 text-justify">
                {item.p3}
              </p>
            )}
            {item.p9 && (
              <p className="text-[21px] text-gray-800 text-justify">
                {item.p3}
              </p>
            )}
            {item.p10 && (
              <p className="text-[21px] text-gray-800 text-justify">
                {item.p3}
              </p>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
// 'use client';

// import { useParams } from 'next/navigation';
// import Image from 'next/image';
// import { getGalleryData } from '@/app/Get-Data/gallery';
// import { useEffect, useState } from 'react';

// export default function GalleryDetails() {
//   const params = useParams();
//   const id = params.id; // keep as string

//   const [galleryData, setGalleryData] = useState([]);
//   const [item, setItem] = useState(null);

//   useEffect(() => {
//     const fetchGalleryData = async () => {
//       const data = await getGalleryData();

//       setGalleryData(data);

//       const foundItem = data.find((g) => String(g.id) === String(id));
//       setItem(foundItem);
//     };

//     fetchGalleryData();
//   }, [id]);

//   // Debug: see item updates
//   useEffect(() => {
//     console.log("ITEM UPDATED:", item);
//   }, [item]);

//   if (!item)
//     return (
//       <p className="text-center text-lg text-red-600 mt-10">
//         ছবি পাওয়া যায়নি 😢
//       </p>
//     );

//   return (
//     <div className="px-4 flex justify-center items-center">
//       <div className="w-full bg-white shadow-2xl rounded-3xl p-6 md:p-10 text-gray-800">
        
//         <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 border-b-4 border-blue-300 inline-block pb-2">
//           {item.title}
//         </h1>

//         <p className="text-gray-500 text-sm md:text-base mb-5">
//           📅 তারিখ: {item.date}
//         </p>

//         <div className="h-[700px] overflow-x-auto">
//           <div className="relative w-full h-[300px] mb-8 rounded-xl overflow-hidden shadow-md">
//             <Image
//               src={`https://drive.google.com/uc?export=download&id=${item.img}`} 
//               alt={item.title}
//               className="object-contain"
//               fill
//             />
//           </div>

//           <div className="text-left space-y-4 leading-relaxed">
//             {item.youtubeLink && (
//               <a className="text-[17px] text-[#5B168D] underline" href={item.youtubeLink}>
//                 ভিডিও লিঙ্কঃ {item.youtubeLink}
//               </a>
//             )}

//             {item.p1 && <p className="text-[21px]">{item.p1}</p>}
//             {item.p2 && <p className="text-[21px]">{item.p2}</p>}
//             {item.p3 && <p className="text-[21px]">{item.p3}</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
