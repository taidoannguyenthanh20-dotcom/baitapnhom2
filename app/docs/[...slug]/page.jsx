import SectionTitle from "@/components/SectionTitle";

export default async function DocsPage({ params }) {
  const { slug } = await params;

  return (
    <div className="space-y-6 py-6 max-w-2xl mx-auto">
      <SectionTitle label="Catch-all Route" title="Tài Liệu Hướng Dẫn" />
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
        <p className="text-sm font-medium text-gray-500">
          Đường dẫn URL hiện tại: <code className="bg-blue-50 px-2 py-1 rounded text-blue-600 font-mono">/docs/{slug ? slug.join('/') : ''}</code>
        </p>
        <div className="border-t pt-4">
          <h3 className="font-semibold text-lg mb-2 text-gray-900">Mảng mảng tham số nhận được (Slug Array):</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            {slug && slug.map((item, idx) => (
              <li key={idx}>Cấp {idx + 1}: <strong className="text-gray-900">{item}</strong></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}