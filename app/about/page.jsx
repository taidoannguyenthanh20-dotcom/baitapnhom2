import Link from "next/link";
import SectionTitle from "../../components/SectionTitle";

export const metadata = { title: "About" };

export default function About() {
  return (
    <section className="container-page py-16">
      <SectionTitle
        label="About me"
        title="Giới thiệu bản thân"
        description="Tổng quan ngắn về mình, kèm hai trang con trình bày học vấn và kinh nghiệm."
      />

      <div className="max-w-3xl space-y-5 text-lg leading-8 text-slate-600">
        <p>
          Xin chào, mình là Lâm Quốc Toàn, sinh viên ngành Công nghệ đa phương
          tiện, chuyên ngành Phát triển ứng dụng.
        </p>
        <p>
          Mình đang tập trung vào Web Development, đặc biệt là JavaScript,
          React và Next.js. Mục tiêu là xây dựng những ứng dụng web có giao
          diện rõ ràng, dễ dùng và code có cấu trúc tốt.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Link href="/about/education" className="card card-hover group block">
          <p className="label">Nested route</p>
          <h2 className="mt-3 text-2xl transition group-hover:text-blue-600">
            Học vấn
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Trường học, chuyên ngành và các môn học liên quan tới phát triển
            web tại <span className="font-mono text-sm">/about/education</span>.
          </p>
          <p className="mt-4 font-semibold text-blue-600">Xem học vấn →</p>
        </Link>

        <Link href="/about/experience" className="card card-hover group block">
          <p className="label">Nested route</p>
          <h2 className="mt-3 text-2xl transition group-hover:text-blue-600">
            Kinh nghiệm
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Các dự án học tập và kỹ năng tích lũy được tại{" "}
            <span className="font-mono text-sm">/about/experience</span>.
          </p>
          <p className="mt-4 font-semibold text-blue-600">Xem kinh nghiệm →</p>
        </Link>
      </div>
    </section>
  );
}
