import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="border border-gray-200 rounded-lg p-5 shadow-xs hover:border-gray-400 transition bg-white flex flex-col justify-between space-y-4">
      <div>
        <span className="text-3xl">{project.icon}</span>
        <h3 className="text-xl font-bold text-gray-900 mt-2">{project.name}</h3>
        <p className="text-gray-600 mt-2 text-sm leading-relaxed">{project.description}</p>
        <p className="text-xs font-semibold text-blue-600 mt-3">Công nghệ: {project.tech.join(", ")}</p>
      </div>
      <Link 
        href={`/projects/${project.id}`} 
        className="inline-block text-center border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium text-sm py-2 px-4 rounded-md transition shadow-xs"
      >
        Xem chi tiết →
      </Link>
    </div>
  );
}