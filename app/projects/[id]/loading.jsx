export default function Loading() {
  return (
    <div
      id="project-loading"
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          border: "2px solid var(--border)",
          borderTopColor: "var(--text-primary)",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
        }}
      />
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          color: "var(--text-muted)",
          letterSpacing: "0.1em",
        }}
      >
        loading project...
      </p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
