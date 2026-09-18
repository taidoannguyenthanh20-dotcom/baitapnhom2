import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";

export const projectsData = [
  { id: "1", icon: "🌐", name: "Website Developer Portfolio", description: "Trang cá nhân giới thiệu bản thân, kỹ năng và sản phẩm.", tech: ["Next.js", "Tailwind CSS"] },
  { id: "2", icon: "📋", name: "Task Board Application", description: "Ứng dụng quản lý công việc thời gian thực với Client-side rendering.", tech: ["React", "TypeScript", "Tailwind"] },
  { id: "3", icon: "🔐", name: "Crypto Tool Dashboard", description: "Công cụ mã hóa và phân tích giải thuật mật mã học.", tech: ["Next.js", "Python", "API"] },
];

export default function ProjectsPage() {
  return (
    <div>
      <SectionTitle label="Dự án" title="Các sản phẩm cá nhân" description="Danh sách các dự án tiêu biểu đã thực hiện." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}