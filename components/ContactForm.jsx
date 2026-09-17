"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Vui lòng nhập họ và tên";
    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Vui lòng nhập nội dung tin nhắn";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Tin nhắn phải có ít nhất 10 ký tự";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    // Simulate sending
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    background: "rgba(22, 22, 31, 0.8)",
    border: "1px solid rgba(99, 102, 241, 0.2)",
    borderRadius: "10px",
    color: "var(--text-primary)",
    fontSize: "15px",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

  const labelStyle = {
    display: "block",
    fontSize: "14px",
    fontWeight: "600",
    color: "var(--text-secondary)",
    marginBottom: "8px",
  };

  const errorStyle = {
    color: "#f87171",
    fontSize: "12px",
    marginTop: "6px",
  };

  if (submitted) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "60px 40px",
          background: "rgba(16, 185, 129, 0.05)",
          border: "1px solid rgba(16, 185, 129, 0.2)",
          borderRadius: "16px",
        }}
        className="fade-in-up"
      >
        <div style={{ fontSize: "64px", marginBottom: "20px" }}>🎉</div>
        <h3
          style={{
            fontSize: "24px",
            fontWeight: "700",
            color: "#34d399",
            marginBottom: "12px",
          }}
        >
          Gửi thành công!
        </h3>
        <p style={{ color: "var(--text-secondary)", marginBottom: "28px" }}>
          Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi trong vòng 24 giờ.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-outline"
          style={{ margin: "0 auto" }}
        >
          Gửi tin nhắn khác
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Name Field */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="name" style={labelStyle}>
          Họ và tên <span style={{ color: "#f87171" }}>*</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nguyễn Văn A"
          style={{
            ...inputStyle,
            borderColor: errors.name ? "#f87171" : "rgba(99, 102, 241, 0.2)",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
          onBlur={(e) =>
            (e.target.style.borderColor = errors.name
              ? "#f87171"
              : "rgba(99, 102, 241, 0.2)")
          }
        />
        {errors.name && <p style={errorStyle}>⚠ {errors.name}</p>}
      </div>

      {/* Email Field */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="email" style={labelStyle}>
          Email <span style={{ color: "#f87171" }}>*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@email.com"
          style={{
            ...inputStyle,
            borderColor: errors.email ? "#f87171" : "rgba(99, 102, 241, 0.2)",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
          onBlur={(e) =>
            (e.target.style.borderColor = errors.email
              ? "#f87171"
              : "rgba(99, 102, 241, 0.2)")
          }
        />
        {errors.email && <p style={errorStyle}>⚠ {errors.email}</p>}
      </div>

      {/* Message Field */}
      <div style={{ marginBottom: "28px" }}>
        <label htmlFor="message" style={labelStyle}>
          Nội dung tin nhắn <span style={{ color: "#f87171" }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Nhập nội dung tin nhắn của bạn..."
          rows={5}
          style={{
            ...inputStyle,
            resize: "vertical",
            minHeight: "140px",
            borderColor: errors.message
              ? "#f87171"
              : "rgba(99, 102, 241, 0.2)",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
          onBlur={(e) =>
            (e.target.style.borderColor = errors.message
              ? "#f87171"
              : "rgba(99, 102, 241, 0.2)")
          }
        />
        {errors.message && <p style={errorStyle}>⚠ {errors.message}</p>}
        <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "6px" }}>
          {formData.message.length} ký tự
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn-primary"
        style={{
          width: "100%",
          justifyContent: "center",
          fontSize: "16px",
          padding: "14px",
          opacity: loading ? 0.7 : 1,
          cursor: loading ? "not-allowed" : "pointer",
        }}
        disabled={loading}
      >
        {loading ? (
          <>
            <span
              style={{
                display: "inline-block",
                width: "16px",
                height: "16px",
                border: "2px solid rgba(255,255,255,0.3)",
                borderTopColor: "white",
                borderRadius: "50%",
                animation: "spin 0.8s linear infinite",
              }}
            />
            Đang gửi...
          </>
        ) : (
          <>📩 Gửi tin nhắn</>
        )}
      </button>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </form>
  );
}
