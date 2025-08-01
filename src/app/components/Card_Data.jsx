import React from 'react';
import { Users, ClipboardList, Video, Building } from 'lucide-react';

const Card_Data = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 max-w-6xl mx-auto">
      
      {/* শিক্ষার্থীর তথ্য */}
      <div className="bg-white hover:bg-blue-50 shadow rounded p-4 border-t-4 border-blue-600 transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer hover:border-blue-800">
        <div className="flex items-center gap-3 mb-3">
          <Users className="text-blue-600" size={40} />
          <h3 className="text-blue-600 font-bold text-lg">শিক্ষার্থীর তথ্য</h3>
        </div>
        <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
          <li>শিক্ষার্থীর তালিকা</li>
          <li>ভর্তি প্রক্রিয়া</li>
          <li>ক্লাস রুটিন</li>
          <li>কৃত শিক্ষার্থী</li>
        </ul>
      </div>

      {/* শিক্ষক ও কর্মচারী */}
      <div className="bg-white hover:bg-green-50  shadow rounded p-4 border-t-4 border-green-600 transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer hover:border-green-800">
        <div className="flex items-center gap-3 mb-3">
          <ClipboardList className="text-green-600" size={40} />
          <h3 className="text-green-600 font-bold text-lg">শিক্ষক ও কর্মচারী</h3>
        </div>
        <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
          <li>শিক্ষকদের তালিকা</li>
          <li>প্রধান শিক্ষকের তথ্য</li>
          <li>নোটিশ বোর্ড</li>
          <li>কর্মচারীবৃন্দ</li>
        </ul>
      </div>

      {/* পোস্ট ও গ্যালারী */}
      <div className="bg-white hover:bg-red-50  shadow rounded p-4 border-t-4 border-red-600 transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer hover:border-red-800">
        <div className="flex items-center gap-3 mb-3">
          <Video className="text-red-600" size={40} />
          <h3 className="text-red-600 font-bold text-lg">পোস্ট ও গ্যালারী</h3>
        </div>
        <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
          <li>ছবি গ্যালারী</li>
          <li>ভিডিও গ্যালারী</li>
          <li>সর্বশেষ সংবাদ</li>
          <li>সংবাদ ও মিডিয়া সেন্টার</li>
        </ul>
      </div>

      {/* প্রতিষ্ঠানের তথ্য */}
      <div className="bg-white hover:bg-cyan-50  shadow rounded p-4 border-t-4 border-cyan-600 transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer hover:border-cyan-800">
        <div className="flex items-center gap-3 mb-3">
          <Building className="text-cyan-600" size={40} />
          <h3 className="text-cyan-600 font-bold text-lg">প্রতিষ্ঠানের তথ্য</h3>
        </div>
        <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
          <li>প্রতিষ্ঠানের ইতিহাস</li>
          <li>পরিচালনা পরিষদ</li>
          <li>মূল্য পদদের তালিকা</li>
          <li>কক্ষ সংখ্যা</li>
        </ul>
      </div>

    </div>
  );
};

export default Card_Data;
