import SectionTitle from "../../components/SectionTitle";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact | Nguyen Thai Tuan Portfolio",
  description: "Liên hệ với Nguyen Thai Tuan - N23DCPT054",
};

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionTitle
          label="Liên hệ"
          title="Hãy kết nối với tôi! 📩"
          description="Bạn có dự án muốn hợp tác, câu hỏi cần trao đổi hoặc chỉ muốn nói xin chào? Tôi rất vui được lắng nghe!"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "40px",
            alignItems: "flex-start",
          }}
        >
          {/* Contact Info */}
          <div>
            <div style={{ marginBottom: "32px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "var(--text-primary)",
                  marginBottom: "8px",
                }}
              >
                Thông tin liên hệ
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
                Tôi thường phản hồi trong vòng 24 giờ
              </p>
            </div>

            {/* Contact Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
              {[
                {
                  icon: "📧",
                  label: "Email",
                  value: "tuan.n23dcpt054@ptit.edu.vn",
                  color: "#818cf8",
                },
                {
                  icon: "🎓",
                  label: "Trường",
                  value: "PTIT - N23DCPT054",
                  color: "#34d399",
                },
                {
                  icon: "📍",
                  label: "Địa chỉ",
                  value: "Hà Nội, Việt Nam",
                  color: "#fbbf24",
                },
                {
                  icon: "🕐",
                  label: "Giờ làm việc",
                  value: "8:00 - 22:00 (GMT+7)",
                  color: "#f472b6",
                },
              ].map((info) => (
                <div
                  key={info.label}
                  className="glass-card"
                  style={{
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "rgba(99, 102, 241, 0.1)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      flexShrink: 0,
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", color: "var(--text-muted)", marginBottom: "2px" }}>
                      {info.label}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: info.color,
                      }}
                    >
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "var(--text-secondary)",
                  marginBottom: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Mạng xã hội
              </h4>
              <div style={{ display: "flex", gap: "12px" }}>
                {[
                  { icon: "🐙", label: "GitHub", href: "https://github.com" },
                  { icon: "💼", label: "LinkedIn", href: "https://linkedin.com" },
                  { icon: "🐦", label: "Twitter", href: "https://twitter.com" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "rgba(99, 102, 241, 0.1)",
                      border: "1px solid rgba(99, 102, 241, 0.2)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      textDecoration: "none",
                      transition: "all 0.2s",
                      title: social.label,
                    }}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card" style={{ padding: "36px" }}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "var(--text-primary)",
                marginBottom: "24px",
              }}
            >
              Gửi tin nhắn ✉️
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
