import "./globals.css";

export const metadata = {
  title: "Nguyen Thai Tuan | Developer Portfolio",
  description:
    "Portfolio cá nhân của Nguyen Thai Tuan - N23DCPT054, sinh viên ngành Công nghệ thông tin tại PTIT. Full-stack developer đam mê xây dựng ứng dụng web hiện đại.",
  keywords: ["portfolio", "developer", "Next.js", "React", "web development"],
  authors: [{ name: "Nguyen Thai Tuan" }],
};

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main style={{ minHeight: "calc(100vh - 140px)" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
