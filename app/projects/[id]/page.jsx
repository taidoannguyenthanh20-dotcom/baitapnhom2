import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export default async function ProjectDetailPage({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  // Search by project ID string or 1-based index (e.g. /projects/1 -> projects[0])
  const numericId = parseInt(id, 10);
  const project =
    projects.find((p) => p.id === id) ||
    (!isNaN(numericId) && numericId > 0 && numericId <= projects.length
      ? projects[numericId - 1]
      : null);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-8 py-6 max-w-4xl mx-auto">
      {/* Back button and route indicator */}
      <div className="flex items-center justify-between">
        <Link
          href="/projects"
          className="text-xs font-semibold text-zinc-400 hover:text-zinc-100 flex items-center gap-1"
        >
          ← Quay lại Danh sách Dự án
        </Link>
        <span className="text-xs text-zinc-500 font-mono">
          Dynamic Route: /projects/{id}
        </span>
      </div>

      {/* Main Content */}
      <div className="p-8 rounded-3xl bg-zinc-900/90 border border-zinc-800 space-y-8 shadow-xl">
        {/* Project Image Banner */}
        {project.image && (
          <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 relative">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="space-y-3 border-b border-zinc-800 pb-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold">
              Chi tiết Dự án #{id}
            </span>
            {project.featured && (
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                Dự án Tiêu biểu
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            {project.name}
          </h1>

          <p className="text-zinc-300 text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Detailed About */}
        {project.about && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-zinc-100">
              📌 Tổng quan & Kiến trúc dự án
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed whitespace-pre-line">
              {project.about}
            </p>
          </div>
        )}

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-zinc-100">
              ⚡ Tính năng chính đã triển khai
            </h3>
            <ul className="space-y-2">
              {project.features.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-zinc-300"
                >
                  <span className="text-blue-400 font-bold">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="space-y-3 pt-4 border-t border-zinc-800">
          <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Công nghệ & Thư viện sử dụng
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-200 text-xs font-medium border border-zinc-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap gap-4 pt-6 border-t border-zinc-800">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-md shadow-emerald-500/20"
            >
              🚀 Truy cập Live Demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-semibold text-sm transition-all border border-zinc-700"
            >
              💻 Xem Mã nguồn GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
