export default function SkillCard({ skill }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow hover:border-indigo-100 flex flex-col justify-between">
      <div>
        <div className="text-3xl mb-3">{skill.icon || "⚡"}</div>
        <h3 className="font-semibold text-lg text-slate-800">{skill.name}</h3>
        <p className="text-sm text-slate-600 mt-2 line-clamp-2">{skill.description}</p>
      </div>
      <span className="mt-4 inline-block text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md w-fit">
        {skill.level || "Proficient"}
      </span>
    </div>
  );
}