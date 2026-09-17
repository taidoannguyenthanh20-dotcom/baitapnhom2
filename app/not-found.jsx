import Link from "next/link";

export const metadata = { title: "Không tìm thấy trang" };

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="text-7xl font-bold text-blue-600">404</p>
      <h1 className="mt-6 text-3xl">Không tìm thấy trang</h1>
      <p className="mt-4 max-w-md leading-7 text-slate-600">
        Trang bạn đang tìm không tồn tại hoặc đã được di chuyển. Hãy quay về
        trang chủ hoặc xem danh sách dự án.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          ← Quay về trang chủ
        </Link>
        <Link href="/projects" className="btn-secondary">
          Xem dự án
        </Link>
      </div>
    </section>
  );
}
