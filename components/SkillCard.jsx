// 
export default function SkillCard({ skill, name, age, isStudent, skillsArray }) {
  return (
    <div className="border p-4 rounded shadow-sm bg-white">
      <h3 className="text-lg font-bold text-blue-600">{skill.name}</h3>
      <p className="text-sm text-gray-600">{skill.description}</p>
      
      
      {name && (
        <div className="mt-4 p-2 bg-gray-100 text-xs">
          <p><strong>String:</strong> Tên - Ngô Tiến Anh</p>
          <p><strong>Number:</strong> Tuổi - 19</p>
          <p><strong>Boolean:</strong> Sinh viên - {isStudent ? "Đúng" : "Sai"}</p>
          <p><strong>Array:</strong> Kỹ năng khác - {skillsArray.join(", ")}</p>
        </div>
      )}
    </div>
  );
}