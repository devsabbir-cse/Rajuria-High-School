"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Employee_Card from "@/app/globalComponents/Employee_Card";
import Side_Card_Data from "@/app/globalComponents/Side_Card_Data";

export default function EmployeeDetails({ params }) {
  const searchParams = useSearchParams();
  const data = searchParams.get("data"); // query থেকে data পাওয়া যাবে
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    if (data) {
      try {
        const decoded = JSON.parse(decodeURIComponent(data));
        setEmployee(decoded);
      } catch (err) {
        console.error("Error parsing data:", err);
      }
    }
  }, [data]);

  if (!employee) return <p className="text-center mt-5">Loading...</p>;


  return (
    <div className="flex justify-between gap-x-[20px]">
      <div className="w-full text-gray-800 font-sans mt-5">
        {/* Profile Image and Name */}
        <Employee_Card employee={employee} />
      </div>
      <div>
        <Side_Card_Data />
        <Side_Card_Data />
      </div>
    </div>
  );
}
