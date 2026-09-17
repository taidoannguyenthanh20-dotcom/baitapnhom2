
import Link from "next/link";
import SectionTitle from "../../components/SectionTitle";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <SectionTitle
        label="About Me"
        title="Giới thiệu"
        description="Một vài thông tin mẫu về Nông Thị Hồng Lan, Frontend Developer đang học tập và xây dựng các sản phẩm Web."
      />

      <div className="space-y-5 leading-8 text-gray-600">
        <p>
          Tôi là sinh viên Công nghệ Đa phương tiện, yêu thích biến ý tưởng thành
          những giao diện trực quan, dễ sử dụng và hoạt động tốt trên nhiều
          thiết bị.
        </p>
        <p>
          Mục tiêu của tôi là phát triển chuyên môn Frontend với React,
          Next.js, TypeScript và các nguyên tắc thiết kế sản phẩm hiện đại.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/about/education"
          className="rounded-lg bg-blue-600 px-5 py-3 text-white"
        >
          Xem học vấn
        </Link>
        <Link
          href="/about/experience"
          className="rounded-lg border border-blue-600 px-5 py-3 text-blue-600"
        >
          Xem kinh nghiệm
        </Link>
      </div>
    </section>
  );
}
