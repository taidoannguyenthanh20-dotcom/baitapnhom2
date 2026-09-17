import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export const metadata = {
  title: "Kinh nghiệm | Bùi Thành Đạt Portfolio",
  description:
    "Kinh nghiệm thực chiến, dự án thực tế và các hoạt động nghiên cứu phát triển.",
};

const experienceList = [
  {
    role: "Frontend Developer (Dự án học tập & Freelance)",
    organization: "Web Studio Project Team",
    period: "2024 - Hiện tại",
    location: "TP. Hồ Chí Minh",
    responsibilities: [
      "Xây dựng các thành phần giao diện người dùng Responsive sử dụng React, Next.js và Tailwind CSS.",
      "Tối ưu hóa thời gian tải trang và hiệu suất render thông qua Server Components và Client Components.",
      "Tích hợp RESTful API cho các tính năng xác thực người dùng, đặt lịch và quản trị dữ liệu.",
      "Quản lý mã nguồn dự án qua Git/GitHub và làm việc nhóm theo mô hình Agile/Scrum.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "JavaScript ES6+",
      "Git",
    ],
  },
  {
    role: "Thực tập sinh Lập trình Web",
    organization: "CLB Tin học & Phát triển Phần mềm Sinh viên",
    period: "2023 - 2024",
    location: "TP. Hồ Chí Minh",
    responsibilities: [
      "Phát triển các module chức năng quản lý thành viên và thông báo sự kiện.",
      "Thiết kế cấu trúc cơ sở dữ liệu MySQL và viết các truy vấn dữ liệu hiệu quả.",
      "Học hỏi và áp dụng các nguyên tắc Clean Code và Component-Driven Development.",
    ],
    technologies: ["HTML5/CSS3", "JavaScript", "Node.js", "Express", "MySQL"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Breadcrumb navigation */}
      <div className="flex items-center gap-2 text-sm text-slate-400">
        <Link href="/about" className="hover:text-blue-400 transition-colors">
          Giới thiệu
        </Link>
        <span>/</span>
        <span className="text-white font-medium">Kinh nghiệm (Experience)</span>
      </div>

      <SectionTitle
        label="Nested Route: /about/experience"
        title="Kinh Nghiệm & Hoạt Động"
        description="Các dự án thực tế, vị trí thực tập và kinh nghiệm làm việc đã tích lũy trong quá trình học tập."
        align="left"
      />

      {/* Timeline kinh nghiệm */}
      <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
        {experienceList.map((exp, index) => (
          <div key={index} className="relative pl-10 group">
            {/* Timeline bullet */}
            <div className="absolute left-1.5 top-1.5 w-5 h-5 rounded-full bg-slate-900 border-2 border-indigo-500 group-hover:bg-indigo-500 transition-colors"></div>

            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 group-hover:border-slate-700 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0 font-medium">
                  {exp.period}
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-300 mb-4">
                <span className="font-semibold text-blue-400">
                  🏢 {exp.organization}
                </span>
                <span>•</span>
                <span className="text-slate-500">{exp.location}</span>
              </div>

              <div className="mb-5">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Trách nhiệm & Thành quả:
                </h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-blue-500 shrink-0 mt-0.5">▹</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Công nghệ áp dụng:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Điều hướng nhanh giữa các trang about */}
      <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/about/education"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
        >
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Xem Học vấn</span>
        </Link>

        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <span>Quay lại trang Giới thiệu</span>
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
    </div>
  );
}
