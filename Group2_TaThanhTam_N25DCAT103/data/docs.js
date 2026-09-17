export const documents = [
  {
    slug: ["react"],
    title: "React",
    description: "Ghi chú cơ bản về React.",
    paragraphs: ["React là thư viện giúp xây dựng giao diện bằng các component. Mỗi component mô tả một phần giao diện và có thể được tái sử dụng.", "Trong bài tập này, Navbar, Footer, SkillCard và ProjectCard được tách thành component để dùng ở nhiều trang."],
    code: "function Welcome() {\n  return <h1>Xin chào!</h1>;\n}",
  },
  {
    slug: ["react", "components"],
    title: "React Components",
    description: "Chia giao diện thành các phần có thể tái sử dụng.",
    paragraphs: ["Component thường là một hàm trả về JSX. Tên component bắt đầu bằng chữ hoa.", "Thay vì viết lặp lại giao diện từng kỹ năng, có thể dùng một SkillCard chung và truyền dữ liệu qua props."],
    code: "function SkillCard({ skill }) {\n  return <h2>{skill.name}</h2>;\n}",
  },
  {
    slug: ["react", "components", "props"],
    title: "Props",
    description: "Truyền dữ liệu từ component cha xuống component con.",
    paragraphs: ["Props là dữ liệu được truyền cho component. Có thể truyền chuỗi, số, boolean, array hoặc object.", "Component con đọc props để hiển thị nội dung. Trong bài tập, Hero nhận thông tin cá nhân, SkillCard nhận một kỹ năng và ProjectCard nhận một dự án."],
    code: '<Hero\n  name="Tạ Thanh Tâm"\n  studentId="N25DCAT103"\n  projectCount={3}\n  isStudent={true}\n  skills={["HTML", "CSS", "React"]}\n/>',
  },
];
