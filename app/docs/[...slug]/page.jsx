export default async function DocsPage({ params }) {
  const { slug } = await params;

  const title = slug
    .map((item) => item.replaceAll("-", " "))
    .join(" / ");

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-sm font-semibold uppercase text-blue-600">
        Documentation
      </p>

      <h1 className="mt-4 text-4xl font-bold capitalize">
        {title}
      </h1>

      <p className="mt-6 leading-8 text-gray-600">
        Đây là trang tài liệu mẫu cho portfolio của Nông Thị Hồng Lan.
      </p>
    </section>
  );
}
