"use client";
import React, { useState, useEffect } from "react";
import { FaBan } from "react-icons/fa";
import { RiFileDownloadFill } from "react-icons/ri";
import { useRouter } from "next/navigation";

import Side_Card_Data from "@/app/globalComponents/Side_Card_Data";
import HeadMaster from "@/app/globalComponents/HeadMaster";
import noticeData from "@/app/Json/notice-data.json";
import Link from "next/link";

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setNotices(noticeData);
  }, []);

  const handleClick = (e, item) => {
    e.preventDefault();

    if (!item || !item.file_path) return;

    if (typeof window !== "undefined") {
      localStorage.setItem("pdfFile", item.file_path);
      router.push("/pages/notice/pdfView");
    }
  };

  return (
    <div className="flex justify-between gap-x-6 w-full">
      {/* ====== Main Content ====== */}
      <div className="w-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
        {/* ====== Header ====== */}
        <div className="text-center mb-5">
          <h1 className="text-3xl font-bold text-[#5B168E]">
            নোটিশ বোর্ড
          </h1>          
        </div>

        {/* ====== Table ====== */}
<div className="overflow-hidden rounded-xl border border-gray-200 shadow-md">

  {/* HEADER FIX */}
  <div className="overflow-hidden">
    <table className="w-[97.7%] table-fixed border-collapse">
      <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <tr>
          <th className="px-2 py-3 border border-gray-300 w-[80px]">ক্রমিক</th>
          <th className="p-3 border border-gray-300">শিরোনাম</th>
          <th className="p-3 border border-gray-300 w-[150px]">প্রকাশের তারিখ</th>
          <th className="p-3 border border-gray-300 w-[120px]">ডাউনলোড</th>
        </tr>
      </thead>
    </table>
  </div>

  {/* BODY SCROLL */}
  <div className="h-[600px] overflow-y-scroll">
    <table className="w-full table-fixed border-collapse">
      <tbody className="text-center text-gray-700">
        {notices.length > 0 ? (
          notices.map((item, index) => (
            <tr
              key={item.index}
              className={`transition duration-300 ${
                index % 2 === 0
                  ? "bg-gray-50 hover:bg-indigo-50"
                  : "bg-white hover:bg-indigo-50"
              }`}
            >
              <td className="p-3 border border-gray-200 font-medium w-[80px]">
                {index + 1}
              </td>

              <td className="p-3 border border-gray-200 text-left">
                <p                  
                  onClick={(e) => handleClick(e, item)}
                  className="text-gray-900 font-bold text-[22px] hover:text-purple-600 transition"
                >
                  {item.heading}
                </p>
              </td>

              <td className="p-3 border border-gray-200 font-semibold text-[22px] w-[150px]">
                {item.date}
              </td>

              <td className="p-3 border border-gray-200 text-xl w-[120px]">
                {Number(item.downloadable) === 1 ? (
                  <a
                    href={item.file_path}
                    download
                    className="text-indigo-600 hover:text-purple-700 transition"
                  >
                    <RiFileDownloadFill className="text-[60px] inline" />
                  </a>
                ) : (
                  <FaBan className="text-red-500 inline text-[60px]" />
                )}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center py-6 text-gray-500 italic">
              কোনো নোটিশ পাওয়া যায়নি
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>
      </div>

     
    </div>
  );
};

export default Notice;
