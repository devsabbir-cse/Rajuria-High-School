'use client';
import React from 'react';

const AdmissionForm = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold text-center border-b pb-2 mb-4">অষ্টম শ্রেণীর ভর্তি আবেদন</h2>
      <p className="text-center mb-6 text-sm text-gray-600">সমস্ত তথ্য নির্দেশনা অনুযায়ী পূরণ করতে হবে।</p>

      <form className="space-y-4">
        <div>
          <label className="block font-semibold">শিক্ষার্থীর নাম*</label>
          <input type="text" className="w-full border p-2 rounded" required />
        </div>

        <div>
          <label className="block font-semibold">Name (English)*</label>
          <input type="text" className="w-full border p-2 rounded" required />
        </div>

        <div>
          <label className="block font-semibold">শিক্ষাবর্ষ*</label>
          <input type="text" className="w-full border p-2 rounded" required />
        </div>

        <div>
          <label className="block font-semibold">জন্মতারিখ*</label>
          <input type="date" className="w-full border p-2 rounded" required />
        </div>

        <div>
          <label className="block font-semibold">পিতার নাম*</label>
          <input type="text" className="w-full border p-2 rounded" required />
        </div>

        <div>
          <label className="block font-semibold">মাতার নাম*</label>
          <input type="text" className="w-full border p-2 rounded" required />
        </div>

        <div>
          <label className="block font-semibold">পিতার পেশা</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold">ঠিকানা</label>
          <textarea className="w-full border p-2 rounded" rows="3"></textarea>
        </div>

        <div>
          <label className="block font-semibold">মোবাইল নাম্বার*</label>
          <input type="text" className="w-full border p-2 rounded" required />
        </div>

        <div>
          <label className="block font-semibold">ইমেইল</label>
          <input type="email" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold">সাম্প্রতিক ছবি</label>
          <input type="file" className="w-full border p-2 rounded" accept="image/*" />
          <small className="text-gray-500">সর্বোচ্চ সাইজঃ ৫০০কেবি</small>
        </div>

        <div>
          <label className="block font-semibold">পূর্বের প্রতিষ্ঠান</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold">পূর্বের প্রতিষ্ঠানের ঠিকানা</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition mx-auto flex"
        >
          আবেদন করুন
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;
