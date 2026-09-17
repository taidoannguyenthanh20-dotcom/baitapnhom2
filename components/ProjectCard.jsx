import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col">
      {/* Khung hiển thị ảnh dự án */}
      <div className="h-48 w-full overflow-hidden bg-slate-100">
        <img
          src={project.image || "https://picsum.photos/600/400"}
          alt={project.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{project.name}</h3>
        <p className="text-slate-600 text-sm mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, idx) => (
            <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium">
              {t}
            </span>
          ))}
        </div>
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-slate-900 text-white rounded-lg hover:bg-indigo-600 font-medium text-sm transition-colors"
        >
          Xem chi tiết →
        </Link>
      </div>
    </div>
  );
}