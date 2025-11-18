"use client";
import React, { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import Side_Card_Data from "@/app/globalComponents/Side_Card_Data";
import HeadMaster from "@/app/globalComponents/HeadMaster";
import routineData from "@/app/Json/routine-data.json";
import { RiFileDownloadFill } from "react-icons/ri";


const Routine = () => {
  const [routines, setRoutines] = useState([]);
  const [lastUpdate, setLastUpdate] = useState("");

  useEffect(() => {
    setRoutines(routineData);
    if (routineData.length > 0) {
      const latest = routineData.reduce((prev, current) =>
        new Date(prev.last_update) > new Date(current.last_update)
          ? prev
          : current
      );
      setLastUpdate(latest.last_update);
    }
  }, []);

  return (
    <div className="flex justify-between gap-x-6 w-full">
      {/* ====== Main Content ====== */}
      <div className="w-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
        <div className="text-center ">
          <h1 className="text-3xl font-bold text-[#5B168E] mb-5">
            ক্লাস রুটিন
          </h1>         
        </div>

        {/* ====== Routine Table ====== */}
        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-md">
          <table className="w-full border-collapse">
            <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[24px]">
              <tr>
                <th className="p-3 border border-gray-300">শিরোনাম</th>
                <th className="p-3 border border-gray-300">প্রকাশের তারিখ</th>
                <th className="p-3 border border-gray-300">ডাউনলোড</th>
              </tr>
            </thead>
            <tbody className="text-center text-gray-700">
              {routines.map((item, index) => (
                <tr
                  key={index}
                  className={`transition duration-300 ${
                    index % 2 === 0
                      ? "bg-gray-50 hover:bg-indigo-50"
                      : "bg-white hover:bg-indigo-50"
                  }`}
                >
                  <td className="p-3 border border-gray-200 text-[21px] font-bold ">
                    {item.class_name}
                  </td>
                  <td className="p-3 border border-gray-200 text-[21px] font-semibold">
                    {item.last_update}
                  </td>
                  <td className="p-3 border border-gray-200">
                    <a
                      href={item.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 font-semibold underline hover:text-purple-600 transition flex justify-center"
                    >
                      <RiFileDownloadFill className="text-[60px] " />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    
    </div>
  );
};

export default Routine;
