import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export default function EducationPage() {
  return (
    <div className="space-y-8 py-6">
      <div className="flex items-center justify-between">
        <Link
          href="/about"
          className="text-xs font-semibold text-zinc-400 hover:text-zinc-100 flex items-center gap-1"
        >
          ← Quay lại Giới thiệu
        </Link>
        <span className="text-xs text-zinc-500 font-mono">Route: /about/education</span>
      </div>

      <SectionTitle
        label="Học vấn"
        title="Quá trình Học tập & Bằng cấp"
        description="Nền tảng kiến thức công nghệ thông tin và kiến trúc phần mềm của Phùng Anh Lực."
      />

      <div className="max-w-3xl mx-auto space-y-6">
        <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-4">
            <div>
              <h3 className="text-xl font-bold text-zinc-100">
                Đại học Chuyên ngành Công nghệ Thông tin
              </h3>
              <p className="text-sm text-blue-400 font-medium">
                Cử nhân Kỹ thuật Phần mềm (Software Engineering)
              </p>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 font-mono font-semibold border border-blue-500/20 w-fit">
              2022 - 2026
            </span>
          </div>

          <p className="text-zinc-300 text-sm leading-relaxed">
            Học tập bài bản các kiến thức cốt lõi về Khoa học Máy tính: Cấu trúc dữ liệu & Giải thuật, Thiết kế Cơ sở dữ liệu, Lập trình hướng đối tượng (OOP), Kiến trúc Phần mềm và An toàn thông tin.
          </p>

          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Các môn học tiêu biểu & Thành tích:
            </h4>
            <ul className="list-disc list-inside text-xs text-zinc-400 space-y-1">
              <li>Phát triển ứng dụng Web nâng cao (React & Next.js)</li>
              <li>Kiến trúc Hệ thống Phân tán & Cloud Computing</li>
              <li>Quản trị Cơ sở dữ liệu Quan hệ & NoSQL (PostgreSQL, Redis, MongoDB)</li>
              <li>Đồ án Xây dựng Website Portfolio & CV Developer</li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-3">
          <h3 className="text-lg font-bold text-zinc-100">
            📜 Chứng chỉ & Khóa học Chuyên sâu
          </h3>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li className="flex items-center justify-between border-b border-zinc-800/50 pb-2">
              <span>FullStack Web Development Bootcamp (Next.js & TypeScript)</span>
              <span className="text-xs text-zinc-500 font-mono">2024</span>
            </li>
            <li className="flex items-center justify-between border-b border-zinc-800/50 pb-2">
              <span>Git & Professional GitHub Workflow Certification</span>
              <span className="text-xs text-zinc-500 font-mono">2023</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
