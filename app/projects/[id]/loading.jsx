export default function Loading() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Breadcrumb skeleton */}
        <div
          style={{
            marginBottom: "32px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "16px",
              background: "rgba(99, 102, 241, 0.1)",
              borderRadius: "4px",
              animation: "pulse 1.5s ease-in-out infinite",
            }}
          />
          <div
            style={{
              width: "8px",
              height: "16px",
              background: "rgba(99, 102, 241, 0.1)",
              borderRadius: "4px",
            }}
          />
          <div
            style={{
              width: "120px",
              height: "16px",
              background: "rgba(99, 102, 241, 0.1)",
              borderRadius: "4px",
              animation: "pulse 1.5s ease-in-out infinite",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: "32px",
          }}
        >
          {/* Main Content Skeleton */}
          <div>
            {/* Banner Skeleton */}
            <div
              style={{
                width: "100%",
                height: "260px",
                background: "rgba(99, 102, 241, 0.08)",
                borderRadius: "16px",
                marginBottom: "32px",
                animation: "pulse 1.5s ease-in-out infinite",
              }}
            />

            {/* Title Skeleton */}
            <div
              style={{
                width: "60%",
                height: "36px",
                background: "rgba(99, 102, 241, 0.08)",
                borderRadius: "8px",
                marginBottom: "12px",
                animation: "pulse 1.5s ease-in-out infinite",
              }}
            />
            <div
              style={{
                width: "140px",
                height: "16px",
                background: "rgba(99, 102, 241, 0.08)",
                borderRadius: "4px",
                marginBottom: "24px",
                animation: "pulse 1.5s ease-in-out infinite",
              }}
            />

            {/* Description Card Skeleton */}
            <div
              className="glass-card"
              style={{ padding: "28px", marginBottom: "24px" }}
            >
              {[100, 90, 80, 95, 70].map((w, i) => (
                <div
                  key={i}
                  style={{
                    width: `${w}%`,
                    height: "14px",
                    background: "rgba(99, 102, 241, 0.08)",
                    borderRadius: "4px",
                    marginBottom: "10px",
                    animation: "pulse 1.5s ease-in-out infinite",
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[120, 160, 140].map((h, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: "24px",
                  height: `${h}px`,
                  animation: "pulse 1.5s ease-in-out infinite",
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
