export default function DocsPage({ params }) {
  // Yêu cầu Catch-all Routing
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Tài liệu dự án</h1>
      <ul className="list-disc ml-6">
        {params.slug.map((path, index) => (
          <li key={index} className="text-blue-600 font-mono">{path}</li>
        ))}
      </ul>
    </div>
  );
}
