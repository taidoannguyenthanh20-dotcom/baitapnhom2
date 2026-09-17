"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader } from "lucide-react";

/**
 * ContactForm – Client Component
 * Uses: "use client" + useState + onChange + onSubmit
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Vui lòng nhập họ tên";
    if (!formData.email.trim()) newErrors.email = "Vui lòng nhập email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Email không hợp lệ";
    if (!formData.message.trim()) newErrors.message = "Vui lòng nhập tin nhắn";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    // Simulate async send
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  if (status === "success") {
    return (
      <div
        id="contact-form-success"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          padding: "60px 40px",
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 12,
          textAlign: "center",
        }}
      >
        <CheckCircle size={40} style={{ color: "#4ade80" }} />
        <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-primary)" }}>
          Gửi thành công!
        </h3>
        <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
          Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất có thể.
        </p>
        <button
          className="btn btn-outline"
          id="contact-form-reset"
          onClick={() => setStatus("idle")}
        >
          Gửi tin nhắn khác
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      id="contact-form"
      style={{ display: "flex", flexDirection: "column", gap: 20 }}
      noValidate
    >
      {/* Name & Email row */}
      <div className="grid-2" style={{ gap: 16 }}>
        <div className="form-group">
          <label htmlFor="contact-name" className="form-label">
            Họ và tên <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            className="form-input"
            placeholder="Nguyễn Văn A"
            value={formData.name}
            onChange={handleChange}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span id="name-error" style={{ fontSize: 12, color: "#ef4444" }}>
              {errors.name}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="contact-email" className="form-label">
            Email <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            className="form-input"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <span id="email-error" style={{ fontSize: 12, color: "#ef4444" }}>
              {errors.email}
            </span>
          )}
        </div>
      </div>

      {/* Subject */}
      <div className="form-group">
        <label htmlFor="contact-subject" className="form-label">
          Tiêu đề
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          className="form-input"
          placeholder="Cơ hội hợp tác / Hỏi đáp..."
          value={formData.subject}
          onChange={handleChange}
        />
      </div>

      {/* Message */}
      <div className="form-group">
        <label htmlFor="contact-message" className="form-label">
          Nội dung <span style={{ color: "#ef4444" }}>*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          className="form-textarea"
          placeholder="Viết nội dung tin nhắn của bạn..."
          value={formData.message}
          onChange={handleChange}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <span id="message-error" style={{ fontSize: 12, color: "#ef4444" }}>
            {errors.message}
          </span>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="btn btn-primary"
        id="contact-form-submit"
        disabled={status === "loading"}
        style={{ alignSelf: "flex-start" }}
      >
        {status === "loading" ? (
          <>
            <Loader size={15} style={{ animation: "spin 1s linear infinite" }} />
            Đang gửi...
          </>
        ) : (
          <>
            <Send size={15} />
            Gửi tin nhắn
          </>
        )}
      </button>
    </form>
  );
}
