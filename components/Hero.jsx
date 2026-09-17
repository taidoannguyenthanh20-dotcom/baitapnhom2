import Link from "next/link";

export default function Hero({ name, role, intro, skills, projectCount }) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="container-page grid gap-14 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28">
        <div>
          <p className="label">Developer Portfolio</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] md:text-7xl">
            Xin chào, tôi là <span className="text-blue-600">{name}</span>.
          </h1>
          <p className="mt-6 text-xl font-medium text-slate-700">{role}</p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            {intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="btn-primary">
              Xem dự án <span aria-hidden>→</span>
            </Link>
            <Link href="/contact" className="btn-secondary">
              Liên hệ
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-blue-50" />
          <div className="relative rounded-[1.5rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-xl md:p-9">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <span className="text-sm font-semibold tracking-[0.16em] text-blue-300 uppercase">
                Current focus
              </span>
              <span
                className="h-3 w-3 rounded-full bg-emerald-400"
                aria-label="Available"
              />
            </div>
            <p className="mt-8 text-3xl leading-tight font-bold">
              Building clear, useful web experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-slate-300"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div>
                <p className="text-3xl font-bold text-blue-300">
                  {projectCount}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Selected projects
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-300">2026</p>
                <p className="mt-1 text-xs text-slate-400">Learning year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
