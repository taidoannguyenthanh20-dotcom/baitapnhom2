import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-indigo-600 hover:opacity-90 transition-opacity">
          DevPortfolio
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium text-slate-700">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-indigo-600 transition-colors">About</Link>
          <Link href="/skills" className="hover:text-indigo-600 transition-colors">Skills</Link>
          <Link href="/projects" className="hover:text-indigo-600 transition-colors">Projects</Link>
          <Link href="/docs/react" className="hover:text-indigo-600 transition-colors">Docs</Link>
          <Link 
            href="/contact" 
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
