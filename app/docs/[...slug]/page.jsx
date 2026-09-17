import Link from "next/link";

// Nội dung tài liệu thực tế tương ứng từng đường dẫn
const docsDatabase = {
  "react": {
    title: "Tổng quan về React",
    desc: "React là thư viện JavaScript phổ biến nhất hiện nay để xây dựng giao diện người dùng (UI) dựa trên các Component độc lập.",
    details: [
      "Kiến trúc hướng thành phần (Component-based architecture).",
      "Virtual DOM giúp tối ưu tốc độ cập nhật và render giao diện.",
      "Hệ sinh thái phong phú với hàng nghìn thư viện hỗ trợ."
    ]
  },
  "react/components": {
    title: "React Components",
    desc: "Component là khối xây dựng cơ bản của mọi ứng dụng React. Chúng nhận đầu vào (props) và trả về giao diện JSX.",
    details: [
      "Function Component: Cách viết chuẩn hiện đại kết hợp React Hooks.",
      "Tái sử dụng: Viết một lần, sử dụng ở nhiều vị trí khác nhau trong dự án.",
      "Đóng gói: Tách biệt logic và giao diện giúp code sạch, dễ bảo trì."
    ]
  },
  "react/components/props": {
    title: "Props trong React",
    desc: "Props (Properties) là cơ chế truyền dữ liệu một chiều từ Component cha xuống Component con.",
    details: [
      "Read-only: Component con không được phép trực tiếp sửa đổi props nhận được.",
      "Hỗ trợ đa dạng kiểu dữ liệu: String, Number, Boolean, Array, Object và Functions.",
      "Giúp component trở nên linh hoạt và có khả năng tùy biến cao."
    ]
  },
  "nextjs": {
    title: "Làm quen với Next.js & App Router",
    desc: "Next.js là React framework hỗ trợ Server-Side Rendering (SSR), Static Site Generation (SSG) và hệ thống định tuyến hiện đại.",
    details: [
      "Routing dựa trên hệ thống thư mục (Folder-based routing).",
      "Mặc định là Server Component giúp tối ưu SEO và tốc độ tải trang.",
      "Tích hợp sẵn công cụ nạp CSS, tối ưu hình ảnh và font chữ."
    ]
  }
};

export default async function DocsPage({ params }) {
  const { slug } = await params;
  const pathKey = slug.join("/");
  
  // Lấy nội dung theo đường dẫn hoặc hiển thị mặc định
  const doc = docsDatabase[pathKey] || {
    title: `Tài liệu: ${slug[slug.length - 1].toUpperCase()}`,
    desc: `Tài liệu chuyên đề về ${pathKey}. Nội dung đang được cập nhật thêm.`,
    details: [
      "Xem thêm tài liệu chính thức từ nhà phát triển.",
      "Áp dụng vào các bài tập thực hành cá nhân."
    ]
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Breadcrumb điều hướng nhiều cấp */}
      <nav className="flex items-center space-x-2 text-sm text-slate-500 bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
        <Link href="/" className="hover:text-indigo-600 transition">Trang chủ</Link>
        <span>/</span>
        <span className="text-slate-700 font-medium">Docs</span>
        {slug.map((item, index) => {
          const href = `/docs/${slug.slice(0, index + 1).join("/")}`;
          const isLast = index === slug.length - 1;
          return (
            <span key={index} className="flex items-center space-x-2">
              <span>/</span>
              {isLast ? (
                <span className="text-indigo-600 font-semibold capitalize">{item}</span>
              ) : (
                <Link href={href} className="hover:text-indigo-600 capitalize transition">{item}</Link>
              )}
            </span>
          );
        })}
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Menu danh mục bên trái */}
        <aside className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm h-fit space-y-3">
          <h3 className="font-bold text-slate-900 text-sm tracking-wider uppercase">Chủ đề tài liệu</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link 
                href="/docs/react" 
                className={`block px-3 py-2 rounded-lg transition ${pathKey === "react" ? "bg-indigo-50 text-indigo-700 font-semibold" : "text-slate-600 hover:bg-slate-50"}`}
              >
                1. React Overview
              </Link>
            </li>
            <li className="pl-3">
              <Link 
                href="/docs/react/components" 
                className={`block px-3 py-2 rounded-lg transition ${pathKey === "react/components" ? "bg-indigo-50 text-indigo-700 font-semibold" : "text-slate-600 hover:bg-slate-50"}`}
              >
                ↳ Components
              </Link>
            </li>
            <li className="pl-6">
              <Link 
                href="/docs/react/components/props" 
                className={`block px-3 py-2 rounded-lg transition ${pathKey === "react/components/props" ? "bg-indigo-50 text-indigo-700 font-semibold" : "text-slate-600 hover:bg-slate-50"}`}
              >
                ↳ Props
              </Link>
            </li>
            <li>
              <Link 
                href="/docs/nextjs" 
                className={`block px-3 py-2 rounded-lg transition ${pathKey === "nextjs" ? "bg-indigo-50 text-indigo-700 font-semibold" : "text-slate-600 hover:bg-slate-50"}`}
              >
                2. Next.js App Router
              </Link>
            </li>
          </ul>
        </aside>

        {/* Nội dung chi tiết bài viết bên phải */}
        <article className="md:col-span-2 bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-5">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {doc.title}
          </h1>
          <p className="text-slate-600 leading-relaxed text-base">
            {doc.desc}
          </p>

          <hr className="border-slate-100 my-4" />

          <h3 className="text-lg font-bold text-slate-800">Các điểm kiến thức trọng tâm:</h3>
          <ul className="space-y-2 text-slate-600">
            {doc.details.map((point, i) => (
              <li key={i} className="flex items-start">
                <span className="text-indigo-600 mr-2 font-bold">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}