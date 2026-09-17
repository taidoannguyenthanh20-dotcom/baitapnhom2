import Link from "next/link";
import { BookOpen, Tag, Calendar, ChevronRight, FileText } from "lucide-react";
import { docsData } from "@/data/portfolioData";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const doc = docsData.find(
    (d) => JSON.stringify(d.slug) === JSON.stringify(slug)
  );
  if (!doc) return { title: "Docs" };
  return { title: doc.title, description: doc.description };
}

function findDoc(slug) {
  return docsData.find(
    (d) => JSON.stringify(d.slug) === JSON.stringify(slug)
  );
}

export default async function DocsPage({ params }) {
  const { slug } = await params;
  const doc = findDoc(slug);

  // Related docs (same first slug segment)
  const related = docsData.filter(
    (d) => d.slug[0] === slug[0] && JSON.stringify(d.slug) !== JSON.stringify(slug)
  );

  return (
    <div className="section" id="docs-page">
      <div className="container">

        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 36, flexWrap: "wrap" }}>
          <Link href="/docs/react" className="link" style={{ fontSize: 13, fontFamily: "var(--font-mono)" }}>
            docs
          </Link>
          {slug.map((seg, i) => (
            <span key={seg} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <ChevronRight size={13} style={{ color: "var(--text-muted)" }} />
              <span style={{
                fontSize: 13,
                fontFamily: "var(--font-mono)",
                color: i === slug.length - 1 ? "var(--text-primary)" : "var(--text-secondary)"
              }}>
                {seg}
              </span>
            </span>
          ))}
        </div>

        {doc ? (
          <>
            {/* Doc header */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                <span className="tag"><BookOpen size={11} /> {doc.category}</span>
                <span className="tag"><Calendar size={11} /> {doc.date}</span>
              </div>
              <h1 style={{
                fontSize: "clamp(28px, 5vw, 52px)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                marginBottom: 16,
                lineHeight: 1.1,
              }}>
                {doc.title}
              </h1>
              <p style={{ fontSize: 17, color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: 660 }}>
                {doc.description}
              </p>
            </div>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 40 }}>
              {doc.tags.map((tag) => (
                <span key={tag} className="tag">
                  <Tag size={10} /> {tag}
                </span>
              ))}
            </div>

            <hr className="divider" />

            {/* Content card */}
            <div className="card" style={{ marginBottom: 48, lineHeight: 1.9 }}>
              <p className="mono" style={{ marginBottom: 20 }}>// content</p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.9 }}>
                {doc.content}
              </p>
            </div>

            {/* Related docs */}
            {related.length > 0 && (
              <div style={{ marginBottom: 48 }}>
                <p className="mono" style={{ marginBottom: 16 }}>// related</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {related.map((d) => (
                    <Link
                      key={d.slug.join("/")}
                      href={`/docs/${d.slug.join("/")}`}
                      className="card"
                      id={`docs-related-${d.slug.join("-")}`}
                      style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 16 }}
                    >
                      <FileText size={15} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", marginBottom: 2 }}>
                          {d.title}
                        </p>
                        <p style={{ fontSize: 12, color: "var(--text-muted)" }}>{d.description}</p>
                      </div>
                      <ChevronRight size={15} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          /* Slug không khớp doc nào — hiện thông báo */
          <div style={{ marginBottom: 48 }}>
            <p className="mono" style={{ marginBottom: 12, color: "#ef4444" }}>// 404 – không tìm thấy</p>
            <h1 style={{
              fontSize: "clamp(24px, 4vw, 40px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: 12,
            }}>
              Tài liệu <span style={{ color: "var(--text-muted)" }}>/{slug.join("/")}</span> chưa có
            </h1>
            <p style={{ color: "var(--text-secondary)", marginBottom: 0, fontSize: 15 }}>
              Nội dung đang được xây dựng. Hãy xem các tài liệu có sẵn bên dưới.
            </p>
          </div>
        )}

        {/* All docs index */}
        <div>
          <p className="mono" style={{ marginBottom: 16 }}>// all docs</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {docsData.map((d) => (
              <Link
                key={d.slug.join("/")}
                href={`/docs/${d.slug.join("/")}`}
                id={`docs-index-${d.slug.join("-")}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 0",
                  borderBottom: "1px solid var(--border)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                className="link"
              >
                <FileText size={13} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)", fontSize: 12, flexShrink: 0 }}>
                  /docs/{d.slug.join("/")}
                </span>
                <span style={{ color: "var(--text-secondary)", fontSize: 14 }}>— {d.title}</span>
                <span className="tag" style={{ marginLeft: "auto", flexShrink: 0 }}>{d.category}</span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
