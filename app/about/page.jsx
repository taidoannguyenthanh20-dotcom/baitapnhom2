import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-10 max-w-3xl text-center">
      <h1 className="text-3xl font-bold mb-4">Về bản thân tôi</h1>
      <p className="text-gray-600 mb-6">
        Trang giới thiệu thông tin chi tiết về học vấn và kinh nghiệm làm việc của tôi.
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/about/education" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium">
          Xem Học vấn
        </Link>
        <Link href="/about/experience" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 font-medium">
          Xem Kinh nghiệm
        </Link>
      </div>
    </div>
  );
}
