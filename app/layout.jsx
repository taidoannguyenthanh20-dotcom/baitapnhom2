import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteInfo } from "@/data/portfolioData";

export const metadata = {
  title: {
    default: `${siteInfo.displayName} — ${siteInfo.role}`,
    template: `%s | ${siteInfo.displayName}`,
  },
  description: siteInfo.intro,
  keywords: ["developer", "portfolio", "next.js", "react", "web development"],
  authors: [{ name: siteInfo.name }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main id="main-content" style={{ position: "relative", zIndex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
