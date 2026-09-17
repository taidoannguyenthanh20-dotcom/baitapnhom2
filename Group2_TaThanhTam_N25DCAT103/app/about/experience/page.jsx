import SectionTitle from "@/components/SectionTitle";

export const metadata = { title: "Kinh nghiệm" };

const experiences = [
  { title: "Thực hành phát triển web", description: "Thực hiện các dự án web trong quá trình học tập, tập trung vào React, Next.js và xây dựng giao diện responsive." },
  { title: "Dự án học tập", description: "Rèn luyện cách chia component, xử lý dữ liệu và phối hợp xây dựng giao diện trong các bài tập." },
];

export default function ExperiencePage() {
  return (
    <section>
      <SectionTitle label="Experience" title="Kinh nghiệm" description="Nội dung minh họa cho quá trình học tập, có thể thay bằng kinh nghiệm thực tế." />
      <div className="space-y-5">
        {experiences.map((experience) => (
          <article key={experience.title} className="panel">
            <h2 className="text-xl font-bold">{experience.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{experience.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
