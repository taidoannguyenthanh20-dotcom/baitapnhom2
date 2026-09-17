import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Thạch Gia Uy - Developer Portfolio & CV",
  description: "Website cá nhân giới thiệu kỹ năng, dự án và kinh nghiệm lập trình.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 antialiased">
        <Navbar />
        <main className="flex-1 max-w-5xl w-full mx-auto p-4 md:p-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}