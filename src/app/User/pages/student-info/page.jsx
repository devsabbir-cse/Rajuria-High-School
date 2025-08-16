import React from 'react';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import img from '../contact/image.png';
import Side_Card_Data from '@/app/User/globalComponents/Side_Card_Data';
import HeadMaster from '@/app/User/globalComponents/HeadMaster';

const page = () => {
  return (
    <div className='flex justify-between gap-x-[20px]' >
      <div className="max-w-3xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">শিক্ষার্থীর তথ্য</h1>
        <div className="" />
        <Image src={img} alt="Contact" width={120} height={30} className='mx-auto'/>

        <div>

         <table className="w-full border-collapse border border-gray-300 mt-4">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">শ্রেণি</th>
                <th className="border p-2">ছাত্র</th>
                <th className="border p-2">ছাত্রী</th>
                <th className="border p-2">মোট</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td className="border p-2">ষষ্ঠ শ্রেণি</td>
                <td className="border p-2">৬৬</td>
                <td className="border p-2">১০০</td>
                <td className="border p-2 font-semibold">১৬৬</td>
              </tr>
              <tr>
                <td className="border p-2">সপ্তম</td>
                <td className="border p-2">৫৮</td>
                <td className="border p-2">৬৯</td>
                <td className="border p-2 font-semibold">১২৭</td>
              </tr>
              <tr>
                <td className="border p-2">অষ্টম</td>
                <td className="border p-2">৬৮</td>
                <td className="border p-2">৬৫</td>
                <td className="border p-2 font-semibold">১৩৩</td>
              </tr>
              <tr>
                <td className="border p-2">নবম</td>
                <td className="border p-2">৫৪</td>
                <td className="border p-2">৪৯</td>
                <td className="border p-2 font-semibold">১০৩</td>
              </tr>
              <tr>
                <td className="border p-2">দশম</td>
                <td className="border p-2">৪৯</td>
                <td className="border p-2">৪৪</td>
                <td className="border p-2 font-semibold">৯৩</td>
              </tr>
              <tr className="font-bold bg-gray-50">
                <td className="border p-2">মোট</td>
                <td className="border p-2">২৯৫</td>
                <td className="border p-2">৩২৭</td>
                <td className="border p-2">৬২২</td>
              </tr>
            </tbody>
          </table>


        </div>

    

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

export default page;
