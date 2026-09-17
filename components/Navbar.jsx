import Link from "next/link";
import Avatar from "@/components/Avatar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#09090b]/80 border-b border-zinc-800/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Avatar size="nav" />
          <div className="flex flex-col">
            <span className="font-bold text-zinc-100 group-hover:text-blue-400 transition-colors text-sm">
              Phùng Anh Lực
            </span>
            <span className="text-[10px] text-zinc-400 font-medium tracking-wide">
              FullStack Dev
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-zinc-400">
          <Link
            href="/"
            className="px-3 py-1.5 rounded-md hover:text-zinc-100 hover:bg-zinc-800/50 transition-all"
          >
            Trang chủ
          </Link>
          <Link
            href="/about"
            className="px-3 py-1.5 rounded-md hover:text-zinc-100 hover:bg-zinc-800/50 transition-all"
          >
            Giới thiệu
          </Link>
          <Link
            href="/skills"
            className="px-3 py-1.5 rounded-md hover:text-zinc-100 hover:bg-zinc-800/50 transition-all"
          >
            Kỹ năng
          </Link>
          <Link
            href="/projects"
            className="px-3 py-1.5 rounded-md hover:text-zinc-100 hover:bg-zinc-800/50 transition-all"
          >
            Dự án
          </Link>
          <Link
            href="/docs/react"
            className="px-3 py-1.5 rounded-md hover:text-zinc-100 hover:bg-zinc-800/50 transition-all"
          >
            Tài liệu (Docs)
          </Link>
          <Link
            href="/contact"
            className="ml-2 px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-sm shadow-blue-500/20"
          >
            Liên hệ
          </Link>
        </nav>

        {/* Mobile Navigation button / link */}
        <div className="md:hidden flex items-center gap-3">
          <Link
            href="/contact"
            className="px-3 py-1 text-xs rounded-full bg-blue-600 text-white font-medium"
          >
            Liên hệ
          </Link>
        </div>
      </div>
    </header>
  );
}
