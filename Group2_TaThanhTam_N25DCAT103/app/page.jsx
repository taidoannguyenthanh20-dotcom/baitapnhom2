import Link from "next/link";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <Hero
        name="Tạ Thanh Tâm"
        studentId="N25DCAT103"
        projectCount={projects.length}
        isStudent={true}
        skills={["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"]}
      />
      <section>
        <SectionTitle as="h2" title="Dự án tiêu biểu" description="Một số dự án mẫu trong quá trình học phát triển web." />
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.slice(0, 2).map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
        <Link href="/projects" className="mt-6 inline-block font-semibold text-blue-700 hover:underline">Xem tất cả dự án →</Link>
      </section>
    </div>
  );
}
