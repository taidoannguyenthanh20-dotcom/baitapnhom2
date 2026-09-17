import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white p-6">
      <h2 className="text-xl font-bold">
        {project.title}
      </h2>

      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-[var(--primary-light)] px-3 py-1 text-xs text-purple-700"
          >
            {technology}
          </span>
        ))}
      </div>

      <Link
        href={`/projects/${project.id}`}
        className="mt-5 inline-block text-sm font-semibold text-[var(--primary)] hover:underline"
      >
        View Details →
      </Link>
    </div>
  );
}