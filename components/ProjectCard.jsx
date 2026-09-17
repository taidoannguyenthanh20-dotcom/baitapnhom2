import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="text-gray-600 mb-2">{project.desc}</p>
      <Link href={`/projects/${project.id}`} className="text-blue-500 hover:underline">
        Xem chi tiết
      </Link>
    </div>
  );
}