import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
        
        {/* Decorative circles */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-purple-100/50 blur-3xl" />

        <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">

          {/* Text */}
          <div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Lê Thị
              <br />
              <span className="text-[var(--primary)]">
                Bảo Diệp.
              </span>
            </h1>

            <h2 className="mt-6 text-xl font-medium text-gray-700 md:text-2xl">
              Multimedia Technology Student
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">
              I'm a Multimedia Technology student at
              Posts and Telecommunications Institute of Technology.
              I enjoy exploring web development, UI/UX design,
              3D modeling and creative technology.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/projects"
                className="rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[var(--primary)]"
              >
                View My Projects →
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-1 hover:border-purple-300 hover:bg-[var(--primary-light)]"
              >
                About Me
              </Link>

            </div>

          </div>

          {/* Profile Card */}
          <div className="flex justify-center md:justify-end">

            <div className="relative">

              <div className="absolute -inset-4 rounded-[2rem] bg-purple-200/40 blur-2xl" />

              <div className="relative w-72 rounded-[2rem] border border-[var(--border)] bg-white p-4 shadow-xl md:w-80">

                <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-purple-100">
                  <img
                    src="https://i.postimg.cc/Z5snVmB9/1aa2696403ff89a1d0ee.jpg"
                    alt="Lê Thị Bảo Diệp"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="px-2 pb-2 pt-5">
                  <p className="text-sm font-semibold">
                    Lê Thị Bảo Diệp
                  </p>

                  <p className="mt-1 text-xs text-[var(--muted)]">
                    Multimedia Technology · PTIT HCM City
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
  );
}