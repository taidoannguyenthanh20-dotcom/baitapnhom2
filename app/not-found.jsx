import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">404 - Không tìm thấy trang</h2>
      <p className="text-gray-600 mb-6">Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>
      <Link href="/" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Về trang chủ
      </Link>
    </div>
  );
}
