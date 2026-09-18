import Link from "next/link";

export default function HomePage() {
  const skills = [
    { icon: "💻", name: "Next.js & React" },
    { icon: "🎨", name: "Tailwind CSS" },
    { icon: "⚡", name: "JavaScript / TS" },
    { icon: "🛡️", name: "Information Security" },
    { icon: "🔧", name: "Git & GitHub" },
    { icon: "🗄️", name: "REST API" },
  ];

  const projects = [
    {
      title: "Developer Portfolio & CV",
      desc: "Website cá nhân giới thiệu thông tin, kỹ năng và các sản phẩm đã thực hiện.",
      tag: "Next.js / Tailwind",
      id: "1"
    },
    {
      title: "Task Board Application",
      desc: "Ứng dụng quản lý công việc tương tác thời gian thực.",
      tag: "React / State",
      id: "2"
    }
  ];

  return (
    <div className="max-w-3xl mx-auto py-10 space-y-12 font-sans text-gray-800">
      {/* Header section */}
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-6">Portfolio</h1>
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="space-y-3 max-w-lg">
            <h2 className="text-2xl font-bold text-gray-900">Xin chào, tôi là Developer</h2>
            <p className="text-gray-600 leading-relaxed">
              Tôi chuyên phát triển web hiện đại với <strong>Next.js</strong>, <strong>React</strong> và <strong>Tailwind CSS</strong>, chú trọng tính sạch sẽ, tối ưu trải nghiệm người dùng và an toàn thông tin.
            </p>
            <div className="pt-2">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1.5 text-sm font-medium hover:bg-gray-100 transition shadow-sm"
              >
                📅 Liên hệ làm việc
              </Link>
            </div>
          </div>
          <div className="w-28 h-28 bg-gray-100 rounded-2xl flex items-center justify-center text-5xl border border-gray-200 shrink-0">
            👨‍💻
          </div>
        </div>
      </div>

      {/* Skills section */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold border-b pb-2">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-2 border border-gray-200 rounded-lg p-3 bg-white shadow-xs hover:border-gray-400 transition">
              <span>{skill.icon}</span>
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Projects section */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold border-b pb-2">Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((proj) => (
            <div key={proj.id} className="border border-gray-200 rounded-lg p-4 bg-white shadow-xs space-y-2 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-gray-900">{proj.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{proj.desc}</p>
              </div>
              <div className="pt-3 flex items-center justify-between">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{proj.tag}</span>
                <Link href={`/projects/${proj.id}`} className="text-xs font-semibold text-blue-600 hover:underline">
                  Xem chi tiết →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}