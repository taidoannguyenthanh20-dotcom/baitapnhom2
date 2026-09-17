export default function Loading() {
  return (
    <section className="container-page max-w-4xl py-16" aria-label="Đang tải">
      <div className="animate-pulse">
        <div className="h-4 w-40 rounded bg-slate-200" />
        <div className="mt-6 h-11 w-3/4 rounded bg-slate-200" />
        <div className="mt-6 h-5 w-full rounded bg-slate-200" />
        <div className="mt-3 h-5 w-5/6 rounded bg-slate-200" />
        <div className="mt-10 h-8 w-56 rounded bg-slate-200" />
        <div className="mt-5 flex gap-3">
          <div className="h-8 w-24 rounded-full bg-slate-200" />
          <div className="h-8 w-24 rounded-full bg-slate-200" />
          <div className="h-8 w-24 rounded-full bg-slate-200" />
        </div>
      </div>
    </section>
  );
}
