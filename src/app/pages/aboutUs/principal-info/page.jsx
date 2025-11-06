// app/principal-info/page.jsx
import React from 'react';
import Side_Card_Data from '@/app/globalComponents/Side_Card_Data';
import Employee_Card from '@/app/globalComponents/Employee_Card'
import HeadMaster from '@/app/globalComponents/HeadMaster';

const PrincipalInfo = () => {
      const head_teacher = {
    "id": 1,
    "পদবী": "প্রধান শিক্ষক",
    "নাম": "মোঃ রফিকুল ইসলাম",
    "ফোন": "01712345678",
    "ইমেইল": "rafiqul@example.com",
    "ঠিকানা": "উত্তরা, ঢাকা, বাংলাদেশ",
    "শিক্ষাগত_যোগ্যতা": "এম.এ (বাংলা)",
    "ট্রেনিং": "শিক্ষা ব্যবস্থাপনা প্রশিক্ষণ",
    "জাতীয়তা": "বাংলাদেশী",
    "জাতীয়_পরিচয়_নং": "1990123456789",
    "জন্মতারিখ": "1975-03-20",
    "রক্তের_গ্রুপ": "A+",
    "যোগদানের_তারিখ": "2005-07-14",
    "ছবি": "/homepage/headMaster.jpg"
  };
  return (
    <div  className='flex justify-between gap-x-[20px]' >
        <div className="w-full  text-gray-800 font-sans mt-5">
          {/* Profile Image and Name */}
          <Employee_Card employee={head_teacher}/>
        
        </div>
      <div>
          <Side_Card_Data/>
          <HeadMaster/>

      </div>
    </div>
  );
};

export default PrincipalInfo;
