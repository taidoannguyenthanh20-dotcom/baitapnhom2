import Link from "next/link";
import SectionTitle from "../../../components/SectionTitle";

export const metadata = { title: "Học vấn" };

const subjects = [
  "Lập trình Web",
  "JavaScript nâng cao",
  "React & Next.js",
  "Cơ sở dữ liệu",
  "Thiết kế giao diện",
];

export default function Education() {
  return (
    <section className="container-page py-16">
      <SectionTitle
        label="Education"
        title="Học vấn"
        description="Trang con của /about, minh họa nested routing trong Next.js App Router."
      />

      <div className="card max-w-3xl">
        <h2 className="text-2xl">Công nghệ đa phương tiện</h2>
        <p className="mt-2 text-slate-600">Chuyên ngành Phát triển ứng dụng</p>
        <p className="mt-4 leading-7 text-slate-600">
          Tập trung vào phát triển ứng dụng web, lập trình và các công nghệ
          phần mềm hiện đại như React, Next.js và cơ sở dữ liệu.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {subjects.map((subject) => (
            <span key={subject} className="chip">
              {subject}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/about" className="btn-secondary">
          ← Về trang About
        </Link>
        <Link href="/about/experience" className="btn-primary">
          Sang trang Kinh nghiệm →
        </Link>
      </div>
    </section>
  );
}
