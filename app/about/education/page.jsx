import Link from "next/link";
import { ArrowLeft, GraduationCap, Trophy } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { educationData } from "@/data/portfolioData";

export const metadata = {
  title: "Education",
  description: "Quá trình học vấn của Hoàng Ngọc Hòa.",
};

export default function EducationPage() {
  return (
    <div className="section" id="education-page">
      <div className="container">
        <Link href="/about" className="btn btn-outline" id="education-back-btn"
          style={{ marginBottom: 40, display: "inline-flex" }}>
          <ArrowLeft size={14} /> Quay lại About
        </Link>

        <SectionTitle
          label="// about / education"
          title="Học vấn"
          description="Quá trình học tập và các thành tích đã đạt được."
        />

        <div className="timeline">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className={`timeline-item ${index === 0 ? "active" : ""}`}
              id={`education-item-${edu.id}`}
            >
              <div className="timeline-dot" />

              <div className="timeline-date">
                {edu.startYear} — {edu.endYear}
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
                    <GraduationCap size={20} style={{ color: "var(--text-secondary)" }} />
                  </div>
                  <div>
                    <h3 className="timeline-title">{edu.school}</h3>
                    <p className="timeline-sub">{edu.major} — {edu.degree}</p>
                    <span className="tag" style={{ marginTop: 4 }}>{edu.location}</span>
                  </div>
                </div>

                <p className="timeline-body">{edu.description}</p>

                {/* Achievements */}
                {edu.achievements && edu.achievements.filter(a => a !== "TODO").length > 0 && (
                  <div style={{ marginTop: 20 }}>
                    <p style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontFamily: "var(--font-mono)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
                      <Trophy size={12} /> Thành tích
                    </p>
                    <ul className="timeline-list">
                      {edu.achievements.filter(a => a !== "TODO").map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48 }}>
          <Link href="/about/experience" className="btn btn-outline" id="education-to-experience">
            Xem kinh nghiệm →
          </Link>
        </div>
      </div>
    </div>
  );
}
