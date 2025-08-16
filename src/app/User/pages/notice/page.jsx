'use client';
import React, { useEffect, useState } from 'react';
import { FaDownload, FaBan } from 'react-icons/fa';
import axios from 'axios';

import Side_Card_Data from '@/app/User/globalComponents/Side_Card_Data';
import HeadMaster from '@/app/User/globalComponents/HeadMaster';

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);


  // Fetch notices from PHP backend
  useEffect(() => {
    axios
      .get('http://localhost/school-management-system/GET/Notice/notice.php')
      .then((res) => {
        if (res.data.status === 'success') {
          setNotices(res.data.data);
          console.log('Notices fetched successfully:', res.data.data);
          
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching notices:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center py-10">লোড হচ্ছে...</p>;
  }

  return (
    <div className="flex justify-between gap-x-[20px]">
      <div className="p-4 w-full">
        <h1 className="text-center text-2xl font-bold mb-4">নোটিশ বোর্ড</h1>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 w-[25px]">ক্রমিক</th>
              <th className="border p-2">শিরোনাম</th>
              <th className="border p-2 w-[100px]">প্রকাশের তারিখ</th>
              <th className="border p-2 w-[100px]">ডাউনলোড</th>
            </tr>
          </thead>
          <tbody>
            {notices.length > 0 ? (
              notices.map((item) => (
                <tr key={item.id} className="text-center hover:bg-gray-50">
                  <td className="border p-2 w-[25px]">{item.id}</td>
                  <td className="border p-2 text-justify">

                    {Number(item.downloadable) === 1 ? (
                      <a href={item.file_path} target='_blank' className='hover:underline'>{item.heading}</a>

                    ) : (
                      <a>{item.heading}</a>

                    )}
                    
                    
                    
                    
                    
                    </td>
                  <td className="border p-2 w-[100px]">{item.date}</td>
                  <td className="border p-2 text-xl w-[100px]">
                    {Number(item.downloadable) === 1 ? (
                      <button
                          onClick={() =>
                            window.open(
                              `http://localhost/school-management-system/GET/Notice/download.php?file=${item.file_path}&name=${item.heading}`,
                              "_blank"
                            )
                          }
                          className="text-blue-500 hover:text-blue-700"
                          title="Download"
                        >
                          <FaDownload className="inline" />
                      </button>

                    ) : (
                      <FaBan className="text-red-500 inline" />
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  কোনো নোটিশ পাওয়া যায়নি
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div>
        <Side_Card_Data />
        <HeadMaster />
      </div>
    </div>
  );
};

export default Notice;
