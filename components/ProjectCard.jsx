import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <article className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex h-40 items-center justify-center rounded-xl bg-blue-100 text-4xl">
        💻
      </div>

      <h2 className="mt-5 text-2xl font-bold">{project.title}</h2>

      <p className="mt-3 text-gray-600">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm"
          >
            {technology}
          </span>
        ))}
      </div>

      <Link
        href={`/projects/${project.id}`}
        className="mt-5 inline-block text-blue-600"
      >
        Xem chi tiết →
      </Link>
    </article>
  );
}