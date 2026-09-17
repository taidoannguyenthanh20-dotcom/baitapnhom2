import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-blue-600">DevPortfolio</Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/skills" className="hover:text-blue-500">Skills</Link>
          <Link href="/projects" className="hover:text-blue-500">Projects</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
