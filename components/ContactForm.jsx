"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg border border-gray-200 shadow-xs space-y-6">
      {/* Thông tin liên hệ cá nhân */}
      <div className="border-b pb-4 space-y-2">
        <h3 className="font-bold text-gray-900 text-lg">Thông tin liên hệ</h3>
        <p className="text-sm text-gray-600">👤 Họ và tên: <strong>Lê Văn Tạo</strong></p>
        <p className="text-sm text-gray-600">📞 Số điện thoại: <strong>0387407845</strong></p>
      </div>

      {/* Form liên hệ */}
      {submitted ? (
        <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-md text-center text-sm font-medium">
          Cảm ơn <strong>{formData.name}</strong>! Tin nhắn của bạn đã được gửi thành công.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên người gửi</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md text-sm text-gray-900 focus:outline-none focus:border-blue-500"
              placeholder="Nhập tên của bạn"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email liên hệ</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md text-sm text-gray-900 focus:outline-none focus:border-blue-500"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nội dung tin nhắn</label>
            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md text-sm text-gray-900 focus:outline-none focus:border-blue-500"
              placeholder="Viết nội dung tin nhắn tại đây..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition text-sm shadow-xs"
          >
            Gửi tin nhắn
          </button>
        </form>
      )}
    </div>
  );
}