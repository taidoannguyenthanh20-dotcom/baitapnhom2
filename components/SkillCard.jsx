export default function SkillCard({ skill }) {
  return (
    <article className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold">{skill.name}</h3>
      <p className="mt-2 text-sm text-blue-600">{skill.level}</p>
      <p className="mt-3 text-gray-600">{skill.description}</p>
    </article>
  );
}