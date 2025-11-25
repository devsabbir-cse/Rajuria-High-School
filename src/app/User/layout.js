import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Navbar from "@/app/components/navbar";
import "@/app/globals.css";
import { ToastContainer } from 'react-toastify';
import { GlobalDataProvider } from "@/app/context/GlobalDataContext";
import HeaderNavbar from "../components/HeaderNavbar";

export const metadata = {
  title: "রাজুরিয়া উচ্চ বিদ্যালয়",
  description: "রাজুরিয়া উচ্চ বিদ্যালয়",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >  
          <Header />
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}

