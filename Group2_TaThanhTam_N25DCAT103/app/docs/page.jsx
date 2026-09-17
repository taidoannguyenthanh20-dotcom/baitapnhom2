import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { documents } from "@/data/docs";

export const metadata = { title: "Tài liệu" };

export default function DocsPage() {
  return (
    <section>
      <SectionTitle label="Docs" title="Ghi chú học tập" description="Một số kiến thức React được sử dụng trong bài tập." />
      <div className="space-y-4">
        {documents.map((document) => (
          <Link key={document.slug.join("/")} href={`/docs/${document.slug.join("/")}`} className="panel block hover:border-blue-500">
            <h2 className="text-lg font-bold text-blue-700">{document.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{document.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
