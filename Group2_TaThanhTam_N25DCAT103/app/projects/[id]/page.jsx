import Link from "next/link";
import { notFound } from "next/navigation";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);
  return { title: project?.title ?? "Không tìm thấy dự án" };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);
  if (!project) notFound();

  return (
    <section>
      <SectionTitle label={`Project ${project.id}`} title={project.title} description={project.description} />
      <article className="panel">
        <span aria-hidden="true" className="text-4xl">{project.icon}</span>
        <h2 className="mt-5 text-xl font-bold">Tổng quan</h2>
        <p className="mt-3 leading-7 text-slate-600">{project.details}</p>
        <h2 className="mt-7 text-xl font-bold">Công nghệ sử dụng</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((technology) => <li key={technology} className="rounded-md bg-blue-50 px-3 py-2 text-sm text-blue-800">{technology}</li>)}
        </ul>
        <h2 className="mt-7 text-xl font-bold">Tính năng</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
          {project.features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
      </article>
      <Link href="/projects" className="mt-6 inline-block font-semibold text-blue-700 hover:underline">← Quay lại danh sách dự án</Link>
    </section>
  );
}
