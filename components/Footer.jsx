import Link from "next/link";
import { Link as LinkIcon, GitBranch, Code2 } from "lucide-react";
import { siteInfo } from "@/data/portfolioData";

// Render social icons with text since lucide doesn't have brand icons in v1.47
const SocialLink = ({ href, label, id }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    id={id}
    className="footer-link"
    aria-label={label}
    style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13 }}
  >
    <LinkIcon size={13} />
    {label}
  </a>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-inner">
          {/* Left */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <Code2 size={14} style={{ color: "var(--text-muted)" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--text-secondary)" }}>
                {siteInfo.displayName}
              </span>
            </div>
            <p className="footer-copy">
              © {year} — Built with Next.js &amp; Tailwind CSS
            </p>
          </div>

          {/* Right */}
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            {/* Social text links */}
            <div style={{ display: "flex", gap: 16 }}>
              <SocialLink href={siteInfo.social.github} label="GitHub" id="footer-social-github" />
              <SocialLink href={siteInfo.social.linkedin} label="LinkedIn" id="footer-social-linkedin" />
              <SocialLink href={siteInfo.social.facebook} label="Facebook" id="footer-social-facebook" />
            </div>

            {/* Nav links */}
            <div className="footer-links">
              <Link href="/contact" className="footer-link" id="footer-contact-link">Contact</Link>
              <Link href="/docs/react" className="footer-link" id="footer-docs-link">Docs</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
