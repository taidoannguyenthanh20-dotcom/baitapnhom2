import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Liên hệ | Bùi Thành Đạt Portfolio",
  description:
    "Trang liên hệ, gửi thông tin và thông điệp hợp tác với Bùi Thành Đạt.",
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SectionTitle
        label="Kết Nối & Hợp Tác"
        title="Liên Hệ Với Tôi"
        description="Bạn có ý tưởng dự án mới, muốn trao đổi công việc hoặc đơn giản là muốn kết nối? Hãy gửi tin nhắn cho tôi qua form bên dưới."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Information & Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-white">
              Thông Tin Trực Tiếp
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Tôi luôn sẵn sàng phản hồi các trao đổi học thuật, cơ hội thực tập
              và các dự án phát triển phần mềm trong thời gian sớm nhất.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 text-lg">
                  📍
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium block">
                    Địa điểm
                  </span>
                  <span className="text-sm text-slate-200 font-semibold">
                    TP. Hồ Chí Minh, Việt Nam
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 text-lg">
                  ✉️
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium block">
                    Email cá nhân
                  </span>
                  <a
                    href="mailto:datbui@example.com"
                    className="text-sm text-blue-400 hover:underline font-semibold"
                  >
                    datbui@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-lg">
                  💼
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium block">
                    GitHub
                  </span>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-blue-400 hover:underline font-semibold"
                  >
                    github.com/game-dev-newbie
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 text-lg">
                  ⏰
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium block">
                    Thời gian làm việc
                  </span>
                  <span className="text-sm text-slate-200 font-semibold">
                    Thứ 2 - Thứ 7 (8:00 - 18:00)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Component: ContactForm */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
