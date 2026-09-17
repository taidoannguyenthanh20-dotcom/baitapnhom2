import SectionTitle from "../../components/SectionTitle";
import ProjectCard from "../../components/ProjectCard";
import projects from "../../data/projects";

export const metadata = {
  title: "Projects | Nguyen Thai Tuan Portfolio",
  description: "Danh sách dự án của Nguyen Thai Tuan - N23DCPT054",
};

export default function ProjectsPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionTitle
          label="Dự án"
          title="Những gì tôi đã xây dựng 📁"
          description="Tổng hợp các dự án cá nhân và bài tập thực hành trong quá trình học tập"
        />

        {/* Stats */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            marginBottom: "48px",
          }}
        >
          {[
            { label: "Tổng dự án", value: projects.length + "+", icon: "🗂️" },
            {
              label: "Hoàn thành",
              value: projects.filter((p) => p.status === "Hoàn thành").length,
              icon: "✅",
            },
            {
              label: "Đang phát triển",
              value: projects.filter((p) => p.status === "Đang phát triển").length,
              icon: "🔨",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card"
              style={{
                padding: "20px 36px",
                textAlign: "center",
                minWidth: "160px",
              }}
            >
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>{stat.icon}</div>
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: "800",
                  color: "#6366f1",
                  lineHeight: "1",
                  marginBottom: "4px",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: "13px", color: "var(--text-muted)" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
