import Link from "next/link";
import SectionTitle from "../../components/SectionTitle";

export const metadata = {
  title: "About | Nguyen Thai Tuan Portfolio",
  description: "Thông tin cá nhân, học vấn và kinh nghiệm của Nguyen Thai Tuan",
};

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionTitle
          label="Về tôi"
          title="Xin chào! 👋"
          description="Tìm hiểu thêm về hành trình, đam mê và con đường phát triển của tôi"
        />

        {/* Profile Card */}
        <div
          className="glass-card"
          style={{
            padding: "40px",
            marginBottom: "48px",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* Avatar */}
          <div
            className="animate-float"
            style={{
              width: "140px",
              height: "140px",
              background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2))",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "60px",
              border: "3px solid rgba(99, 102, 241, 0.3)",
              flexShrink: 0,
            }}
          >
            <img
              src="/Image/avt.jpg"
              alt="Nguyen Thai Tuan"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            ></img>
          </div>

          {/* Info */}
          <div>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "800",
                color: "var(--text-primary)",
                marginBottom: "6px",
              }}
            >
              Nguyễn Thái Tuấn
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#818cf8",
                fontWeight: "500",
                marginBottom: "16px",
              }}
            >
              🎓 PTIT · TP.Hồ Chí Minh · Việt Nam
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: "1.8",
                fontSize: "15px",
              }}
            >
              Tôi là sinh viên ngành Công nghệ thông tin tại Học viện Công nghệ Bưu chính Viễn thông (PTIT),
              hiện đang trong năm học thứ 3. Tôi có niềm đam mê mạnh mẽ với lập trình web,
              đặc biệt là phát triển ứng dụng với{" "}
              <strong style={{ color: "#818cf8" }}>React</strong> và{" "}
              <strong style={{ color: "#818cf8" }}>Next.js</strong>.
              Ngoài học tập, tôi thích tìm hiểu các công nghệ mới và xây dựng các dự án cá nhân.
            </p>

            {/* Info Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "12px",
                marginTop: "24px",
              }}
            >
              {[
                { icon: "📛", label: "Họ tên", value: "Nguyễn Thái Tuấn" },
                { icon: "🎂", label: "Ngày sinh", value: "13/09/2005" },
                { icon: "🏫", label: "Trường", value: "Học viện Công nghệ Bưu chính Viễn thông" },
                { icon: "🆔", label: "MSSV", value: "N23DCPT054" },
                { icon: "📧", label: "Email", value: "lucksnow1108@gmail.com" },
                { icon: "📍", label: "Địa chỉ", value: "Hồ Chí Minh, Việt Nam" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    padding: "12px 16px",
                    background: "rgba(99, 102, 241, 0.05)",
                    borderRadius: "10px",
                    border: "1px solid rgba(99, 102, 241, 0.1)",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "var(--text-muted)", display: "block" }}>
                    {item.icon} {item.label}
                  </span>
                  <span style={{ fontSize: "14px", color: "var(--text-primary)", fontWeight: "500" }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sub-routes Navigation */}
        <div>
          <h3
            style={{
              fontSize: "22px",
              fontWeight: "700",
              color: "var(--text-primary)",
              marginBottom: "24px",
              textAlign: "center",
            }}
          >
            Khám phá thêm
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {/* Education Card */}
            <Link
              href="/about/education"
              style={{ textDecoration: "none" }}
            >
              <div
                className="glass-card"
                style={{ padding: "32px", textAlign: "center" }}
              >
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎓</div>
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "var(--text-primary)",
                    marginBottom: "10px",
                  }}
                >
                  Học vấn
                </h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "20px" }}>
                  Thông tin về quá trình học tập, trường học và các thành tích học thuật
                </p>
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 20px",
                    background: "rgba(99, 102, 241, 0.1)",
                    color: "#818cf8",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  Xem học vấn →
                </span>
              </div>
            </Link>

            {/* Experience Card */}
            <Link
              href="/about/experience"
              style={{ textDecoration: "none" }}
            >
              <div
                className="glass-card"
                style={{ padding: "32px", textAlign: "center" }}
              >
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>💼</div>
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "var(--text-primary)",
                    marginBottom: "10px",
                  }}
                >
                  Kinh nghiệm
                </h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "20px" }}>
                  Các hoạt động, dự án thực tế và kinh nghiệm làm việc đã tích lũy được
                </p>
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 20px",
                    background: "rgba(139, 92, 246, 0.1)",
                    color: "#a78bfa",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  Xem kinh nghiệm →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
