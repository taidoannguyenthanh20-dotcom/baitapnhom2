import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between">
      <div className="p-6">
        <div className="text-4xl mb-4">{project.icon || "🚀"}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t, idx) => (
            <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-medium">{t}</span>
          ))}
        </div>
      </div>
      <div className="p-6 pt-0">
        <Link href={`/projects/${project.id}`} className="block text-center w-full py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm shadow-sm">
          Xem Chi Tiết
        </Link>
      </div>
    </div>
  );
}