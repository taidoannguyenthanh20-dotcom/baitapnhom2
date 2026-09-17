import Link from "next/link";

// Server Component - display a single project card using Props
export default function ProjectCard({ project }) {
  const { id, name, description, tech, image, status } = project;

  const statusColors = {
    "Hoàn thành": { bg: "rgba(16, 185, 129, 0.1)", color: "#34d399" },
    "Đang phát triển": { bg: "rgba(245, 158, 11, 0.1)", color: "#fbbf24" },
  };

  const statusStyle = statusColors[status] || statusColors["Hoàn thành"];

  return (
    <div
      className="glass-card"
      style={{
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Image / Icon Area */}
      <div
        style={{
          width: "100%",
          height: "180px",
          background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.15))",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "52px",
          marginBottom: "20px",
          overflow: "hidden",
        }}
      >
        {image && image.startsWith("/") ? (
          <img
            src={image}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        ) : (
          image
        )}
      </div>


      {/* Status Badge */}
      <div style={{ marginBottom: "12px" }}>
        <span
          style={{
            display: "inline-block",
            padding: "3px 10px",
            background: statusStyle.bg,
            color: statusStyle.color,
            borderRadius: "20px",
            fontSize: "11px",
            fontWeight: "600",
          }}
        >
          {status}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontWeight: "700",
          fontSize: "18px",
          color: "var(--text-primary)",
          marginBottom: "10px",
        }}
      >
        {name}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "14px",
          color: "var(--text-secondary)",
          lineHeight: "1.7",
          marginBottom: "16px",
          flex: 1,
        }}
      >
        {description}
      </p>

      {/* Tech Stack */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          marginBottom: "20px",
        }}
      >
        {tech.map((t) => (
          <span
            key={t}
            style={{
              padding: "4px 10px",
              background: "rgba(99, 102, 241, 0.1)",
              color: "#818cf8",
              borderRadius: "6px",
              fontSize: "12px",
              fontWeight: "500",
              border: "1px solid rgba(99, 102, 241, 0.15)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Action Button */}
      <Link
        href={`/projects/${id}`}
        className="btn-primary"
        style={{
          textAlign: "center",
          justifyContent: "center",
          fontSize: "14px",
          padding: "10px 20px",
        }}
      >
        Xem chi tiết →
      </Link>
    </div>
  );
}
