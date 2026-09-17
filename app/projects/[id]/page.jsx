import Link from 'next/link';

export default function ProjectDetail({ params }) {
  const { id } = params;
  
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm border mt-8">
      <h2 className="text-3xl font-bold mb-4">Chi tiết Dự án {id}</h2>
      <p className="text-gray-700 mb-6">
        Đây là nội dung hiển thị linh hoạt dựa trên Dynamic Route <code>/projects/[id]</code>. 
        Mã ID hiện tại trên URL là: <strong>{id}</strong>.
      </p>
      
      <div className="bg-gray-100 p-4 rounded mb-6 text-sm font-mono text-gray-600">
        Dữ liệu thực tế sẽ được fetch (ví dụ từ API hoặc Database) bằng ID này để hiển thị mô tả chi tiết, hình ảnh, và link Github.
      </div>

      <Link href="/projects" className="text-blue-600 hover:underline">
        &larr; Quay lại danh sách dự án
      </Link>
    </div>
  );
}
