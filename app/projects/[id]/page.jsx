export default async function ProjectDetailPage({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;

  const projectData = {
    "1": { 
      title: "Website Portfolio cá nhân", 
      description: "Đây là dự án portfolio cá nhân được xây dựng bằng Next.js App Router kết hợp Tailwind CSS. Trang web tích hợp đầy đủ các tính năng như layout chung, danh sách kỹ năng và form liên hệ tương tác." 
    },
    "2": { 
      title: "Ứng dụng bán hàng thương mại điện tử", 
      description: "Dự án mô phỏng cửa hàng trực tuyến, cho phép quản lý danh mục sản phẩm, xem thông tin chi tiết từng mặt hàng và thao tác giỏ hàng cơ bản." 
    },
  };

  const project = projectData[id];

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-10 max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Không tìm thấy dự án</h1>
        <p className="text-gray-600 mb-6">Xin lỗi, dự án bạn đang tìm kiếm không tồn tại hoặc ID không hợp lệ.</p>
        <a href="/projects" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium transition">
          ← Quay lại danh sách dự án
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10 max-w-2xl">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{project.title}</h1>
      <p className="text-gray-700 text-lg mb-6 leading-relaxed">{project.description}</p>
      
      <a href="/projects" className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 font-medium transition">
        ← Quay lại danh sách dự án
      </a>
    </div>
  );
}