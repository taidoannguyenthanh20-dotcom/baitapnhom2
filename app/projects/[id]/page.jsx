import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <Link href="/projects" className="text-blue-600">
        ← Quay lại dự án
      </Link>

      <h1 className="mt-8 text-4xl font-bold">{project.title}</h1>

      <p className="mt-6 leading-8 text-gray-600">
        {project.details}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span key={technology} className="rounded-full bg-blue-100 px-3 py-1">
            {technology}
          </span>
        ))}
      </div>
    </section>
  );
}
