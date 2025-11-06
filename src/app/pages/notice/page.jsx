"use client";
import React, { useState, useEffect } from "react";
import { FaDownload, FaBan } from "react-icons/fa";
import { Clock } from "lucide-react";

import Side_Card_Data from "@/app/globalComponents/Side_Card_Data";
import HeadMaster from "@/app/globalComponents/HeadMaster";
import noticeData from "@/app/Json/notice-data.json";
import { RiFileDownloadFill } from "react-icons/ri";

const Notice = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    setNotices(noticeData);
  }, []);

  return (
    <div className="flex justify-between gap-x-6 w-full">
      {/* ====== Main Content ====== */}
      <div className="w-full bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
        {/* ====== Header ====== */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-700 mb-2">
            নোটিশ বোর্ড
          </h1>
          <p className="text-gray-500 text-sm">
            এখানে সর্বশেষ প্রকাশিত সকল নোটিশ ডাউনলোড করতে পারবেন
          </p>
        </div>

        {/* ====== Table ====== */}
        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-md">
          <table className="w-full border-collapse">
            <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
              <tr>
                <th className="px-2 py-3 border border-gray-300 ">ক্রমিক</th>
                <th className="p-3 border border-gray-300">শিরোনাম</th>
                <th className="p-3 border border-gray-300 w-[150px]">
                  প্রকাশের তারিখ
                </th>
                <th className="p-3 border border-gray-300 w-[120px]">
                  ডাউনলোড
                </th>
              </tr>
            </thead>
            <tbody className="text-center text-gray-700">
              {notices.length > 0 ? (
                notices.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`transition duration-300 ${
                      index % 2 === 0
                        ? "bg-gray-50 hover:bg-indigo-50"
                        : "bg-white hover:bg-indigo-50"
                    }`}
                  >
                    <td className="p-3 border border-gray-200 font-medium">
                      {index + 1}
                    </td>
                    <td className="p-3 border border-gray-200 text-left">
                      <a
                        href={`/pages/notice/pdfView?file=${encodeURIComponent(item.file_path)}`}
                        className="text-gray-900 font-bold text-[22px] hover:text-purple-600 transition"
                      >
                        {item.heading}
                      </a>
                    </td>

                    <td className="p-3 border border-gray-200 font-semibold text-[22px]">{item.date}</td>
                    <td className="p-3 border border-gray-200 text-xl">
                      {Number(item.downloadable) === 1 ? (
                        <a
                          href={item.file_path}
                          download
                          className="text-indigo-600 hover:text-purple-700 transition"
                          title="Download"
                        >
                          <RiFileDownloadFill className="text-[60px] inline" />
                        </a>
                      ) : (
                        <FaBan className="text-red-500 inline text-[60px]" title="No file" />
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center py-6 text-gray-500 italic"
                  >
                    কোনো নোটিশ পাওয়া যায়নি
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ====== Side Section ====== */}
      <div className="">
        <Side_Card_Data />
        <HeadMaster />
      </div>
    </div>
  );
};

export default Notice;
