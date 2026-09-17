import SectionTitle from '@/components/SectionTitle';
import SkillCard from '@/components/SkillCard';

export default function SkillsPage() {
  const skillsList = [
    { id: 1, name: "Next.js & React", description: "Xây dựng Component, xử lý State, tối ưu Rendering." },
    { id: 2, name: "Tailwind CSS", description: "Thiết kế giao diện Responsive nhanh chóng." },
    { id: 3, name: "Python & OpenCV", description: "Lập trình đồ họa 3D và xử lý ảnh." },
    { id: 4, name: "Database", description: "MySQL, SQL Server, thiết kế Schema và truy vấn." }
  ];

  return (
    <div>
      <SectionTitle label="My Skills" title="Kỹ Năng Công Nghệ" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {skillsList.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}