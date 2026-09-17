import Link from "next/link";
import { notFound } from "next/navigation";

const docsTree = {
  react: {
    title: "React",
    description:
      "React là thư viện JavaScript để xây dựng giao diện người dùng dựa trên component. Mỗi mục con bên dưới là một cấp URL sâu hơn.",
    points: [
      "Component là khối giao diện độc lập, có thể tái sử dụng.",
      "Props truyền dữ liệu từ component cha xuống component con.",
      "State lưu dữ liệu thay đổi theo tương tác người dùng.",
    ],
    children: {
      components: {
        title: "Components",
        description:
          "Component chia giao diện thành các phần nhỏ, dễ quản lý và tái sử dụng trong nhiều trang.",
        points: [
          "Một component là một hàm trả về JSX.",
          "Đặt tên component bằng chữ cái đầu viết hoa.",
          "Mỗi component nên làm một việc duy nhất.",
        ],
        children: {
          props: {
            title: "Props",
            description:
              "Props là cách component cha truyền dữ liệu xuống component con, tương tự tham số của hàm.",
            points: [
              "Truyền props: <SkillCard skill={skill} />.",
              "Nhận props: function SkillCard({ skill }) { ... }.",
              "Props là read-only, không được sửa trực tiếp.",
            ],
          },
        },
      },
      state: {
        title: "State",
        description:
          "State lưu trữ dữ liệu có thể thay đổi, ví dụ nội dung form hoặc trạng thái bật/tắt của menu.",
        points: [
          "Dùng useState trong Client Component.",
          "Gọi setState để React render lại giao diện.",
          "Không thay đổi state trực tiếp, luôn tạo giá trị mới.",
        ],
      },
    },
  },
  nextjs: {
    title: "Next.js",
    description:
      "Next.js là framework React với routing dựa trên file, server component và nhiều quy ước file đặc biệt.",
    points: [
      "Thư mục trong app/ tương ứng với từng đoạn URL.",
      "File page.jsx tạo nội dung cho route, layout.jsx tạo khung dùng chung.",
      "Dynamic segment [id] và catch-all [...slug] tạo route từ dữ liệu.",
    ],
    children: {
      "app-router": {
        title: "App Router",
        description:
          "App Router dùng thư mục và file page.jsx, layout.jsx, loading.jsx, not-found.jsx để định nghĩa giao diện từng route.",
        points: [
          "app/layout.jsx là layout gốc, bắt buộc có <html> và <body>.",
          "loading.jsx hiển thị khi route đang tải dữ liệu.",
          "not-found.jsx hiển thị khi gọi notFound().",
        ],
        children: {
          "dynamic-routes": {
            title: "Dynamic Routes",
            description:
              "Thư mục [id] tạo route động: /projects/portfolio, /projects/orywt-gallery dùng chung một file page.",
            points: [
              "Đọc giá trị qua params, ở Next.js 16 phải await params.",
              "Dùng generateStaticParams để prerender các id đã biết.",
              "Id không tồn tại thì gọi notFound().",
            ],
          },
        },
      },
    },
  },
};

function resolveTopic(slug) {
  let node = { children: docsTree };
  for (const part of slug) {
    node = node?.children?.[part];
    if (!node) return null;
  }
  return node;
}

function prettify(segment) {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function nodeRootTitle(root) {
  return docsTree[root]?.title ?? prettify(root);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const node = resolveTopic(slug);

  if (!node) {
    return { title: "Không tìm thấy tài liệu" };
  }

  return { title: `Docs: ${node.title}`, description: node.description };
}

const examples = [
  "/docs/react",
  "/docs/react/components",
  "/docs/react/components/props",
  "/docs/nextjs/app-router/dynamic-routes",
];

export default async function DocsPage({ params }) {
  const { slug } = await params;
  const node = resolveTopic(slug);

  if (!node) {
    notFound();
  }

  const childEntries = Object.entries(node.children ?? {});
  const crumbs = slug.map((part, index) => ({
    name: index === 0 ? nodeRootTitle(slug[0]) : prettify(part),
    href: `/docs/${slug.slice(0, index + 1).join("/")}`,
  }));

  return (
    <div className="container-page py-16">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <span aria-hidden className="text-slate-300">
          /
        </span>
        <span className="font-medium text-slate-500">docs</span>
        {crumbs.map((crumb) => (
          <span key={crumb.href} className="flex items-center gap-2">
            <span aria-hidden className="text-slate-300">
              /
            </span>
            <Link href={crumb.href} className="nav-link">
              {crumb.name}
            </Link>
          </span>
        ))}
      </nav>

      <div className="mt-8">
        <p className="label">Documentation · Catch-all route</p>
        <h1 className="mt-3 text-4xl md:text-5xl">{node.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          {node.description}
        </p>
      </div>

      <section className="card mt-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl">Đường dẫn hiện tại</h2>
          <span className="chip">[...slug]</span>
        </div>
        <p className="mt-4 rounded-xl bg-slate-950 px-4 py-3 font-mono text-sm break-all text-emerald-300">
          /docs/{slug.join("/")}
        </p>
        <p className="mt-4 text-sm leading-6 text-slate-600">
          URL này do file{" "}
          <span className="font-mono">app/docs/[...slug]/page.jsx</span> xử lý.
          Mảng <span className="font-mono">slug</span> có {slug.length} phần tử:{" "}
          <span className="font-mono">[{slug.map((s) => `"${s}"`).join(", ")}]</span>.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl">Ý chính</h2>
        <ul className="mt-5 space-y-3">
          {node.points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-slate-600">
              <span aria-hidden className="mt-0.5 font-bold text-blue-600">
                ✓
              </span>
              <span className="leading-7">{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {childEntries.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-2xl">Đọc tiếp</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {childEntries.map(([key, child]) => (
              <Link
                key={key}
                href={`/docs/${[...slug, key].join("/")}`}
                className="card card-hover group block"
              >
                <h3 className="text-lg transition group-hover:text-blue-600">
                  {child.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {child.description}
                </p>
                <p className="mt-4 font-mono text-xs break-all text-blue-600">
                  /docs/{[...slug, key].join("/")} →
                </p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-10">
        <h2 className="text-2xl">Thử các URL catch-all khác</h2>
        <div className="mt-5 space-y-3">
          {examples.map((example) => (
            <Link
              key={example}
              href={example}
              className="card card-hover block font-mono text-sm text-slate-800"
            >
              {example} →
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
