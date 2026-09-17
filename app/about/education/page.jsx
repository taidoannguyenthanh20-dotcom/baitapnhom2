import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

const education = [
  {
    period: "2023 – Present",
    school:
      "Posts and Telecommunications Institute of Technology",
    location: "Ho Chi Minh City",
    major: "Multimedia Technology",
    description:
      "Studying Multimedia Technology with a focus on programming, web development, UI/UX design and digital media.",
  },
  {
    period: "Previous Education",
    school: "THPT Chuyên Lê Quý Đôn",
    location: "Gia Lai",
    major: "Chuyên Toán – Tin",
    description:
      "Studied in the Mathematics and Informatics specialized class.",
  },
];

const gpa = [
  {
    semester: "2023 – 2024 · Semester 1",
    score: 3.42,
  },
  {
    semester: "2023 – 2024 · Semester 2",
    score: 3.61,
  },
  {
    semester: "2024 – 2025 · Semester 1",
    score: 3.67,
  },
  {
    semester: "2024 – 2025 · Semester 2",
    score: 3.48,
  },
  {
    semester: "2025 – 2026 · Semester 1",
    score: 3.74,
  },
  {
    semester: "2025 – 2026 · Semester 2",
    score: 3.86,
  },
];

export default function EducationPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle
          label="Education"
          title="My Academic Journey"
          description="My educational background and academic performance."
        />

        {/* Education */}
        <div className="space-y-6">
          {education.map((item) => (
            <div
              key={item.period}
              className="rounded-3xl border border-(--border) bg-white p-8 shadow-sm"
            >
              <span className="inline-block rounded-full bg-(--primary-light) px-4 py-2 text-sm font-semibold text-purple-700">
                {item.period}
              </span>

              <h2 className="mt-5 text-2xl font-bold">
                {item.school}
              </h2>

              <p className="mt-2 font-medium text-(--primary)">
                {item.major}
              </p>

              <p className="mt-1 text-sm text-(--muted)">
                {item.location}
              </p>

              <p className="mt-4 max-w-3xl leading-7 text-(--muted)">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* GPA */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold">
            Academic Performance
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gpa.map((item) => (
              <div
                key={item.semester}
                className="rounded-2xl border border-(--border) bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm text-(--muted)">
                  {item.semester}
                </p>

                <p className="mt-3 text-4xl font-bold text-(--primary)">
                  {item.score}
                </p>

                <p className="mt-1 text-xs text-(--muted)">
                  GPA / 4.0
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Back */}
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