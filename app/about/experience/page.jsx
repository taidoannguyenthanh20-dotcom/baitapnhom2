import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export default function ExperiencePage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Link href="/about" className="text-sm text-indigo-600 hover:underline">← Quay lại trang About</Link>
      <SectionTitle label="Kinh nghiệm" title="Kinh nghiệm làm việc" description="Các dự án và hoạt động thực tế" />
      <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
        <div className="border-l-2 border-indigo-600 pl-4">
          <span className="text-xs text-slate-500 font-medium">2024 - Nay</span>
          <h3 className="text-lg font-bold text-slate-800">Frontend Developer</h3>
          <p className="text-slate-600 text-sm mt-1">Xây dựng giao diện responsive với Next.js và Tailwind CSS; tích hợp REST API; tối ưu tốc độ tải trang và SEO on-page cho các dự án nội bộ.</p>
          <span className="text-xs text-slate-500 font-medium">2023 - 2024</span>
          <h3 className="text-lg font-bold text-slate-800">Software Developer</h3>
          <p className="text-slate-600 text-sm mt-1">Tham gia thiết kế kiến trúc hệ thống, xây dựng module xác thực (Auth/JWT), thanh toán và xử lý logic nghiệp vụ; triển khai ứng dụng bằng Docker và thiết lập CI/CD pipeline cơ bản trên GitHub Actions.</p>
        </div>
      </div>
    </div>
  );
}