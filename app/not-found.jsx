import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h2 className="text-4xl font-bold mb-2">404</h2>
      <p className="text-xl text-gray-600 mb-6">Không tìm thấy trang bạn yêu cầu.</p>
      <Link href="/" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Về trang chủ
      </Link>
    </div>
  );
}
