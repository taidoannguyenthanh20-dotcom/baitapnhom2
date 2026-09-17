import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Bùi Thành Đạt | Developer Portfolio & CV",
  description:
    "Website giới thiệu thông tin cá nhân, học vấn, kinh nghiệm, kỹ năng và các dự án xây dựng bằng Next.js App Router & Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="bg-[#0b0f19] text-slate-100 antialiased min-h-screen flex flex-col selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
