'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
const AdmissionPage = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  const classList = [
    { name: 'ষষ্ঠ শ্রেণী', path: '6th' },
    { name: 'সপ্তম শ্রেণী', path: '7th' },
    { name: 'অষ্টম শ্রেণী', path: '8th' },
    { name: 'নবম শ্রেণী', path: '9th' },
    { name: 'দশম শ্রেণী', path: '10th' },
  ];

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto  gap-4">
      {/* Left Panel */}
      <div className="w-full md:w-1/3 bg-white rounded-md">
        <div className="bg-gray-100 text-center py-2 font-bold text-lg border-b-3 border-[#5B168E]">
          ভর্তি আবেদন
        </div>
        {classList.map((cls, index) => (
          // <Link key={index} href={`/pages//admission/classWise/${cls.path}`}>
            <button
              // onClick={() => setSelectedClass(cls.name)}
              onClick={() => toast.error("ভর্তি হতে সরাসরি যোগাযোগ করুন")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 mt-2 rounded transition duration-200 text-2xl"
            >
              {cls.name}
            </button>
          // </Link>
        ))}
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-2/3 bg-white rounded-md">
        <div className="bg-gray-100 text-center py-2 font-bold text-lg mb-4 border-b-3 border-[#5B168E]">
          আবেদন যাচাই
        </div>
        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">ভর্তি রোল<span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ভর্তি রোল লিখুন"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">শিক্ষাবর্ষ<span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="শিক্ষাবর্ষ লিখুন"
            />
          </div>
          <button
            
            className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition duration-200 flex mx-auto "
            onClick={() => toast.error("কোনো তথ্য পাওয়া যায়নি")}
          >
            অনুসন্ধান
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;
