import SectionTitle from "@/components/SectionTitle";
import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/skills";

export default function SkillsPage() {
  return (
    <div className="space-y-12 py-6">
      <SectionTitle
        label="Kỹ năng chuyên môn"
        title="Danh sách Kỹ năng & Công nghệ"
        description="Minh họa việc truyền các kiểu dữ liệu Props (String, Number, Boolean, Array) xuống Component con SkillCard."
      />

      {/* Prop Types Explanation Banner */}
      <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-bold text-blue-400">💡 Minh họa truyền Props trong React Component:</span>
          <p className="mt-1 text-zinc-400">
            • <strong>String:</strong> <code className="text-amber-300">name</code>, <code className="text-amber-300">category</code> | • <strong>Number:</strong> <code className="text-amber-300">level={"{skill.level}"}</code> | • <strong>Boolean:</strong> <code className="text-amber-300">isFeatured={"{skill.isFeatured}"}</code> | • <strong>Array:</strong> <code className="text-amber-300">tags={"{skill.tags}"}</code>
          </p>
        </div>
      </div>

      {/* Render skills grid using .map() and Component + Props */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skillItem) => (
          <SkillCard key={skillItem.id} skill={skillItem} />
        ))}
      </div>
    </div>
  );
}