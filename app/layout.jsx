import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Developer Portfolio & CV",
  description: "Xây dựng bằng Next.js App Router và Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="bg-slate-50 text-slate-800 min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
