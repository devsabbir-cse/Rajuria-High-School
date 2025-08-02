'use client';
import React, { useState } from 'react';

const AdmissionPage = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  const classList = ['ষষ্ঠ শ্রেণী', 'সপ্তম শ্রেণী', 'অষ্টম শ্রেণী', 'নবম শ্রেণী', 'দশম শ্রেণী'];

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto mt-10 gap-4">
      {/* Left Panel */}
      <div className="w-full md:w-1/3 bg-white rounded-md  ">
        <div className="bg-gray-100 text-center py-2 font-bold text-lg border-b border-red-500">
          ভর্তি আবেদন
        </div>
        {classList.map((cls, index) => (
          <button
            key={index}
            onClick={() => setSelectedClass(cls)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 mt-2 rounded transition duration-200"
          >
            {cls}
          </button>
        ))}
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-2/3 bg-white rounded-md p-6">
        <div className="bg-gray-100 text-center py-2 font-bold text-lg mb-4 border-b border-red-500">
          আবেদন যাচাই
        </div>
        <form className="space-y-4">
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
            type="submit"
            className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition duration-200 flex mx-auto "
          >
            অনুসন্ধান
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionPage;
