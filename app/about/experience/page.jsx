import SectionTitle from "@/components/SectionTitle";

export default function ExperiencePage() {
  return (
    <div className="space-y-6 py-6">
      <SectionTitle label="About / Experience" title="Kinh Nghiệm Làm Việc" />
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-6">
        <div className="border-l-4 border-blue-600 pl-4 py-1">
          <h3 className="text-xl font-bold text-gray-900">Frontend Developer Trainee / Student</h3>
          <p className="text-gray-600 font-medium">PTIT Lab & Personal Projects (2024 - Hiện tại)</p>
          <p className="text-sm text-gray-500 mt-2">Thực hành xây dựng dự án web với React, Next.js, tích hợp RESTful API và Tailwind CSS.</p>
        </div>
      </div>
    </div>
  );
}