import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="space-y-12 py-6">
      <SectionTitle
        label="Sản phẩm"
        title="Danh sách Dự án Cá nhân"
        description="Danh sách các dự án thực tế được lưu trữ dưới dạng Array và tạo giao diện bằng hàm .map()."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((projectItem) => (
          <ProjectCard key={projectItem.id} project={projectItem} />
        ))}
      </div>
    </div>
  );
}
