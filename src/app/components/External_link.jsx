import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const External_link = () => {
  const links = [
    { name: "জাতীয় শিক্ষা বোর্ড", url: "https://www.educationboard.gov.bd/" },
    { name: "ই-বুক", url: "http://www.ebook.gov.bd/" },
    { name: "দিনাজপুর শিক্ষা বোর্ড অফিসিয়াল ওয়েবসাইট", url: "https://dinajpureducationboard.gov.bd/" },
    { name: "মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর", url: "https://dshe.gov.bd/" },
    { name: "শিক্ষা মন্ত্রনালয়", url: "https://moedu.gov.bd/" },
    { name: "শিক্ষক বাতায়ন", url: "http://www.teachers.gov.bd/" },
    { name: "দিনাজপুর শিক্ষা বোর্ড", url: "https://dinajpureducationboard.gov.bd/" },
    { name: "মাল্টিমিডিয়া ক্লাসরুম ম্যানেজমেন্ট সিস্টেম", url: "http://mmcms.gov.bd/" },
    { name: "জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড", url: "https://nctb.gov.bd/" },
    { name: "রংপুর বিভাগীয় কমিশনারের কার্যালয়", url: "https://rangpur.gov.bd/" },
    { name: "বাংলাদেশ জাতীয় তথ্য বাতায়ন", url: "https://bangladesh.gov.bd/" },
    { name: "Directorate of Inspection and Audit", url: "https://dia.gov.bd/" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition w-full">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
        গুরুত্বপূর্ণ লিঙ্ক
      </h2>

      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg hover:bg-indigo-100 transition shadow-sm"
            >
              <span className="text-gray-800 font-medium">
                {link.name}
              </span>
              <FaExternalLinkAlt className="text-indigo-600" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default External_link;
