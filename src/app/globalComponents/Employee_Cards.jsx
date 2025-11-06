"use client";  // <-- This makes it a Client Component
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const employee_Cards = ({ employee,type }) => { 
   

  return (
    <div className="grid grid-cols-3 gap-4">
      {employee.map((employee,index) => (
        <Link key={index} href={{
          pathname: `/pages/aboutUs/employeeDetails/${type}/${index}`,
          query: { data: JSON.stringify(employee) },
        }}>
          <div
            key={employee.id}
            className="mt-5 flex justify-center cursor-pointer"
          >
            <div className="bg-white p-2 rounded-2xl shadow-[0_4px_15px_rgba(90,22,140,0.7)] w-[250px] transform transition duration-300 ease-in-out hover:scale-105">
              <Image
                width={240}
                height={200}
                src={employee.ছবি}
                className="rounded-t-2xl"
                alt={employee.নাম}
              />
              <div className="text-center bg-[#5A168C] text-white py-3 px-2 rounded-b-2xl">
                <p className="text-lg font-bold">{employee.নাম}</p>
                <p className="text-sm font-medium text-gray-200">{employee.পদবী}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default employee_Cards;
