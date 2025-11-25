import React from 'react'

const About_School = () => {
  return (
    <div className="bg-[#f6f3f3] mt-2">
      <p className="bg-gradient-to-r from-indigo-500 to-purple-500 text-center font-bold text-white text-[20px] py-2">
        রাজুরিয়া উচ্চ বিদ্যালয়
      </p>

      <div className="flex flex-col md:flex-row py-4 md:px-6 lg:px-10 items-center md:items-start">
        
        {/* Image */}
        <img
          className="w-full md:w-[350px] md:h-[250px] rounded-lg object-cover"
          src="/homepage/img1.jpg"
          alt=""
        />

        {/* Text */}
        <p className="text-[16px] md:text-[18px] text-black text-justify leading-relaxed mt-4 md:mt-0 md:ml-6">
          আমরা এখানে আপনাকে একটি আদর্শ শিক্ষামূলক পরিবেশে স্বাগত জানাচ্ছি। 
          আমাদের লক্ষ্য হল ছাত্র-ছাত্রীদের উন্নত শিক্ষা এবং সম্পূর্ণ ব্যক্তিত্ব উন্নত করা। 
          আমরা নৈতিকতা, দায়িত্ব, এবং কর্মঠতার মাধ্যমে একটি সমৃদ্ধ শিক্ষামূলক পরিবেশ সৃষ্টি করতে প্রতিশ্রুত। 
          আমাদের উদ্দেশ্য হল ছাত্র-ছাত্রীদের উন্নত জ্ঞান এবং প্রতিভা অর্জন করার মাধ্যমে তাদের শিক্ষামূলক এবং 
          সামাজিক উন্নতি সহায়ক হতে। আমরা শিক্ষার্থীদের আত্মবিশ্বাস উন্নত করার জন্য বিভিন্ন শিক্ষামূলক কর্মশীলতা 
          এবং শৃঙ্গার সুবিধা প্রদান করি। আমরা গর্বিত হই যে, আমাদের উচ্চতর শিক্ষক দল উন্নত শিক্ষামূলক পরিবেশ 
          নিশ্চিত করতে কাজ করে।
        </p>

      </div>
    </div>
  );
};

export default About_School;
