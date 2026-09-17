"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="container mx-auto px-6 py-10 max-w-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Liên hệ với tôi</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow border space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Họ và tên</label>
          <input 
            type="text" 
            required
            className="w-full border p-2 rounded"
            value={form.name}
            onChange={(e) => setForm({...form, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input 
            type="email" 
            required
            className="w-full border p-2 rounded"
            value={form.email}
            onChange={(e) => setForm({...form, email: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Nội dung tin nhắn</label>
          <textarea 
            rows="4" 
            required
            className="w-full border p-2 rounded"
            value={form.message}
            onChange={(e) => setForm({...form, message: e.target.value})}
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-medium">
          Nút Gửi
        </button>
      </form>

      {success && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded text-center font-medium">
          Cảm ơn bạn! Thông tin đã được gửi thành công.
        </div>
      )}
    </div>
  );
}
