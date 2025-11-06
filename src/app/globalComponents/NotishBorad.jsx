'use client';

import React, { useEffect, useState } from 'react';
import { Bell } from 'lucide-react';
import Link from 'next/link';
import noticeData from "@/app/Json/notice-data.json";

const NotishBorad = () => {
  const [loading, setLoading] = useState(true);
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    // Simulate data loading (or replace with API call)
    setTimeout(() => {
      setNotices(noticeData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="w-[400px] max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
      {/* Header */}
      <h2 className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center text-xl font-bold py-3 shadow-md">
        📢 নোটিশ বোর্ড
      </h2>

      {/* Body */}
      <div className="p-4 max-h-[600px] overflow-hidden">
        {loading ? (
          <p className="text-center text-gray-600 py-6 animate-pulse">লোড হচ্ছে...</p>
        ) : notices.length === 0 ? (
          <p className="text-center text-gray-500 py-4">কোনো নোটিশ পাওয়া যায়নি</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {notices.map((notice) => (
              <li
                key={notice.id}
                className="flex items-start gap-3 py-3 px-2 hover:bg-purple-100 rounded-lg transition-colors duration-200"
              >
                <div className="bg-indigo-500 p-2 rounded-full shadow-sm">
                  <Bell className="text-white" size={18} />
                </div>
                <Link
                  href={`/pages/notice/pdfView?file=${encodeURIComponent(notice.file_path)}`}
                  className="text-[18px] text-gray-800 font-medium hover:text-indigo-500 transition-colors duration-200 text-justify"
                >
                  {notice.heading}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer */}
      <div className="text-center bg-gray-50 py-3 border-t">
        <Link
          href="/pages/notice"
          className="text-orange-600 font-semibold hover:underline hover:text-orange-700 transition-colors"
        >
          🔗 সবগুলো নোটিশ দেখুন
        </Link>
      </div>
    </div>
  );
};

export default NotishBorad;
