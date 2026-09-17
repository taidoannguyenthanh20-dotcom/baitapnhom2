import SectionTitle from "@/components/SectionTitle";
import SkillCard from "@/components/SkillCard";

const skillsData = [
  { name: "HTML5 / CSS3", description: "Xây dựng khung cấu trúc và giao diện chuẩn SEO", icon: "🌐", level: "Expert" },
  { name: "JavaScript (ES6+)", description: "Nắm vững Async/Await, Closures, DOM manipulation", icon: "💛", level: "Advanced" },
  { name: "React", description: "Hooks, Context API, Component Lifecycle", icon: "⚛️", level: "Advanced" },
  { name: "Next.js", description: "App Router, SSR, SSG, Routing dynamic", icon: "▲", level: "Intermediate" },
  { name: "Tailwind CSS", description: "Thiết kế Responsive, Utility-first styling", icon: "🎨", level: "Expert" },
  { name: "Git & GitHub", description: "Quản trị source code, branching, PR, CI/CD", icon: "🐙", level: "Intermediate" },
  { name: "Python", description: "Cơ bản về xử lý dữ liệu và scripting", icon: "🐍", level: "Beginner" },
];

export default function SkillsPage() {
  return (
    <div className="space-y-8">
      <SectionTitle
        label="My Skills"
        title="Kỹ năng chuyên môn"
        description="Các ngôn ngữ, framework và công cụ tôi sử dụng thành thạo"
        level={2}
        showBadge={true}
        tags={["Skills", "Tools", "Languages"]}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}