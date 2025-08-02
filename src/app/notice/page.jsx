'use client';
import React from 'react';
import { FaDownload, FaBan } from 'react-icons/fa';
import notice from '@/file/notice.json';
import Side_Card_Data from '@/globalComponents/Side_Card_Data';
import HeadMaster from '@/globalComponents/HeadMaster';

const Notice = () => {
  return (
    <div  className='flex justify-between gap-x-[20px]'>
      <div className="p-4 w-full">
        <h1 className="text-center text-2xl font-bold mb-4">নোটিশ বোর্ড</h1>
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
            {notice.map((item) => (
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
      </div>
      <div>
        <Side_Card_Data/>
        <HeadMaster/>

      </div>


    </div>
  );
};

export default Notice;
