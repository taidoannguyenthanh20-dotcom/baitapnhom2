import Link from "next/link";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-semibold uppercase tracking-widest text-blue-600">
        Hello, I am
      </p>

      <h1 className="mt-4 text-5xl font-bold">
        Nông Thị Hồng Lan
      </h1>

      <h2 className="mt-4 text-2xl text-gray-600">
        Frontend Developer
      </h2>

      <p className="mt-6 max-w-2xl leading-8 text-gray-600">
        Tôi xây dựng các website hiện đại, responsive và dễ sử dụng
        bằng React, Next.js và Tailwind CSS.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/projects"
          className="rounded-lg bg-blue-600 px-5 py-3 text-white"
        >
          Xem dự án
        </Link>

        <Link
          href="/contact"
          className="rounded-lg border border-blue-600 px-5 py-3 text-blue-600"
        >
          Liên hệ
        </Link>
      </div>
    </section>
  );
}
