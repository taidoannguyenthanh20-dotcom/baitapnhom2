import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-blue-500/10 border border-blue-500/20 text-4xl shadow-xl shadow-blue-500/10 mb-2">
          🔍
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 uppercase tracking-wider">
            404 Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white">
            Trang Không Tồn Tại
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Đường dẫn bạn vừa truy cập không tồn tại hoặc đã được di chuyển sang
            một vị trí khác.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all"
          >
            Quay về Trang Chủ
          </Link>
          <Link
            href="/projects"
            className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-sm border border-slate-700 transition-all"
          >
            Xem Dự Án
          </Link>
        </div>
      </div>
    </div>
  );
}
