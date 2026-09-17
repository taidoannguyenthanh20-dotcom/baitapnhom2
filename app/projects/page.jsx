import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/portfolioData";

export const metadata = {
  title: "Projects",
  description: "Danh sách dự án của Hoàng Ngọc Hòa.",
};

export default function ProjectsPage() {
  return (
    <div className="section" id="projects-page">
      <div className="container">
        <SectionTitle
          label="// projects"
          title="Dự án"
          description={`${projectsData.length} dự án — từ web app đến AI và mobile.`}
        />

        <div className="grid-auto">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
