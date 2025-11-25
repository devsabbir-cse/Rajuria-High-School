"use client";
import React, { useState, useEffect } from "react";
import { FaBan } from "react-icons/fa";
import { RiFileDownloadFill } from "react-icons/ri";
import { ClipLoader } from "react-spinners";
import { useGlobalData } from "@/app/context/GlobalDataContext";

const Notice = () => {
  const { notices, loading } = useGlobalData();

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



  return (
    <div className="">
      {/* ====== Main Content ====== */}
      <div className="w-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ">
        {/* ====== Header ====== */}
        <div className="text-center py-3">
          <h1 className="text-3xl font-bold text-[#5B168E]">
            নোটিশ বোর্ড
          </h1>          
        </div>

        {/* ====== Table ====== */}
<div className="overflow-hidden rounded-xl border border-gray-200 shadow-md ">

  {/* HEADER FIX */}
  <div className="overflow-hidden hidden md:block">
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
{/* ====== BODY SCROLL ====== */}
<div className="h-[600px] overflow-y-scroll">

  {/* Desktop Table */}
  <table className="w-full table-fixed border-collapse hidden md:table">
    <tbody className="text-center text-gray-700 ">
      {notices.length > 0 ? (
        notices.map((item, index) => (
          <tr
            key={item.index}
            className={`transition duration-300 ${
              index % 2 === 0 ? "bg-gray-50 hover:bg-indigo-50" : "bg-white hover:bg-indigo-50"
            }`}
          >
            <td className="p-3 border border-gray-200 font-medium w-[80px]">
              {index + 1}
            </td>

            <td className="p-3 border border-gray-200 text-left">
              <a
                href={`https://drive.google.com/file/d/${item.file_path}/view`}
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-900 font-bold text-[18px] hover:text-purple-600 transition"
              >
                {item.heading}
              </a>
            </td>

            <td className="p-3 border border-gray-200 font-semibold text-[18px] w-[150px]">
              {item.date}
            </td>

            <td className="p-3 border border-gray-200 text-xl w-[120px]">
              {Number(item.downloadable) === 1 ? (
                <a
                  href={`https://drive.google.com/uc?export=download&id=${item.file_path}`}
                  download
                  className="text-indigo-600 hover:text-purple-700 transition"
                >
                  <RiFileDownloadFill className="text-[40px] inline" />
                </a>
              ) : (
                <FaBan className="text-red-500 inline text-[40px]" />
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

  {/* Mobile Card View */}
  <div className="md:hidden space-y-4 px-2 py-2">
    {notices.map((item, index) => (
      <div
        key={index}
        className="bg-white p-4 rounded-xl shadow border border-gray-200"
      >
        <h2 className="text-lg font-bold text-[#5B168E] mb-2">
          {index + 1}. {item.heading}
        </h2>

        <p className="text-gray-700 text-sm mb-1">
          📅 প্রকাশের তারিখ: <span className="font-semibold">{item.date}</span>
        </p>

        <p className="text-gray-700 text-sm mb-3">
          📘 ডাউনলোডঃ
          {Number(item.downloadable) === 1 ? (
            <a
              href={`https://drive.google.com/uc?export=download&id=${item.file_path}`}
              className="text-indigo-600 font-bold ml-2"
              download
            >
              Download
            </a>
          ) : (
            <span className="text-red-600 font-semibold ml-2">Not Available</span>
          )}
        </p>
      </div>
    ))}
  </div>

</div>

</div>
      </div>

     
    </div>
  );
};

export default Notice;
