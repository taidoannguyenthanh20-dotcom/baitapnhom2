import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

const experiences = [
  {
    id: 1,
    year: "2025",
    title: "Technovation Girls Project",
    role: "Programming & Design Team Leader",
    description:
      "Participated in developing an application for girls. I worked in both programming and design and took the role of team leader. The project reached the semifinal round.",
    skills: ["Programming", "UI/UX", "Figma", "Teamwork", "Leadership"],
  },
  {
    id: 2,
    year: "2025",
    title: "Software Engineering Course Project",
    role: "Programming & Development",
    description:
      "Worked on a project simulating a learning application interface with a 3D model. The project combined web technologies with a Python backend.",
    skills: ["HTML", "CSS", "JavaScript", "Python", "3D Modeling"],
  },
  {
    id: 3,
    year: "Present",
    title: "Multimedia Technology Student",
    role: "PTIT HCMC",
    description:
      "Developing practical skills through academic projects in programming, web development, databases, UI/UX design, computer vision and multimedia technology.",
    skills: [
      "Web Development",
      "Programming",
      "MySQL",
      "UI/UX",
      "Multimedia",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle
          label="Experience"
          title="My Experience"
          description="Projects, teamwork and learning experiences that have helped me develop both technical and creative skills."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-3 top-0 hidden h-full w-px bg-(--border) md:block" />

          <div className="space-y-8">
            {experiences.map((experience) => (
              <article
                key={experience.id}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-3 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-(--primary) md:block" />

                <div className="rounded-3xl border border-(--border) bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-(--primary)">
                        {experience.year}
                      </p>

                      <h2 className="mt-2 text-2xl font-bold">
                        {experience.title}
                      </h2>

                      <p className="mt-1 text-sm font-medium text-(--muted)">
                        {experience.role}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 max-w-3xl leading-7 text-(--muted)">
                    {experience.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-(--primary-light) px-3 py-1 text-xs font-medium text-purple-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/about"
            className="text-sm font-semibold text-(--primary) hover:underline"
          >
            ← Back to About
          </Link>
        </div>
      </section>
    </main>
  );
}