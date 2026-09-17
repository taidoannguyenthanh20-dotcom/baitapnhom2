"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/docs/react", label: "Docs" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <style>{`
        .nav-link {
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.2s ease;
          display: inline-block;
        }
        .nav-link:hover, .nav-link.active {
          color: #e2e8f0;
          background: rgba(99, 102, 241, 0.1);
        }
        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 20px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          margin-left: 8px;
        }
        .nav-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
        }
        .logo-link {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
        }
      `}</style>

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(10, 10, 15, 0.85)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(99, 102, 241, 0.15)",
        }}
      >
        <div
          className="container-custom"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
          }}
        >
          {/* Logo */}
          <Link href="/" className="logo-link">
            <div
              style={{
                width: "36px",
                height: "36px",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "800",
                fontSize: "16px",
                color: "white",
              }}
            >
              T
            </div>
            <span
              style={{
                fontWeight: "700",
                fontSize: "18px",
                color: "#e2e8f0",
              }}
            >
              <span className="gradient-text">Portfolio</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link${pathname === link.href ? " active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="nav-cta">
              Liên hệ
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
