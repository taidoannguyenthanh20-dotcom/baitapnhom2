import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export default function HomePage() {
  return (
    <div className="space-y-12 py-8">
      <section className="text-center space-y-6 py-10">
        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          Available for Hire
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900">
          Xin chào, tôi là <span className="text-blue-600">Thạch Gia Uy</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Sinh viên năm 4 trường PTIT, chuyên ngành Phát triển Ứng dụng. Đam mê xây dựng ứng dụng Web hiện đại với Next.js và Tailwind CSS.
        </p>
        <div className="flex justify-center gap-4 pt-2">
          <Link href="/projects" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-sm">
            Xem Dự Án
          </Link>
          <Link href="/contact" className="px-6 py-3 border border-gray-300 font-medium rounded-lg hover:bg-gray-100 bg-white transition">
            Liên Hệ
          </Link>
        </div>
      </section>

      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
        <SectionTitle label="Overview" title="Năng Lực & Dự Án Nổi Bật" />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-100 rounded-xl bg-gray-50/50">
            <h3 className="font-bold text-lg text-gray-800 mb-2">⚡️ Kỹ Năng Công Nghệ</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Thành thạo React, Next.js (App Router), JavaScript (ES6+), Tailwind CSS, Git & GitHub.</p>
          </div>
          <div className="p-6 border border-gray-100 rounded-xl bg-gray-50/50">
            <h3 className="font-bold text-lg text-gray-800 mb-2">🚀 Sản Phẩm Thực Tế</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Xây dựng Portfolio Website, Ứng dụng Quản lý công việc và Giao diện E-commerce.</p>
          </div>
        </div>
      </section>
    </div>
  );
}