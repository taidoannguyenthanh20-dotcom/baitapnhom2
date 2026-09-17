import Link from "next/link";
import { notFound } from "next/navigation";

const projectDetails = {
  "1": { name: "E-Commerce App", description: "Hệ thống sàn thương mại điện tử với quản trị đơn hàng, tích hợp thanh toán thẻ.", tech: ["Next.js", "Tailwind", "Stripe"], role: "Frontend Lead" },
  "2": { name: "Task Management Board", description: "Bảng phân việc nhóm hỗ trợ kéo thả Kanban, cập nhật tiến độ công việc.", tech: ["React", "Firebase"], role: "Fullstack Dev" },
  "3": { name: "Weather Dashboard", description: "Dashboard thời tiết định vị người dùng, dự báo nhiệt độ 7 ngày tiếp theo.", tech: ["JavaScript", "Tailwind"], role: "Frontend Dev" },
};

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projectDetails[id];

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Link href="/projects" className="text-sm text-indigo-600 hover:underline">
        ← Quay lại danh sách dự án
      </Link>
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div>
          <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded">
            Project ID: {id}
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-2">{project.name}</h1>
          <p className="text-slate-500 text-sm mt-1">Vai trò: {project.role}</p>
        </div>
        <div className="border-t border-slate-100 pt-4">
          <h3 className="font-semibold text-slate-800 mb-2">Mô tả dự án:</h3>
          <p className="text-slate-600 leading-relaxed">{project.description}</p>
        </div>
        <div className="border-t border-slate-100 pt-4">
          <h3 className="font-semibold text-slate-800 mb-2">Công nghệ áp dụng:</h3>
          <div className="flex gap-2 flex-wrap">
            {project.tech.map((t, idx) => (
              <span key={idx} className="bg-slate-100 text-slate-700 text-xs px-3 py-1.5 rounded-md font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
