import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata = {
  title: {
    default: "Lâm Quốc Toàn | Developer Portfolio",
    template: "%s | Lâm Quốc Toàn",
  },
  description:
    "Developer Portfolio của Lâm Quốc Toàn: giới thiệu bản thân, học vấn, kinh nghiệm, kỹ năng, dự án và liên hệ. Xây dựng bằng Next.js App Router và Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" data-scroll-behavior="smooth">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
