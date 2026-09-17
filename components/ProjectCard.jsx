import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <article className="card card-hover group flex h-full flex-col">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-blue-600">
          {project.number}
        </span>
        <span className="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase">
          {project.category}
        </span>
      </div>

      <h2 className="mt-6 text-2xl transition group-hover:text-blue-600">
        {project.title}
      </h2>
      <p className="mt-4 flex-1 leading-7 text-slate-600">{project.summary}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span className="chip-plain" key={technology}>
            {technology}
          </span>
        ))}
      </div>

      <Link
        href={`/projects/${project.id}`}
        className="mt-7 inline-flex items-center font-semibold text-blue-600 transition group-hover:translate-x-1 hover:text-blue-800"
      >
        Xem chi tiết <span aria-hidden className="ml-2">→</span>
      </Link>
    </article>
  );
}
