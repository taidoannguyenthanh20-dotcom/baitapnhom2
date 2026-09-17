export default function Loading() {
  return (
    <main>
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="animate-pulse">
          <div className="h-4 w-32 rounded bg-gray-200" />

          <div className="mt-4 h-10 w-2/3 rounded bg-gray-200" />

          <div className="mt-6 h-4 w-full rounded bg-gray-200" />
          <div className="mt-3 h-4 w-5/6 rounded bg-gray-200" />

          <div className="mt-8 h-6 w-32 rounded bg-gray-200" />

          <div className="mt-4 flex gap-2">
            <div className="h-7 w-20 rounded-full bg-gray-200" />
            <div className="h-7 w-24 rounded-full bg-gray-200" />
            <div className="h-7 w-20 rounded-full bg-gray-200" />
          </div>
        </div>
      </section>
    </main>
  );
}