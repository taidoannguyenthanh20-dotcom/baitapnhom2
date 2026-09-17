import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById, projects } from "../../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return { title: "Không tìm thấy dự án" };
  }

  return { title: project.title, description: project.summary };
}

export default async function ProjectDetail({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <section className="container-page max-w-4xl py-16">
      <Link
        href="/projects"
        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
      >
        ← Quay lại danh sách dự án
      </Link>

      <p className="label mt-10">
        {project.category} · {project.year}
      </p>
      <h1 className="mt-3 text-4xl md:text-5xl">{project.title}</h1>
      <p className="mt-5 text-lg leading-8 text-slate-600">
        {project.description}
      </p>

      <div className="mt-8">
        <h2 className="text-xl">Công nghệ sử dụng</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="chip">
              {technology}
            </span>
          ))}
        </div>
      </div>

      <div className="card mt-8">
        <h2 className="text-xl">Mục tiêu dự án</h2>
        <p className="mt-3 leading-8 text-slate-600">{project.goal}</p>
      </div>

      <div className="card mt-6">
        <h2 className="text-xl">Tính năng chính</h2>
        <ul className="mt-4 space-y-3">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-slate-600"
            >
              <span aria-hidden className="mt-0.5 font-bold text-blue-600">
                ✓
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card mt-6 border-blue-100 bg-blue-50/50">
        <h2 className="text-xl">Kết quả đạt được</h2>
        <p className="mt-3 leading-8 text-slate-600">{project.outcome}</p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Truy cập website thực tế ↗
          </a>
        ) : null}
        <Link href="/projects" className="btn-secondary">
          ← Xem tất cả dự án
        </Link>
      </div>
    </section>
  );
}
