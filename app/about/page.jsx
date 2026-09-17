import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import Avatar from "@/components/Avatar";

export default function AboutPage() {
  return (
    <div className="space-y-12 py-6">
      <SectionTitle
        label="Giới thiệu"
        title="Về Phùng Anh Lực"
        description="FullStack Developer đam mê công nghệ và sáng tạo sản phẩm kỹ thuật số."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Bio Card */}
        <div className="md:col-span-2 p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 space-y-6">
          <div className="flex items-center gap-4">
            <Avatar size="small" />
            <div>
              <h3 className="text-2xl font-bold text-zinc-100">
                Xin chào, tôi là Phùng Anh Lực 👋
              </h3>
              <p className="text-xs text-blue-400 font-semibold mt-0.5">FullStack Developer</p>
            </div>
          </div>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Tôi là một <strong>FullStack Developer</strong> sinh sống và làm việc tại Việt Nam. Tôi có niềm đam mê mãnh liệt với việc phát triển ứng dụng web từ giao diện người dùng (Frontend) trực quan, hiện đại cho đến kiến trúc hệ thống xử lý dữ liệu (Backend) mạnh mẽ và bảo mật.
          </p>

          <p className="text-zinc-400 text-sm leading-relaxed">
            Mục tiêu nghề nghiệp của tôi là trở thành một Lead FullStack Engineer, không ngừng học hỏi và áp dụng các công nghệ mới nhất như Next.js App Router, TypeScript, Microservices và Cloud Infrastructure nhằm mang lại giá trị thực sự cho người dùng.
          </p>

          <div className="pt-4 border-t border-zinc-800 grid grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-zinc-500 block">Họ và tên:</span>
              <span className="font-semibold text-zinc-200">Phùng Anh Lực</span>
            </div>
            <div>
              <span className="text-zinc-500 block">Vị trí:</span>
              <span className="font-semibold text-blue-400">FullStack Developer</span>
            </div>
            <div>
              <span className="text-zinc-500 block">Email:</span>
              <span className="font-semibold text-zinc-200">anhluc.dev@example.com</span>
            </div>
            <div>
              <span className="text-zinc-500 block">Trạng thái:</span>
              <span className="font-semibold text-emerald-400">Sẵn sàng nhận dự án</span>
            </div>
          </div>
        </div>

        {/* Navigation to Sub-routes */}
        <div className="space-y-4">
          <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
            Xem thêm thông tin
          </h4>

          <Link
            href="/about/education"
            className="block p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-blue-500/50 transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">
                  🎓 Trình độ Học vấn
                </h5>
                <p className="text-xs text-zinc-400 mt-1">
                  Thông tin trường đại học, chuyên ngành và bằng cấp.
                </p>
              </div>
              <span className="text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all">
                →
              </span>
            </div>
          </Link>

          <Link
            href="/about/experience"
            className="block p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-emerald-500/50 transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                  💼 Kinh nghiệm Làm việc
                </h5>
                <p className="text-xs text-zinc-400 mt-1">
                  Các vị trí làm việc, dự án thực tế và quá trình công tác.
                </p>
              </div>
              <span className="text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all">
                →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
