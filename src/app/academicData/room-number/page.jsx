import React from 'react';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import img from '../../contact/image.png';
import Side_Card_Data from '@/globalComponents/Side_Card_Data';
import HeadMaster from '@/globalComponents/HeadMaster';
import roomNumber from '@/file/room-number.json';
const Page = () => {
  return (
    <div className='flex justify-between gap-x-[20px]' >
      <div className="w-full mx-auto text-center mt-5">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">কক্ষ সংখ্যা</h1>
        <div className="" />
        <Image src={img} alt="Contact" width={120} height={30} className='mx-auto'/>
        <p className='mt-2 text-[12px]'>পাকা ভবন সংখ্যা  - ২ টি, মোট ভবন সংখ্যা -৩ টি, নির্মানাধীন ভবন - ১ টি</p>
       
        <table className="w-full border-collapse border border-gray-300 mt-5">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border p-2">ক্রমিক</th>
                      <th className="border p-2">নাম</th>
                      <th className="border p-2">সংখ্যা</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roomNumber.map((item) => (
                      <tr key={item.id} className="text-center">
                        <td className="border p-2">{item.id}</td>
                        <td className="border p-2">{item.name}</td>
                        <td className="border p-2">{item.total}</td>                        
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
