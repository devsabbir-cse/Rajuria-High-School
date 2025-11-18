import React from 'react';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import img from '../../contact/image.png';
import Side_Card_Data from '@/app/globalComponents/Side_Card_Data';
import HeadMaster from '@/app/globalComponents/HeadMaster';
import committee from '@/app/file/committee.json';
import Employee_Cards from '@/app/globalComponents/Employee_Cards';
import teachers from "@/app/Json/teachers.json"
const Page = () => {



 const handleTeacherClick = (teacher) => {
    console.log("Clicked teacher:", teacher);
    // You can open a modal or navigate to another page here
  };

  return (
    <div className='flex flex-col justify-between gap-x-[20px] ' >
        <h1 className='flex justify-center text-3xl text-[#5B168E] font-bold py-2'>শিক্ষক বৃন্দ</h1>
      <Employee_Cards employee={teachers} type="teacher" />
    </div>
  );
};

export default Page;
