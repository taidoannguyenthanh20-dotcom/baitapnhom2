import SectionTitle from "@/components/SectionTitle";

export default function ExperiencePage() {
  return (
    <div>
      <SectionTitle label="Kinh nghiệm" title="Kinh nghiệm làm việc & Dự án" />
      <div className="border-l-2 border-green-600 pl-4 space-y-4">
        <div>
          <h3 className="font-bold text-lg">Frontend Developer (Lập trình viên Web)</h3>
          <p className="text-sm text-gray-500">2025 - 2026</p>
          <p className="text-gray-700 mt-1">Xây dựng và tối ưu hóa các giao diện web responsive sử dụng React, Next.js và Tailwind CSS.</p>
        </div>
      </div>
    </div>
  );
}