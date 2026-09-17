export default function ProjectDetail({ params }) {
  // Yêu cầu Dynamic Routing
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold">Chi tiết Project {params.id}</h1>
      <p className="mt-4 text-gray-600">Đường dẫn hiện tại đang là: /projects/{params.id}</p>
    </div>
  );
}
