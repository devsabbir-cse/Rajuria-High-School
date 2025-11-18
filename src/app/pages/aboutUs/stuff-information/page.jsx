import React from 'react';
import Employee_Cards from '@/app/globalComponents/Employee_Cards';
import stuff from "@/app/Json/stuff.json"
const Page = () => {
  return (
    <div className='flex flex-col justify-between gap-x-[20px]' >
      
        <h1 className='flex justify-center text-3xl text-[#5B168E] font-bold py-2'>কর্মচারী বৃন্দ</h1>
      
      <Employee_Cards employee={stuff} type="committee"/>
    </div>
  );
};

export default Page;
