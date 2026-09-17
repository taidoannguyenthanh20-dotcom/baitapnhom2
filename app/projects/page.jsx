import SectionTitle from "../../components/SectionTitle";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  const projects = [
    { id: 1, title: "Website Bán Hàng", desc: "Dự án e-commerce với React." },
    { id: 2, title: "Blog Cá Nhân", desc: "Viết blog sử dụng Next.js." },
    { id: 3, title: "App Quản Lý Task", desc: "Ứng dụng To-Do list đơn giản." }
  ];

  return (
    <div>
      <SectionTitle title="Dự án nổi bật" description="Danh sách các dự án tôi đã làm" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
