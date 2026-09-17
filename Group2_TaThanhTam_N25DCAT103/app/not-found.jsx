import Link from "next/link";

export default function NotFound() {
  return (
    <section className="panel text-center">
      <p className="font-semibold text-blue-700">404</p>
      <h1 className="mt-3 text-3xl font-bold">Không tìm thấy trang</h1>
      <p className="mt-4 text-slate-600">Đường dẫn này không tồn tại hoặc nội dung chưa được cập nhật.</p>
      <Link href="/" className="button mt-6">Về trang chủ</Link>
    </section>
  );
}
