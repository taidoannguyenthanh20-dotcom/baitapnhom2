export default function Loading() {
  return (
    <div className="p-8 text-center">
      <div className="animate-spin inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mb-2"></div>
      <p className="text-gray-600 font-medium">Đang tải thông tin chi tiết dự án...</p>
    </div>
  );
}