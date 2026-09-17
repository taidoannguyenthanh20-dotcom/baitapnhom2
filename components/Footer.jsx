import Link from "next/link";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-slate-900">Lâm Quốc Toàn</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
            Sinh viên Công nghệ đa phương tiện, định hướng phát triển ứng dụng
            Web với React và Next.js.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="label">Navigation</p>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="nav-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="label">Contact</p>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <p>
              Email:{" "}
              <a
                href="mailto:n23dcpt108@student.ptithcm.edu.vn"
                className="font-medium break-all text-blue-600 hover:text-blue-800"
              >
                n23dcpt108@student.ptithcm.edu.vn
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 hover:text-blue-800"
              >
                github.com
              </a>
            </p>
            <p className="text-slate-500">Hồ Chí Minh, Việt Nam</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Lâm Quốc Toàn. All rights reserved.</p>
          <p>Built with Next.js App Router + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
