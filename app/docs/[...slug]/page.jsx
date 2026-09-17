import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { docsData } from "@/data/docs";

export default async function DocsCatchAllPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || [];

  // Breadcrumbs title from slug segments
  const pathString = slug.join(" / ");

  // Navigate doc hierarchy
  let currentDoc = null;
  if (slug.length > 0 && docsData[slug[0]]) {
    currentDoc = docsData[slug[0]];
    if (slug.length > 1 && currentDoc.subtopics && currentDoc.subtopics[slug[1]]) {
      currentDoc = currentDoc.subtopics[slug[1]];
      if (slug.length > 2 && currentDoc.subtopics && currentDoc.subtopics[slug[2]]) {
        currentDoc = currentDoc.subtopics[slug[2]];
      }
    }
  }

  return (
    <div className="space-y-8 py-6 max-w-4xl mx-auto">
      {/* Route Badge & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
          <Link href="/docs/react" className="hover:text-blue-400">
            docs
          </Link>
          {slug.map((segment, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <span>/</span>
              <span className="text-zinc-200">{segment}</span>
            </span>
          ))}
        </div>
        <span className="text-[11px] px-2.5 py-1 rounded bg-purple-500/10 text-purple-400 font-mono border border-purple-500/20">
          Catch-all Route: [...slug]
        </span>
      </div>

      <SectionTitle
        label="Khu vực Tài liệu"
        title={currentDoc ? currentDoc.title : `Tài liệu: ${pathString}`}
        description="Demo tính năng Catch-all Routing [...slug] trong Next.js App Router xử lý URL nhiều cấp."
      />

      {/* Main Doc Content */}
      <div className="p-8 rounded-3xl bg-zinc-900/90 border border-zinc-800 space-y-6 shadow-xl">
        {currentDoc ? (
          <>
            <p className="text-zinc-300 text-base leading-relaxed">
              {currentDoc.description}
            </p>

            {currentDoc.subtopics && (
              <div className="space-y-4 pt-4 border-t border-zinc-800">
                <h4 className="text-sm font-bold text-zinc-200 uppercase tracking-wider">
                  Chủ đề con liên quan:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(currentDoc.subtopics).map(([key, item]) => (
                    <Link
                      key={key}
                      href={`/docs/${slug.join("/")}/${key}`}
                      className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-blue-500/40 transition-all block group"
                    >
                      <h5 className="font-bold text-sm text-zinc-200 group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h5>
                      <p className="text-xs text-zinc-500 mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-6 space-y-3">
            <p className="text-zinc-400 text-sm">
              Bạn đang xem tuyến đường catch-all với các tham số phân đoạn:
            </p>
            <div className="p-4 rounded-xl bg-zinc-950 font-mono text-xs text-amber-300 border border-zinc-800 inline-block">
              slug = {JSON.stringify(slug)}
            </div>
          </div>
        )}
      </div>

      {/* Quick Navigation Links */}
      <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
        <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
          Thử nghiệm các URL Catch-all Route [...slug] khác:
        </h4>
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          <Link
            href="/docs/project-overview"
            className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
          >
            /docs/project-overview
          </Link>
          <Link
            href="/docs/project-overview/requirements"
            className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
          >
            /docs/project-overview/requirements
          </Link>
          <Link
            href="/docs/nextjs/routing/nested-routes"
            className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
          >
            /docs/nextjs/routing/nested-routes
          </Link>
          <Link
            href="/docs/nextjs/routing/dynamic-routes"
            className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
          >
            /docs/nextjs/routing/dynamic-routes
          </Link>
          <Link
            href="/docs/react/components-props"
            className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
          >
            /docs/react/components-props
          </Link>
          <Link
            href="/docs/react/state-events"
            className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
          >
            /docs/react/state-events
          </Link>
        </div>
      </div>
    </div>
  );
}
