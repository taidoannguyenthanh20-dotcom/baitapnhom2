/**
 * SectionTitle – Server Component (reusable)
 * Props:
 *   label: string   – mono eyebrow text (e.g. "// 01")
 *   title: string   – main heading
 *   description: string (optional) – subtitle text
 *   align: "left" | "center"  (default "left")
 */
export default function SectionTitle({
  label = "",
  title = "",
  description = "",
  align = "left",
}) {
  const alignStyle = align === "center"
    ? { textAlign: "center", alignItems: "center" }
    : {};

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: 48,
        ...alignStyle,
      }}
    >
      {label && (
        <span className="section-label">{label}</span>
      )}
      <h2 className="section-title">{title}</h2>
      {description && (
        <p
          className="section-desc"
          style={align === "center" ? { margin: "0 auto" } : {}}
        >
          {description}
        </p>
      )}
    </div>
  );
}
