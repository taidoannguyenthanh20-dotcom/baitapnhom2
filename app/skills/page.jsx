import SectionTitle from "@/components/SectionTitle";
import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/skills";

export default function SkillsPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20">

        <SectionTitle
          label="My Skills"
          title="Skills & Technologies"
          description="Some of the technologies, tools and skills I am currently learning and using."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
            />
          ))}
        </div>

      </section>
    </main>
  );
}