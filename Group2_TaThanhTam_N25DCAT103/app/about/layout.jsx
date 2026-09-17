import Link from "next/link";

export default function AboutLayout({ children }) {
  return (
    <div>
      <nav aria-label="Thông tin cá nhân" className="mb-8 flex flex-wrap gap-3 text-sm font-medium">
        <Link href="/about" className="rounded-lg border border-slate-200 bg-white px-4 py-2 hover:text-blue-700">Giới thiệu</Link>
        <Link href="/about/education" className="rounded-lg border border-slate-200 bg-white px-4 py-2 hover:text-blue-700">Học vấn</Link>
        <Link href="/about/experience" className="rounded-lg border border-slate-200 bg-white px-4 py-2 hover:text-blue-700">Kinh nghiệm</Link>
      </nav>
      {children}
    </div>
  );
}
