import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export default function ExperiencePage() {
  return (
    <div className="space-y-8 py-6">
      <div className="flex items-center justify-between">
        <Link
          href="/about"
          className="text-xs font-semibold text-zinc-400 hover:text-zinc-100 flex items-center gap-1"
        >
          ← Quay lại Giới thiệu
        </Link>
        <span className="text-xs text-zinc-500 font-mono">Route: /about/experience</span>
      </div>

      <SectionTitle
        label="Kinh nghiệm"
        title="Kinh nghiệm Làm việc & Thực tế"
        description="Quá trình tham gia phát triển dự án phần mềm của Phùng Anh Lực."
      />

      <div className="max-w-3xl mx-auto space-y-6">
        {/* Timeline item 1 */}
        <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-4">
            <div>
              <h3 className="text-xl font-bold text-zinc-100">
                FullStack Developer — Freelance & Open Source
              </h3>
              <p className="text-sm text-emerald-400 font-medium">
                Dự án Cá nhân & Khách hàng
              </p>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-mono font-semibold border border-emerald-500/20 w-fit">
              2024 - Hiện tại
            </span>
          </div>

          <p className="text-zinc-300 text-sm leading-relaxed">
            Thiết kế và triển khai các giải pháp web ứng dụng cao:
          </p>

          <ul className="list-disc list-inside text-xs text-zinc-400 space-y-1">
            <li>Xây dựng hệ thống <strong>Shrtn URL Shortener</strong> với Redis Cache-aside và phân tích Realtime Click.</li>
            <li>Phát triển ứng dụng <strong>Clippy Clipboard Manager</strong> cho Linux bằng Rust & SQLite.</li>
            <li>Tối ưu trải nghiệm người dùng với Next.js App Router, Tailwind CSS và Server Components.</li>
          </ul>
        </div>

        {/* Timeline item 2 */}
        <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-4">
            <div>
              <h3 className="text-xl font-bold text-zinc-100">
                Frontend Developer Intern
              </h3>
              <p className="text-sm text-blue-400 font-medium">
                Công ty Công nghệ & Giải pháp Web
              </p>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 font-mono font-semibold border border-blue-500/20 w-fit">
              2023 - 2024
            </span>
          </div>

          <p className="text-zinc-300 text-sm leading-relaxed">
            Phối hợp cùng nhóm lập trình xây dựng giao diện người dùng cho các trang web thương mại điện tử và quản lý dữ liệu.
          </p>

          <ul className="list-disc list-inside text-xs text-zinc-400 space-y-1">
            <li>Xây dựng giao diện Responsive từ bản thiết kế Figma chuẩn từng pixel.</li>
            <li>Tích hợp RESTful APIs, tối ưu hóa thời gian render và cải thiện chỉ số Lighthouse.</li>
            <li>Sử dụng Git Flow để phối hợp mã nguồn cùng nhóm phát triển.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}