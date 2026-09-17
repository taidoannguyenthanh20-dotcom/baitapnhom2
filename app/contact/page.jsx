import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle
          label="Contact"
          title="Let's work together"
          description="If you have a project, an idea or simply want to get in touch, feel free to send me a message."
        />

        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-[var(--border)] bg-white p-8">
            <h2 className="text-2xl font-bold">
              Get in touch
            </h2>

            <p className="mt-4 leading-7 text-[var(--muted)]">
              I'm always interested in learning new things,
              working on creative projects and connecting with
              other people.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm font-semibold">Email</p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  baodieplethi@gmail.com
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold">GitHub</p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  github.com/BaoDiep0501
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold">Location</p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  Ho Chi Minh City, Vietnam
                </p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}