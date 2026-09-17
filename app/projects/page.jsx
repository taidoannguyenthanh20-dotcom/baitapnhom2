import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';

export const projectsData = [
  {
    id: "1",
    name: "Phần mềm Quản lý Sinh viên AI",
    description: "Nghiên cứu cấu trúc và ứng dụng AI trong quản lý học tập.",
    technologies: ["Next.js", "Python", "MySQL"],
  },
  {
    id: "2",
    name: "Ứng dụng Đồ họa 3D",
    description: "Render các khối hình học 3D bằng thuật toán Cavalier.",
    technologies: ["Python", "OpenCV"],
  },
  {
    id: "3",
    name: "Website Thuyết trình NCKH",
    description: "Cùng nhóm (Uy, Thảo, Toàn) xây dựng trang quản lý tài liệu nghiên cứu.",
    technologies: ["React", "Tailwind"],
  }
];

export default function ProjectsPage() {
  return (
    <div>
      <SectionTitle label="Portfolio" title="Dự Án Cá Nhân" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
