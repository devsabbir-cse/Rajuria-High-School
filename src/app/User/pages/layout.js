import "@/app/globals.css";
import SidebarSections from "../../globalComponents/SidebarSections";

export const metadata = {
  title: "রাজুরিয়া উচ্চ বিদ্যালয়",
  description: "রাজুরিয়া উচ্চ বিদ্যালয়",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-[1350px] mx-auto px-1 bg-gray-100 shadow-2xl text-gray-800 font-sans py-3 mb-5 overflow-x-hidden">

        {/* Responsive Layout */}
        <div className="flex flex-col lg:flex-row mt-5 gap-2">

          {/* Main Content */}
          <div className="w-full lg:w-[70%]">
            {children}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[30%] max-w-full overflow-hidden">
            <div className="w-full overflow-y-auto">
              <SidebarSections />
            </div>
          </div>

        </div>

      </body>
    </html>
  );
}
