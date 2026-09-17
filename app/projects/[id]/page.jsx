import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, GitBranch, ExternalLink, Users, Zap,
  CheckCircle2, AlertTriangle, Lightbulb, Calendar, ChevronLeft, ChevronRight,
} from "lucide-react";
import { projectsData } from "@/data/portfolioData";

export async function generateStaticParams() {
  return projectsData.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projectsData.find((p) => String(p.id) === id);
  if (!project) return { title: "Not Found" };
  return { title: project.name, description: project.shortDesc };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projectsData.find((p) => String(p.id) === id);
  if (!project) notFound();

  const statusClass = project.status === "Completed" ? "badge-green" : "badge-yellow";
  const prevProject = projectsData.find((p) => p.id === project.id - 1);
  const nextProject = projectsData.find((p) => p.id === project.id + 1);

  return (
    <div id={`project-detail-${project.id}`}>

      {/* ── HERO HEADER ── */}
      <div style={{
        borderBottom: "1px solid var(--border)",
        background: "var(--bg-secondary)",
        padding: "60px 0 48px",
      }}>
        <div className="container">
          <Link href="/projects" className="btn btn-outline" id="project-detail-back"
            style={{ marginBottom: 32, display: "inline-flex" }}>
            <ArrowLeft size={14} /> Tất cả Projects
          </Link>

          {/* Status + date */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", marginBottom: 20 }}>
            <span className={`badge ${statusClass}`}>{project.status}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)" }}>
              <Calendar size={11} style={{ display: "inline", marginRight: 4, verticalAlign: "middle" }} />
              {project.startDate} — {project.endDate}
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)" }}>
              #{String(project.id).padStart(2, "0")}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: "clamp(36px, 7vw, 72px)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            marginBottom: 20,
          }}>
            {project.name}
          </h1>

          {/* Short desc */}
          <p style={{
            fontSize: 18,
            color: "var(--text-secondary)",
            lineHeight: 1.75,
            maxWidth: 640,
            marginBottom: 32,
          }}>
            {project.shortDesc}
          </p>

          {/* Meta chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <Users size={14} style={{ color: "var(--text-muted)" }} />
              <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>
                {project.teamSize} {project.teamSize === 1 ? "người" : "người"}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <Zap size={14} style={{ color: "var(--text-muted)" }} />
              <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>{project.role}</span>
            </div>
          </div>

          {/* Tech tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
            {project.technologies.map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="btn btn-outline" id={`project-${project.id}-github`}>
                <GitBranch size={15} /> GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                className="btn btn-primary" id={`project-${project.id}-demo`}>
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="section">
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: 48,
            alignItems: "start",
          }}
            className="project-detail-grid"
          >

            {/* ── LEFT: main content ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>

              {/* Full description */}
              <div>
                <p className="mono" style={{ marginBottom: 14 }}>// mô tả chi tiết</p>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.85 }}>
                  {project.fullDesc}
                </p>
              </div>

              {/* Features */}
              <div>
                <p className="mono" style={{ marginBottom: 16 }}>// tính năng</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {project.features.map((f, i) => (
                    <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <CheckCircle2 size={16} style={{ color: "#4ade80", flexShrink: 0, marginTop: 1 }} />
                      <span style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.6 }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Solutions */}
              {project.challenges && (
                <div>
                  <p className="mono" style={{ marginBottom: 16 }}>// thách thức & giải pháp</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div className="card" style={{ borderColor: "rgba(234,179,8,0.25)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                        <AlertTriangle size={14} style={{ color: "#facc15" }} />
                        <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                          Thách thức
                        </span>
                      </div>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                        {project.challenges.map((c, i) => (
                          <li key={i} style={{ fontSize: 14, color: "var(--text-secondary)", paddingLeft: 14, position: "relative", lineHeight: 1.6 }}>
                            <span style={{ position: "absolute", left: 0, color: "#facc15" }}>›</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="card" style={{ borderColor: "rgba(34,197,94,0.25)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                        <Lightbulb size={14} style={{ color: "#4ade80" }} />
                        <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                          Giải pháp
                        </span>
                      </div>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                        {project.solutions && project.solutions.map((s, i) => (
                          <li key={i} style={{ fontSize: 14, color: "var(--text-secondary)", paddingLeft: 14, position: "relative", lineHeight: 1.6 }}>
                            <span style={{ position: "absolute", left: 0, color: "#4ade80" }}>›</span>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ── RIGHT: sidebar ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, position: "sticky", top: 80 }}>

              {/* Project info */}
              <div className="card">
                <p className="mono" style={{ marginBottom: 16 }}>// thông tin</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {[
                    { label: "Vai trò", value: project.role },
                    { label: "Team size", value: `${project.teamSize} người` },
                    { label: "Trạng thái", value: project.status },
                    { label: "Bắt đầu", value: project.startDate },
                    { label: "Kết thúc", value: project.endDate },
                  ].map((item, i, arr) => (
                    <div key={item.label} style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 0",
                      borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none",
                    }}>
                      <span style={{ fontSize: 12, fontFamily: "var(--font-mono)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                        {item.label}
                      </span>
                      <span style={{ fontSize: 13, color: "var(--text-secondary)", fontWeight: 500 }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div className="card">
                <p className="mono" style={{ marginBottom: 14 }}>// tech stack</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="card">
                <p className="mono" style={{ marginBottom: 14 }}>// links</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="btn btn-outline" style={{ width: "100%", justifyContent: "center" }}>
                      <GitBranch size={14} /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ── PROJECT NAVIGATION ── */}
          <hr className="divider" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {prevProject ? (
              <Link href={`/projects/${prevProject.id}`} className="card" id="project-prev"
                style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 4 }}>
                  <ChevronLeft size={12} /> TRƯỚC
                </span>
                <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>{prevProject.name}</span>
              </Link>
            ) : <div />}

            {nextProject ? (
              <Link href={`/projects/${nextProject.id}`} className="card" id="project-next"
                style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end", textAlign: "right" }}>
                <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 4 }}>
                  TIẾP <ChevronRight size={12} />
                </span>
                <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>{nextProject.name}</span>
              </Link>
            ) : <div />}
          </div>

        </div>
      </div>

      {/* Responsive grid fix */}
      <style>{`
        @media (max-width: 768px) {
          .project-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
