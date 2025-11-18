import React from 'react';
import Side_Card_Data from '@/app/globalComponents/Side_Card_Data';
import Employee_Cards from '@/app/globalComponents/Employee_Cards';
import committee from "@/app/Json/committee.json"
const Page = () => {
  return (
    <div className='flex flex-col justify-between gap-x-[20px]' >
      <h1 className='flex justify-center text-3xl text-[#5B168E] font-bold py-2'>পরিচালনা পর্ষদ</h1>
      <Employee_Cards employee={committee} type="committee"/>
    </div>
  );
};

export default Page;
