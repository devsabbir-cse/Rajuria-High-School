"use client";

import React, { useEffect, useState } from "react";
import { GraduationCap } from "lucide-react";
import { useGlobalData } from "@/app/context/GlobalDataContext";
import { ClipLoader } from "react-spinners";

const Page = () => {
  const { classWise, loading } = useGlobalData();
  
  const [totalBoys, setTotalBoys] = useState(0);
  const [totalGirls, setTotalGirls] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      // Convert boys/girls to number because they are strings
      const totalB = classWise.reduce((sum, item) => sum + Number(item.boys), 0);
      const totalG = classWise.reduce((sum, item) => sum + Number(item.girls), 0);

      setTotalBoys(totalB);
      setTotalGirls(totalG);
      setGrandTotal(totalB + totalG);
    };

    fetchData();
  }, []);


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
    <div className="flex justify-between gap-x-6 w-full mb-5">
      <div className="w-full bg-white md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div className="text-center mb-5">
          <h1 className="text-3xl font-bold text-indigo-700 mb-2 flex items-center justify-center gap-2">
            <GraduationCap className="text-indigo-500" /> শিক্ষার্থীর তথ্য
          </h1>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-md">
          <table className="w-full border-collapse">
            <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-2xl">
              <tr>
                <th className="p-3 border border-gray-300">শ্রেণি</th>
                <th className="p-3 border border-gray-300">ছাত্র</th>
                <th className="p-3 border border-gray-300">ছাত্রী</th>
                <th className="p-3 border border-gray-300">মোট</th>
              </tr>
            </thead>

            <tbody className="text-center text-gray-700 text-xl">
              {classWise.map((item, index) => (
                <tr
                  key={index}
                  className={`transition duration-300 ${
                    index % 2 === 0
                      ? "bg-gray-50 hover:bg-indigo-50"
                      : "bg-white hover:bg-indigo-50"
                  }`}
                >
                  <td className="p-3 border border-gray-200 font-medium">
                    {item.className}
                  </td>
                  <td className="p-3 border border-gray-200">{item.boys}</td>
                  <td className="p-3 border border-gray-200">{item.girls}</td>
                  <td className="p-3 border border-gray-200 font-semibold text-indigo-700">
                    {Number(item.boys) + Number(item.girls)}
                  </td>
                </tr>
              ))}

              {/* Total Row */}
              <tr className="bg-indigo-100 font-bold text-indigo-800">
                <td className="p-3 border border-gray-200">মোট</td>
                <td className="p-3 border border-gray-200">{totalBoys}</td>
                <td className="p-3 border border-gray-200">{totalGirls}</td>
                <td className="p-3 border border-gray-200">{grandTotal}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
