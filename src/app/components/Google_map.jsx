import React from "react";

const Google_map = () => {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415750.21578626515!2d88.57584052313995!3d25.561256841551888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4b3454274e371%3A0x13ef84e4e073ac17!2sRajuria%20High%20School!5e0!3m2!1sen!2sbd!4v1763409064120!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Google_map;
