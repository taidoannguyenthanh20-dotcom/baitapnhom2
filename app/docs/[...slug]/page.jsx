export default async function DocsPage({ params }) {
  const { slug } = await params;

  return (
    <main>
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            Documentation
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            {slug.join(" / ")}
          </h1>

          <p className="mt-5 leading-7 text-[var(--muted)]">
            This is a dynamic documentation page created
            using a catch-all route.
          </p>

          <div className="mt-8 rounded-2xl bg-gray-50 p-5">
            <p className="text-sm font-semibold">
              Route segments:
            </p>

            <ul className="mt-3 space-y-2">
              {slug.map((item, index) => (
                <li
                  key={`${item}-${index}`}
                  className="text-sm text-[var(--muted)]"
                >
                  {index + 1}. {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}