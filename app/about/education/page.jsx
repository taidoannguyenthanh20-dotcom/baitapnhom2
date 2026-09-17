import SectionTitle from "@/components/SectionTitle";

export default function EducationPage() {
  return (
    <div className="space-y-6 py-6">
      <SectionTitle label="About / Education" title="Thông Tin Học Vấn" />
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <div className="border-l-4 border-blue-600 pl-4 py-1">
          <h3 className="text-xl font-bold text-gray-900">Học viện Công nghệ Bưu chính Viễn thông (PTIT)</h3>
          <p className="text-gray-600 font-medium">Chuyên ngành: Phát triển Ứng dụng (2022 - 2026)</p>
          <p className="text-sm text-gray-500 mt-2">Năm học: Sinh viên năm 4. Điểm trung bình tích lũy đạt loại Khá - Giỏi.</p>
        </div>
      </div>
    </div>
  );
}