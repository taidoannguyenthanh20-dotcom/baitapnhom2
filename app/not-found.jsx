import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-16 space-y-4">
      <h1 className="text-6xl font-extrabold text-blue-600">404</h1>
      <h2 className="text-2xl font-bold">Trang không tồn tại</h2>
      <p className="text-gray-600">Đường dẫn bạn truy cập không hợp lệ hoặc đã bị di chuyển.</p>
      <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 font-medium">
        Trở về Trang chủ
      </Link>
    </div>
  );
}