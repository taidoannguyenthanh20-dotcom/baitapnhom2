const projects = [
  {
    id: 1,
    name: "Personal Portfolio Website",
    description:
      "Website portfolio cá nhân xây dựng bằng Next.js và Tailwind CSS, hiển thị thông tin cá nhân, kỹ năng và dự án.",
    longDescription:
      "Đây là dự án website portfolio cá nhân được xây dựng bằng Next.js 16 với App Router, kết hợp Tailwind CSS v4. Website bao gồm đầy đủ các trang: Home, About, Skills, Projects, Contact và Docs. Hỗ trợ Dynamic Routing cho chi tiết dự án và Catch-all routing cho phần tài liệu.",
    tech: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    image: "/Image/1.png",
    github: "https://lucksnow.github.io/",
    demo: "#",
    status: "Hoàn thành",
    year: 2026,
  },
  {
    id: 2,
    name: "CoffeeWeb",
    description:
      "Ứng dụng thương mại điện tử với chức năng giỏ hàng, đăng nhập và quản lý sản phẩm.",
    longDescription:
      "Dự án e-commerce đầy đủ tính năng với giao diện người dùng hiện đại. Bao gồm hệ thống quản lý sản phẩm, giỏ hàng, thanh toán và xác thực người dùng. Backend sử dụng Node.js và MySQL để lưu trữ dữ liệu.",
    tech: ["React", "Node.js", "MySQL", "CSS"],
    image: "/Image/2.png",
    github: "https://lucksnow.github.io/CoffeeWeb/",
    demo: "#",
    status: "Đang phát triển",
    year: 2025,
  },
  {
    id: 3,
    name: "Game Pacman",
    description:
      "Game Pacman đơn giản được xây dựng với React thuần, sử dụng useState và useEffect để quản lý state. Dữ liệu được lưu trữ trong localStorage để không mất khi reload trang. Giao diện clean và dễ sử dụng.",
    longDescription:
      "Game Pacman được xây dựng với React thuần, sử dụng useState và useEffect để quản lý state. Dữ liệu được lưu trữ trong localStorage để không mất khi reload trang. Giao diện clean và dễ sử dụng.",
    tech: ["React", "JavaScript", "CSS", "LocalStorage"],
    image: "/Image/3.png",
    github: "https://lucksnow.github.io/Pacman/",
    demo: "#",
    status: "Hoàn thành",
    year: 2025,
  },
];

export default projects;
