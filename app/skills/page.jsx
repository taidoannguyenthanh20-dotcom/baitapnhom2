import SectionTitle from "../../components/SectionTitle";
import SkillCard from "../../components/SkillCard"; // Đã import component từ bên ngoài vào

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Các công nghệ tôi sử dụng để xây dựng giao diện Web.",
    skills: [
      { name: "HTML", level: "Cơ bản - Khá", description: "Xây dựng cấu trúc và nội dung cho website." },
      { name: "CSS", level: "Cơ bản - Khá", description: "Thiết kế giao diện, bố cục và responsive." },
      { name: "JavaScript", level: "Cơ bản - Khá", description: "Xử lý logic, tương tác và chức năng cho Web." },
      { name: "React", level: "Đang học", description: "Xây dựng giao diện bằng Component và Props." },
      { name: "Next.js", level: "Đang học", description: "Xây dựng ứng dụng Web với App Router và Server Components." },
      { name: "Tailwind CSS", level: "Đang sử dụng", description: "Xây dựng giao diện nhanh bằng Utility Classes." },
    ],
  },
  {
    title: "Backend & Database",
    description: "Những công nghệ tôi đang tìm hiểu để phát triển ứng dụng hoàn chỉnh.",
    skills: [
      { name: "Java", level: "Khá", description: "Ngôn ngữ chính để phát triển hệ thống Backend." },
      { name: "Spring Boot", level: "Cơ bản", description: "Xây dựng Backend RESTful API nhanh chóng." },
      { name: "MySQL", level: "Cơ bản", description: "Thiết kế Database và thực hiện các truy vấn SQL." },
    ],
  },
  {
    title: "Tools & Other Skills",
    description: "Các công cụ hỗ trợ quá trình học tập và phát triển phần mềm.",
    skills: [
      { name: "Figma", level: "Khá", description: "Thiết kế UI/UX, tạo Wireframe và Prototype." },
      { name: "Git & GitHub", level: "Cơ bản - Khá", description: "Quản lý phiên bản và theo dõi thay đổi của dự án." },
      { name: "VS Code", level: "Thành thạo", description: "Môi trường phát triển chính cho các dự án Web." },
    ],
  },
];

// Component này giữ lại để chấm điểm yêu cầu truyền 4 loại Props của đề bài
function PropsDemo({ name, age, isStudent, skills }) {
  return (
    <div className="rounded-2xl border bg-white p-7 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Props Demo</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900">Truyền dữ liệu bằng Props</h2>
        </div>
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">React Props</span>
      </div>
      <p className="mt-4 leading-7 text-gray-600">
        Component cha truyền nhiều loại dữ liệu khác nhau xuống Component con thông qua Props.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-gray-50 p-5">
          <p className="text-sm font-semibold text-blue-600">String</p>
          <p className="mt-2 text-gray-900">Họ tên: <strong>{name}</strong></p>
        </div>
        <div className="rounded-xl bg-gray-50 p-5">
          <p className="text-sm font-semibold text-blue-600">Number</p>
          <p className="mt-2 text-gray-900">Tuổi: <strong>{age}</strong></p>
        </div>
        <div className="rounded-xl bg-gray-50 p-5">
          <p className="text-sm font-semibold text-blue-600">Boolean</p>
          <p className="mt-2 text-gray-900">Sinh viên: <strong>{isStudent ? "Có" : "Không"}</strong></p>
        </div>
        <div className="rounded-xl bg-gray-50 p-5">
          <p className="text-sm font-semibold text-blue-600">Array</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <SectionTitle
        label="My Skills"
        title="Kỹ năng"
        description="Những công nghệ, công cụ và kỹ năng tôi đang học tập và sử dụng trong quá trình phát triển ứng dụng."
      />
      
      {/* Đã cập nhật thông tin cá nhân của bạn vào PropsDemo */}
      <PropsDemo
        name="Nguyễn Thiện Quân"
        age={22}
        isStudent={true}
        skills={["Java", "Spring Boot", "Figma", "React"]}
      />

      <div className="space-y-12 mt-12">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{group.title}</h2>
              <p className="mt-2 text-gray-600">{group.description}</p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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