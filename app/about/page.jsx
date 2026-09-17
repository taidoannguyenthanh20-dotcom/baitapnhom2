import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ProfileInfo from "@/components/ProfileInfo";

export const metadata = {
  title: "Giới thiệu | Bùi Thành Đạt Portfolio",
  description:
    "Thông tin cá nhân, định hướng nghề nghiệp và liên kết tới học vấn, kinh nghiệm.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Tiêu đề trang */}
      <SectionTitle
        label="Hồ sơ cá nhân"
        title="Về Bản Thân Tôi"
        description="Chào mừng bạn đến với trang giới thiệu của tôi. Hãy cùng khám phá hành trình học tập, mục tiêu nghề nghiệp và định hướng công nghệ của tôi."
      />

      {/* 1. Giới thiệu tổng quan */}
      <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 space-y-4 text-slate-300 leading-relaxed">
        <h3 className="text-xl font-bold text-white mb-2">
          Hành trình và đam mê lập trình
        </h3>
        <p>
          Tôi là một sinh viên chuyên ngành Kỹ thuật Phần mềm với niềm đam mê
          sâu sắc dành cho lập trình Web Fullstack. Tôi luôn hào hứng khi biến
          những ý tưởng sáng tạo thành các sản phẩm kỹ thuật số thực tế, tối ưu
          trải nghiệm cho người dùng cuối.
        </p>
        <p>
          Với nền tảng vững vàng về thuật toán, cấu trúc dữ liệu cùng kỹ năng
          thực chiến trên hệ sinh thái hiện đại như React, Next.js, Node.js và
          cơ sở dữ liệu quan hệ, tôi không ngừng trau dồi và cập nhật các công
          nghệ mới mỗi ngày.
        </p>
      </div>

      {/* 2. Minh họa Props với nhiều kiểu dữ liệu (Requirement 8) */}
      <div>
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span>🎯 Thông tin cá nhân qua Component & Props</span>
        </h3>
        {/* Truyền các kiểu dữ liệu: String, Number, Boolean, Array */}
        <ProfileInfo
          name="Bùi Thành Đạt"
          role="Frontend / Fullstack Developer"
          age={21}
          gpa={3.6}
          isStudent={true}
          isAvailable={true}
          skills={["JavaScript", "React", "Next.js", "Tailwind CSS", "Node.js"]}
          hobbies={[
            "Phát triển Web",
            "Nghiên cứu AI",
            "Đọc sách kỹ thuật",
            "Chơi game",
          ]}
        />
      </div>

      {/* 3. Liên kết đến 2 route con: /about/education và /about/experience */}
      <div className="pt-6 border-t border-slate-800">
        <h3 className="text-xl font-bold text-white mb-6 text-center">
          Khám Phá Chi Tiết (Nested Routing)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card dẫn đến /about/education */}
          <Link
            href="/about/education"
            className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/40 transition-all duration-300 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                🎓
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                Học Vấn & Đào Tạo
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Thông tin về trường đại học, chuyên ngành, các môn học nòng cốt
                và quá trình tích lũy kiến thức.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-400">
              <span>Xem học vấn (`/about/education`)</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>

          {/* Card dẫn đến /about/experience */}
          <Link
            href="/about/experience"
            className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/40 transition-all duration-300 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                💼
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors mb-2">
                Kinh Nghiệm & Đồ Án
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Các dự án thực tế, hoạt động nhóm, giải quyết vấn đề và các kỹ
                năng đã ứng dụng vào sản phẩm.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-indigo-400">
              <span>Xem kinh nghiệm (`/about/experience`)</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
