import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.js";

export const metadata = {
  title: "Dự án cá nhân | Bùi Thành Đạt Portfolio",
  description:
    "Danh sách các dự án tiêu biểu được xây dựng bằng Python, Next.js, C#, Node.js...",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Tiêu đề trang */}
      <SectionTitle
        label="Kho Dự Án"
        title="Dự Án Cá Nhân & Đồ Án"
        description="Tổng hợp các dự án tôi đã phát triển. Bạn có thể nhấn 'Xem chi tiết' để tìm hiểu sâu hơn về kiến trúc, công nghệ và tính năng của từng dự án."
      />

      {/* Render danh sách projects dưới dạng mảng qua .map() và ProjectCard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
