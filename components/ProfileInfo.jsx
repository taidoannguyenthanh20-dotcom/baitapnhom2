/**
 * Component thể hiện truyền đa dạng các kiểu dữ liệu qua Props:
 * - String: name, location, role
 * - Number: age, gpa
 * - Boolean: isStudent, isAvailable
 * - Array: skills, hobbies
 */
export default function ProfileInfo({
  name = "Bùi Thành Đạt",
  role = "Fullstack Developer",
  age = 21,
  gpa = 3.6,
  isStudent = true,
  isAvailable = true,
  skills = ["Next.js", "React", "JavaScript", "Tailwind CSS"],
  hobbies = ["Lập trình", "Nghiên cứu công nghệ", "Chơi cờ", "Nghe nhạc"],
}) {
  return (
    <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider">
            Demo Props (String, Number, Boolean, Array)
          </span>
          <h3 className="text-2xl font-bold text-white mt-2">{name}</h3>
          <p className="text-slate-400 text-sm">{role}</p>
        </div>

        {/* Boolean props display */}
        <div className="flex flex-wrap sm:flex-col gap-2 items-start sm:items-end">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
              isStudent
                ? "bg-sky-500/10 text-sky-400 border-sky-500/30"
                : "bg-slate-800 text-slate-400 border-slate-700"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            isStudent: {isStudent ? "Sinh viên chính quy" : "Đã tốt nghiệp"}
          </span>

          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
              isAvailable
                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                : "bg-rose-500/10 text-rose-400 border-rose-500/30"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            isAvailable: {isAvailable ? "Sẵn sàng nhận việc" : "Bận"}
          </span>
        </div>
      </div>

      {/* Grid of details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
        {/* Number props */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Thông số cá nhân (Number)
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-xs text-slate-500 block">Tuổi (age)</span>
              <span className="text-xl font-bold text-white">{age}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-xs text-slate-500 block">GPA ước tính</span>
              <span className="text-xl font-bold text-blue-400">
                {gpa} / 4.0
              </span>
            </div>
          </div>
        </div>

        {/* Array props: skills */}
        <div>
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Kỹ năng nòng cốt (Array props)
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((item, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Array props: hobbies */}
      <div className="mt-6 pt-4 border-t border-slate-800/60">
        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
          Sở thích & Nghiên cứu (Array props)
        </h4>
        <div className="flex flex-wrap gap-2 text-xs text-slate-300">
          {hobbies.map((hobby, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/50"
            >
              ✦ {hobby}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
