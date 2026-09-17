"use client";

import { useState } from "react";

const initialForm = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setStatus(null);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ error: true, message: "Vui lòng nhập đầy đủ thông tin, không chỉ khoảng trắng." });
      return;
    }
    setStatus({ error: false, message: `Cảm ơn ${form.name.trim()}! Form đã được gửi mô phỏng thành công.` });
    setForm(initialForm);
  }

  return (
    <form onSubmit={handleSubmit} className="panel max-w-2xl space-y-5">
      <div>
        <label htmlFor="contact-name" className="text-sm font-semibold">Họ và tên</label>
        <input id="contact-name" name="name" autoComplete="name" required maxLength={100} value={form.name} onChange={handleChange} className="form-input" />
      </div>
      <div>
        <label htmlFor="contact-email" className="text-sm font-semibold">Email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} value={form.email} onChange={handleChange} className="form-input" />
      </div>
      <div>
        <label htmlFor="contact-message" className="text-sm font-semibold">Nội dung tin nhắn</label>
        <textarea id="contact-message" name="message" required maxLength={2000} rows={5} value={form.message} onChange={handleChange} className="form-input resize-y" />
      </div>
      <p className="text-sm leading-6 text-slate-500">Form minh họa phía front end, chưa gửi email thực tế.</p>
      <button type="submit" className="button cursor-pointer">Gửi tin nhắn</button>
      {status && <p role={status.error ? "alert" : "status"} className={`rounded-lg p-4 text-sm leading-6 ${status.error ? "bg-red-50 text-red-800" : "bg-green-50 text-green-800"}`}>{status.message}</p>}
    </form>
  );
}
