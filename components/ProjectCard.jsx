import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }) {
  if (!project) return null;

  // Chuẩn hóa đường dẫn ảnh từ "../public/..." thành "/..."
  const normalizedImage = project.image
    ? project.image.replace(/^\.\.\/public/, "")
    : null;

  return (
    <div className="group rounded-2xl bg-slate-900/70 border border-slate-800 overflow-hidden hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col">
      {/* Project Image Preview */}
      <div className="relative h-48 sm:h-52 w-full bg-slate-950 overflow-hidden flex items-center justify-center border-b border-slate-800/80">
        {normalizedImage ? (
          <Image
            src={normalizedImage}
            alt={project.name}
            width={600}
            height={320}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="text-5xl">{project.icon || "💻"}</div>
        )}
        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700/60 text-lg flex items-center gap-1.5 shadow">
          <span>{project.icon}</span>
          <span className="text-xs font-semibold text-slate-300">
            #{project.id}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {project.name}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies?.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/90 text-slate-300 border border-slate-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* View Details Link */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>Xem chi tiết</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
          <span className="text-xs text-slate-500 font-mono">
            /projects/{project.id}
          </span>
        </div>
      </div>
    </div>
  );
}
