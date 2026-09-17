import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import projects from "@/data/projects.js";

// Hỗ trợ Static Generation cho dynamic route [id]
export function generateStaticParams() {
  return projects.map((project) => ({
    id: String(project.id),
  }));
}

// Dynamic SEO metadata
export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => String(p.id) === String(id));

  if (!project) {
    return {
      title: "Không tìm thấy dự án | Portfolio",
    };
  }

  return {
    title: `${project.name} | Chi tiết dự án #${project.id}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => String(p.id) === String(id));

  if (!project) {
    notFound();
  }

  // Chuẩn hóa đường dẫn ảnh
  const normalizedImage = project.image
    ? project.image.replace(/^\.\.\/public/, "")
    : null;

  // Tìm project kế tiếp hoặc trước đó để điều hướng thuận tiện
  const currentIndex = projects.findIndex((p) => String(p.id) === String(id));
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Breadcrumb & Dynamic Route badge */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Link
            href="/projects"
            className="hover:text-blue-400 transition-colors"
          >
            Dự án
          </Link>
          <span>/</span>
          <span className="text-white font-medium">{project.name}</span>
        </div>

        <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/30">
          Dynamic Route: /projects/{id}
        </span>
      </div>

      {/* Header Info */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">{project.icon}</span>
          <div>
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
              Project #{project.id}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              {project.name}
            </h1>
          </div>
        </div>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mt-4">
          {project.description}
        </p>
      </div>

      {/* Media Screenshot */}
      <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
        {normalizedImage ? (
          <Image
            src={normalizedImage}
            alt={project.name}
            width={900}
            height={480}
            className="w-full h-auto max-h-[480px] object-cover mx-auto"
          />
        ) : (
          <div className="h-64 flex items-center justify-center text-7xl bg-slate-900/50">
            {project.icon || "💻"}
          </div>
        )}
      </div>

      {/* Chi tiết công nghệ & Thông tin */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
        <div className="sm:col-span-2 space-y-4">
          <h3 className="text-lg font-bold text-white">
            Công Nghệ & Kỹ Thuật Sử Dụng
          </h3>
          <p className="text-sm text-slate-400">
            Dự án được xây dựng và kết hợp các thư viện, framework chuyên sâu
            sau:
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3 sm:border-l sm:border-slate-800 sm:pl-6">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Thông tin định danh
          </h4>
          <div className="text-xs space-y-2 text-slate-300">
            <p>
              <span className="text-slate-500">ID:</span> #{project.id}
            </p>
            <p>
              <span className="text-slate-500">Slug:</span>{" "}
              <code className="bg-slate-800 px-1.5 py-0.5 rounded text-blue-400 font-mono">
                {project.slug}
              </code>
            </p>
            <p>
              <span className="text-slate-500">Trạng thái:</span> Hoàn thành
            </p>
          </div>
        </div>
      </div>

      {/* Điều hướng Trước / Sau & Quay lại */}
      <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.id}`}
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Dự án trước: {prevProject.name}</span>
          </Link>
        ) : (
          <div className="hidden sm:block"></div>
        )}

        <Link
          href="/projects"
          className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold border border-slate-700 transition-colors"
        >
          Tất cả dự án
        </Link>

        {nextProject ? (
          <Link
            href={`/projects/${nextProject.id}`}
            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>Dự án sau: {nextProject.name}</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        ) : (
          <div className="hidden sm:block"></div>
        )}
      </div>
    </div>
  );
}
