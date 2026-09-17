import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-4">
      <h1 className="text-6xl font-extrabold text-indigo-600">404</h1>
      <h2 className="text-2xl font-bold text-slate-800">Trang không tồn tại</h2>
      <p className="text-slate-600">Địa chỉ URL bạn yêu cầu không tìm thấy.</p>
      <Link href="/" className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
        Trở về trang chủ
      </Link>
    </div>
  );
}
