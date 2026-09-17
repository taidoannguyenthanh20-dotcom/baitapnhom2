import SectionTitle from "../../components/SectionTitle";
import SkillCard from "../../components/SkillCard";
import skills from "../../data/skills";

export const metadata = {
  title: "Skills | Nguyen Thai Tuan Portfolio",
  description: "Danh sách kỹ năng và công nghệ của Nguyen Thai Tuan",
};

export default function SkillsPage() {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionTitle
          label="Kỹ năng"
          title="Công nghệ tôi sử dụng 🛠️"
          description="Những kỹ năng và công nghệ tôi đang học, áp dụng trong các dự án cá nhân và học tập"
        />

        {/* Stats Bar */}
        <div
          className="glass-card"
          style={{
            padding: "24px 32px",
            marginBottom: "48px",
            display: "flex",
            flexWrap: "wrap",
            gap: "32px",
            justifyContent: "center",
          }}
        >
          {[
            { label: "Tổng kỹ năng", value: skills.length, icon: "🎯" },
            { label: "Frontend", value: skills.filter((s) => s.category === "Frontend").length, icon: "🌐" },
            { label: "Backend", value: skills.filter((s) => s.category === "Backend").length, icon: "⚙️" },
            { label: "Database", value: skills.filter((s) => s.category === "Database").length, icon: "🗄️" },
            { label: "Tools", value: skills.filter((s) => s.category === "Tools").length, icon: "🔧" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "24px", marginBottom: "4px" }}>{stat.icon}</div>
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "800",
                  color: "#6366f1",
                  lineHeight: "1",
                  marginBottom: "4px",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills grouped by category */}
        {categories.map((category) => {
          const categorySkills = skills.filter((s) => s.category === category);
          return (
            <div key={category} style={{ marginBottom: "48px" }}>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "var(--text-primary)",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  paddingBottom: "12px",
                  borderBottom: "1px solid rgba(99, 102, 241, 0.15)",
                }}
              >
                <span
                  style={{
                    padding: "4px 14px",
                    background: "rgba(99, 102, 241, 0.1)",
                    color: "#818cf8",
                    borderRadius: "20px",
                    fontSize: "13px",
                  }}
                >
                  {category}
                </span>
                <span style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "400" }}>
                  ({categorySkills.length} kỹ năng)
                </span>
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                  gap: "20px",
                }}
              >
                {categorySkills.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}