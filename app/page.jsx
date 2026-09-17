import Link from "next/link";
import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import skills from "../data/skills";
import projects from "../data/projects";

export default function HomePage() {
  const featuredSkills = skills.slice(0, 4);
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section
        style={{
          minHeight: "88vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "5%",
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <div className="container-custom" style={{ width: "100%" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "48px",
              alignItems: "center",
            }}
          >
            {/* Left Content */}
            <div className="fade-in-up">
              {/* Badge */}
              <div style={{ marginBottom: "20px" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 16px",
                    background: "rgba(99, 102, 241, 0.1)",
                    border: "1px solid rgba(99, 102, 241, 0.25)",
                    borderRadius: "20px",
                    fontSize: "13px",
                    color: "#818cf8",
                    fontWeight: "500",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      background: "#34d399",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                  />
                  Sẵn sàng hợp tác
                </span>
              </div>

              {/* Name */}
              <h1
                style={{
                  fontSize: "clamp(36px, 6vw, 68px)",
                  fontWeight: "900",
                  lineHeight: "1.1",
                  marginBottom: "16px",
                  color: "var(--text-primary)",
                }}
              >
                Xin chào, tôi là{" "}
                <span className="gradient-text">Nguyễn Thái Tuấn</span>
              </h1>

              {/* Role */}
              <p
                style={{
                  fontSize: "clamp(18px, 2.5vw, 24px)",
                  color: "var(--text-secondary)",
                  fontWeight: "500",
                  marginBottom: "20px",
                }}
              >
                🚀 Full-Stack Developer & IT Student
              </p>

              {/* Description */}
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--text-muted)",
                  maxWidth: "560px",
                  lineHeight: "1.8",
                  marginBottom: "36px",
                }}
              >
                Sinh viên Công Nghệ Đa Phương Tiện tại{" "}
                <strong style={{ color: "#818cf8" }}>PTIT</strong>.
                Đam mê xây dựng ứng dụng web hiện đại, học hỏi công nghệ mới và
                tạo ra những trải nghiệm số tuyệt vời.
              </p>

              {/* CTA Buttons */}
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link href="/projects" className="btn-primary">
                  🗂️ Xem dự án
                </Link>
                <Link href="/contact" className="btn-outline">
                  📩 Liên hệ ngay
                </Link>
                <Link href="/about" className="btn-outline">
                  👤 Về tôi
                </Link>
              </div>

              {/* Stats */}
              <div
                style={{
                  display: "flex",
                  gap: "32px",
                  marginTop: "48px",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { num: "5+", label: "Dự án" },
                  { num: "10+", label: "Kỹ năng" },
                  { num: "2+", label: "Năm học" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div
                      style={{
                        fontSize: "28px",
                        fontWeight: "800",
                        color: "#6366f1",
                      }}
                    >
                      {stat.num}
                    </div>
                    <div
                      style={{ fontSize: "13px", color: "var(--text-muted)" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Avatar Placeholder */}
            <div
              className="animate-float"
              style={{
                width: "280px",
                height: "280px",
                background:
                  "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2))",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "100px",
                border: "2px solid rgba(99, 102, 241, 0.3)",
                flexShrink: 0,
              }}
            >
              <img
                src="/Image/avt.jpg"
                alt="Nguyen Thai Tuan"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED SKILLS SECTION ===== */}
      <section
        className="section-padding"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="container-custom">
          <SectionTitle
            label="Kỹ năng nổi bật"
            title="Công nghệ tôi sử dụng"
            description="Những kỹ năng và công nghệ tôi đang tích cực học và áp dụng trong các dự án"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            {featuredSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/skills" className="btn-outline">
              Xem tất cả kỹ năng →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS SECTION ===== */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            label="Dự án tiêu biểu"
            title="Những gì tôi đã xây dựng"
            description="Một số dự án nổi bật tôi đã thực hiện trong quá trình học tập và phát triển bản thân"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
              marginBottom: "40px",
            }}
          >
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/projects" className="btn-primary">
              Xem tất cả dự án →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section
        style={{
          padding: "80px 0",
          background:
            "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.15))",
          borderTop: "1px solid rgba(99, 102, 241, 0.15)",
          borderBottom: "1px solid rgba(99, 102, 241, 0.15)",
        }}
      >
        <div className="container-custom" style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 40px)",
              fontWeight: "800",
              color: "var(--text-primary)",
              marginBottom: "16px",
            }}
          >
            Bạn muốn hợp tác cùng tôi?
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "16px",
              marginBottom: "32px",
            }}
          >
            Hãy liên hệ để chúng ta cùng tạo nên những điều tuyệt vời! 🚀
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "16px", padding: "14px 32px" }}>
            📩 Liên hệ ngay
          </Link>
        </div>
      </section>
    </>
  );
}
