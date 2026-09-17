import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <SectionTitle
        label="Giới thiệu"
        title="Thông tin cá nhân"
        description="Đam mê phát triển web và xây dựng sản phẩm chất lượng"
        level={1}
      />
      <div className="bg-white p-8 rounded-xl border border-slate-200 leading-relaxed text-slate-700 space-y-4">
        <p>
          Tôi là sinh viên năm 4 của Học viện Công nghệ Bưu chính Viễn thông. Là một lập trình viên có mục tiêu tạo ra những sản phẩm kỹ thuật số trực quan, gọn gàng và dễ tiếp cận.
        </p>
        <p>
          Để hiểu rõ hơn về hành trình của tôi, bạn có thể xem các thông tin chi tiết:
        </p>
        <div className="flex gap-4 pt-4">
          <Link
            href="/about/education"
            className="flex-1 p-4 rounded-lg border border-indigo-100 bg-indigo-50/50 hover:bg-indigo-50 text-indigo-700 font-semibold text-center transition"
          >
            🎓 Học vấn (Education) →
          </Link>
          <Link
            href="/about/experience"
            className="flex-1 p-4 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 font-semibold text-center transition"
          >
            💼 Kinh nghiệm (Experience) →
          </Link>
        </div>
      </div>
    </div>
  );
}
