import Link from "next/link";

// Docs content data
const docsContent = {
  react: {
    title: "React Documentation",
    icon: "⚛️",
    description: "Tìm hiểu về React - thư viện UI mạnh mẽ của Facebook",
    content: `React là một thư viện JavaScript để xây dựng giao diện người dùng. React làm cho việc tạo UI tương tác trở nên dễ dàng hơn bằng cách chia nhỏ UI thành các component độc lập.`,
    links: [
      { href: "/docs/react/components", label: "Components" },
      { href: "/docs/react/hooks", label: "Hooks" },
      { href: "/docs/react/props", label: "Props" },
    ],
  },
  "react/components": {
    title: "React Components",
    icon: "🧩",
    description: "Tìm hiểu cách tạo và sử dụng Components trong React",
    content: `Components là nền tảng của React. Mỗi component là một đoạn code độc lập có thể tái sử dụng. Components có thể là Function Component hoặc Class Component.`,
    links: [
      { href: "/docs/react/components/props", label: "Component Props" },
      { href: "/docs/react/components/state", label: "Component State" },
    ],
  },
  "react/components/props": {
    title: "React Props",
    icon: "📦",
    description: "Props là cách truyền dữ liệu từ component cha xuống component con",
    content: `Props (Properties) là dữ liệu được truyền vào component từ bên ngoài. Props là read-only - component con không được thay đổi props nhận được từ component cha.`,
    links: [
      { href: "/docs/react/components", label: "← Quay lại Components" },
    ],
  },
  "react/hooks": {
    title: "React Hooks",
    icon: "🎣",
    description: "Hooks cho phép sử dụng state và các tính năng React trong function component",
    content: `Hooks được giới thiệu trong React 16.8. Phổ biến nhất là useState, useEffect, useContext. Hooks giúp function components có đầy đủ tính năng như class components.`,
    links: [
      { href: "/docs/react", label: "← Quay lại React" },
      { href: "/docs/nextjs", label: "Next.js →" },
    ],
  },
  nextjs: {
    title: "Next.js Documentation",
    icon: "▲",
    description: "Framework React với SSR, SSG và App Router hiện đại",
    content: `Next.js là một React framework mạnh mẽ hỗ trợ Server-Side Rendering (SSR), Static Site Generation (SSG), API Routes và App Router với nhiều tính năng hiện đại.`,
    links: [
      { href: "/docs/nextjs/routing", label: "Routing" },
      { href: "/docs/nextjs/app-router", label: "App Router" },
    ],
  },
  "nextjs/routing": {
    title: "Next.js Routing",
    icon: "🗺️",
    description: "Hệ thống routing mạnh mẽ của Next.js với App Router",
    content: `Next.js App Router sử dụng hệ thống file-based routing. Mỗi folder trong thư mục app/ là một route. Dynamic routes sử dụng [param], Catch-all dùng [...slug].`,
    links: [
      { href: "/docs/nextjs", label: "← Quay lại Next.js" },
      { href: "/docs/nextjs/routing/dynamic", label: "Dynamic Routes" },
    ],
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const slugArr = slug || [];
  const key = slugArr.join("/");
  const page = docsContent[key];
  return {
    title: page
      ? `${page.title} | Docs | Nguyen Thai Tuan`
      : `Docs: ${key} | Nguyen Thai Tuan`,
    description: page?.description,
  };
}

export default async function DocsPage({ params }) {
  const { slug: rawSlug } = await params;
  const slug = rawSlug || [];
  const key = slug.join("/");
  const page = docsContent[key];

  const codeExamples = {
    react: `// React Function Component
export default function MyComponent({ name, age, isStudent, skills }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
      <ul>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </div>
  );
}`,
    "react/components": `// Server Component (default)
export default function Card({ title, description }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

// Client Component
"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`,
    "react/hooks": `// useState - quản lý state
const [count, setCount] = useState(0);

// useEffect - side effects
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);

// Custom Hook
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) ?? initialValue;
  });
  return [value, setValue];
}`,
    nextjs: `// app/layout.jsx - Root Layout
export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}`,
    "nextjs/routing": `// Static Route: app/about/page.jsx → /about
// Dynamic Route: app/projects/[id]/page.jsx → /projects/1
// Catch-all: app/docs/[...slug]/page.jsx → /docs/a/b/c

// Dynamic page với params
export default function Page({ params }) {
  const { id } = params;
  return <div>Project {id}</div>;
}

// Catch-all page
export default function DocsPage({ params }) {
  const { slug } = params; // ["react", "components"]
  return <div>Docs: {slug.join("/")}</div>;
}`,
  };

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div
          style={{
            marginBottom: "32px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/docs/react"
            style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "14px" }}
          >
            Docs
          </Link>
          {slug.map((segment, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>/</span>
              <Link
                href={`/docs/${slug.slice(0, i + 1).join("/")}`}
                style={{
                  color: i === slug.length - 1 ? "#818cf8" : "var(--text-muted)",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: i === slug.length - 1 ? "500" : "400",
                }}
              >
                {segment}
              </Link>
            </span>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "240px 1fr",
            gap: "32px",
            alignItems: "flex-start",
          }}
        >
          {/* Sidebar Navigation */}
          <div
            style={{
              position: "sticky",
              top: "80px",
            }}
          >
            <div className="glass-card" style={{ padding: "20px" }}>
              <h4
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  marginBottom: "14px",
                }}
              >
                📚 Tài liệu
              </h4>
              <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {[
                  { href: "/docs/react", label: "⚛️ React", indent: 0 },
                  { href: "/docs/react/components", label: "🧩 Components", indent: 1 },
                  { href: "/docs/react/components/props", label: "📦 Props", indent: 2 },
                  { href: "/docs/react/hooks", label: "🎣 Hooks", indent: 1 },
                  { href: "/docs/nextjs", label: "▲ Next.js", indent: 0 },
                  { href: "/docs/nextjs/routing", label: "🗺️ Routing", indent: 1 },
                  { href: "/docs/nextjs/routing/dynamic", label: "🔀 Dynamic", indent: 2 },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      padding: "7px 12px",
                      paddingLeft: `${12 + link.indent * 16}px`,
                      borderRadius: "8px",
                      fontSize: "13px",
                      color:
                        `/${slug.join("/")}` === link.href.replace("/docs", "")
                          ? "#818cf8"
                          : "var(--text-muted)",
                      background:
                        `/docs/${slug.join("/")}` === link.href
                          ? "rgba(99, 102, 241, 0.1)"
                          : "transparent",
                      textDecoration: "none",
                      transition: "all 0.2s",
                      display: "block",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div>
            {page ? (
              <>
                {/* Header */}
                <div style={{ marginBottom: "32px" }}>
                  <div style={{ fontSize: "48px", marginBottom: "16px" }}>{page.icon}</div>
                  <h1
                    style={{
                      fontSize: "clamp(24px, 4vw, 36px)",
                      fontWeight: "800",
                      color: "var(--text-primary)",
                      marginBottom: "12px",
                    }}
                  >
                    {page.title}
                  </h1>
                  <p style={{ color: "var(--text-secondary)", fontSize: "16px" }}>
                    {page.description}
                  </p>
                </div>

                {/* URL Info */}
                <div
                  className="glass-card"
                  style={{
                    padding: "16px 20px",
                    marginBottom: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <span style={{ color: "var(--text-muted)", fontSize: "13px" }}>
                    🔗 Catch-all slug:
                  </span>
                  <code
                    style={{
                      background: "rgba(99, 102, 241, 0.1)",
                      color: "#818cf8",
                      padding: "2px 10px",
                      borderRadius: "4px",
                      fontSize: "13px",
                      fontFamily: "monospace",
                    }}
                  >
                    [{slug.map((s) => `"${s}"`).join(", ")}]
                  </code>
                  <span style={{ color: "var(--text-muted)", fontSize: "13px" }}>
                    → /docs/{slug.join("/")}
                  </span>
                </div>

                {/* Content */}
                <div className="glass-card" style={{ padding: "28px", marginBottom: "24px" }}>
                  <h2
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "var(--text-primary)",
                      marginBottom: "14px",
                    }}
                  >
                    📖 Nội dung
                  </h2>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      lineHeight: "1.8",
                      fontSize: "15px",
                    }}
                  >
                    {page.content}
                  </p>
                </div>

                {/* Code Example */}
                {codeExamples[key] && (
                  <div className="glass-card" style={{ padding: "28px", marginBottom: "24px" }}>
                    <h2
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "var(--text-primary)",
                        marginBottom: "16px",
                      }}
                    >
                      💻 Ví dụ code
                    </h2>
                    <pre
                      style={{
                        background: "rgba(0, 0, 0, 0.4)",
                        borderRadius: "10px",
                        padding: "20px",
                        overflow: "auto",
                        border: "1px solid rgba(99, 102, 241, 0.15)",
                      }}
                    >
                      <code
                        style={{
                          color: "#a5b4fc",
                          fontSize: "13px",
                          fontFamily: "'Fira Code', 'Courier New', monospace",
                          lineHeight: "1.6",
                          whiteSpace: "pre",
                        }}
                      >
                        {codeExamples[key]}
                      </code>
                    </pre>
                  </div>
                )}

                {/* Related Links */}
                {page.links?.length > 0 && (
                  <div className="glass-card" style={{ padding: "24px" }}>
                    <h3
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        color: "var(--text-primary)",
                        marginBottom: "14px",
                      }}
                    >
                      🔗 Liên quan
                    </h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                      {page.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="btn-outline"
                          style={{ fontSize: "14px", padding: "8px 18px" }}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Fallback for unknown slugs */
              <div
                className="glass-card fade-in-up"
                style={{ padding: "48px", textAlign: "center" }}
              >
                <div style={{ fontSize: "64px", marginBottom: "20px" }}>📄</div>
                <h1
                  style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    color: "var(--text-primary)",
                    marginBottom: "12px",
                  }}
                >
                  Trang: /docs/{slug.join("/")}
                </h1>
                <p style={{ color: "var(--text-secondary)", marginBottom: "8px" }}>
                  Slug được bắt bởi catch-all route: <code style={{ color: "#818cf8" }}>[...slug]</code>
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "14px", marginBottom: "28px" }}>
                  Đây là trang demo catch-all routing. Slug hiện tại:{" "}
                  <strong style={{ color: "#818cf8" }}>[{slug.map(s => `"${s}"`).join(", ")}]</strong>
                </p>
                <Link href="/docs/react" className="btn-primary">
                  Quay lại Docs →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
