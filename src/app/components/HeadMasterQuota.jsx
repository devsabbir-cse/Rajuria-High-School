import React from 'react';
import { parse, icon } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const HeadMasterQuota = () => {
  return (
    <div>
        <div className='mt-5 bg-gradient-to-r from-indigo-500 to-purple-500 w-full h-[8px]'></div>
        <div className="w-full flex flex-col md:flex-row bg-[#f6f3f3]">
        
        
        <div className="md:w-[30%] flex flex-col items-center justify-center bg-[#eaeaea] p-4">
            <img
            className="w-[180px] h-[220px] object-cover"
            src="/homepage/headMaster.jpg"
            alt="Head Master"
            />
            <p className="text-[18px] font-bold mt-4">মোঃ শামসুল হুদা</p>
            <p className="text-[15px] text-gray-700">প্রধান শিক্ষক</p>
        </div>

        {/* Right side (Message) */}
        <div className="md:w-[70%] mt-4 md:mt-0 md:pl-6 pr-4 text-justify text-[16px] text-gray-800 leading-relaxed relative pb-5">
            <FontAwesomeIcon icon={faQuoteLeft} className="mt-2 ml-5 text-gray-400 h-[60px] w-[60px] absolute top-0 left-0" />
            <br></br>
            <p className="ml-5 mt-2 text-[18px]">
            আমরা আদর্শ শিক্ষামূলক পরিবেশে আপনাকে স্বাগত। আমরা নৈতিকতা, দায়িত্ব, এবং কর্মঠতার মাধ্যমে একটি সমৃদ্ধ শিক্ষামূলক পরিবেশ সৃষ্টি করতে প্রতিশ্রুত। আমাদের উদ্দেশ্য হল শিক্ষার্থীদের উন্নত জ্ঞান এবং প্রতিভা অর্জন করার মাধ্যমে তাদের শিক্ষামূলক এবং সামাজিক উন্নতি সহায়ক হতে। আমরা শিক্ষার্থীদের আত্মবিশ্বাস উন্নত করার জন্য বিভিন্ন শিক্ষামূলক কার্যক্রম এবং সুষ্ঠু পরিবেশ প্রদান করি।
            </p>
        </div>
        </div>
    </div>
  );
};

export default HeadMasterQuota;
