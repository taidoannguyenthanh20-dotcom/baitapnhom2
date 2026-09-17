export default function SkillCard({ skill }) {
  return (
    <article className="panel">
      <h2 className="text-lg font-bold">{skill.name}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{skill.description}</p>
    </article>
  );
}
