"use client";  
import Image from "next/image";
import Link from "next/link";

const employee_Cards = ({ employee,type }) => { 
  console.log(employee,"type in emp card");
  
   

  return (
    <div className="grid grid-cols-3 gap-4 w-full justify-between h-[600px] overflow-y-auto">
      {employee.map((employee,index) => (
        <Link key={index} href={{
          pathname: `/User/pages/aboutUs/employeeDetails/${type}/${index}`,
          query: { data: JSON.stringify(employee) },
        }}>
          <div
            key={employee.id}
            className="mt-5 flex justify-center cursor-pointer"
          >
            <div className="bg-white p-1 rounded-2xl shadow-[0_4px_15px_rgba(90,22,140,0.7)]  transform transition duration-300 ease-in-out hover:scale-105">
            <div className="w-[250px] h-[250px] overflow-hidden rounded-t-2xl">
              <Image
                src={`https://drive.google.com/uc?export=download&id=${employee.ছবি}`}
                alt={employee.নাম}
                className="w-full h-full object-cover"
                width={250}
                height={250}                
              />
            </div>

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