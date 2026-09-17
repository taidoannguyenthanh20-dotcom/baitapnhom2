import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950/60 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg text-white mb-3">
              <span className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center text-white text-xs font-black">
                TD
              </span>
              <span>Bùi Thành Đạt</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Sinh viên & Lập trình viên Fullstack tiềm năng, đam mê phát triển
              các ứng dụng Web hiện đại với Next.js và React.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3">
              Điều Hướng Nhanh
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-400 transition-colors"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  Giới thiệu & Học vấn
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="hover:text-blue-400 transition-colors"
                >
                  Kỹ năng chuyên môn
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-blue-400 transition-colors"
                >
                  Dự án đã thực hiện
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/react"
                  className="hover:text-blue-400 transition-colors"
                >
                  Tài liệu học tập
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3">
              Kết Nối
            </h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p className="flex items-center gap-2">
                <span className="text-slate-500">Email:</span>
                <span className="text-slate-200">datbui@example.com</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-slate-500">GitHub:</span>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  github.com/game-dev-newbie
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-slate-500">Vị trí:</span>
                <span className="text-slate-200">Hồ Chí Minh, Việt Nam</span>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {currentYear} Bùi Thành Đạt. Xây dựng bằng Next.js App Router &
            Tailwind CSS.
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="hover:text-slate-300 transition-colors"
            >
              Liên hệ
            </Link>
            <span>•</span>
            <Link
              href="/docs/react/components"
              className="hover:text-slate-300 transition-colors"
            >
              React Docs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
