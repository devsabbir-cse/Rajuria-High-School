"use client"
import React from "react";
import Employee_Cards from "@/app/globalComponents/Employee_Cards";
import { useGlobalData } from "@/app/context/GlobalDataContext";
import { ClipLoader } from "react-spinners";


const Page = () => {
    const { teachers, loading } = useGlobalData();
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
    <div className="flex flex-col justify-between gap-x-[20px]">
      <h1 className="flex justify-center text-3xl text-[#5B168E] font-bold py-2">
        শিক্ষক বৃন্দ
      </h1>

      {/* Live fetched data show */}
      <Employee_Cards employee={teachers} type="teacher" />
    </div>
  );
};

export default Page;
