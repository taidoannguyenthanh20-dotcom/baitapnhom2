const projects = [
  {
    id: 1,
    name: "Fruit Catcher",
    slug: "fruit-catcher",
    description:
      "Game bắt trái cây điều khiển bằng cử chỉ bàn tay thông qua webcam. Người chơi cần bắt trái cây và tránh bom để đạt điểm cao.",
    technologies: ["Python", "Pygame", "OpenCV", "MediaPipe"],
    image: "../public/fruit-catcher.png",
    icon: "🍎",
  },

  {
    id: 2,
    name: "Restaurant Booking",
    slug: "restaurant-booking",
    description:
      "Ứng dụng đặt bàn nhà hàng cho phép khách hàng tìm kiếm nhà hàng, xem bàn trống, đặt bàn và quản lý lịch đặt.",
    technologies: ["Next.js", "Node.js", "Express.js", "MySQL", "Sequelize"],
    image: "../public/restaurant.png",
    icon: "🍽️",
  },

  {
    id: 3,
    name: "Mini Paint",
    slug: "mini-paint",
    description:
      "Ứng dụng vẽ 2D và hiển thị mô hình 3D wireframe, hỗ trợ các thao tác biến đổi hình học và animation cơ bản.",
    technologies: ["C#", "WinForms", "Computer Graphics", "DDA", "Bresenham"],
    image: "../public/paint.png",
    icon: "🎨",
  },
];

export default projects;
