// Server Component - reusable section title
export default function SectionTitle({ label, title, description }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "56px" }}>
      {label && (
        <span
          style={{
            display: "inline-block",
            padding: "6px 16px",
            background: "rgba(99, 102, 241, 0.12)",
            color: "#6366f1",
            borderRadius: "20px",
            fontSize: "13px",
            fontWeight: "600",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            marginBottom: "16px",
            border: "1px solid rgba(99, 102, 241, 0.2)",
          }}
        >
          {label}
        </span>
      )}

      <h2
        style={{
          fontSize: "clamp(28px, 5vw, 42px)",
          fontWeight: "800",
          color: "var(--text-primary)",
          lineHeight: "1.2",
          marginBottom: description ? "16px" : "0",
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          style={{
            fontSize: "16px",
            color: "var(--text-secondary)",
            maxWidth: "560px",
            margin: "0 auto",
            lineHeight: "1.7",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
