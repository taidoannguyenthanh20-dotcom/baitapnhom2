import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'Developer Portfolio',
  description: 'CV và Portfolio cá nhân xây dựng bằng Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="bg-gray-50 text-gray-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto p-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
