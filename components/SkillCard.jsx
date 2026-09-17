export default function SkillCard({ skill }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-100">
      <h3 className="text-xl font-bold text-gray-800">{skill.name}</h3>
      <p className="text-gray-600 mt-2">{skill.description}</p>
    </div>
  );
}