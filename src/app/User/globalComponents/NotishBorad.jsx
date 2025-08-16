'use client'
import React, { useEffect, useState } from 'react';
import { Bell } from 'lucide-react';
import Link from 'next/link';
import axios from "axios";   // axios import করতে হবে

const NotishBorad = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotices = async () => {
    try {
      const res = await axios.get(
        "http://localhost/school-management-system/GET/Notice/notice.php"
      );
      if (res.data.status === "success") {
        setNotices(res.data.data);
      }
      setLoading(false);
    } catch (err) {
      console.error("Error fetching notices:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  return (
    <div className="w-[400px] max-w-md mx-auto p-4 bg-[#f6f3f3] shadow rounded">
      <h2 className="bg-orange-600 text-white text-center text-lg font-bold py-2 rounded-t">
        নোটিশ বোর্ড
      </h2>

      {loading ? (
        <p className="text-center text-gray-600 py-4">লোড হচ্ছে...</p>
      ) : (
        <ul className="divide-y divide-black">
          {notices.map((notice) => (
            <li key={notice.id} className="flex items-start gap-2 py-3">
              <Bell className="text-yellow-500 min-w-[20px]" size={20} />
              <Link
                href="/"
                className="text-sm text-gray-800 hover:underline"
              >
                {notice.heading}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div className="text-center mt-4">
        <Link
          href="/notices"
          className="text-purple-600 font-medium hover:underline"
        >
          সবগুলো নোটিশ
        </Link>
      </div>
    </div>
  );
};

export default NotishBorad;
