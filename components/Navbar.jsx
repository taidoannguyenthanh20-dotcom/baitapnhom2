import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-6 p-4 bg-gray-800 text-white font-semibold shadow-md">
      <Link href="/" className="hover:text-blue-400">Home</Link>
      <Link href="/about" className="hover:text-blue-400">About</Link>
      <Link href="/skills" className="hover:text-blue-400">Skills</Link>
      <Link href="/projects" className="hover:text-blue-400">Projects</Link>
      <Link href="/contact" className="hover:text-blue-400">Contact</Link>
    </nav>
  );
}