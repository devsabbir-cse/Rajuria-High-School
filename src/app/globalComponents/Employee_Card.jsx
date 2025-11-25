import Image from "next/image";

export default function employee_Card({ employee }) {
    const text1 ="w-1/2 text-[16px]"
    const text2 = "w-1/2 text-[16px] font-bold"
    const div = "flex justify-between mb-5"
    

  return (
    <div className="bg-[#5A168C] text-white p-8 rounded-2xl flex flex-col md:flex-row gap-10 items-center shadow-2xl max-w-5xl mx-auto w-full">
      
      {/* Left Section - Image */}
      <div className="border-4 border-white rounded-xl overflow-hidden shadow-lg flex-shrink-0 w-[200px] h-[250px]">
        <Image
          src={`https://drive.google.com/uc?export=download&id=${employee.ছবি}`}        
          alt={employee.নাম}
          width={200}
          height={250}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Section - Info */}
      <div className="w-full ">
        <div>
            <h3 className="text-xl font-semibold uppercase tracking-wider">
          {employee.পদবী}
        </h3>
        <hr className="border-white/40 mb-2 w-2/3" />
        <h2 className="text-3xl font-bold mb-5">{employee.নাম}</h2>

        </div>
        <div className="flex  w-full gap-x-10 ">
            <div className="w-1/2 ">
                <div className="w-full">
                    <div className={div}>
                        <p className={text1}>মোবাইল নাম্বারঃ</p>
                        <p  className={text2}>{employee.ফোন}</p>
                    </div>
                    <div className={div}>
                        <p className={text1}>ইমেইলঃ</p>
                        <a className="w-1/2 text-[14px] font-bold">
                        {employee.ইমেইল}
                        </a>
                    </div>
                    <div className={div}>
                        <p className={text1}>ঠিকানাঃ</p>
                        <p className={text2}>{employee.ঠিকানা}</p>
                    </div>
                    <div className={div}>
                        <p className={text1}>শিক্ষাগত যোগ্যতাঃ</p>
                        <p className={text2}>{employee.শিক্ষাগত_যোগ্যতা}</p>
                    </div>
                    <div className={div}>
                        <p className={text1}>ট্রেনিংঃ</p>
                        <p className={text2}>{employee.ট্রেনিং}</p>
                    </div>
                </div>

            </div>
            <div className="w-1/2 ">
                <div className="w-full">
                    <div className={div}>
                        <p className={text1}>জাতীয়তাঃ</p>
                        <p  className={text2}>{employee.জাতীয়তা}</p>
                    </div>
                    <div className={div}>
                        <p className={text1}>জাতীয় পরিচয় নংঃ</p>
                        <a className={text2}>
                        {employee.জাতীয়_পরিচয়_নং}
                        </a>
                    </div>
                    <div className={div}>
                        <p className={text1}>রক্তের গ্রুপঃ</p>
                        <p className={text2}>{employee.রক্তের_গ্রুপ}</p>
                    </div>
                    <div className={div}>
                        <p className={text1}>জন্মতারিখঃ</p>
                        <p className={text2}>{employee.জন্মতারিখ}</p>
                    </div>
                    <div className={div}>
                        <p className={text1}>যোগদানের তারিখঃ</p>
                        <p className={text2}>{employee.যোগদানের_তারিখ}</p>
                    </div>
                </div>

            </div>
        </div>



        {/* Title */}
        

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 text-sm sm:text-base">
          
          
        </div>
      </div>
    </div>
  );
}
// https://drive.google.com/file/d/1VbMTtOBGQSA6mNWHQfkWIGRPPh67ZL9v/view?usp=sharing
// https://drive.google.com/file/d/1tlCS1Rl7lBaf54QYe9CEg1MAhtBS7uNa/view?usp=sharing