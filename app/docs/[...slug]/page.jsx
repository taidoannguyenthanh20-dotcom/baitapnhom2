import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

// Mẫu các bài viết tài liệu theo chủ đề
const docArticles = {
  react: {
    title: "Tổng Quan Về Thư Viện React",
    description:
      "Thư viện JavaScript phổ biến nhất để xây dựng giao diện người dùng dựa trên các Component tái sử dụng.",
    content: [
      "React là một thư viện JavaScript mã nguồn mở được phát triển bởi Meta (Facebook).",
      "Triết lý cốt lõi của React xoay quanh Component-Based Architecture, Virtual DOM và Unidirectional Data Flow.",
      "Với React 19, các khái niệm như Actions, Server Components và Document Metadata được nâng cấp mạnh mẽ.",
    ],
  },
  "react/components": {
    title: "React Components & Kiến Trúc Thành Phần",
    description:
      "Khái niệm Component trong React: Cách chia nhỏ giao diện thành các khối độc lập, dễ kiểm thử và bảo trì.",
    content: [
      "Components cho phép bạn phân chia UI thành các phần độc lập, có thể tái sử dụng và suy nghĩ về từng phần riêng biệt.",
      "Trong Next.js App Router, Components mặc định được coi là React Server Components (RSC).",
      "Khi cần tương tác phía trình duyệt như State, Effect hoặc DOM events, sử dụng chỉ thị 'use client' ở đầu tệp.",
    ],
  },
  "react/components/props": {
    title: "Props Trong React & Cơ Chế Truyền Dữ Liệu",
    description:
      "Tìm hiểu cách truyền tham số (props) từ Component cha xuống Component con.",
    content: [
      "Props (viết tắt của Properties) là đối số truyền vào các React Component tương tự như tham số hàm trong JavaScript.",
      "Props là read-only (bất biến - immutable). Component con không được tự ý sửa đổi props nhận được từ cha.",
      "Props có thể truyền mọi kiểu dữ liệu trong JavaScript: String, Number, Boolean, Array, Object và cả JSX/Functions.",
    ],
  },
  nextjs: {
    title: "Next.js Framework & Xu Hướng Fullstack",
    description:
      "Framework hàng đầu cho React với khả năng Server-Side Rendering, Static Site Generation và App Router.",
    content: [
      "Next.js mở rộng khả năng của React với hệ thống định tuyến dựa trên thư mục (File-system based Routing).",
      "Hỗ trợ tối ưu hóa hình ảnh, font chữ, tự động nạp mã (code-splitting) và SEO vượt trội.",
    ],
  },
  "nextjs/app-router": {
    title: "Next.js App Router & Server Components",
    description:
      "Kiến trúc App Router mới nhất với thư mục app/, Layouts, Dynamic Routing và Catch-all Routing.",
    content: [
      "Thư mục app/ sử dụng cơ chế Server Components mặc định giúp giảm đáng kể dung lượng JavaScript gửi về client.",
      "Các quy ước tệp đặt tên đặc biệt: layout.jsx, page.jsx, loading.jsx, not-found.jsx.",
      "Catch-all Routing [...slug] cho phép một tệp page.jsx xử lý linh hoạt mọi cấp độ đường dẫn con.",
    ],
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const path = Array.isArray(slug) ? slug.join("/") : slug;
  const currentDoc = docArticles[path];

  return {
    title: currentDoc
      ? `${currentDoc.title} | Docs`
      : `Tài liệu: /docs/${path}`,
    description:
      currentDoc?.description ||
      `Tài liệu lập trình với Catch-all route /docs/${path}`,
  };
}

export default async function DocsCatchAllPage({ params }) {
  const { slug } = await params;
  const slugArray = Array.isArray(slug) ? slug : [slug];
  const currentPath = slugArray.join("/");
  const currentDoc = docArticles[currentPath];

  // Danh sách các link thử nghiệm catch-all route
  const testRoutes = [
    { title: "React Overview", path: "/docs/react" },
    { title: "React Components", path: "/docs/react/components" },
    { title: "React Props (3 cấp)", path: "/docs/react/components/props" },
    { title: "Next.js", path: "/docs/nextjs" },
    { title: "Next.js App Router", path: "/docs/nextjs/app-router" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Tiêu đề & Giải thích Catch-all */}
      <SectionTitle
        label="Catch-all Routing: app/docs/[...slug]/page.jsx"
        title="Trung Tâm Tài Liệu & Kiến Thức"
        description="Minh họa tính năng Catch-all Route của Next.js: bắt mọi cấp URL dưới tiền tố /docs/* và phân tích mảng slug."
        align="left"
      />

      {/* Thông số Route Catch-all hiện tại */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            Phân Tích Dynamic Slug
          </span>
          <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono">
            Độ sâu: {slugArray.length} cấp
          </span>
        </div>

        {/* Breadcrumb trực quan */}
        <div>
          <div className="text-xs text-slate-400 mb-1.5">Breadcrumb:</div>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="text-slate-500 font-mono">/docs</span>
            {slugArray.map((segment, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-slate-600">/</span>
                <span className="px-2.5 py-1 rounded-md bg-blue-600/20 text-blue-400 border border-blue-500/30 font-mono font-medium">
                  {segment}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Giá trị params nhận được */}
        <div>
          <div className="text-xs text-slate-400 mb-1.5">
            Giá trị params.slug:
          </div>
          <pre className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-xs font-mono text-emerald-400 overflow-x-auto">
            {JSON.stringify({ slug: slugArray }, null, 2)}
          </pre>
        </div>
      </div>

      {/* Nội dung tài liệu theo route */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
        {currentDoc ? (
          <>
            <div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
                Chủ đề đã tìm thấy
              </span>
              <h3 className="text-2xl font-bold text-white mt-3 mb-2">
                {currentDoc.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {currentDoc.description}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800/80">
              <h4 className="text-sm font-semibold text-slate-300">
                Điểm nổi bật:
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                {currentDoc.content.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-blue-500 shrink-0 mt-0.5">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase tracking-wider">
              Tài liệu linh hoạt (Dynamic Topic)
            </span>
            <h3 className="text-2xl font-bold text-white">
              Đường dẫn: /docs/{currentPath}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Bạn đang duyệt tài liệu ở đường dẫn sâu với các phần tử đường dẫn:{" "}
              <strong className="text-white font-mono">
                [{slugArray.join(", ")}]
              </strong>
              . Trang Catch-all Route này tự động xử lý mọi mức độ lồng nhau của
              URL mà không cần tạo trước từng file tương ứng.
            </p>
          </div>
        )}
      </div>

      {/* Điều hướng thử nghiệm các cấp độ route */}
      <div className="pt-6 border-t border-slate-800">
        <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
          Thử nghiệm các đường dẫn Catch-all mẫu:
        </h4>
        <div className="flex flex-wrap gap-2.5">
          {testRoutes.map((test) => {
            const isCurrent = test.path === `/docs/${currentPath}`;
            return (
              <Link
                key={test.path}
                href={test.path}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isCurrent
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : "bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/80"
                }`}
              >
                {test.title} ({test.path})
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
