"use client"; // Yêu cầu Client Component
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Gửi thành công! Tôi sẽ phản hồi sớm.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Họ và tên" className="p-2 border rounded" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="p-2 border rounded" required />
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Nội dung" className="p-2 border rounded h-32" required />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Gửi tin nhắn</button>
      {status && <p className="text-green-600 mt-2">{status}</p>}
    </form>
  );
}
