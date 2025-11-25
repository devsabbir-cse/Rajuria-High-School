import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-6">
      
      {/* ===== Main Content ===== */}
      <div className="bg-white  px-8 py-6 rounded-2xl shadow-2xl hover:shadow-[0_0_40px_rgba(91,22,142,0.2)] transition duration-300 border border-[#5B168E]/10">
        
        <h1 className="text-4xl font-extrabold text-[#5B168E] mb-6 text-center tracking-wide">
          যোগাযোগ
        </h1>

        <p className="text-gray-700 text-lg text-justify leading-relaxed mb-8">
          আমাদের সাথে যোগাযোগ করতে নিচের ঠিকানা, ফোন নম্বর এবং ইমেল ব্যবহার করুন। আমরা সর্বদা শিক্ষার্থীদের, অভিভাবক ও দর্শনার্থীদের সাহায্য করতে প্রস্তুত। অফিস সময়সূচি অনুযায়ী যোগাযোগ করুন।
        </p>

        {/* ===== Contact Info ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
          
          {/* Address */}
          <div className="flex items-start gap-3 bg-indigo-50/80 p-5 rounded-xl shadow hover:shadow-lg transition duration-300 border border-indigo-100">
            <MapPin className="text-indigo-600" size={34} />
            <div>
              <h3 className="font-bold text-indigo-700 text-xl">ঠিকানা</h3>
              <p className="text-base mt-1 leading-relaxed">
                রাজুরিয়া উচ্চ বিদ্যালয়, <br />
                দিনাজপুর সদর, <br />
                বাংলাদেশ
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3 bg-purple-50/80 p-5 rounded-xl shadow hover:shadow-lg transition duration-300 border border-purple-100">
            <Phone className="text-purple-600" size={34} />
            <div>
              <h3 className="font-bold text-purple-700 text-xl">ফোন</h3>
              <p className="text-base mt-1 leading-relaxed">
                +880 1234 567890 <br />
                +880 9876 543210
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3 bg-green-50/80 p-5 rounded-xl shadow hover:shadow-lg transition duration-300 border border-green-100">
            <Mail className="text-green-600" size={34} />
            <div>
              <h3 className="font-bold text-green-700 text-xl">ইমেল</h3>
              <p className="text-base mt-1">
                info@rajuriahighschool.edu.bd
              </p>
            </div>
          </div>
        </div>

        {/* ===== Office Time (More Attractive) ===== */}
        <div className="mt-8 relative overflow-hidden rounded-2xl p-[2px] bg-gradient-to-r from-[#FACC15] to-[#FB923C] shadow-xl hover:shadow-2xl transition-all duration-300">
          
          {/* Inner Card */}
          <div className="bg-yellow-50/80 backdrop-blur-xl p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="text-yellow-700" size={30} />
              <h3 className="font-extrabold text-yellow-800 text-2xl tracking-wide">
                অফিস সময়সূচি
              </h3>
            </div>

            <p className="text-gray-800 text-lg leading-relaxed ml-1">
              সোমবার থেকে শুক্রবার: <span className="font-semibold text-[#5B168E]">৮:০০ AM - ৪:০০ PM</span> <br />
              শনিবার: <span className="font-semibold text-[#5B168E]">৮:০০ AM - ১:০০ PM</span> <br />
              রবিবার: <span className="font-semibold text-red-600">বন্ধ</span>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
