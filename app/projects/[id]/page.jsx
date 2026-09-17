import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "../../../data/projects";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.name} | Nguyen Thai Tuan Portfolio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    notFound();
  }

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div
          style={{
            marginBottom: "32px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Link
            href="/projects"
            style={{
              color: "var(--text-muted)",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            Projects
          </Link>
          <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>/</span>
          <span
            style={{ color: "#818cf8", fontSize: "14px", fontWeight: "500" }}
          >
            {project.name}
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: "32px",
            alignItems: "flex-start",
          }}
        >
          {/* Main Content */}
          <div>
            {/* Hero Banner */}
            <div
              style={{
                width: "100%",
                height: "320px",
                background:
                  "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2))",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "100px",
                marginBottom: "32px",
                border: "1px solid rgba(99, 102, 241, 0.2)",
                overflow: "hidden",
              }}
            >
              {project.image && project.image.startsWith("/") ? (
                <img
                  src={project.image}
                  alt={project.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "16px",
                  }}
                />
              ) : (
                project.image
              )}
            </div>


            {/* Title & Status */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "12px",
                flexWrap: "wrap",
              }}
            >
              <h1
                style={{
                  fontSize: "clamp(24px, 4vw, 36px)",
                  fontWeight: "800",
                  color: "var(--text-primary)",
                }}
              >
                {project.name}
              </h1>
              <span
                style={{
                  padding: "4px 12px",
                  background:
                    project.status === "Hoàn thành"
                      ? "rgba(16, 185, 129, 0.1)"
                      : "rgba(245, 158, 11, 0.1)",
                  color:
                    project.status === "Hoàn thành" ? "#34d399" : "#fbbf24",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                {project.status}
              </span>
            </div>

            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "14px",
                marginBottom: "24px",
              }}
            >
              📅 Năm thực hiện: {project.year}
            </p>

            {/* Long Description */}
            <div
              className="glass-card"
              style={{ padding: "28px", marginBottom: "24px" }}
            >
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "var(--text-primary)",
                  marginBottom: "14px",
                }}
              >
                📋 Mô tả chi tiết
              </h2>
              <p
                style={{
                  color: "var(--text-secondary)",
                  lineHeight: "1.8",
                  fontSize: "15px",
                }}
              >
                {project.longDescription}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="glass-card" style={{ padding: "28px" }}>
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "var(--text-primary)",
                  marginBottom: "16px",
                }}
              >
                🛠️ Công nghệ sử dụng
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "8px 18px",
                      background: "rgba(99, 102, 241, 0.12)",
                      color: "#818cf8",
                      borderRadius: "8px",
                      fontSize: "14px",
                      fontWeight: "600",
                      border: "1px solid rgba(99, 102, 241, 0.2)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Actions */}
            <div className="glass-card" style={{ padding: "24px" }}>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "var(--text-primary)",
                  marginBottom: "16px",
                }}
              >
                🔗 Liên kết
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{
                    justifyContent: "center",
                    fontSize: "14px",
                    padding: "10px",
                  }}
                >
                  🐙 GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    justifyContent: "center",
                    fontSize: "14px",
                    padding: "10px",
                  }}
                >
                  🚀 Live Demo
                </a>
              </div>
            </div>

            {/* Project Info */}
            <div className="glass-card" style={{ padding: "24px" }}>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "var(--text-primary)",
                  marginBottom: "16px",
                }}
              >
                📊 Thông tin dự án
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { label: "ID", value: `#${project.id}` },
                  { label: "Năm", value: project.year },
                  { label: "Trạng thái", value: project.status },
                  { label: "Công nghệ", value: `${project.tech.length} công nghệ` },
                ].map((info) => (
                  <div
                    key={info.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "8px 0",
                      borderBottom: "1px solid rgba(99, 102, 241, 0.08)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "13px",
                        color: "var(--text-muted)",
                      }}
                    >
                      {info.label}
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "var(--text-primary)",
                        fontWeight: "500",
                      }}
                    >
                      {info.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation between projects */}
            <div className="glass-card" style={{ padding: "24px" }}>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "var(--text-primary)",
                  marginBottom: "16px",
                }}
              >
                🗺️ Dự án khác
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {projects
                  .filter((p) => p.id !== project.id)
                  .slice(0, 3)
                  .map((p) => (
                    <Link
                      key={p.id}
                      href={`/projects/${p.id}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        background: "rgba(99, 102, 241, 0.05)",
                        border: "1px solid rgba(99, 102, 241, 0.1)",
                        textDecoration: "none",
                        transition: "all 0.2s",
                      }}
                    >
                      <span style={{ fontSize: "20px" }}>{p.image}</span>
                      <span
                        style={{
                          fontSize: "13px",
                          color: "var(--text-secondary)",
                          fontWeight: "500",
                        }}
                      >
                        {p.name}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back button */}
        <div style={{ marginTop: "48px", textAlign: "center" }}>
          <Link href="/projects" className="btn-outline">
            ← Quay lại danh sách dự án
          </Link>
        </div>
      </div>
    </div>
  );
}
