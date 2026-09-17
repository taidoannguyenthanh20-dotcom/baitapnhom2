import Link from "next/link";
import SectionTitle from "../../../components/SectionTitle";

export const metadata = {
  title: "Học vấn | Nguyen Thai Tuan Portfolio",
  description: "Thông tin học vấn của Nguyen Thai Tuan - N23DCPT054",
};

const educations = [
  {
    id: 1,
    school: "Học viện Công nghệ Bưu chính Viễn thông (PTIT)",
    major: "Công nghệ thông tin",
    degree: "Đại học",
    period: "2023 – Hiện tại",
    gpa: "3.2 / 4.0",
    status: "Đang học",
    description:
      "Theo học chương trình Công nghệ thông tin với các môn học chuyên sâu về lập trình, cơ sở dữ liệu, mạng máy tính, trí tuệ nhân tạo và phát triển phần mềm.",
    subjects: [
      "Lập trình Web",
      "Cấu trúc dữ liệu & Giải thuật",
      "Cơ sở dữ liệu",
      "Mạng máy tính",
      "Lập trình hướng đối tượng",
      "Trí tuệ nhân tạo",
    ],
    icon: "🏛️",
    color: "#6366f1",
  },
  {
    id: 2,
    school: "THPT Nguyễn Trãi",
    major: "Khoa học tự nhiên",
    degree: "Trung học Phổ thông",
    period: "2020 – 2023",
    gpa: "8.5 / 10",
    status: "Tốt nghiệp",
    description:
      "Tốt nghiệp với thành tích xuất sắc, đặc biệt nổi bật ở các môn Toán, Vật lý và Tin học. Tham gia nhiều cuộc thi học sinh giỏi cấp trường và cấp quận.",
    subjects: ["Toán học", "Vật lý", "Tin học", "Hóa học", "Tiếng Anh"],
    icon: "🏫",
    color: "#8b5cf6",
  },
];

export default function EducationPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div style={{ marginBottom: "32px", display: "flex", alignItems: "center", gap: "8px" }}>
          <Link href="/about" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "14px" }}>
            About
          </Link>
          <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>/</span>
          <span style={{ color: "#818cf8", fontSize: "14px", fontWeight: "500" }}>Education</span>
        </div>

        <SectionTitle
          label="Học vấn"
          title="Hành trình học tập 🎓"
          description="Quá trình học tập và các thành tích học thuật của tôi"
        />

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div
            style={{
              position: "absolute",
              left: "24px",
              top: "40px",
              bottom: "40px",
              width: "2px",
              background: "linear-gradient(to bottom, #6366f1, #8b5cf6)",
              opacity: 0.3,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {educations.map((edu, index) => (
              <div
                key={edu.id}
                className="fade-in-up"
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "24px",
                  alignItems: "flex-start",
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: `rgba(99, 102, 241, 0.15)`,
                    border: `2px solid ${edu.color}`,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    flexShrink: 0,
                    zIndex: 1,
                  }}
                >
                  {edu.icon}
                </div>

                {/* Card */}
                <div className="glass-card" style={{ padding: "28px" }}>
                  {/* Header */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "12px",
                      marginBottom: "16px",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: "20px",
                          fontWeight: "700",
                          color: "var(--text-primary)",
                          marginBottom: "4px",
                        }}
                      >
                        {edu.school}
                      </h3>
                      <p style={{ color: "#818cf8", fontWeight: "500", fontSize: "15px" }}>
                        {edu.degree} · {edu.major}
                      </p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "4px 12px",
                          background:
                            edu.status === "Đang học"
                              ? "rgba(52, 211, 153, 0.1)"
                              : "rgba(99, 102, 241, 0.1)",
                          color: edu.status === "Đang học" ? "#34d399" : "#818cf8",
                          borderRadius: "20px",
                          fontSize: "12px",
                          fontWeight: "600",
                          marginBottom: "4px",
                          display: "block",
                        }}
                      >
                        {edu.status}
                      </span>
                      <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>
                        📅 {edu.period}
                      </span>
                    </div>
                  </div>

                  {/* GPA */}
                  <div
                    style={{
                      display: "inline-block",
                      padding: "6px 14px",
                      background: "rgba(251, 191, 36, 0.1)",
                      border: "1px solid rgba(251, 191, 36, 0.2)",
                      borderRadius: "8px",
                      marginBottom: "16px",
                    }}
                  >
                    <span style={{ color: "#fbbf24", fontWeight: "600", fontSize: "14px" }}>
                      ⭐ GPA: {edu.gpa}
                    </span>
                  </div>

                  <p
                    style={{
                      color: "var(--text-secondary)",
                      lineHeight: "1.7",
                      fontSize: "14px",
                      marginBottom: "20px",
                    }}
                  >
                    {edu.description}
                  </p>

                  {/* Subjects */}
                  <div>
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
                      Môn học tiêu biểu:
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {edu.subjects.map((sub) => (
                        <span
                          key={sub}
                          style={{
                            padding: "4px 10px",
                            background: "rgba(99, 102, 241, 0.08)",
                            color: "var(--text-secondary)",
                            borderRadius: "6px",
                            fontSize: "12px",
                            border: "1px solid rgba(99, 102, 241, 0.1)",
                          }}
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
