import Link from "next/link";
import Avatar from "@/components/Avatar";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-[#09090b] text-zinc-400 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <div className="flex items-center gap-3 text-center md:text-left">
          <Avatar size="nav" />
          <div className="flex flex-col">
            <p className="font-semibold text-zinc-200">
              Phùng Anh Lực — FullStack Developer
            </p>
            <p className="text-zinc-500 text-xs">
              © {new Date().getFullYear()} Phùng Anh Lực. Bài tập cá nhân Next.js.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-zinc-400 font-medium">
          <Link href="/" className="hover:text-zinc-200 transition-colors">
            Trang chủ
          </Link>
          <Link href="/about" className="hover:text-zinc-200 transition-colors">
            Giới thiệu
          </Link>
          <Link href="/projects" className="hover:text-zinc-200 transition-colors">
            Dự án
          </Link>
          <Link href="/contact" className="hover:text-zinc-200 transition-colors">
            Liên hệ
          </Link>
          <a
            href="https://github.com/Lucdpt3105/baitapnhom2.git"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors font-semibold text-blue-500"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </footer>
  );
}
