import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;

  const project = projects.find(
    (item) => item.id === id
  );

  if (!project) {
    notFound();
  }

  return (
    <main>
      <section className="mx-auto max-w-4xl px-6 py-20">
        <Link
          href="/projects"
          className="text-sm font-semibold text-[var(--primary)] hover:underline"
        >
          ← Back to Projects
        </Link>

        <div className="mt-8 rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold text-[var(--primary)]">
            Project {project.id}
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            {project.title}
          </h1>

          <p className="mt-5 leading-7 text-[var(--muted)]">
            {project.description}
          </p>

          <div className="mt-6">
            <h2 className="text-lg font-bold">
              Technologies
            </h2>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-[var(--primary-light)] px-3 py-1 text-xs font-medium text-purple-700"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--primary)]"
            >
              View on GitHub ↗
            </a>
          )}
        </div>
      </section>
    </main>
  );
}