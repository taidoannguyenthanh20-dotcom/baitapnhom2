import Link from "next/link";
import SectionTitle from "../../../components/SectionTitle";

export const metadata = { title: "Kinh nghiệm" };

export default function Experience() {
  return (
    <section className="container-page py-16">
      <SectionTitle
        label="Experience"
        title="Kinh nghiệm"
        description="Trang con của /about, minh họa nested routing trong Next.js App Router."
      />

      <div className="max-w-3xl space-y-6">
        <div className="card">
          <p className="text-sm font-medium text-blue-600">2025 - 2026</p>
          <h2 className="mt-2 text-2xl">Web Development Projects</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Thực hiện các dự án Web trong quá trình học tập, tập trung vào
            React, Next.js và xây dựng giao diện responsive.
          </p>
        </div>

        <div className="card">
          <p className="text-sm font-medium text-blue-600">
            Academic Projects
          </p>
          <h2 className="mt-2 text-2xl">Dự án học tập</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Tham gia xây dựng các dự án liên quan đến phát triển ứng dụng, cơ
            sở dữ liệu và công nghệ Web.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/about" className="btn-secondary">
          ← Về trang About
        </Link>
        <Link href="/about/education" className="btn-primary">
          Sang trang Học vấn →
        </Link>
      </div>
    </section>
  );
}
