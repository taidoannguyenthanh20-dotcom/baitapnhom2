import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';

export default function Home() {
  return (
    <div className="py-12 flex flex-col items-center text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">Xin chào, tôi là Developer</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl">
        Chuyên xây dựng các ứng dụng web tối ưu với React và Next.js.
      </p>
      
      <div className="flex gap-4">
        <Link href="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
          Xem Dự án
        </Link>
        <Link href="/contact" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50">
          Liên hệ ngay
        </Link>
      </div>
    </div>
  );
}
