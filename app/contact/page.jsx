import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { contactData, siteInfo } from "@/data/portfolioData";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Contact",
  description: "Liên hệ với Hoàng Ngọc Hòa.",
};

const contactItems = [
  { icon: <Mail size={18} />, label: "Email", value: contactData.email, href: `mailto:${contactData.email}` },
  { icon: <Phone size={18} />, label: "Điện thoại", value: contactData.phone, href: `tel:${contactData.phone}` },
  { icon: <MapPin size={18} />, label: "Địa điểm", value: contactData.location, href: null },
];

const socialItems = [
  { label: "GitHub", href: contactData.social.github },
  { label: "LinkedIn", href: contactData.social.linkedin },
  { label: "Facebook", href: contactData.social.facebook },
];

export default function ContactPage() {
  return (
    <div className="section" id="contact-page">
      <div className="container">
        <SectionTitle
          label="// contact"
          title={contactData.title}
          description={contactData.description}
        />

        <div className="grid-2" style={{ gap: 48, alignItems: "start" }}>
          {/* Left – Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Contact items */}
            <div className="card">
              <p className="mono" style={{ marginBottom: 20 }}>// contact info</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {contactItems.map((item) => (
                  <div key={item.label} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: 8,
                      background: "var(--accent-dim)", border: "1px solid var(--border)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, color: "var(--text-secondary)",
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} className="link" style={{ fontSize: 14, color: "var(--text-primary)" }}>
                          {item.value}
                        </a>
                      ) : (
                        <span style={{ fontSize: 14, color: "var(--text-primary)" }}>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="card">
              <p className="mono" style={{ marginBottom: 16 }}>// social</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {socialItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`contact-social-${item.label.toLowerCase()}`}
                    style={{
                      display: "flex", alignItems: "center", gap: 12,
                      padding: "10px 14px", borderRadius: 8,
                      border: "1px solid var(--border)",
                      background: "var(--accent-dim)",
                      textDecoration: "none", color: "var(--text-secondary)",
                      fontSize: 14, transition: "all 0.2s",
                    }}
                    className="link"
                  >
                    <ExternalLink size={14} />
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right – Form */}
          <div>
            <p className="mono" style={{ marginBottom: 20 }}>// send message</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
