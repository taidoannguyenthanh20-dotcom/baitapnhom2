import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        .footer-link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: #6366f1;
        }
        .social-btn {
          width: 44px;
          height: 44px;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .social-btn:hover {
          background: rgba(99, 102, 241, 0.2);
          transform: translateY(-2px);
        }
      `}</style>

      <footer
        style={{
          background: "var(--bg-secondary)",
          borderTop: "1px solid rgba(99, 102, 241, 0.15)",
          padding: "40px 0 24px",
          marginTop: "auto",
        }}
      >
        <div className="container-custom">
          {/* Top Section */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "32px",
              marginBottom: "32px",
            }}
          >
            {/* Brand */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "12px",
                }}
              >
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
              </div>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "14px",
                  maxWidth: "240px",
                }}
              >
                Full-stack developer đam mê xây dựng ứng dụng web hiện đại và
                sáng tạo.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                style={{
                  color: "var(--text-primary)",
                  fontWeight: "600",
                  fontSize: "14px",
                  marginBottom: "16px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Điều hướng
              </h4>
              <nav
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="footer-link"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4
                style={{
                  color: "var(--text-primary)",
                  fontWeight: "600",
                  fontSize: "14px",
                  marginBottom: "16px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Liên hệ
              </h4>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>
                  📧 lucksnow1108@gmail.com
                </span>
                <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>
                  🎓 Học Viện Công Nghệ Bưu Chính Viễn Thông
                </span>
                <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>
                  📍 TP.Hồ Chí Minh, Việt Nam
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              borderTop: "1px solid rgba(99, 102, 241, 0.1)",
              paddingTop: "20px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <p style={{ color: "var(--text-muted)", fontSize: "13px" }}>
              © {currentYear} Nguyen Thai Tuan. All rights reserved.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "13px" }}>
              Built with{" "}
              <span className="gradient-text" style={{ fontWeight: "600" }}>
                Next.js
              </span>{" "}
              &amp;{" "}
              <span className="gradient-text" style={{ fontWeight: "600" }}>
                Tailwind CSS
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
