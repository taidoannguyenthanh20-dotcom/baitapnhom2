import Link from "next/link";

export const metadata = {
  title: "404 – Page Not Found",
};

export default function NotFound() {
  return (
    <div
      id="not-found-page"
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 24,
        textAlign: "center",
        padding: "60px 24px",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(80px, 15vw, 140px)",
          fontWeight: 900,
          color: "var(--bg-card)",
          lineHeight: 1,
          letterSpacing: "-0.05em",
          userSelect: "none",
        }}
      >
        404
      </p>
      <h1 style={{ fontSize: "clamp(22px, 4vw, 36px)", fontWeight: 800, letterSpacing: "-0.02em", marginTop: -20 }}>
        Trang không tồn tại
      </h1>
      <p style={{ color: "var(--text-secondary)", maxWidth: 400, fontSize: 15 }}>
        Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
      </p>
      <Link href="/" className="btn btn-primary" id="not-found-home-btn">
        Về trang chủ
      </Link>
    </div>
  );
}
