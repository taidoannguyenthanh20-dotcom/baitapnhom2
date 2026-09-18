import SectionTitle from "@/components/SectionTitle";

export default function EducationPage() {
  return (
    <div>
      <SectionTitle label="Học vấn" title="Quá trình đào tạo" />
      <div className="border-l-2 border-blue-600 pl-4 space-y-4">
        <div>
          <h3 className="font-bold text-lg">Sinh viên ngành An toàn thông tin</h3>
          <p className="text-sm text-gray-500">2025 - Hiện tại</p>
          <p className="text-gray-700 mt-1">Chuyên sâu về An toàn thông tin, Mạng máy tính, Phát triển Web và Thuật toán.</p>
        </div>
      </div>
    </div>
  );
}