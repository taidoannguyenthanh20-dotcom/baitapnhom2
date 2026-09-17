import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle
          label="About Me"
          title="A little bit about me"
          description="Get to know more about my background, education and experience."
        />

        <div className="grid gap-10 md:grid-cols-2">
          {/* Introduction */}
          <div className="rounded-3xl border border-(--border) bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-(--primary)">
              Who I am
            </p>

            <h2 className="mt-4 text-2xl font-bold">
              Lê Thị Bảo Diệp
            </h2>

            <p className="mt-4 leading-7 text-(--muted)">
              I am a second-year Multimedia Technology student at
              Posts and Telecommunications Institute of Technology
              (PTIT HCMC).
            </p>

            <p className="mt-4 leading-7 text-(--muted)">
              I am interested in web development, programming,
              UI/UX design, 3D modeling and multimedia technology.
              I enjoy learning new technologies and applying them
              to creative projects.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-(--primary-light) p-4">
                <p className="text-xs text-(--muted)">Major</p>
                <p className="mt-1 font-semibold">
                  Multimedia Technology
                </p>
              </div>

              <div className="rounded-2xl bg-(--primary-light) p-4">
                <p className="text-xs text-(--muted)">Year</p>
                <p className="mt-1 font-semibold">
                  Second Year
                </p>
              </div>
            </div>
          </div>

          {/* Quick information */}
          <div className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--primary)]">
              Quick Information
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm text-[var(--muted)]">Full name</p>
                <p className="mt-1 font-semibold">
                  Lê Thị Bảo Diệp
                </p>
              </div>

              <div>
                <p className="text-sm text-[var(--muted)]">University</p>
                <p className="mt-1 font-semibold">
                  PTIT HCMC
                </p>
              </div>

              <div>
                <p className="text-sm text-[var(--muted)]">Email</p>
                <a
                  href="mailto:baodieplethi@gmail.com"
                  className="mt-1 inline-block font-semibold text-[var(--primary)] hover:underline"
                >
                  baodieplethi@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-[var(--muted)]">Interests</p>
                <p className="mt-1 font-semibold">
                  Web Development · UI/UX · 3D · Multimedia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Link
            href="/about/education"
            className="group rounded-3xl border border-[var(--border)] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg"
          >
            <p className="text-sm font-semibold text-[var(--primary)]">
              01
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              Education
              <span className="ml-2 transition-transform group-hover:ml-3">
                →
              </span>
            </h2>

            <p className="mt-3 leading-7 text-[var(--muted)]">
              Explore my academic background, university and
              study performance.
            </p>
          </Link>

          <Link
            href="/about/experience"
            className="group rounded-3xl border border-[var(--border)] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg"
          >
            <p className="text-sm font-semibold text-[var(--primary)]">
              02
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              Experience
              <span className="ml-2 transition-transform group-hover:ml-3">
                →
              </span>
            </h2>

            <p className="mt-3 leading-7 text-[var(--muted)]">
              Discover my projects, roles and experience in
              programming and multimedia.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}