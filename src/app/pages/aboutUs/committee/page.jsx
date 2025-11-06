import React from 'react';
import Side_Card_Data from '@/app/globalComponents/Side_Card_Data';
import Employee_Cards from '@/app/globalComponents/Employee_Cards';
import committee from "@/app/Json/committee.json"
const Page = () => {



 const handleTeacherClick = (teacher) => {
    console.log("Clicked teacher:", teacher);
    // You can open a modal or navigate to another page here
  };

  return (
    <div className='flex justify-between gap-x-[20px] ' >

      <Employee_Cards employee={committee} type="committee"/>





      <div>
        <Side_Card_Data/>
        {/* <HeadMaster/> */}

      </div>

    </div>
  );
};

export default Page;
