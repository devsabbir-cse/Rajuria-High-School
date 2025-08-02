import React from 'react'
import Image from 'next/image';

const HeadMaster = () => {
  return (
    <div className="w-[400px] flex flex-col items-center justify-center bg-[#eaeaea] p-4">
              <p className="text-[24px] font-bold mb-3 text-gray-700">প্রধান শিক্ষক</p>
              <Image width={200} height={220} 
              className="object-cover rounded-2xl"
              src="/homepage/headMaster.jpg"
              alt="Head Master"
              />
              <p className="text-[18px] font-bold mt-4">মোঃ শামসুল হুদা</p>
              
          </div>
  )
}

export default HeadMaster