import Link from "next/link";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import { projects } from "../data/projects";
import { featuredSkills, skillGroups } from "../data/skills";

export const metadata = { title: "Home" };

const routingMap = [
  {
    name: "Static Route",
    href: "/about",
    example: "/about",
    description: "Mỗi thư mục trong app/ là một URL cố định.",
  },
  {
    name: "Nested Route",
    href: "/about/education",
    example: "/about/education",
    description: "Thư mục lồng nhau tạo URL nhiều cấp.",
  },
  {
    name: "Dynamic Route",
    href: "/projects/portfolio",
    example: "/projects/[id]",
    description: "Một file page render nội dung theo id trên URL.",
  },
  {
    name: "Catch-all Route",
    href: "/docs/react/components/props",
    example: "/docs/[...slug]",
    description: "Một route bắt mọi độ sâu URL phía sau /docs.",
  },
];

export default function Home() {
  const frontendSkills = skillGroups[0].skills.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <Hero
        name="Lâm Quốc Toàn"
        role="Sinh viên Công nghệ đa phương tiện · Định hướng Web Development"
        intro="Mình đang học React, Next.js và các công nghệ web hiện đại. Website này là bài tập routing: static, nested, dynamic và catch-all route trong Next.js App Router."
        skills={featuredSkills}
        projectCount={projects.length}
      />

      <section className="container-page py-20">
        <SectionTitle
          label="Routing map"
          title="Sơ đồ routing của website"
          description="Bốn kỹ thuật routing trong bài tập, mỗi thẻ dẫn thẳng tới một ví dụ thật đang chạy."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {routingMap.map((route) => (
            <Link
              key={route.name}
              href={route.href}
              className="card card-hover group block"
            >
              <p className="label">{route.name}</p>
              <p className="mt-3 font-mono text-sm font-semibold break-all text-slate-900">
                {route.example}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {route.description}
              </p>
              <p className="mt-4 text-sm font-semibold text-blue-600 transition group-hover:translate-x-1">
                Xem ví dụ →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="container-page py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionTitle
              label="My skills"
              title="Kỹ năng nổi bật"
              description="Một vài công nghệ mình đang học và sử dụng thường xuyên nhất."
            />
            <Link href="/skills" className="btn-secondary mb-10">
              Tất cả kỹ năng →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {frontendSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle
            label="My work"
            title="Dự án tiêu biểu"
            description="Danh sách render từ một mảng dữ liệu duy nhất bằng .map()."
          />
          <Link href="/projects" className="btn-secondary mb-10">
            Tất cả dự án →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
