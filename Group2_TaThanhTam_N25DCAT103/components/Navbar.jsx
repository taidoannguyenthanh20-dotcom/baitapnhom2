import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/docs", label: "Docs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-blue-700">
          Tạ Thanh Tâm
        </Link>
        <nav aria-label="Điều hướng chính" className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-slate-600 hover:text-blue-700">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
