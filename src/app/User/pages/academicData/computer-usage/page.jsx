import React from 'react';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import img from '../../contact/image.png';
import Side_Card_Data from '@/app/globalComponents/Side_Card_Data';
import HeadMaster from '@/app/globalComponents/HeadMaster';
const Page = () => {
  return (
    <div className='flex justify-between gap-x-[20px]' >
      <div className="w-full mx-auto text-center mt-5">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">কম্পিউটার ও প্রযুক্তির ব্যবহার</h1>
        <div className="" />
        <Image src={img} alt="Contact" width={120} height={30} className='mx-auto'/>
        <p className='mt-2 text-[12px]'>কম্পিউটার ও প্রযুক্তির ব্যবহার</p>
       
        



        <hr className="my-6 border-gray-300" />

        <div className="flex justify-center items-center gap-2 text-sm text-gray-600 text-[14px]">
          <Clock size={16} />
          <span>শেষ হাল-নাগাদ করা হয়েছে: ২০২৩-১০-০২ ০৩:০৩:০৪</span>
        </div>
      </div>

      <div>
        <Side_Card_Data/>
        <HeadMaster/>

      </div>

    </div>
  );
};

export default Page;
