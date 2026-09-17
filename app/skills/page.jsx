import SectionTitle from "@/components/SectionTitle";
import SkillCard from "@/components/SkillCard";
import skillGroups from "@/data/skills.js";

export const metadata = {
  title: "Kỹ năng chuyên môn | Bùi Thành Đạt Portfolio",
  description:
    "Danh sách kỹ năng Frontend, Backend, Cơ sở dữ liệu và các công cụ lập trình.",
};

export default function SkillsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Tiêu đề trang */}
      <SectionTitle
        label="Năng Lực Kỹ Thuật"
        title="Kỹ Năng & Công Nghệ"
        description="Tổng hợp các ngôn ngữ lập trình, framework, cơ sở dữ liệu và công cụ tôi đã và đang sử dụng trong quá trình phát triển phần mềm."
      />

      {/* Hiển thị các nhóm kỹ năng từ file data/skills.js */}
      <div className="space-y-14">
        {skillGroups.map((group, groupIndex) => (
          <div
            key={group.title || groupIndex}
            className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 shadow-md"
          >
            {/* Tiêu đề nhóm */}
            <div className="mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold text-sm">
                  0{groupIndex + 1}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {group.title}
                </h3>
              </div>
              {group.description && (
                <p className="text-slate-400 text-sm mt-2 ml-11">
                  {group.description}
                </p>
              )}
            </div>

            {/* Danh sách SkillCard qua Component + Props */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {group.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
