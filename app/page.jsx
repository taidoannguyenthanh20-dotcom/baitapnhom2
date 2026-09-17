import Link from "next/link";
import { ArrowRight, MapPin, Mail, ExternalLink } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import { homeData, siteInfo, skillsData, projectsData } from "@/data/portfolioData";

export const metadata = {
  title: "Home",
  description: siteInfo.intro,
};

// Featured skills for hero section (5 items)
const featuredSkills = skillsData.Frontend.slice(0, 5);
// Featured projects
const featuredProjects = projectsData.slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <div className="hero-glow" />
        <div className="container">
          <div className="animate-fade-up">
            <p className="hero-greeting">
              <span style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                {"> "}{homeData.greeting}
              </span>
            </p>
          </div>

          <h1 className="hero-name animate-fade-up-delay-1">{homeData.headline}</h1>

          <p className="hero-role animate-fade-up-delay-2">
            <strong>{homeData.subtitle}</strong>
            <span className="cursor-blink" style={{ marginLeft: 4, color: "var(--text-muted)" }}>_</span>
          </p>

          <p className="hero-desc animate-fade-up-delay-3">{homeData.introduction}</p>

          {/* Actions */}
          <div className="hero-actions animate-fade-up-delay-3">
            <Link href="/projects" className="btn btn-primary" id="hero-view-projects">
              Xem Projects <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="btn btn-outline" id="hero-contact">
              Liên hệ
            </Link>
            <a href={siteInfo.social.github} target="_blank" rel="noopener noreferrer"
              className="btn btn-outline" id="hero-github">
              GitHub
            </a>
            <a href={siteInfo.social.linkedin} target="_blank" rel="noopener noreferrer"
              className="btn btn-outline" id="hero-linkedin">
              LinkedIn
            </a>
          </div>

          {/* Featured skills */}
          <div className="animate-fade-up-delay-4">
            <p className="mono" style={{ marginBottom: 12 }}>// tech stack</p>
            <div className="hero-skills">
              {homeData.featuredSkills.map((name) => (
                <span key={name} className="tag">{name}</span>
              ))}
            </div>
          </div>

          {/* Stat bar */}
          <div className="hero-stat-bar animate-fade-up-delay-4">
            <div className="hero-stat">
              <div className="hero-stat-number">3+</div>
              <div className="hero-stat-label">Dự án hoàn thành</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">2+</div>
              <div className="hero-stat-label">Năm học tập</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">10+</div>
              <div className="hero-stat-label">Công nghệ</div>
            </div>
            <div className="hero-stat" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <MapPin size={13} style={{ color: "var(--text-muted)" }} />
                <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>{siteInfo.location}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Mail size={13} style={{ color: "var(--text-muted)" }} />
                <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>{siteInfo.email}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED SKILLS ===== */}
      <section className="section" id="section-skills" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionTitle
            label="// 01 — skills"
            title="Kỹ năng nổi bật"
            description="Các công nghệ tôi sử dụng thường xuyên nhất."
          />
          <div className="grid-3" style={{ gap: 16 }}>
            {featuredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} showLevel={true} />
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/skills" className="btn btn-outline" id="home-all-skills">
              Xem tất cả kỹ năng <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="section" id="section-projects" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionTitle
            label="// 02 — projects"
            title="Dự án tiêu biểu"
            description="Một số dự án nổi bật tôi đã xây dựng."
          />
          <div className="grid-auto">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/projects" className="btn btn-outline" id="home-all-projects">
              Xem tất cả dự án <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section" id="section-cta" style={{ paddingTop: 0, paddingBottom: 100 }}>
        <div className="container">
          <div style={{
            border: "1px solid var(--border)",
            borderRadius: 16,
            padding: "60px 48px",
            textAlign: "center",
            background: "var(--bg-card)",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <p className="mono" style={{ marginBottom: 16 }}>// available for work</p>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 800, marginBottom: 16, letterSpacing: "-0.03em" }}>
              Bạn có dự án cần hợp tác?
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 16, marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
              Tôi luôn sẵn sàng tiếp nhận cơ hội mới và các dự án thú vị.
            </p>
            <Link href="/contact" className="btn btn-primary" id="cta-contact">
              Liên hệ ngay <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
