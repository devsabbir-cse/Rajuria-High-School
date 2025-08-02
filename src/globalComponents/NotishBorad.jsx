import React from 'react';
import { Bell } from 'lucide-react';
import Link from 'next/link';
import notice from '@/file/notice.json';


const NotishBorad = () => {
  return (
    <div className="w-[400px] max-w-md mx-auto p-4 bg-[#f6f3f3] shadow rounded">
      <h2 className="bg-orange-600 text-white text-center text-lg font-bold py-2 rounded-t">নোটিশ বোর্ড</h2>
      <ul className="divide-y divide-black">
        {[...notice]
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
