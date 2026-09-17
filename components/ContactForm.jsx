"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
      {submitted ? (
        <div className="p-6 bg-green-50 border border-green-200 text-green-800 rounded-xl text-center space-y-2">
          <div className="text-3xl">🎉</div>
          <p className="font-bold">Gửi tin nhắn thành công!</p>
          <p className="text-sm">Cảm ơn <strong>{formData.name}</strong>. Tôi sẽ phản hồi qua email <strong>{formData.email}</strong> sớm nhất.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 border-gray-300 outline-none transition"
              placeholder="Thạch Gia Uy"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 border-gray-300 outline-none transition"
              placeholder="uy@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nội dung tin nhắn</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 border-gray-300 outline-none transition"
              placeholder="Nhập nội dung bạn muốn trao đổi..."
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition font-medium shadow-sm">
            Gửi Tin Nhắn
          </button>
        </form>
      )}
    </div>
  );
}