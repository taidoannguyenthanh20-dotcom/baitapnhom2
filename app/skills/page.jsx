import SectionTitle from "@/components/SectionTitle";
import SkillCard from "@/components/SkillCard";
import { skillsData } from "@/data/portfolioData";

export const metadata = {
  title: "Skills",
  description: "Danh sách kỹ năng và công nghệ của Hoàng Ngọc Hòa.",
};

export default function SkillsPage() {
  const categories = Object.entries(skillsData);

  return (
    <div className="section" id="skills-page">
      <div className="container">
        <SectionTitle
          label="// skills"
          title="Kỹ năng"
          description="Các công nghệ và công cụ tôi đã học và sử dụng."
        />

        {categories.map(([category, skills]) => (
          <div key={category} id={`skills-category-${category.toLowerCase()}`}>
            <p className="skill-category-title">// {category}</p>
            <div className="grid-3" style={{ gap: 12, marginBottom: 8 }}>
              {skills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  showLevel={true}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}