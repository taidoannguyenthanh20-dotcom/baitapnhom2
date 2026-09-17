import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden border-b border-slate-800/80">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-indigo-600/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/60 text-xs font-medium text-blue-400 mb-6 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Sẵn sàng cho cơ hội thực tập & dự án mới</span>
        </div>

        {/* Name & Role */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 leading-tight">
          Xin chào, tôi là{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent">
            Bùi Thành Đạt
          </span>
        </h1>
        <p className="text-xl sm:text-2xl font-semibold text-slate-300 mb-6">
          Fullstack Web Developer & Software Engineering Student
        </p>

        {/* Short Bio */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Đam mê xây dựng các sản phẩm Web hoàn chỉnh, chú trọng vào trải nghiệm
          người dùng, hiệu năng cao và kiến trúc mã nguồn sạch sẽ với hệ sinh
          thái React, Next.js và Tailwind CSS.
        </p>

        {/* Call to action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5"
          >
            Khám phá dự án
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 transition-all duration-200"
          >
            Về bản thân tôi
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-blue-400 font-semibold text-sm border border-slate-800 transition-all duration-200"
          >
            Liên hệ hợp tác
          </Link>
        </div>
      </div>
    </section>
  );
}
