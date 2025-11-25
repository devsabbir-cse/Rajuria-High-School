"use client";
import React from "react";
import Image from "next/image";
import { useGlobalData } from "@/app/context/GlobalDataContext";
import { ClipLoader } from "react-spinners";


const PrincipalInfo = () => {
  const text1 = "w-1/2 text-[16px]";
  const text2 = "w-1/2 text-[16px] font-bold";
  const div = "flex justify-between mb-5";

  const { headTeacher, loading } = useGlobalData();
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
      {headTeacher.map((employee, index) => (
        <div key={index} className="bg-[#5A168C] text-white p-8 rounded-2xl flex flex-col md:flex-row gap-10 items-center shadow-2xl max-w-5xl mx-auto w-full">

          <div className="border-4 border-white rounded-xl overflow-hidden shadow-lg flex-shrink-0 w-[200px] h-[250px]">
            <Image
              src={`https://drive.google.com/uc?export=download&id=${employee.ছবি}`}
              alt={employee.নাম}
              width={200}
              height={250}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Left Section - Info */}
          <div className="w-full">
            <div>
              <h3 className="text-xl font-semibold uppercase tracking-wider">
                {employee.পদবী}
              </h3>
              <hr className="border-white/40 mb-2 w-2/3" />
              <h2 className="text-3xl font-bold mb-5">{employee.নাম}</h2>
            </div>

            <div className="flex w-full gap-x-10">
              {/* Column 1 */}
              <div className="w-1/2">
                <div className={div}>
                  <p className={text1}>মোবাইল নাম্বারঃ</p>
                  <p className={text2}>{employee.ফোন}</p>
                </div>

                <div className={div}>
                  <p className={text1}>ইমেইলঃ</p>
                  <a className="w-1/2 text-[14px] font-bold">{employee.ইমেইল}</a>
                </div>

                <div className={div}>
                  <p className={text1}>ঠিকানাঃ</p>
                  <p className={text2}>{employee.ঠিকানা}</p>
                </div>

                <div className={div}>
                  <p className={text1}>শিক্ষাগত যোগ্যতাঃ</p>
                  <p className={text2}>{employee.শিক্ষাগত_যোগ্যতা}</p>
                </div>

                <div className={div}>
                  <p className={text1}>ট্রেনিংঃ</p>
                  <p className={text2}>{employee.ট্রেনিং}</p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="w-1/2">
                <div className={div}>
                  <p className={text1}>জাতীয়তাঃ</p>
                  <p className={text2}>{employee.জাতীয়তা}</p>
                </div>

                <div className={div}>
                  <p className={text1}>জাতীয় পরিচয় নংঃ</p>
                  <p className={text2}>{employee.জাতীয়_পরিচয়_নং}</p>
                </div>

                <div className={div}>
                  <p className={text1}>রক্তের গ্রুপঃ</p>
                  <p className={text2}>{employee.রক্তের_গ্রুপ}</p>
                </div>

                <div className={div}>
                  <p className={text1}>জন্মতারিখঃ</p>
                  <p className={text2}>{employee.জন্মতারিখ}</p>
                </div>

                <div className={div}>
                  <p className={text1}>যোগদানের তারিখঃ</p>
                  <p className={text2}>{employee.যোগদানের_তারিখ}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default PrincipalInfo;
