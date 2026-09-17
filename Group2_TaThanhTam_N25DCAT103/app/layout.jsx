import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: {
    default: "Tạ Thanh Tâm | Portfolio & CV",
    template: "%s | Tạ Thanh Tâm",
  },
  description: "Portfolio cá nhân của Tạ Thanh Tâm, mã sinh viên N25DCAT103.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:p-4">
          Đến nội dung chính
        </a>
        <Navbar />
        <main id="main-content" className="mx-auto w-full max-w-5xl flex-1 px-5 py-10 sm:px-8 sm:py-14">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
