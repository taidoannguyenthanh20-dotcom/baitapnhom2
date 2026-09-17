import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Chào mừng đến với Website Portfolio của tôi</h1>
      <p className="text-lg text-gray-600 mb-8">Trang web giới thiệu cá nhân được xây dựng bằng Next.js và Tailwind CSS.</p>
      <div className="flex gap-4 justify-center">
        <Link href="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium">
          Xem dự án
        </Link>
        <Link href="/contact" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 font-medium">
          Liên hệ
        </Link>
      </div>
    </div>
  );
}