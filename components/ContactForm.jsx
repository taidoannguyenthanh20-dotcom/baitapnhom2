"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Họ và tên"
        className="w-full rounded-lg border p-3"
        required
      />

      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full rounded-lg border p-3"
        required
      />

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Nội dung tin nhắn"
        className="min-h-40 w-full rounded-lg border p-3"
        required
      />

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-5 py-3 text-white"
      >
        Gửi tin nhắn
      </button>

      {submitted && (
        <p className="text-green-600">
          Cảm ơn bạn! Tin nhắn mẫu đã được ghi nhận.
        </p>
      )}
    </form>
  );
}
