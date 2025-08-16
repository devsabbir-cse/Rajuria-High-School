import React from 'react';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import img from '../../contact/image.png';
import Side_Card_Data from '@/app/User/globalComponents/Side_Card_Data';
import HeadMaster from '@/app/User/globalComponents/HeadMaster';
import committee from '@/app/User/file/committee.json';
const Page = () => {
  return (
    <div className='flex justify-between gap-x-[20px]' >
      <div className="w-full mx-auto text-center mt-5">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">কর্মচারীবৃন্দ</h1>
        <div className="" />
        <Image src={img} alt="Contact" width={120} height={30} className='mx-auto'/>
       
        <table className="w-full border-collapse border border-gray-300 mt-5">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border p-2">ছবি</th>
                      <th className="border p-2">নাম</th>
                      <th className="border p-2">পদবি</th>
                      <th className="border p-2">মোবাইল</th>
                    </tr>
                  </thead>
                  <tbody>
                    {committee.map((item) => (
                      <tr key={item.id} className="text-center">
                        <td className="border p-2">{item.id}</td>
                        <td className="border p-2">{item.title}</td>
                        <td className="border p-2">{item.date}</td>  
                        <td className="border p-2">{item.number}</td>                        
                      </tr>
                    ))}
                  </tbody>
                </table>



        <hr className="my-6 border-gray-300" />

        <div className="flex justify-center items-center gap-2 text-sm text-gray-600 text-[14px]">
          <Clock size={16} />
          <span>শেষ হাল-নাগাদ করা হয়েছে: ২০২৩-১০-০২ ০৩:০৩:০৪</span>
        </div>
      </div>

      <div>
        <Side_Card_Data/>
        <HeadMaster/>

      </div>

    </div>
  );
};

export default Page;
