"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useGlobalData } from "@/app/context/GlobalDataContext";
import { ClipLoader } from "react-spinners";

const PrincipalInfo = () => {
  const text1 = "w-1/2 text-[16px]";
  const text2 = "w-1/2 text-[16px] font-bold";
  const div = "flex justify-between mb-5";

  const { headTeacher, refreshHeadTeacher, loading } = useGlobalData();

  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});
  const [confirmModal, setConfirmModal] = useState(false);
  const [newImageFile, setNewImageFile] = useState(null); // New image

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

  if (!headTeacher || headTeacher.length === 0) {
    return <p className="text-center text-gray-500 mt-10">No data found</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditData({ ...headTeacher[index] });
    setConfirmModal(false);
    setNewImageFile(null);
  };

  // Handle new image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setNewImageFile(file);
  };

 const handleSave = async () => {
  setConfirmModal(false);

  try {
    const formData = new FormData();

    formData.append("id", editData.id);
    formData.append("PDS_id", editData.PDS_id);
    formData.append("পদবী", editData.পদবী);
    formData.append("নাম", editData.নাম);
    formData.append("ফোন", editData.ফোন);
    formData.append("ইমেইল", editData.ইমেইল);
    formData.append("ঠিকানা", editData.ঠিকানা);
    formData.append("শিক্ষাগত_যোগ্যতা", editData.শিক্ষাগত_যোগ্যতা);
    formData.append("ট্রেনিং", editData.ট্রেনিং);
    formData.append("জাতীয়তা", editData.জাতীয়তা);
    formData.append("জাতীয়_পরিচয়_নং", editData.জাতীয়_পরিচয়_নং);
    formData.append("রক্তের_গ্রুপ", editData.রক্তের_গ্রুপ);
    formData.append("জন্মতারিখ", editData.জন্মতারিখ);
    formData.append("যোগদানের_তারিখ", editData.যোগদানের_তারিখ);

    // IF new image selected
    if (newImageFile) {
      formData.append("ছবি", newImageFile);
    }

    const res = await fetch("/api/head-teacher", {
      method: "PUT",
      body: formData, // ❗ No headers
    });

    if (res.ok) {
      alert("Update successful!");
      await refreshHeadTeacher();
      setEditIndex(null);
    } else {
      alert("Update failed!");
    }
  } catch (err) {
    console.error(err);
    alert("Update error!");
  }
};


  return (
    <div className="mt-5">
      {headTeacher.map((employee, index) => (
        <div
          key={index}
          className="bg-[#5A168C] text-white p-8 rounded-2xl flex flex-col md:flex-row gap-10 items-center shadow-2xl mx-auto w-full mb-10"
        >
          <div className="border-4 border-white rounded-xl overflow-hidden shadow-lg flex-shrink-0 w-[200px] h-[250px] relative">
            <Image
              src={
                newImageFile
                  ? URL.createObjectURL(newImageFile)
                  : `${employee.ছবি}?v=${editData.updatedAt || Date.now()}`
              }
              alt={employee?.নাম || "Image"}
              width={200}
              height={250}
              className="object-cover w-full h-full"
            />
            {editIndex === index && (
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-black rounded p-1 text-sm"
              />
            )}
          </div>

          <div className="w-full">
            <div>
              <div className="flex justify-between">
                <div>
                  {editIndex === index ? (
                  <input
                    type="text"
                    name="পদবী"
                    value={editData.পদবী}
                    onChange={handleChange}
                    className="text-xl font-semibold uppercase tracking-wider text-black p-1 rounded"
                  />
                  ) : (
                    <h3 className="text-xl font-semibold uppercase tracking-wider">
                      {employee?.পদবী}
                    </h3>
                  )}
                </div>
                <div>
                  {editIndex === index ? (
                  <input
                    type="text"
                    name="PDS_id"
                    value={editData.PDS_id}
                    onChange={handleChange}
                    className="text-xl font-semibold uppercase tracking-wider text-black p-1 rounded"
                  />
                  ) : (
                    <h3 className="text-xl font-semibold uppercase tracking-wider">
                      PDS ID : {employee?.PDS_id}
                    </h3>
                  )}
                </div>
              </div>
              
              <hr className="border-white/40 mb-2 w-full" />
              {editIndex === index ? (
                <input
                  type="text"
                  name="নাম"
                  value={editData.নাম}
                  onChange={handleChange}
                  className="text-3xl font-bold mb-5 text-black p-1 rounded w-full"
                />
              ) : (
                <h2 className="text-3xl font-bold mb-5">{employee?.নাম}</h2>
              )}
            </div>
            

            {/* Columns */}
            <div className="flex w-full gap-x-10">
              <div className="w-1/2">
                {["ফোন", "ইমেইল", "ঠিকানা", "শিক্ষাগত_যোগ্যতা", "ট্রেনিং"].map(
                  (field) => (
                    <div className={div} key={field}>
                      <p className={text1}>{field}:</p>
                      {editIndex === index ? (
                        <input
                          type="text"
                          name={field}
                          value={editData[field]}
                          onChange={handleChange}
                          className={text2 + " text-black p-1 rounded"}
                        />
                      ) : (
                        <p className={text2}>{employee[field]}</p>
                      )}
                    </div>
                  )
                )}
              </div>

              <div className="w-1/2">
                {[
                  "জাতীয়তা",
                  "জাতীয়_পরিচয়_নং",
                  "রক্তের_গ্রুপ",
                  "জন্মতারিখ",
                  "যোগদানের_তারিখ",
                ].map((field) => (
                  <div className={div} key={field}>
                    <p className={text1}>{field}:</p>
                    {editIndex === index ? (
                      <input
                        type="text"
                        name={field}
                        value={editData[field]}
                        onChange={handleChange}
                        className={text2 + " text-black p-1 rounded"}
                      />
                    ) : (
                      <p className={text2}>{employee[field]}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5">
              {editIndex === index ? (
                <button
                  onClick={handleSave}
                  className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded font-bold"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEditClick(index)}
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-bold"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PrincipalInfo;
