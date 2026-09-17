import SectionTitle from "../../components/SectionTitle";
import SkillCard from "../../components/SkillCard";

export default function Skills() {
  const skills = [
    { id: 1, name: "HTML & CSS", description: "Xây dựng giao diện web cơ bản." },
    { id: 2, name: "React & Next.js", description: "Xây dựng ứng dụng web hiện đại." },
    { id: 3, name: "Tailwind CSS", description: "Tiện ích tạo style nhanh chóng." }
  ];

  return (
    <div>
      <SectionTitle title="Kỹ năng của tôi" description="Các công nghệ tôi sử dụng" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <SkillCard 
            key={skill.id} 
            skill={skill} 
            // Truyền Props đa dạng ở thẻ đầu tiên để đáp ứng yêu cầu đề bài
            name={index === 0 ? "Ngô Tiến Anh" : null}
            age={index === 0 ? 20 : null}
            isStudent={index === 0 ? true : null}
            skillsArray={index === 0 ? ["HTML", "CSS", "React"] : null}
          />
        ))}
      </div>
    </div>
  );
}