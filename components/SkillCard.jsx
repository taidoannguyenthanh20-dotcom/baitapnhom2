export default function SkillCard({ skill }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
      <h3 className="text-xl font-bold mb-2 text-blue-600">{skill.name}</h3>
      <p className="text-gray-600">{skill.description}</p>
    </div>
  );
}