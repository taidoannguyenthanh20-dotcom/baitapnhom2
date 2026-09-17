import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export const metadata = {
  title: "Học vấn | Bùi Thành Đạt Portfolio",
  description:
    "Thông tin quá trình học vấn, trường đại học và các môn học chuyên ngành.",
};

const educationHistory = [
  {
    school: "Trường Đại học Công nghệ & Khoa học Máy tính",
    degree: "Cử nhân Kỹ thuật Phần mềm (Software Engineering)",
    period: "2022 - Hiện tại (Dự kiến tốt nghiệp 2026)",
    gpa: "3.6 / 4.0 (Loại Giỏi)",
    description:
      "Tập trung nghiên cứu phát triển phần mềm, kiến trúc hệ thống Web, cơ sở dữ liệu quan hệ và phi quan hệ, phân tích thuật toán.",
    courses: [
      "Lập trình Web & Ứng dụng",
      "Cấu trúc dữ liệu & Giải thuật",
      "Hệ quản trị cơ sở dữ liệu (MySQL)",
      "Kiến trúc phần mềm",
      "Lập trình hướng đối tượng (OOP)",
      "Mạng máy tính & Bảo mật Web",
    ],
  },
  {
    school: "Trường Trung học Phổ thông",
    degree: "Bằng Tốt Nghiệp THPT",
    period: "2019 - 2022",
    gpa: "Học sinh Giỏi",
    description:
      "Khối A00 (Toán, Vật lý, Hóa học) & Tin học đạt điểm cao, tích cực tham gia các kỳ thi học sinh giỏi toán.",
    courses: ["Toán học nâng cao", "Tin học văn phòng & Pascal/C++"],
  },
];

export default function EducationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Breadcrumb navigation */}
      <div className="flex items-center gap-2 text-sm text-slate-400">
        <Link href="/about" className="hover:text-blue-400 transition-colors">
          Giới thiệu
        </Link>
        <span>/</span>
        <span className="text-white font-medium">Học vấn (Education)</span>
      </div>

      <SectionTitle
        label="Nested Route: /about/education"
        title="Quá Trình Học Vấn"
        description="Thông tin về bằng cấp, môi trường đào tạo và các môn học chuyên sâu đã hoàn thành."
        align="left"
      />

      {/* Timeline học vấn */}
      <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
        {educationHistory.map((item, index) => (
          <div key={index} className="relative pl-10 group">
            {/* Timeline bullet */}
            <div className="absolute left-1.5 top-1.5 w-5 h-5 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:bg-blue-500 transition-colors"></div>

            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 group-hover:border-slate-700 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0 font-medium">
                  {item.period}
                </span>
              </div>

              <h4 className="text-base font-semibold text-slate-300 mb-2">
                🏛️ {item.school}
              </h4>

              <p className="text-sm font-medium text-emerald-400 mb-3">
                GPA: {item.gpa}
              </p>

              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                {item.description}
              </p>

              <div>
                <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Các môn học tiêu biểu:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {item.courses.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded-md text-xs bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Điều hướng nhanh giữa các trang about */}
      <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Quay lại trang Giới thiệu</span>
        </Link>

        <Link
          href="/about/experience"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
        >
          <span>Xem tiếp Kinh nghiệm</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
