"use client"; // Khai báo đây là Client Component bắt buộc

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Xử lý khi người dùng nhập liệu vào Form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Xử lý khi nhấn nút Gửi
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Dữ liệu Form:", formData);
    setIsSubmitted(true); // Hiển thị thông báo sau khi gửi
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    
    // Tắt thông báo sau 3 giây
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <input 
        type="text" name="name" placeholder="Họ và tên" required
        value={formData.name} onChange={handleChange}
        className="border p-2 rounded"
      />
      <input 
        type="email" name="email" placeholder="Email" required
        value={formData.email} onChange={handleChange}
        className="border p-2 rounded"
      />
      <textarea 
        name="message" placeholder="Nội dung tin nhắn" required rows="4"
        value={formData.message} onChange={handleChange}
        className="border p-2 rounded"
      ></textarea>
      
      <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Gửi liên hệ
      </button>

      {/* Hiển thị thông báo thành công */}
      {isSubmitted && (
        <p className="text-green-600 font-semibold mt-2">Gửi tin nhắn thành công!</p>
      )}
    </form>
  );
}