import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <div>
      <SectionTitle label="Giới thiệu" title="Thông tin cá nhân" description="Tổng quan về hành trình học tập và làm việc." />
      <p className="mb-6">Chọn mục bên dưới để xem thông tin chi tiết:</p>
      <div className="flex gap-4">
        <Link href="/about/education" className="p-4 border rounded-lg bg-blue-50 text-blue-700 font-semibold hover:bg-blue-100">
          🎓 Học vấn (Education)
        </Link>
        <Link href="/about/experience" className="p-4 border rounded-lg bg-green-50 text-green-700 font-semibold hover:bg-green-100">
          💼 Kinh nghiệm (Experience)
        </Link>
      </div>
    </div>
  );
}