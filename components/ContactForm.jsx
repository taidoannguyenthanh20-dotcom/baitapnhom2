"use client";

import { useState } from "react";

const initialForm = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Vui lòng nhập đầy đủ họ tên, email và nội dung tin nhắn.");
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);
    setForm(initialForm);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card"
      aria-label="Contact form"
      noValidate
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="field-label">
            Họ và tên
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Nguyễn Văn A"
            value={form.name}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="field-label">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="ban@example.com"
            value={form.email}
            onChange={handleChange}
            className="input"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="contact-message" className="field-label">
          Nội dung tin nhắn
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          placeholder="Chào Quốc Toàn, mình muốn trao đổi về..."
          value={form.message}
          onChange={handleChange}
          className="input resize-none"
        />
      </div>

      {error ? (
        <p
          role="alert"
          className="mt-5 rounded-lg bg-red-50 p-4 text-sm font-medium text-red-700"
        >
          {error}
        </p>
      ) : null}

      {submitted ? (
        <p
          role="status"
          className="mt-5 rounded-lg bg-green-50 p-4 text-sm font-medium text-green-700"
        >
          Cảm ơn bạn! Tin nhắn đã được gửi thành công. Mình sẽ phản hồi sớm
          nhất có thể.
        </p>
      ) : null}

      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        Gửi tin nhắn
      </button>
    </form>
  );
}
