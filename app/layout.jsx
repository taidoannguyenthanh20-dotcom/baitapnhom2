import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css"; //

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        {/* Navbar dùng chung */}
        <Navbar />
        
        {/* Nội dung của từng trang page.jsx sẽ được thay thế vào {children} */}
        <main className="flex-grow max-w-5xl mx-auto w-full p-8">
          {children}
        </main> 
        
        {/* Footer dùng chung */}
        <Footer />
      </body>
    </html>
  );
}
