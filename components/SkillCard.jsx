export default function SkillCard({ skill }) {
  return (
    <div className="group rounded-2xl border border-[var(--border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg">
      
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">
          {skill.name}
        </h3>

        <span className="text-sm font-semibold text-[var(--primary)]">
          {skill.level}%
        </span>
      </div>

      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
        {skill.description}
      </p>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-[var(--primary)]"
          style={{ width: `${skill.level}%` }}
        />
      </div>

      {skill.isFavorite && (
        <p className="mt-3 text-xs font-medium text-[var(--primary)]">
          ★ Favorite skill
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {skill.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[var(--primary-light)] px-3 py-1 text-xs text-purple-700"
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  );
}