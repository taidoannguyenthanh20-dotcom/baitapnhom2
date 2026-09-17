import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";

export const projectsData = [
  { id: "1", name: "Developer Portfolio", description: "Website cá nhân xây dựng bằng Next.js App Router và Tailwind CSS.", tech: ["Next.js", "Tailwind CSS", "React"], icon: "🌐" },
  { id: "2", name: "Task Management App", description: "Ứng dụng quản lý công việc cá nhân hỗ trợ CRUD và lưu trữ dữ liệu.", tech: ["React", "JavaScript", "CSS"], icon: "📝" },
  { id: "3", name: "E-Commerce Mockup", description: "Giao diện cửa hàng trực tuyến tích hợp tính năng giỏ hàng.", tech: ["Next.js", "Tailwind CSS"], icon: "🛒" },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-6 py-6">
      <SectionTitle label="Portfolio" title="Dự Án Cá Nhân" description="Sử dụng mảng dữ liệu và hàm .map() để tạo giao diện linh hoạt." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}