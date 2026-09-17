export default function SkillCard({ skill }) {
  return (
    <div className="group rounded-2xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold text-gray-900 transition group-hover:text-blue-600">
          {skill.name}
        </h3>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
          {skill.level}
        </span>
      </div>

      <p className="mt-4 leading-7 text-gray-600">
        {skill.description}
      </p>
    </div>
  );
}