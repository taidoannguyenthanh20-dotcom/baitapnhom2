"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi form (API, Email, v.v.)
    console.log("Dữ liệu gửi đi:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-4 bg-green-100 text-green-700 rounded-lg text-center">
        Cảm ơn bạn! Tin nhắn đã được gửi thành công.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 bg-white p-6 rounded-lg shadow">
      <div>
        <label className="block text-gray-700 font-medium mb-1">Họ và tên</label>
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          required 
          className="w-full border p-2 rounded focus:ring focus:ring-blue-200"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">Email</label>
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          required 
          className="w-full border p-2 rounded focus:ring focus:ring-blue-200"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">Nội dung</label>
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          required 
          rows="4"
          className="w-full border p-2 rounded focus:ring focus:ring-blue-200"
        ></textarea>
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
        Gửi liên hệ
      </button>
    </form>
  );
}
