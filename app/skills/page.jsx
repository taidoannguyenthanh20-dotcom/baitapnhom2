import PropsDemo from "../../components/PropsDemo";
import SectionTitle from "../../components/SectionTitle";
import SkillCard from "../../components/SkillCard";
import { skillGroups } from "../../data/skills";

export const metadata = { title: "Skills" };

export default function Skills() {
  return (
    <section className="container-page py-16">
      <SectionTitle
        label="My skills"
        title="Kỹ năng"
        description="Danh sách kỹ năng được lưu trong một mảng dữ liệu và render ra giao diện bằng component SkillCard kết hợp props."
      />

      <PropsDemo
        name="Lâm Quốc Toàn"
        age={21}
        isStudent={true}
        skills={["HTML", "CSS", "JavaScript", "React"]}
      />

      <div className="space-y-12">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h2 className="text-2xl">{group.title}</h2>
            <p className="mt-2 text-slate-600">{group.description}</p>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {group.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
