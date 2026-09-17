import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

const projectsDetail = {
  "1": { name: "Developer Portfolio", description: "Website cá nhân xây dựng bằng Next.js App Router.", details: "Dự án áp dụng đầy đủ kiến thức về Layout Components, Dynamic Routes, Catch-all Routes và Tailwind CSS." },
  "2": { name: "Task Management App", description: "Ứng dụng quản lý công việc cá nhân.", details: "Ứng dụng giúp người dùng phân loại công việc, đặt lịch nhắc nhở và quản lý tiến độ hiệu quả." },
  "3": { name: "E-Commerce Mockup", description: "Giao diện cửa hàng trực tuyến.", details: "Tích hợp bộ lọc sản phẩm, giỏ hàng tương tác và giao diện tối ưu trên thiết bị di động." },
};

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projectsDetail[id];

  if (!project) {
    return (
      <div className="text-center py-16 space-y-4">
        <h2 className="text-2xl font-bold text-red-500">Dự án không tồn tại! (ID: {id})</h2>
        <Link href="/projects" className="inline-block text-blue-600 underline">Quay lại danh sách</Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 py-6 max-w-2xl mx-auto">
      <SectionTitle label={`Dynamic Route: /projects/${id}`} title={project.name} />
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
        <h3 className="font-semibold text-lg text-gray-900">Tổng quan dự án:</h3>
        <p className="text-gray-600 leading-relaxed">{project.description}</p>
        <h3 className="font-semibold text-lg text-gray-900 pt-2">Chi tiết triển khai:</h3>
        <p className="text-gray-600 leading-relaxed">{project.details}</p>
        <div className="pt-6 border-t">
          <Link href="/projects" className="text-sm font-medium text-blue-600 hover:underline">
            ← Quay lại trang Projects
          </Link>
        </div>
      </div>
    </div>
  );
}