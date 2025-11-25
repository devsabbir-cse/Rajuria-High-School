import "@/app/globals.css";
import { ToastContainer } from 'react-toastify';
import { GlobalDataProvider } from "./context/GlobalDataContext";

export const metadata = {
  title: "রাজুরিয়া উচ্চ বিদ্যালয়",
  description: "রাজুরিয়া উচ্চ বিদ্যালয়",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full bg-white text-gray-800 font-sans min-h-screen">
        <GlobalDataProvider>
          <ToastContainer/>
          <div className="max-w-[1350px] mx-auto px-1 sm:px-1 md:px-1">
            {children}
          </div>
        </GlobalDataProvider>
      </body>
    </html>
  );
}
