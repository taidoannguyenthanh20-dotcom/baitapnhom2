import SectionTitle from "@/components/SectionTitle";
import SkillCard from "@/components/SkillCard";

const skillsList = [
  { name: "HTML & CSS", level: 90, isCore: true, tags: ["Web", "Layout"] },
  { name: "JavaScript", level: 85, isCore: true, tags: ["ES6+", "Async"] },
  { name: "React", level: 80, isCore: true, tags: ["UI", "Hooks"] },
  { name: "Next.js", level: 75, isCore: true, tags: ["SSR", "App Router"] },
  { name: "Tailwind CSS", level: 85, isCore: false, tags: ["Utility-First"] },
  { name: "Git & GitHub", level: 80, isCore: false, tags: ["VCS", "Workflow"] },
  { name: "Python", level: 65, isCore: false, tags: ["Scripting", "Basic"] },
];

export default function SkillsPage() {
  return (
    <div className="space-y-6 py-6">
      <SectionTitle label="My Skills" title="Kỹ Năng Lập Trình" description="Được render động qua Component + Props (String, Number, Boolean, Array)." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillsList.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill.name}
            level={skill.level}
            isCore={skill.isCore}
            tags={skill.tags}
          />
        ))}
      </div>
    </div>
  );
}