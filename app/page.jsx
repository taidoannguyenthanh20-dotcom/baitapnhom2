import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>

      <Hero />

      {/* Quick introduction */}
      <section className="border-t border-[var(--border)] bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-3">

          <div>
            <p className="text-sm font-semibold text-[var(--primary)]">
              01
            </p>
            <h3 className="mt-3 text-xl font-bold">
              Creative
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Interested in combining technology with visual
              design and creative ideas.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-[var(--primary)]">
              02
            </p>
            <h3 className="mt-3 text-xl font-bold">
              Technology
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Exploring web development, programming, databases
              and modern digital technologies.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-[var(--primary)]">
              03
            </p>
            <h3 className="mt-3 text-xl font-bold">
              Learning
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Always looking for opportunities to learn,
              experiment and improve.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}