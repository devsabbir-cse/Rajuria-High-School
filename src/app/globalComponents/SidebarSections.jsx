"use client";

import React, { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { FaMapMarkedAlt  } from "react-icons/fa";
import { AiFillNotification } from "react-icons/ai";
import { useGlobalData } from "@/app/context/GlobalDataContext";
import { ClipLoader } from "react-spinners";
const SidebarSections = () => {

  const [open, setOpen] = useState("notice");

  const toggle = (section) => {
    setOpen(open === section ? "" : section);
  };

  const links = [
    { name: "জাতীয় শিক্ষা বোর্ড", url: "https://www.educationboard.gov.bd/" },
    { name: "দিনাজপুর শিক্ষা বোর্ড অফিসিয়াল ওয়েবসাইট", url: "https://dinajpureducationboard.gov.bd/" },
    { name: "মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর", url: "https://dshe.gov.bd/" },
    { name: "শিক্ষা মন্ত্রনালয়", url: "https://moedu.gov.bd/" },
    { name: "শিক্ষক বাতায়ন", url: "http://www.teachers.gov.bd/" },
    { name: "দিনাজপুর শিক্ষা বোর্ড", url: "https://dinajpureducationboard.gov.bd/" },
    { name: "জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড", url: "https://nctb.gov.bd/" },
    { name: "রংপুর বিভাগীয় কমিশনারের কার্যালয়", url: "https://rangpur.gov.bd/" },
    { name: "বাংলাদেশ জাতীয় তথ্য বাতায়ন", url: "https://bangladesh.gov.bd/" },
  ];

  const { notices, loading } = useGlobalData();

      // if (loading) {
      //   return (
      //     <div className="flex flex-col items-center w-full mt-10 mb-10">
      //       <ClipLoader color="#3B82F6" size={60} />
      //       <p className="mt-3 text-gray-600 text-lg font-semibold animate-pulse">
      //         Loading...
      //       </p>
      //     </div>
      //   );
      // }
  return (
    <div className="w-full space-y-4">

      {/* ===================== 1️⃣ Notice Board ===================== */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition">
        
        {/* Header */}
        <button
          onClick={() => toggle("notice")}
          className="w-full flex justify-between items-center px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-500  text-white font-bold text-lg"
        >
          <div className="flex gap-x-2 items-center"><span><AiFillNotification className="text-xl"/></span><span>নোটিশ বোর্ড</span></div>
          <span className="text-2xl">{open === "notice" ? "−" : "+"}</span>
        </button>

        {/* Body */}
        {open === "notice" && (
          <div className="p-4 max-h-[400px] overflow-hidden">
            {loading ? (
              <p className="text-center text-gray-600 py-6 animate-pulse">
                লোড হচ্ছে...
              </p>
            ) : notices.length === 0 ? (
              <p className="text-center text-gray-500 py-4">
                কোনো নোটিশ পাওয়া যায়নি
              </p>
            ) : (
              <ul className="divide-y divide-gray-200">
                {notices.map((notice,id) => (
                  <li
                    key={id}
                    className="flex items-start gap-3 py-3 px-2 hover:bg-purple-100 rounded-lg transition"
                  >
                    <div className="bg-indigo-500 p-2 rounded-full shadow-sm">
                      <Bell className="text-white" size={18} />
                    </div>
                    <Link
                      href={`/pages/notice/pdfView?file=${encodeURIComponent(
                        notice.file_path
                      )}`}
                      className="text-[18px] text-gray-800 font-medium hover:text-indigo-500 text-justify"
                    >
                      {notice.heading}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
             

         
          </div>
          
        )}
          <div className="text-center py-3">
              <Link
                href="/pages/notice"
                className="text-purple-600 font-semibold hover:underline"
              >
                🔗 সবগুলো নোটিশ দেখুন
              </Link>
            </div>
        
      </div>


      {/* ===================== 3️⃣ Important External Links ===================== */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition">

        {/* Header */}
        <button
          onClick={() => toggle("links")}
          className="w-full flex justify-between items-center px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-500  text-white font-bold text-lg"
        >
          <div className="flex items-center gap-x-2"><span><FaExternalLinkAlt className="text-xl"/></span><span> গুরুত্বপূর্ণ লিঙ্ক</span></div>
          <span className="text-2xl">{open === "links" ? "−" : "+"}</span>
        </button>

        {/* Body */}
        {open === "links" && (
          <div className="p-5">
            <ul className="space-y-3">
              {links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    target="_blank"
                    className="flex justify-between items-center bg-gray-100 p-3 rounded-lg hover:bg-indigo-100 shadow"
                  >
                    <span className="text-gray-800 font-medium">
                      {link.name}
                    </span>
                    <FaExternalLinkAlt className="text-indigo-600" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>

      
      {/* ===================== 2️⃣ Google Map ===================== */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition">

        {/* Header */}
        <button
          onClick={() => toggle("map")}
          className="w-full flex justify-between items-center px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-500  text-white font-bold text-lg"
        >
          <div className="flex items-center gap-x-2"><span><FaMapMarkedAlt className="text-xl "/></span><span>গুগল ম্যাপ</span></div>
          <span className="text-2xl">{open === "map" ? "−" : "+"}</span>
        </button>

        {/* Body */}
        {open === "map" && (
          <div className="w-full h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415750.21578626515!2d88.57584052313995!3d25.561256841551888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4b3454274e371%3A0x13ef84e4e073ac17!2sRajuria%20High%20School!5e0!3m2!1sen!2sbd!4v1763409064120!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarSections;
