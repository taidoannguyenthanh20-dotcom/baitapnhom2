import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";

const featuredSkills = [
  { name: "React", description: "Xây dựng Single Page App mượt mà", icon: "⚛️", level: "Advanced" },
  { name: "Next.js", description: "App Router, SSR, Server Components", icon: "▲", level: "Intermediate" },
  { name: "Tailwind CSS", description: "Tối ưu hóa giao diện người dùng", icon: "🎨", level: "Expert" },
];

const featuredProjects = [
  {
    id: "1",
    name: "E-Commerce App",
    description: "Website mua sắm trực tuyến hỗ trợ giỏ hàng và thanh toán trực tiếp",
    tech: ["Next.js", "Tailwind", "Stripe"],
    image: "img/app.jpg",
  },
  {
    id: "2",
    name: "Task Management Board",
    description: "Bảng quản lý công việc kéo thả Kanban theo thời gian thực",
    tech: ["React", "Firebase"],
    image: "img/task.jpg",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-16 py-6">
      <section className="text-center py-12 space-y-6">
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
          <span className="text-slate-900">Huỳnh Trần Thu Thảo</span>
          <p><span className="text-indigo-600">Software Engineer</span></p>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Chuyên xây dựng các ứng dụng web hiệu năng cao, tối ưu trải nghiệm người dùng với Next.js và Tailwind CSS.
        </p>
        <div className="flex justify-center gap-4 pt-2">
          <Link href="/projects" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
            Xem dự án
          </Link>
          <Link href="/about" className="bg-white border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition">
            Về tôi
          </Link>
        </div>
      </section>

      <section>
        <SectionTitle
          label="Featured Skills"
          title="Kỹ năng nổi bật"
          description="Công nghệ lõi tôi sử dụng mỗi ngày"
          level={2}
          showBadge={true}
          tags={["React", "NextJS", "CSS"]}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredSkills.map((skill, idx) => (
            <SkillCard key={idx} skill={skill} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          label="Top Works"
          title="Dự án tiêu biểu"
          description="Những sản phẩm thực tế gần đây"
          level={3}
          showBadge={false}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}