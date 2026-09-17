export default function SkillCard({ skill }) {
  if (!skill) return null;

  // Tùy chỉnh màu badge theo mức độ kỹ năng
  const getLevelBadgeClass = (level = "") => {
    if (level.includes("Thành thạo")) {
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    }
    if (level.includes("Cơ bản - Khá")) {
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    }
    if (level.includes("Đang sử dụng")) {
      return "bg-purple-500/10 text-purple-400 border-purple-500/20";
    }
    return "bg-amber-500/10 text-amber-400 border-amber-500/20";
  };

  return (
    <div className="group p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-800/40 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/5 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
            {skill.name}
          </h3>
          <span
            className={`text-xs px-2.5 py-0.5 rounded-full font-medium border shrink-0 ${getLevelBadgeClass(
              skill.level,
            )}`}
          >
            {skill.level}
          </span>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">
          {skill.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center text-xs text-slate-500">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
        <span>Kỹ năng chuyên môn</span>
      </div>
    </div>
  );
}
