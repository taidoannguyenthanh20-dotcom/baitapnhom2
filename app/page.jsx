import Link from "next/link";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import skillGroups from "@/data/skills.js";
import projects from "@/data/projects.js";

export default function HomePage() {
  // Lấy danh sách kỹ năng nổi bật từ nhóm Frontend
  const featuredSkills = skillGroups[0]?.skills?.slice(0, 4) || [];
  // Lấy các dự án tiêu biểu
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="space-y-20 pb-20">
      {/* 1. Hero Section: Họ tên, vị trí, bio ngắn, CTA */}
      <Hero />

      {/* 2. Featured Skills Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Chuyên Môn Nổi Bật"
          title="Kỹ Năng Công Nghệ"
          description="Các công nghệ và công cụ tôi sử dụng thường xuyên để phát triển giao diện và sản phẩm web."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 hover:underline"
          >
            <span>Xem toàn bộ danh sách kỹ năng & công cụ</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* 3. Featured Projects Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Sản Phẩm Tiêu Biểu"
          title="Dự Án Đã Thực Hiện"
          description="Một số dự án cá nhân và ứng dụng thực tế tôi đã xây dựng trong quá trình học tập."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold border border-slate-700 shadow transition-all"
          >
            <span>Khám phá toàn bộ {projects.length} dự án</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* 4. Quick Navigation Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-950/40 via-slate-900 to-slate-900 border border-blue-900/30 shadow-2xl text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Khám phá thêm thông tin và hồ sơ
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm sm:text-base">
            Tìm hiểu chi tiết về quá trình học vấn, kinh nghiệm phát triển, tài
            liệu React/Next.js hoặc kết nối với tôi.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about/education"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium border border-slate-700 transition-colors"
            >
              🎓 Học vấn
            </Link>
            <Link
              href="/about/experience"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium border border-slate-700 transition-colors"
            >
              💼 Kinh nghiệm
            </Link>
            <Link
              href="/docs/react/components"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium border border-slate-700 transition-colors"
            >
              📖 Tài liệu Catch-all
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium shadow-md shadow-blue-500/25 transition-colors"
            >
              ✉️ Gửi lời nhắn
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
