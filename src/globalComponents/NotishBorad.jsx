import React from 'react';
import { Bell } from 'lucide-react';
import Link from 'next/link';

const notices = [
  {
    id: 1,
    title: "সরকারি ছুটির তালিকা ও প্রতিষ্ঠানসমূহের কার্যক্রম এর তথ্য অনলাইনে প্রকাশ করতে হবে",
    link: "/notice/1"
  },
  {
    id: 2,
    title: "সকল শিক্ষক ও কর্মচারীদের প্রয়োজনীয় তথ্য ওয়েবসাইটে প্রকাশ বিষয়ে",
    link: "/notice/2"
  },
  {
    id: 3,
    title: "সকল শ্রেণীর ক্লাস রুটিন ও শিক্ষার্থীদের ভর্তি প্রক্রিয়া ডিজিটাল প্রকাশ বিষয়ে",
    link: "/notice/3"
  },
  {
    id: 4,
    title: "ভর্তি কার্যক্রম অনলাইন পরিচালনা ও আবেদন সংক্রান্ত তথ্য",
    link: "/notice/4"
  },
  {
    id: 5,
    title: "সরকারি নির্দেশনার অনুরূপ প্রতিষ্ঠানসমূহের ডায়নামিক ওয়েবসাইট তৈরি বিষয়ে",
    link: "/notice/5"
  }
];

const NotishBorad = () => {
  return (
    <div className="w-[400px] max-w-md mx-auto p-4 bg-[#f6f3f3] shadow rounded">
      <h2 className="bg-orange-600 text-white text-center text-lg font-bold py-2 rounded-t">নোটিশ বোর্ড</h2>
      <ul className="divide-y divide-black">
        {[...notices]
          .sort((a, b) => b.id - a.id)
          .slice(0, 5)
          .map((notice) => (
            <li key={notice.id} className="flex items-start gap-2 py-3">
              <Bell className="text-yellow-500 min-w-[20px]" size={20} />
              <Link href={notice.link} className="text-sm text-gray-800 hover:underline">
                {notice.title}
              </Link>
            </li>
          ))}
      </ul>
      <div className="text-center mt-4">
        <Link href="/notices" className="text-purple-600 font-medium hover:underline">
          সবগুলো নোটিশ
        </Link>
      </div>
    </div>
  );
};

export default NotishBorad;
