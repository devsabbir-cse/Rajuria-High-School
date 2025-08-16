'use client';
import React, { useEffect, useState, useRef } from "react";
import { FaDownload, FaBan } from 'react-icons/fa';
import axios from "axios";

const NoticeList = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form states
  const [heading, setHeading] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const fileInputRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("heading", heading);
    if (file) {
      formData.append("file", file);
    }

    try {
      const res = await axios.post(
        "http://localhost/school-management-system/POST/Notice/notice.php",
        formData
      );

      if (res.data.status === "success") {
        setMessage("✅ Notice added successfully!");
        setHeading("");
        setFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        fetchNotices(); // Refresh list
      } else {
        setMessage("❌ " + res.data.message);
      }
    } catch (error) {
      setMessage("❌ Error: " + error.message);
    }
  };

  // Fetch notices
  const fetchNotices = async () => {
    try {
      const res = await axios.get(
        "http://localhost/school-management-system/GET/Notice/notice.php"
      );
      if (res.data.status === "success") {
        setNotices(res.data.data);
      }
      setLoading(false);
    } catch (err) {
      console.error("Error fetching notices:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500">Loading notices...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">📢 Notices</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition"
        >
          ➕ Create New Notice
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-green-500 text-white">
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Heading</th>
              <th className="py-3 px-4 w-[150px]">Date</th>
              <th className="py-3 px-4 w-[50px]">File</th>
            </tr>
          </thead>
          <tbody>
            {notices.length > 0 ? (
              notices.map((notice) => (
                <tr
                  key={notice.id}
                  className="hover:bg-green-50 border-b border-gray-200"
                >
                  <td className="py-3 px-4">{notice.id}</td>
                  <td className="py-3 px-4 text-justify font-medium text-gray-800">
                    {notice.heading}
                  </td>
                  <td className="py-3 px-4 w-[150px]">{notice.date}</td>
                  <td className="py-3 px-4 w-[50px]">
                    {Number(notice.downloadable) === 1 ? (
                      <a
                        href={notice.file_path}
                        download
                        className="text-blue-500 hover:underline cursor-pointer"
                        title="Download"
                        target="_blank"
                      >
                        <FaDownload className="text-blue-500 inline " />
                      </a>
                    ) : (
                      <p>
                        <FaBan className="text-red-500 inline " />
                      </p>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="py-4 text-center text-gray-500 italic"
                >
                  No notices found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 ">
          <div className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-[800px] h-[500px] flex flex-col">
            <h2 className="text-2xl font-bold mb-6 text-green-700 flex items-center gap-2">
              📢 Add New Notice
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
              {/* Heading textarea */}
              <div className="mb-6 flex-grow">
                <label className="block mb-2 font-medium text-gray-700">
                  নোটিশ শিরোনামঃ
                </label>
                <textarea
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                  required
                  rows={6}
                  placeholder="Write your notice here..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
                />
              </div>

              {/* File picker */}
              <div className="mb-6">
                <label className="block mb-2 font-medium text-gray-700">
                  ফাইল আপলোড (optional):
                </label>
                <input
                  type="file"
                  accept="application/pdf"
                  ref={fileInputRef}
                  onChange={(e) => setFile(e.target.files[0])}
                  className="block w-full text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-green-50 file:text-green-700
                   hover:file:bg-green-100
                   cursor-pointer"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg shadow transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg transition"
                >
                  Submit
                </button>
              </div>
            </form>

            {message && (
              <p className="mt-4 text-sm text-gray-600">{message}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NoticeList;
