'use client';
import React, { useState } from 'react';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentNameEn: '',
    year: '',
    dob: '',
    fatherName: '',
    motherName: '',
    fatherOccupation: '',
    address: '',
    mobile: '',
    email: '',
    photo: null,
    prevInstitute: '',
    prevInstituteAddress: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.studentName) newErrors.studentName = 'শিক্ষার্থীর নাম আবশ্যক';
    if (!formData.studentNameEn) newErrors.studentNameEn = 'Name (English) is required';
    if (!formData.year) newErrors.year = 'শিক্ষাবর্ষ আবশ্যক';
    if (!formData.dob) newErrors.dob = 'জন্মতারিখ আবশ্যক';
    if (!formData.fatherName) newErrors.fatherName = 'পিতার নাম আবশ্যক';
    if (!formData.motherName) newErrors.motherName = 'মাতার নাম আবশ্যক';
    if (!formData.mobile) newErrors.mobile = 'মোবাইল নাম্বার আবশ্যক';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log('Form submitted:', formData);
    // You can now send formData to backend via fetch/axios
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold text-center border-b pb-2 mb-4">ষষ্ঠ শ্রেণীর ভর্তি আবেদন</h2>
      <p className="text-center mb-6 text-sm text-gray-600">সমস্ত তথ্য নির্দেশনা অনুযায়ী পূরণ করতে হবে।</p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {[
          { label: 'শিক্ষার্থীর নাম*', name: 'studentName' },
          { label: 'Name (English)*', name: 'studentNameEn' },
          { label: 'শিক্ষাবর্ষ*', name: 'year' },
          { label: 'জন্মতারিখ*', name: 'dob', type: 'date' },
          { label: 'পিতার নাম*', name: 'fatherName' },
          { label: 'মাতার নাম*', name: 'motherName' },
          { label: 'পিতার পেশা', name: 'fatherOccupation' },
          { label: 'ঠিকানা', name: 'address', type: 'textarea' },
          { label: 'মোবাইল নাম্বার*', name: 'mobile' },
          { label: 'ইমেইল', name: 'email', type: 'email' },
          { label: 'পূর্বের প্রতিষ্ঠান', name: 'prevInstitute' },
          { label: 'পূর্বের প্রতিষ্ঠানের ঠিকানা', name: 'prevInstituteAddress' },
        ].map(({ label, name, type = 'text' }) => (
          <div key={name}>
            <label className="block font-semibold">{label}</label>
            {type === 'textarea' ? (
              <textarea
                name={name}
                className="w-full border p-2 rounded"
                rows="3"
                value={formData[name]}
                onChange={handleChange}
              />
            ) : (
              <input
                type={type}
                name={name}
                className="w-full border p-2 rounded"
                value={formData[name]}
                onChange={handleChange}
              />
            )}
            {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
          </div>
        ))}

        <div>
          <label className="block font-semibold">সাম্প্রতিক ছবি</label>
          <input
            type="file"
            name="photo"
            className="w-full border p-2 rounded"
            accept="image/*"
            onChange={handleChange}
          />
          <small className="text-gray-500">সর্বোচ্চ সাইজঃ ৫০০ কেবি</small>
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
