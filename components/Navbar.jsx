import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[#faf9f7]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[var(--foreground)]"
        >
          Bảo Diệp<span className="text-[var(--primary)]">.</span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link
            href="/"
            className="transition-colors hover:text-[var(--primary)]"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="transition-colors hover:text-[var(--primary)]"
          >
            About
          </Link>

          <Link
            href="/skills"
            className="transition-colors hover:text-[var(--primary)]"
          >
            Skills
          </Link>

          <Link
            href="/projects"
            className="transition-colors hover:text-[var(--primary)]"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="rounded-full bg-[var(--foreground)] px-5 py-2.5 text-white transition-all hover:bg-[var(--primary)]"
          >
            Contact
          </Link>
        </div>

      </nav>
    </header>
  );
}