export default function SkillCard({ name, experienceYears, isProficient, categories }) {
  return (
    <div className="border border-gray-200 p-4 rounded-lg shadow-xs bg-white hover:border-gray-400 transition">
      <h3 className="text-lg font-bold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-600 mt-1">Kinh nghiệm: {experienceYears} năm</p>
      <p className="text-sm text-gray-600">
        Trạng thái: <span className="font-medium text-gray-800">{isProficient ? "Thành thạo" : "Đang học"}</span>
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {categories.map((cat, idx) => (
          <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-md font-medium">
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
}