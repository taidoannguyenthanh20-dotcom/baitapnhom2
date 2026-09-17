import Link from "next/link";
import { ArrowLeft, Briefcase, CheckSquare } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { experienceData } from "@/data/portfolioData";

export const metadata = {
  title: "Experience",
  description: "Kinh nghiệm làm việc của Hoàng Ngọc Hòa.",
};

export default function ExperiencePage() {
  return (
    <div className="section" id="experience-page">
      <div className="container">
        <Link href="/about" className="btn btn-outline" id="experience-back-btn"
          style={{ marginBottom: 40, display: "inline-flex" }}>
          <ArrowLeft size={14} /> Quay lại About
        </Link>

        <SectionTitle
          label="// about / experience"
          title="Kinh nghiệm"
          description="Các dự án và công việc tôi đã tham gia."
        />

        <div className="timeline">
          {experienceData.map((exp, index) => (
            <div
              key={exp.id}
              className={`timeline-item ${index === 0 ? "active" : ""}`}
              id={`experience-item-${exp.id}`}
            >
              <div className="timeline-dot" />
              <div className="timeline-date">
                {exp.startDate} — {exp.endDate}
              </div>

              <div className="card" style={{ marginTop: 8 }}>
                {/* Header */}
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 16 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: "var(--accent-dim)", border: "1px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Briefcase size={20} style={{ color: "var(--text-secondary)" }} />
                  </div>
                  <div>
                    <h3 className="timeline-title">{exp.position}</h3>
                    <p className="timeline-sub">{exp.company}</p>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 6 }}>
                      <span className="tag">{exp.type}</span>
                      <span className="tag">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="timeline-body">{exp.description}</p>

                {/* Responsibilities */}
                <div style={{ marginTop: 20 }}>
                  <p style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontFamily: "var(--font-mono)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
                    <CheckSquare size={12} /> Công việc
                  </p>
                  <ul className="timeline-list">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div style={{ marginTop: 16 }}>
                  <p className="mono" style={{ marginBottom: 10 }}>// tech used</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}