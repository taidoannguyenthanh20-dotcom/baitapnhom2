import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    { id: 1, title: "Website Portfolio cá nhân", desc: "Xây dựng bằng Next.js & Tailwind CSS." },
    { id: 2, title: "Ứng dụng bán hàng thương mại điện tử", desc: "Trang web quản lý sản phẩm và giỏ hàng mini." },
  ];

  return (
    <div className="container mx-auto px-6 py-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Danh sách dự án</h1>
      <div className="grid gap-6">
        {projects.map((p) => (
          <div key={p.id} className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">{p.title}</h2>
            <p className="text-gray-600 mb-4">{p.desc}</p>
            <Link href={`/projects/${p.id}`} className="text-blue-500 font-medium hover:underline inline-block">
              Xem chi tiết →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}