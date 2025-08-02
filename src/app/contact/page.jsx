import React from 'react';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import img from '../contact/image.png';
import Side_Card_Data from '@/globalComponents/Side_Card_Data';
import HeadMaster from '@/globalComponents/HeadMaster';

const Contact = () => {
  return (
    <div className='flex justify-between gap-x-[20px]' >
      <div className="max-w-3xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">যোগাযোগ</h1>
        <div className="" />
        <Image src={img} alt="Contact" width={120} height={30} className='mx-auto'/>

        <p className="text-gray-700 mb-6 leading-relaxed text-[16px] mt-5 text-justify">
          যে কোন তথ্য, ভর্তি, নিয়োগ সহ সকল বিষয়ে যোগাযোগ করুন প্রতিষ্ঠানের ঠিকানায়।
          এছাড়া অধ্যক্ষের সাথে যোগাযোগ করতে পারেন।
        </p>

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

export default Contact;
