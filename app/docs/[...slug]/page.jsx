export default function DocsPage({ params }) {
  const slugArray = params.slug || [];
  
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold mb-6">Tài liệu Hệ thống</h2>
      <div className="bg-white p-6 rounded shadow border">
        <p className="mb-4">Bạn đang truy cập Catch-all Route. Đường dẫn hiện tại được phân tích thành mảng:</p>
        <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
          {JSON.stringify(slugArray, null, 2)}
        </pre>
        <p className="mt-4 text-gray-600">
          Ví dụ: Nếu URL là <code>/docs/react/components/props</code>, mảng sẽ chứa 3 phần tử. Tính năng này thích hợp làm docs hướng dẫn sử dụng Project.
        </p>
      </div>
    </div>
  );
}
