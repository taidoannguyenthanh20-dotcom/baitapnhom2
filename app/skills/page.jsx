import SectionTitle from "@/components/SectionTitle";
import SkillCard from "@/components/SkillCard";

export default function SkillsPage() {
  // Minh họa truyền các dạng dữ liệu khác nhau xuống Props (String, Number, Boolean, Array)
  const skillsList = [
    { id: 1, name: "React / Next.js", experienceYears: 2, isProficient: true, categories: ["Frontend", "Framework"] },
    { id: 2, name: "Tailwind CSS", experienceYears: 2, isProficient: true, categories: ["UI/UX", "CSS"] },
    { id: 3, name: "JavaScript / TypeScript", experienceYears: 3, isProficient: true, categories: ["Language"] },
    { id: 4, name: "Git & GitHub", experienceYears: 2, isProficient: false, categories: ["Tools", "DevOps"] },
  ];

  return (
    <div>
      <SectionTitle label="Kỹ năng" title="Danh sách công nghệ sử dụng" description="Các công nghệ đã học và áp dụng vào dự án thực tế." />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillsList.map((skill) => (
          <SkillCard
            key={skill.id}
            name={skill.name} // String
            experienceYears={skill.experienceYears} // Number
            isProficient={skill.isProficient} // Boolean
            categories={skill.categories} // Array
          />
        ))}
      </div>
    </div>
  );
}