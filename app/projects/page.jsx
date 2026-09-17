import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    id: "1",
    name: "E-Commerce App",
    description: "Website mua sắm trực tuyến hỗ trợ giỏ hàng và thanh toán trực tiếp",
    tech: ["Next.js", "Tailwind", "Stripe"],
    image: "img/app.jpg"
  },
  {
    id: "2",
    name: "Task Management Board",
    description: "Bảng quản lý công việc kéo thả Kanban theo thời gian thực",
    tech: ["React", "Firebase"],
    image: "img/task.jpg"
  },
  {
    id: "3",
    name: "Weather Dashboard",
    description: "Xem dự báo thời tiết toàn cầu với dữ liệu từ OpenWeather API",
    tech: ["JavaScript", "Tailwind"],
    image: "img/weather.jpg"
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <SectionTitle
        label="Dự án"
        title="Danh sách dự án"
        description="Những sản phẩm mã nguồn mở và dự án thực tế"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}