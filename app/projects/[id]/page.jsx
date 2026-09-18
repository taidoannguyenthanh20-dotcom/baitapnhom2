import SectionTitle from "@/components/SectionTitle";
import { projectsData } from "../page";
import Link from "next/link";

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div>
        <h2 className="text-xl font-bold text-red-600">Dự án không tồn tại!</h2>
        <Link href="/projects" className="text-blue-600 underline mt-2 inline-block">Quay lại danh sách</Link>
      </div>
    );
  }

  return (
    <div>
      <SectionTitle label="Chi tiết dự án" title={`Project ID: ${id} - ${project.name}`} />
      <div className="bg-white p-6 border rounded-lg shadow-sm space-y-4">
        <p className="text-4xl">{project.icon}</p>
        <p className="text-gray-700">{project.description}</p>
        <div className="bg-gray-100 p-3 rounded text-sm">
          <strong>Công nghệ áp dụng:</strong> {project.tech.join(", ")}
        </div>
        <Link href="/projects" className="inline-block bg-gray-800 text-white text-sm px-4 py-2 rounded hover:bg-gray-900">
          ← Quay lại danh sách dự án
        </Link>
      </div>
    </div>
  );
}