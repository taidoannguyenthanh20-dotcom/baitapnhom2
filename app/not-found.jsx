import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h2 className="text-4xl font-bold mb-4">404 - Không tìm thấy trang</h2>
      <Link href="/" className="text-blue-600 underline">Quay về trang chủ</Link>
    </div>
  );
}
