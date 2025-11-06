"use client";
import React, { useEffect, useState } from "react";

const ViewPdfPage = () => {
  const [file, setFile] = useState("");

  useEffect(() => {
    const savedFile = localStorage.getItem("pdfFile");
    if (savedFile) setFile(savedFile);
  }, []);

  if (!file) {
    return <div className="text-center mt-10">❌ No PDF file specified.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">
        📄 নোটিশ ফাইল
      </h1>

      <iframe
        src={file}
        width="98%"
        height="1650px"
        className="border-2 border-gray-300 rounded-lg"
      />
    </div>
  );
};

export default ViewPdfPage;
