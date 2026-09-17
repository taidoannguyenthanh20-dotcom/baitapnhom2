import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-6">
      <div className="text-6xl font-black text-blue-500 font-mono">404</div>
      <h1 className="text-3xl font-bold text-zinc-100">
        Không tìm thấy trang yêu cầu
      </h1>
      <p className="text-zinc-400 text-sm max-w-md">
        Trang bạn đang truy cập không tồn tại hoặc đã được di chuyển.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/25"
      >
        Trở về Trang chủ
      </Link>
    </div>
  );
}
