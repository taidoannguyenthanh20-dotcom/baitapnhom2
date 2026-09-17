export default function SkillCard({ skill }) {
  // Extracting props of different types:
  // skill.name: String
  // skill.level: Number
  // skill.isFeatured: Boolean
  // skill.tags: Array
  const { name, category, level, isFeatured, tags, description } = skill;

  return (
    <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-all shadow-md hover:shadow-xl flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
              {category}
            </span>
          </div>

          {/* Boolean Prop Demonstration */}
          {isFeatured && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
              FEATURED
            </span>
          )}
        </div>

        {/* String Prop Demonstration */}
        <h3 className="text-xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors mb-2">
          {name}
        </h3>

        <p className="text-zinc-400 text-xs leading-relaxed mb-4">
          {description}
        </p>

        {/* Number Prop Demonstration */}
        <div className="mb-4">
          <div className="flex justify-between text-xs font-semibold text-zinc-300 mb-1.5">
            <span>Mức độ thành thạo</span>
            <span className="text-blue-400">{level}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-500"
              style={{ width: `${level}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Array Prop Demonstration */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/60">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700/50"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
