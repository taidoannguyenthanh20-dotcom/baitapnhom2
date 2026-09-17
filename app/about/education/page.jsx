import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export default function EducationPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Link href="/about" className="text-sm text-indigo-600 hover:underline">← Quay lại trang About</Link>
      <SectionTitle label="Học vấn" title="Quá trình đào tạo" description="Thông tin bằng cấp và học tập" />
      <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
        <div className="border-l-2 border-indigo-600 pl-4">
          <span className="text-xs text-slate-500 font-medium">2023 - 2028</span>
          <h3 className="text-lg font-bold text-slate-800">Kỹ sư Công nghệ Đa phương tiện</h3>
          <p className="text-slate-600 text-sm mt-1">Chuyên ngành: Phát triển ứng dụng.</p>
        </div>
      </div>
    </div>
  );
}