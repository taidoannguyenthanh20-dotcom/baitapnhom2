import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg p-5 shadow-sm flex flex-col h-full">
      <h3 className="text-xl font-bold mb-2">{project.name}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
      <div className="flex gap-2 mb-4">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded">{tech}</span>
        ))}
      </div>
      <Link href={`/projects/${project.id}`} className="bg-black text-white text-center py-2 rounded">
        Xem chi tiết
      </Link>
    </div>
  );
}