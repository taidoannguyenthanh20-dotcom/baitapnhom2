import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow max-w-6xl mx-auto w-full p-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
