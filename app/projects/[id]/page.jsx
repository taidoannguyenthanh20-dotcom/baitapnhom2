//
export default async function ProjectDetail({ params }) {
  const { id } = await params;
  
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Chi tiết Project {id}</h2>
      <p>Nội dung hiển thị thay đổi dựa trên URL: /projects/{id}</p>
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <p>Công nghệ sử dụng: React, Tailwind, Next.js</p>
      </div>
    </div>
  );
}
