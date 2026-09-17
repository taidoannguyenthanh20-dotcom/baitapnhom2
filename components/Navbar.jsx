import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <span className="font-bold text-xl text-blue-600">My Portfolio</span>
      <div className="flex gap-6 font-medium">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/about" className="hover:text-blue-600">About</Link>
        <Link href="/skills" className="hover:text-blue-600">Skills</Link>
        <Link href="/projects" className="hover:text-blue-600">Projects</Link>
        <Link href="/contact" className="hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  );
}