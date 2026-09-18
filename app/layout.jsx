import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Developer Portfolio & CV",
  description: "Trang thông tin cá nhân và dự án",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="max-w-5xl mx-auto p-6 w-full flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}