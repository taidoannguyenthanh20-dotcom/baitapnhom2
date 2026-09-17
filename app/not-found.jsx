import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="container-custom fade-in-up"
        style={{ textAlign: "center" }}
      >
        {/* 404 Number */}
        <div
          style={{
            fontSize: "clamp(80px, 20vw, 180px)",
            fontWeight: "900",
            lineHeight: "1",
            marginBottom: "24px",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </div>

        <div
          style={{ fontSize: "48px", marginBottom: "20px" }}
          className="animate-float"
        >
          🚀
        </div>

        <h1
          style={{
            fontSize: "clamp(20px, 4vw, 32px)",
            fontWeight: "700",
            color: "var(--text-primary)",
            marginBottom: "12px",
          }}
        >
          Trang không tồn tại!
        </h1>

        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "16px",
            maxWidth: "420px",
            margin: "0 auto 32px",
            lineHeight: "1.7",
          }}
        >
          Có vẻ như bạn đã lạc vào một vũ trụ không tồn tại 🌌 Đường dẫn bạn tìm kiếm không có ở đây.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn-primary">
            🏠 Về trang chủ
          </Link>
          <Link href="/projects" className="btn-outline">
            🗂️ Xem dự án
          </Link>
        </div>
      </div>
    </div>
  );
}
