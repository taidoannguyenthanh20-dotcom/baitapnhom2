import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <article className="panel flex flex-col">
      <span aria-hidden="true" className="text-3xl">{project.icon}</span>
      <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{project.description}</p>
      <ul aria-label="Công nghệ sử dụng" className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li key={technology} className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700">{technology}</li>
        ))}
      </ul>
      <Link href={`/projects/${project.id}`} className="mt-5 text-sm font-semibold text-blue-700 hover:underline" aria-label={`Xem chi tiết ${project.title}`}>
        Xem chi tiết →
      </Link>
    </article>
  );
}
