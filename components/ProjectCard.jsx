import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm bg-white">
      <div className="p-5">
        <h3 className="font-bold text-xl mb-2">{project.name}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        <Link 
          href={`/projects/${project.id}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
}