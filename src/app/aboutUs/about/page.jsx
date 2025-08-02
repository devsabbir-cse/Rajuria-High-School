import React from 'react';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import img from '../../contact/image.png';
import Side_Card_Data from '@/globalComponents/Side_Card_Data';
import HeadMaster from '@/globalComponents/HeadMaster';

const Page = () => {
  return (
    <div className='flex justify-between gap-x-[20px]' >
      <div className="max-w-3xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">প্রতিষ্ঠানের ইতিহাস</h1>
        <div className="" />
        <Image src={img} alt="Contact" width={120} height={30} className='mx-auto'/>
        <div className="text-gray-700 mb-6 leading-relaxed text-[16px] mt-5 text-justify">          
          <p >

            আমরা এখানে আপনাকে একটি আদর্শ শিক্ষামূলক পরিবেশে স্বাগত জানাচ্ছি। আমাদের লক্ষ্য হল ছাত্র-ছাত্রীদের উন্নত শিক্ষা এবং সম্পূর্ণ ব্যক্তিত্ব উন্নত করা। আমরা নৈতিকতা, দায়িত্ব, এবং কর্মঠতার মাধ্যমে একটি সমৃদ্ধ শিক্ষামূলক পরিবেশ সৃষ্টি করতে প্রতিশ্রুত।
          </p>
          <p className='mt-2'>
            আমাদের উদ্দেশ্য হল ছাত্র-ছাত্রীদের উন্নত জ্ঞান এবং প্রতিভা অর্জন করার মাধ্যমে তাদের শিক্ষামূলক এবং সামাজিক উন্নতি সহায়ক হতে। আমরা শিক্ষার্থীদের আত্মবিশ্বাস উন্নত করার জন্য বিভিন্ন শিক্ষামূলক কর্মশীলতা এবং শৃঙ্গার সুবিধা প্রদান করি।
          </p>   
          <p className='mt-2'>
            আমরা গর্বিত হই যে, আমাদের উচ্চতর শিক্ষক দল এবং সাহায্যক কর্মীরা নিয়মিতভাবে ছাত্র-ছাত্রীদের নিরাপত্তা, যত্ন এবং উন্নত শিক্ষামূলক পরিবেশ নিশ্চিত করতে কাজ করে।
          </p>
          <p className='mt-2'>
            আমাদের ওপর নির্ভরযোগ্য শিক্ষক দল, সার্থক শিক্ষামূলক কার্যক্রম, আধুনিক শিক্ষানীতি, এবং শিক্ষার্থীদের উন্নত উদ্যমের মাধ্যমে আমরা শিক্ষার স্বর্গসদমে এগিয়ে যাচ্ছি। আপনার উদ্যম, আগ্রহ এবং সহযোগিতার মাধ্যমে আমরা একসাথে উন্নত শিক্ষামূলক পরিবেশ সৃষ্টি করতে যাচ্ছি। 
          </p>


        </div>

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
