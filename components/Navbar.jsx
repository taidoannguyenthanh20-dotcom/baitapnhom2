import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-blue-600">DevPortfolio</Link>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/skills" className="hover:text-blue-600">Skills</Link>
          <Link href="/projects" className="hover:text-blue-600">Projects</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
