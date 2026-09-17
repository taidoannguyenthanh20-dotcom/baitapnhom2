import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-xl text-blue-600 tracking-tight">
          UyPortfolio<span className="text-gray-900">.dev</span>
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-600 transition">Trang chủ</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/skills" className="hover:text-blue-600 transition">Skills</Link>
          <Link href="/projects" className="hover:text-blue-600 transition">Projects</Link>
          <Link href="/docs/react/overview" className="hover:text-blue-600 transition">Docs</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}