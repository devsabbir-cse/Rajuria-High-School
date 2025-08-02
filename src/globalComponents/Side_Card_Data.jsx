'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const cardItems = [
  {
    img: '/side_card_img/student-information.jpg',
    alt: 'Student Information',
    link: '/student-info',
  },
  {
    img: '/side_card_img/teacher.png',
    alt: 'Teachers',
    link: '/aboutUs/teachers',
  },
  {
    img: '/side_card_img/kormochary.png',
    alt: 'Staff Information',
    link: '/aboutUs/stuff-information',
  },
  {
    img: '/side_card_img/poricalona_porsod.png',
    alt: 'Committee',
    link: '/aboutUs/committee',
  },
];

const Side_Card_Data = () => {
  return (
    <div className="w-[400px] mt-5 max-w-md mx-auto">
      {cardItems.map((item, index) => (
        <Link href={item.link} key={index}>
          <div className="mb-3 cursor-pointer hover:opacity-90">
            <Image
              src={item.img}
              alt={item.alt}
              width={400}
              height={200}
              className="rounded"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Side_Card_Data;
