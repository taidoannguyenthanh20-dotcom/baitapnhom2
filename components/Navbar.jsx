import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Docs", href: "/docs/react" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="group block">
          <span className="block text-lg leading-tight font-bold tracking-tight text-slate-900 transition group-hover:text-blue-600">
            Lâm Quốc Toàn
          </span>
          <span className="mt-0.5 block text-[11px] font-medium tracking-[0.16em] text-slate-400 uppercase">
            Developer Portfolio
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.name}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary btn-sm">
            Contact
          </Link>
        </nav>

        <div className="md:hidden">
          <Link href="/contact" className="btn-primary btn-sm">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
