import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <div className="space-y-8 py-6">
      <SectionTitle label="About Me" title="Giới Thiệu Bản Thân" description="Tổng quan về hành trình học tập và định hướng phát triển." />

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-gray-700 leading-relaxed space-y-4">
        <p className="text-lg">
          Tôi là <strong className="text-gray-900">Thạch Gia Uy</strong>, hiện là sinh viên năm 4 chuyên ngành Phát triển Ứng dụng tại Học viện Công nghệ Bưu chính Viễn thông (PTIT).
        </p>
        <p>
          Tôi luôn chủ động tìm tòi công nghệ mới, hướng tới việc viết code sạch, dễ bảo trì và tạo ra giao diện người dùng trực quan, nhanh chóng.
        </p>
      </div>

      <div className="flex gap-4 border-t pt-6">
        <Link href="/about/education" className="px-5 py-2.5 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition">
          🎓 Học Vấn
        </Link>
        <Link href="/about/experience" className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition">
          💼 Kinh Nghiệm
        </Link>
      </div>
    </div>
  );
}