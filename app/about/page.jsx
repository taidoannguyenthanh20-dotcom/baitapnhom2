import Link from "next/link";
import { GraduationCap, Briefcase, User, ArrowRight, Calendar, MapPin, Mail, Phone } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { aboutData } from "@/data/portfolioData";

export const metadata = {
  title: "About",
  description: "Thông tin về Hoàng Ngọc Hòa — sinh viên CNTT và developer.",
};

const infoItems = [
  { label: "Họ và tên", value: aboutData.personalInfo.fullName, icon: <User size={14} /> },
  { label: "Ngày sinh", value: aboutData.personalInfo.dob, icon: <Calendar size={14} /> },
  { label: "Địa điểm", value: aboutData.personalInfo.location, icon: <MapPin size={14} /> },
  { label: "Email", value: aboutData.personalInfo.email, icon: <Mail size={14} /> },
  { label: "Điện thoại", value: aboutData.personalInfo.phone, icon: <Phone size={14} /> },
];

export default function AboutPage() {
  return (
    <div className="section" id="about-page">
      <div className="container">
        <SectionTitle
          label="// about me"
          title="Về tôi"
          description={aboutData.shortIntro}
        />

        <div className="grid-2" style={{ gap: 40, alignItems: "start", marginBottom: 60 }}>
          {/* Bio paragraphs */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {aboutData.paragraphs.map((para, i) => (
              <p key={i} style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.8 }}>
                {para}
              </p>
            ))}

            {/* Interests */}
            <div style={{ marginTop: 8 }}>
              <p className="mono" style={{ marginBottom: 12 }}>// interests</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {aboutData.interests.map((interest) => (
                  <span key={interest} className="tag">{interest}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Personal Info card */}
          <div className="card">
            <p className="mono" style={{ marginBottom: 20 }}>// personal info</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {infoItems.map((item) => (
                <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--text-muted)", fontSize: 11, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {item.icon} {item.label}
                  </span>
                  <span style={{ color: "var(--text-primary)", fontSize: 14 }}>{item.value}</span>
                </div>
              ))}

              <div>
                <span style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--text-muted)", fontSize: 11, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>
                  Ngôn ngữ
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {aboutData.personalInfo.languages.map((lang) => (
                    <span key={lang} className="tag">{lang}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-routes cards */}
        <hr className="divider" />
        <p className="mono" style={{ marginBottom: 20 }}>// explore more</p>
        <div className="grid-2" style={{ gap: 16 }}>
          <Link href="/about/education" className="card" id="about-education-link"
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 10,
              background: "var(--accent-dim)", border: "1px solid var(--border)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <GraduationCap size={20} style={{ color: "var(--text-secondary)" }} />
            </div>
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }}>
                Học vấn
              </h3>
              <p style={{ fontSize: 13, color: "var(--text-muted)" }}>Quá trình học tập và thành tích</p>
            </div>
            <ArrowRight size={16} style={{ color: "var(--text-muted)", marginLeft: "auto" }} />
          </Link>

          <Link href="/about/experience" className="card" id="about-experience-link"
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 10,
              background: "var(--accent-dim)", border: "1px solid var(--border)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <Briefcase size={20} style={{ color: "var(--text-secondary)" }} />
            </div>
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }}>
                Kinh nghiệm
              </h3>
              <p style={{ fontSize: 13, color: "var(--text-muted)" }}>Dự án và công việc thực tế</p>
            </div>
            <ArrowRight size={16} style={{ color: "var(--text-muted)", marginLeft: "auto" }} />
          </Link>
        </div>
      </div>
    </div>
  );
}
