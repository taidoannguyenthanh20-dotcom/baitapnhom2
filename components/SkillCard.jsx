export default function SkillCard({ name, level, isCore, tags }) {
  return (
    <div className={`p-5 rounded-xl border shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${isCore ? 'border-blue-500 bg-blue-50/30' : 'border-gray-200 bg-white'}`}>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-base text-gray-800">{name}</h3>
        {isCore && <span className="text-[10px] uppercase font-bold bg-blue-600 text-white px-2 py-0.5 rounded-full">Core</span>}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
        <div className="bg-blue-600 h-2 rounded-full transition-all duration-500" style={{ width: `${level}%` }}></div>
      </div>
      <div className="flex flex-wrap gap-1">
        {tags && tags.map((tag, idx) => (
          <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">#{tag}</span>
        ))}
      </div>
    </div>
  );
}