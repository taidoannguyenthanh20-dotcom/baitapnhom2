import Link from "next/link";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      
      {/* 1. Họ tên, Chức danh & Giới thiệu ngắn */}
      <section className="text-center mt-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Xin chào, tôi là Ngô Tiến Anh</h1>
        <h2 className="text-2xl text-gray-700 mb-4">sinh viên khoa công nghệ thông tin 2</h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Tôi là một người đam mê công nghệ và lập trình web. Tôi thích việc biến các ý tưởng thành những giao diện website đẹp mắt, mượt mà và mang lại trải nghiệm tốt cho người dùng.
        </p>
      </section>

      {/* 2. Kỹ năng nổi bật */}
      <section>
        <SectionTitle title="Kỹ năng nổi bật" description="Những công nghệ tôi tự tin nhất" />
        <div className="flex flex-wrap gap-3">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">React</span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">Next.js</span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">Tailwind CSS</span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">JavaScript</span>
        </div>
      </section>

      {/* 3. Một số dự án tiêu biểu */}
      <section>
        <SectionTitle title="Dự án tiêu biểu" description="Một vài sản phẩm cá nhân" />
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li><strong>Website Portfolio:</strong> Dự án giới thiệu bản thân xây dựng bằng Next.js và Tailwind CSS.</li>
          <li><strong>Ứng dụng Quản lý công việc:</strong> Todo-list app giúp theo dõi tiến độ công việc hàng ngày.</li>
        </ul>
      </section>

      {/* 4. Nút điều hướng đến các trang khác */}
      <section className="text-center mt-5">
        <Link 
          href="/about" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition inline-block font-semibold"
        >
          Khám phá thêm về tôi
        </Link>
      </section>

    </div>
  );
}
