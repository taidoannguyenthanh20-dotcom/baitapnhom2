import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = { title: "Dự án" };

export default function ProjectsPage() {
  return (
    <section>
      <SectionTitle label="Projects" title="Dự án cá nhân" description="Ba dự án mẫu phục vụ bài tập. Nội dung có thể thay bằng dự án thực tế." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </section>
  );
}
