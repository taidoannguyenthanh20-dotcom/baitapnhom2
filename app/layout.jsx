import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Phùng Anh Lực — FullStack Developer Portfolio",
  description: "Developer Portfolio & CV cá nhân của Phùng Anh Lực xây dựng bằng Next.js App Router.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className="dark">
      <body className="bg-[#09090b] text-zinc-100 antialiased min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
