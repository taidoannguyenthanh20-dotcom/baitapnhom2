/**
 * SkillCard – Server Component
 * Props:
 *   skill: { name: string, level: number (0-100) }
 *   showLevel: boolean (default true)
 */
export default function SkillCard({ skill, showLevel = true }) {
  return (
    <div className="skill-card" id={`skill-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        {showLevel && (
          <span className="skill-level">{skill.level}%</span>
        )}
      </div>
      {showLevel && (
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${skill.level}%` }}
            role="progressbar"
            aria-valuenow={skill.level}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      )}
    </div>
  );
}
