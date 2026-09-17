import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import Avatar from "@/components/Avatar";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";

export default function HomePage() {
  const featuredSkills = skills.filter((s) => s.isFeatured).slice(0, 4);
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="space-y-24 py-6">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-6 pt-6">
        {/* Avatar Profile Image */}
        <Avatar size="large" />

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          Sẵn sàng đón nhận cơ hội mới
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-zinc-100 tracking-tight leading-tight">
          Xin chào, tôi là <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
            Phùng Anh Lực
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-zinc-300 font-semibold max-w-2xl">
          FullStack Developer chuyên nghiệp với thế mạnh về Next.js, React & Node.js
        </p>

        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          Đam mê xây dựng các sản phẩm ứng dụng web tốc độ cao, giao diện ấn tượng, chuẩn SEO và trải nghiệm người dùng tối ưu.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/25"
          >
            Xem các dự án
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-semibold text-sm transition-all border border-zinc-700"
          >
            Tìm hiểu về tôi
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-medium text-sm transition-all border border-zinc-800"
          >
            Liên hệ công việc
          </Link>
        </div>
      </section>

      {/* Highlights Stats Bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 text-center">
        <div>
          <p className="text-3xl font-extrabold text-blue-400">2+</p>
          <p className="text-xs text-zinc-400 font-medium mt-1">Năm kinh nghiệm</p>
        </div>
        <div>
          <p className="text-3xl font-extrabold text-cyan-400">10+</p>
          <p className="text-xs text-zinc-400 font-medium mt-1">Dự án hoàn thành</p>
        </div>
        <div>
          <p className="text-3xl font-extrabold text-emerald-400">99%</p>
          <p className="text-xs text-zinc-400 font-medium mt-1">Độ hài lòng</p>
        </div>
        <div>
          <p className="text-3xl font-extrabold text-amber-400">100%</p>
          <p className="text-xs text-zinc-400 font-medium mt-1">Cam kết chất lượng</p>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section>
        <SectionTitle
          label="Kỹ năng"
          title="Công nghệ & Kỹ năng nổi bật"
          description="Danh sách các công nghệ chính tôi thường xuyên áp dụng trong các dự án thực tế."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/skills"
            className="text-sm font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
          >
            Xem toàn bộ kỹ năng →
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section>
        <SectionTitle
          label="Sản phẩm"
          title="Dự án tiêu biểu"
          description="Một số dự án tiêu biểu được xây dựng với tư duy giải quyết vấn đề và tối ưu hiệu năng."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/projects"
            className="px-6 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm font-semibold transition-all border border-zinc-700"
          >
            Xem tất cả dự án →
          </Link>
        </div>
      </section>
    </div>
  );
}
