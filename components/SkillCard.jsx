export default function SkillCard({ skill }) {
  return (
    <article className="card card-hover group">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl transition group-hover:text-blue-600">
          {skill.name}
        </h3>
        <span className="chip shrink-0">{skill.level}</span>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600">
        {skill.description}
      </p>
    </article>
  );
}
