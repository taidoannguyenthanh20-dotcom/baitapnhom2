import SectionTitle from "@/components/SectionTitle";

export default async function DocsCatchAllPage({ params }) {
  const { slug } = await params;

  return (
    <div>
      <SectionTitle label="Tài liệu" title="Khu vực tài liệu kỹ thuật" />
      <div className="bg-blue-50 border border-blue-200 p-4 rounded">
        <p className="font-semibold text-blue-900">Đường dẫn hiện tại (Slug parameters):</p>
        <code className="block bg-white p-2 border rounded mt-2 text-sm font-mono text-blue-600">
          /docs/{slug ? slug.join("/") : ""}
        </code>
      </div>
    </div>
  );
}