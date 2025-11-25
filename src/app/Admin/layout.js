import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Navbar from "@/app/Admin/components/navbar";
import "@/app/globals.css";

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

