"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { siteInfo } from "@/data/portfolioData";

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
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="navbar" id="navbar">
      <div className="container">
        <div className="navbar-inner">
          {/* Logo */}
          <Link href="/" className="navbar-logo" id="nav-logo">
            <Code2 size={14} style={{ display: "inline", marginRight: 8, verticalAlign: "middle" }} />
            {siteInfo.displayName}
            <span>.dev</span>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation">
            <ul className="navbar-nav">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    id={`nav-${link.label.toLowerCase()}`}
                    className={`navbar-link ${isActive(link.href) ? "active" : ""}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile toggle */}
          <button
            className="navbar-mobile-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            id="nav-mobile-toggle"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar-mobile-menu ${mobileOpen ? "open" : ""}`} id="nav-mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`navbar-link ${isActive(link.href) ? "active" : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
