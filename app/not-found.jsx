import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-20 space-y-4">
      <h1 className="text-4xl font-bold text-red-500">404 - Không tìm thấy trang</h1>
      <p className="text-gray-600">Đường dẫn bạn truy cập không tồn tại.</p>
      <Link href="/" className="inline-block px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
        Về Trang Chủ
      </Link>
    </div>
  );
}