// app/principal-info/page.jsx
import React from 'react';
import Side_Card_Data from '@/app/User/globalComponents/Side_Card_Data';
import HeadMaster from '@/app/User/globalComponents/HeadMaster';

const PrincipalInfo = () => {
  return (
    <div  className='flex justify-between gap-x-[20px]' >
      <div className="w-full  text-gray-800 font-sans mt-5">
        {/* Profile Image and Name */}
        <div className="flex items-center border-b pb-4 mb-4">
          <div className="w-24 h-24 bg-gray-200 rounded-md mr-4 flex items-center justify-center overflow-hidden">
            <img
              src="/homepage/headMaster.jpg" // Replace with the correct image path or leave blank if not available
              alt="মোঃ শামসুল হুদা"
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="text-xl font-semibold text-blue-700">প্রধান শিক্ষক</h2>
        </div>

        {/* Info Section */}
        <div className="space-y-2">
          <p><strong>নামঃ</strong> মোঃ শামসুল হুদা</p>
          <p><strong>পদবীঃ</strong> প্রধান শিক্ষক</p>
          <p><strong>মোবাইল নাম্বারঃ</strong> <a className="text-blue-600 hover:underline" href="tel:01722938548">01722938548</a></p>
          <p><strong>ইমেইল ঠিকানাঃ</strong> <a className="text-blue-600 hover:underline" href="mailto:kayempurhs1964@gmail.com">kayempurhs1964@gmail.com</a></p>
        </div>
      </div>
      <div>
          <Side_Card_Data/>
          <HeadMaster/>

      </div>
    </div>
  );
};

export default PrincipalInfo;
