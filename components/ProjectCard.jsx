import Link from "next/link";

export default function ProjectCard({ project }) {
  const { id, name, description, techStack, liveLink, githubLink, featured, image } = project;

  return (
    <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800/90 overflow-hidden hover:border-zinc-700 transition-all flex flex-col justify-between group shadow-lg">
      <div>
        {/* Project Image Banner */}
        {image && (
          <div className="w-full h-48 sm:h-52 overflow-hidden bg-zinc-950 border-b border-zinc-800/80 relative group">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60"></div>
          </div>
        )}

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-blue-400 font-semibold bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
              Dự án #{id}
            </span>
            {featured && (
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Tiêu biểu
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors mb-2">
            {name}
          </h3>

          <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
            {description}
          </p>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-4 bg-zinc-950/60 border-t border-zinc-800/80 flex items-center justify-between">
        <Link
          href={`/projects/${id}`}
          className="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 group/btn"
        >
          Xem chi tiết
          <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
        </Link>

        <div className="flex items-center gap-3 text-xs text-zinc-400">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-100 transition-colors font-medium"
            >
              GitHub
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
