import React from "react";
import { Clock, Users, BookOpen } from "lucide-react";
import SidebarSections from "@/app/globalComponents/SidebarSections";

const Page = () => {
  return (
    <div className="">
      {/* ===== Main Content ===== */}
      <div className=" bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
        <h1 className="text-3xl font-bold text-[#5A168D] mb-4 text-center">
          প্রতিষ্ঠানের ইতিহাস
        </h1>
        <hr className="h-1 bg-[#5A168D] border-0 rounded"/>

        <div className="text-gray-700 text-lg leading-relaxed text-justify space-y-4 mt-5">
          <p>
            আমরা আপনাকে স্বাগত জানাই একটি আদর্শ শিক্ষামূলক পরিবেশে। আমাদের
            লক্ষ্য ছাত্র-ছাত্রীদের সম্পূর্ণ উন্নতি এবং নৈতিক মূল্যবোধ বৃদ্ধিতে সহায়তা করা।
          </p>
          <p>
            আমরা শিক্ষার্থীদের জ্ঞান, দক্ষতা এবং প্রতিভা বিকাশের মাধ্যমে তাদের
            শিক্ষামূলক এবং সামাজিক উন্নতি নিশ্চিত করি। আমাদের শিক্ষক এবং সহায়ক
            কর্মীরা সর্বদা ছাত্রদের সুরক্ষা, যত্ন এবং শিক্ষা উন্নতিতে নিয়োজিত।
          </p>
          <p>
            আমাদের আধুনিক শিক্ষানীতি এবং উদ্ভাবনী কার্যক্রম শিক্ষার্থীদের আত্মবিশ্বাস
            বৃদ্ধি এবং তাদের সম্পূর্ণ ব্যক্তিত্ব উন্নয়নে সহায়ক।
          </p>
          <p>
            প্রতিষ্ঠানে নিয়মিত বিভিন্ন সাংস্কৃতিক ও শিক্ষামূলক কর্মসূচি পরিচালনা করা হয়, যা
            শিক্ষার্থীদের সৃজনশীলতা এবং দলগত দক্ষতা বৃদ্ধি করতে সহায়তা করে।
          </p>
          <p>
            আমাদের লক্ষ্য শুধু শিক্ষার মান উন্নত করা নয়, বরং ছাত্রদের চরিত্র, দায়িত্বশীলতা
            এবং সামাজিক মূল্যবোধ গড়ে তোলা। আমরা তাদের জীবনের প্রতি সঠিক দৃষ্টিভঙ্গি
            দিতে চেষ্টা করি।
          </p>
          <p>
            শিক্ষার্থী কেন্দ্রিক পরিবেশ এবং সক্রিয় অভিভাবক সহযোগিতার মাধ্যমে আমরা একটি
            পূর্ণাঙ্গ শিক্ষামূলক সম্প্রদায় গড়ে তুলি। আমরা বিশ্বাস করি, একসাথে কাজ করলে
            শিক্ষার মান সর্বোচ্চ পর্যায়ে পৌঁছানো সম্ভব।
          </p>
        </div>

        {/* ===== Highlights / Features ===== */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-xl shadow hover:shadow-lg transition duration-300">
            <Clock className="text-indigo-600" size={28} />
            <div>
              <h3 className="font-bold text-indigo-700">অভিজ্ঞতা</h3>
              <p className="text-gray-600 text-sm mt-1">
                ২০ বছরের অভিজ্ঞ শিক্ষক দল শিক্ষার্থীদের সর্বোচ্চ শিক্ষার জন্য।
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl shadow hover:shadow-lg transition duration-300">
            <Users className="text-purple-600" size={28} />
            <div>
              <h3 className="font-bold text-purple-700">সফল ছাত্র</h3>
              <p className="text-gray-600 text-sm mt-1">
                অসংখ্য সফল ছাত্র-ছাত্রী আমাদের শিক্ষার গুণমান প্রমাণ করে।
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl shadow hover:shadow-lg transition duration-300">
            <BookOpen className="text-green-600" size={28} />
            <div>
              <h3 className="font-bold text-green-700">উন্নত পাঠ্যক্রম</h3>
              <p className="text-gray-600 text-sm mt-1">
                আধুনিক ও সমৃদ্ধ শিক্ষানীতি শিক্ষার্থীদের সর্বোত্তম শিক্ষার জন্য।
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Page;
