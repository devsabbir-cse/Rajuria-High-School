'use client';
import React from 'react';
import { FaDownload, FaBan } from 'react-icons/fa';
import routines from '@/app/User/file/routine.json';
import Side_Card_Data from '@/app/User/globalComponents/Side_Card_Data';
import HeadMaster from '@/app/User/globalComponents/HeadMaster';
import { Clock } from 'lucide-react';

const routine = () => {
  return (
    <div  className='flex justify-between gap-x-[20px] '>
      <div className="p-4 w-full">
        <h1 className="text-center text-2xl font-bold mb-4">প্রকাশিত রুটিন</h1>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">ক্রমিক</th>
              <th className="border p-2">শিরোনাম</th>
              <th className="border p-2">প্রকাশের তারিখ</th>
              <th className="border p-2">ডাউনলোড</th>
            </tr>
          </thead>
          <tbody>
            {routines.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="border p-2">{item.id}</td>
                <td className="border p-2">{item.title}</td>
                <td className="border p-2">{item.date}</td>
                <td className="border p-2 text-xl">
                  {item.downloadable ? (
                    <FaDownload className="text-blue-500 inline" />
                  ) : (
                    <FaBan className="text-red-500 inline" />
                  )}
                </td>
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

export default routine;
