import Link from "next/link";
import { notFound } from "next/navigation";
import SectionTitle from "@/components/SectionTitle";
import { documents } from "@/data/docs";

export const dynamicParams = false;

export function generateStaticParams() {
  return documents.map((document) => ({ slug: document.slug }));
}

export default async function DocumentPage({ params }) {
  const { slug } = await params;
  const document = documents.find((item) => item.slug.join("/") === slug.join("/"));
  if (!document) notFound();

  return (
    <section>
      <SectionTitle label="Docs" title={document.title} description={document.description} />
      <article className="panel">
        <div className="space-y-4 leading-7 text-slate-600">
          {document.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <pre className="mt-6 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm leading-6 text-slate-100"><code>{document.code}</code></pre>
      </article>
      <nav aria-label="Các tài liệu" className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-blue-700">
        <Link href="/docs" className="hover:underline">← Tất cả tài liệu</Link>
        {documents.filter((item) => item !== document).map((item) => <Link key={item.slug.join("/")} href={`/docs/${item.slug.join("/")}`} className="hover:underline">{item.title}</Link>)}
      </nav>
    </section>
  );
}
