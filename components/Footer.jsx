import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[#f5f2ee]">
      <div className="mx-auto max-w-6xl px-6 py-10">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <div>
            <Link
              href="/"
              className="text-lg font-bold"
            >
              Bảo Diệp<span className="text-[var(--primary)]">.</span>
            </Link>

            <p className="mt-2 text-sm text-[var(--muted)]">
              Multimedia Technology Student
            </p>
          </div>

          <div className="flex gap-5 text-sm text-[var(--muted)]">
            <a
              href="mailto:baodieplethi@gmail.com"
              className="transition-colors hover:text-[var(--primary)]"
            >
              Email
            </a>

            <a
              href="https://github.com/BaoDiep0501"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--primary)]"
            >
              GitHub
            </a>

            <a
              href="https://facebook.com/baodiep.lethi"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--primary)]"
            >
              Facebook
            </a>
          </div>

        </div>

        <div className="mt-8 border-t border-[var(--border)] pt-6 text-center text-xs text-[var(--muted)]">
          © 2026 Lê Thị Bảo Diệp. All rights reserved.
        </div>

      </div>
    </footer>
  );
}