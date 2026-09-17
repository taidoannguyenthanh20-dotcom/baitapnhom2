// Server Component - display a single skill card using Props
export default function SkillCard({ skill }) {
  const { name, icon, level, category, description } = skill;

  const categoryColors = {
    Frontend: { bg: "rgba(99, 102, 241, 0.1)", color: "#818cf8" },
    Backend: { bg: "rgba(16, 185, 129, 0.1)", color: "#34d399" },
    Database: { bg: "rgba(245, 158, 11, 0.1)", color: "#fbbf24" },
    Tools: { bg: "rgba(236, 72, 153, 0.1)", color: "#f472b6" },
  };

  const catStyle = categoryColors[category] || categoryColors["Tools"];

  return (
    <div className="glass-card" style={{ padding: "24px" }}>
      {/* Icon & Name */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            background: "rgba(99, 102, 241, 0.12)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px",
          }}
        >
          {icon}
        </div>
        <div>
          <h3
            style={{
              fontWeight: "700",
              fontSize: "17px",
              color: "var(--text-primary)",
              marginBottom: "4px",
            }}
          >
            {name}
          </h3>
          <span
            style={{
              display: "inline-block",
              padding: "2px 10px",
              background: catStyle.bg,
              color: catStyle.color,
              borderRadius: "20px",
              fontSize: "11px",
              fontWeight: "600",
            }}
          >
            {category}
          </span>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: "13px",
          color: "var(--text-muted)",
          marginBottom: "16px",
          lineHeight: "1.6",
        }}
      >
        {description}
      </p>

      {/* Progress Bar */}
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "6px",
          }}
        >
          <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
            Proficiency
          </span>
          <span
            style={{
              fontSize: "12px",
              fontWeight: "700",
              color: "#6366f1",
            }}
          >
            {level}%
          </span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
    </div>
  );
}
