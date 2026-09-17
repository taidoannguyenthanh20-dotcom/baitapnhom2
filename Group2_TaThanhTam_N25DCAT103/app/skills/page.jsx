import SectionTitle from "@/components/SectionTitle";
import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/skills";

export const metadata = { title: "Kỹ năng" };

export default function SkillsPage() {
  return (
    <section>
      <SectionTitle label="Skills" title="Kỹ năng" description="Các công nghệ và công cụ tôi đang học và sử dụng." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => <SkillCard key={skill.id} skill={skill} />)}
      </div>
    </section>
  );
}
