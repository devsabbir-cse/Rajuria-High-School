import "@/app/globals.css";
import SidebarSections from "../../globalComponents/SidebarSections";

export const metadata = {
  title: "রাজুরিয়া উচ্চ বিদ্যালয়",
  description: "রাজুরিয়া উচ্চ বিদ্যালয়",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-[1350px] mx-auto px-2 bg-gray-100 shadow-2xl text-gray-800 font-sans py-2 mb-5 "  >  
            <div className="flex justify-between mt-5 gap-x-3">
               <div className="w-full">
                {children}
              </div>
              <div>
                <SidebarSections />
              </div> 
            </div>
       
      </body>
    </html>
  );
}
