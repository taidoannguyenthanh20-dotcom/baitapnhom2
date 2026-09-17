import Link from "next/link";
import SectionTitle from "../../../components/SectionTitle";

export const metadata = {
  title: "Kinh nghiệm | Nguyen Thai Tuan Portfolio",
  description: "Kinh nghiệm và hoạt động của Nguyen Thai Tuan - N23DCPT054",
};

const experiences = [
  {
    id: 1,
    role: "Lập trình viên Freelance",
    company: "Tự do",
    type: "Freelance",
    period: "2024 – Hiện tại",
    status: "Hiện tại",
    description:
      "Nhận các dự án web nhỏ từ khách hàng cá nhân và doanh nghiệp. Xây dựng website giới thiệu sản phẩm, landing page và ứng dụng web đơn giản bằng HTML, CSS, JavaScript và React.",
    achievements: [
      "Hoàn thành 3+ dự án cho khách hàng",
      "Cải thiện kỹ năng giao tiếp và làm việc với khách",
      "Học cách quản lý thời gian và deadline",
    ],
    tech: ["React", "HTML", "CSS", "JavaScript"],
    icon: "💻",
    color: "#6366f1",
  },
  {
    id: 2,
    role: "Member - CLB Lập trình PTIT",
    company: "Câu lạc bộ Lập trình - PTIT",
    type: "Hoạt động SV",
    period: "09/2023 – Hiện tại",
    status: "Hiện tại",
    description:
      "Tham gia CLB Lập trình của trường, tham dự các buổi workshop, hackathon nội bộ và các cuộc thi lập trình. Cùng nhau học hỏi và chia sẻ kiến thức về web development và các công nghệ mới.",
    achievements: [
      "Tham gia 5+ hackathon nội bộ",
      "Mentor junior members về web cơ bản",
      "Tham gia cuộc thi lập trình cấp trường",
    ],
    tech: ["JavaScript", "Python", "Git"],
    icon: "🏆",
    color: "#8b5cf6",
  },
  {
    id: 3,
    role: "Học viên - Khóa học Web Development",
    company: "Udemy / FreeCodeCamp",
    type: "Tự học",
    period: "2023 – 2024",
    status: "Hoàn thành",
    description:
      "Hoàn thành các khóa học online về phát triển web. Học từ cơ bản đến nâng cao về HTML, CSS, JavaScript, React và Next.js. Áp dụng kiến thức vào các project thực tế.",
    achievements: [
      "Hoàn thành 4 khóa học web development",
      "Xây dựng 10+ project thực hành",
      "Đạt certificate từ FreeCodeCamp",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    icon: "📚",
    color: "#10b981",
  },
];

export default function ExperiencePage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div style={{ marginBottom: "32px", display: "flex", alignItems: "center", gap: "8px" }}>
          <Link href="/about" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "14px" }}>
            About
          </Link>
          <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>/</span>
          <span style={{ color: "#818cf8", fontSize: "14px", fontWeight: "500" }}>Experience</span>
        </div>

        <SectionTitle
          label="Kinh nghiệm"
          title="Hành trình thực tế 💼"
          description="Các hoạt động, dự án và kinh nghiệm tôi đã tích lũy trong quá trình phát triển"
        />

        {/* Experience Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="glass-card fade-in-up"
              style={{
                padding: "32px",
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "16px",
                  marginBottom: "20px",
                }}
              >
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      background: "rgba(99, 102, 241, 0.12)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      flexShrink: 0,
                    }}
                  >
                    {exp.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "var(--text-primary)",
                        marginBottom: "4px",
                      }}
                    >
                      {exp.role}
                    </h3>
                    <p style={{ color: "#818cf8", fontWeight: "500", fontSize: "14px" }}>
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
                  <span
                    style={{
                      padding: "4px 12px",
                      background:
                        exp.status === "Hiện tại"
                          ? "rgba(52, 211, 153, 0.1)"
                          : "rgba(99, 102, 241, 0.1)",
                      color: exp.status === "Hiện tại" ? "#34d399" : "#818cf8",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    {exp.status}
                  </span>
                  <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>
                    📅 {exp.period}
                  </span>
                  <span
                    style={{
                      padding: "3px 10px",
                      background: "rgba(139, 92, 246, 0.1)",
                      color: "#a78bfa",
                      borderRadius: "6px",
                      fontSize: "11px",
                      fontWeight: "600",
                    }}
                  >
                    {exp.type}
                  </span>
                </div>
              </div>

              <p
                style={{
                  color: "var(--text-secondary)",
                  lineHeight: "1.7",
                  fontSize: "14px",
                  marginBottom: "20px",
                }}
              >
                {exp.description}
              </p>

              {/* Achievements */}
              <div style={{ marginBottom: "20px" }}>
                <p
                  style={{
                    fontSize: "12px",
                    color: "var(--text-muted)",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                    letterSpacing: "0.5px",
                  }}
                >
                  🏅 Thành tích:
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {exp.achievements.map((ach) => (
                    <li
                      key={ach}
                      style={{
                        fontSize: "14px",
                        color: "var(--text-secondary)",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                      }}
                    >
                      <span style={{ color: "#34d399", flexShrink: 0 }}>✓</span>
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "4px 10px",
                      background: "rgba(99, 102, 241, 0.1)",
                      color: "#818cf8",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "500",
                      border: "1px solid rgba(99, 102, 241, 0.15)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Back link */}
        <div style={{ marginTop: "48px", textAlign: "center" }}>
          <Link href="/about" className="btn-outline">
            ← Quay lại About
          </Link>
        </div>
      </div>
    </div>
  );
}