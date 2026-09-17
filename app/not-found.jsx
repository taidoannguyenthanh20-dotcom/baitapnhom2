
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        404
      </p>
      <h1 className="mt-3 text-4xl font-bold text-gray-900">
        Không tìm thấy trang
      </h1>
      <p className="mt-4 text-gray-600">
        Trang bạn đang tìm kiếm không tồn tại hoặc đã được chuyển đi.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white"
      >
        Về trang chủ
      </Link>
    </section>
  );
}
