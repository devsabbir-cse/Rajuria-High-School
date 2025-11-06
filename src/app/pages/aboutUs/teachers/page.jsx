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
    <div className='flex justify-between gap-x-[20px] ' >

      <Employee_Cards employee={teachers} type="teacher" />





      <div>
        <Side_Card_Data/>
        {/* <HeadMaster/> */}

      </div>

    </div>
  );
};

export default Page;
