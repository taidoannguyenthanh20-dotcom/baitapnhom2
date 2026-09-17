import ProjectCard from "../../components/ProjectCard";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../data/projects";

export const metadata = { title: "Projects" };

export default function Projects() {
  return (
    <section className="container-page py-16">
      <SectionTitle
        label="My work"
        title="Các dự án của tôi"
        description="Mỗi thẻ là một ProjectCard nhận dữ liệu qua props. Bấm vào để mở trang chi tiết dùng dynamic route /projects/[id]."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
