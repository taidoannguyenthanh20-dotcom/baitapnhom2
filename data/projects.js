export const projects = [
  {
    id: "portfolio",
    number: "01",
    title: "Developer Portfolio & CV",
    category: "Web Development",
    year: "2026",
    summary:
      "Website portfolio cá nhân giới thiệu bản thân, học vấn, kỹ năng và các dự án học tập.",
    description:
      "Dự án được xây dựng bằng Next.js App Router để thực hành static route, nested route, dynamic route, catch-all route, component, props và client component.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    goal:
      "Tạo một website cá nhân rõ ràng, responsive và có đầy đủ các kỹ thuật routing theo yêu cầu bài tập.",
    features: [
      "Trang Home giới thiệu nhanh về bản thân",
      "Trang About có route con Education và Experience",
      "Trang Skills render dữ liệu bằng component và props",
      "Trang Projects render danh sách dự án bằng map",
      "Dynamic route cho từng project",
      "Catch-all route cho khu vực docs",
    ],
    outcome:
      "Website hoàn chỉnh, dễ mở rộng, có layout dùng chung và form liên hệ tương tác.",
  },
  {
    id: "orywt-gallery",
    number: "02",
    title: "Orywt Photo Gallery",
    category: "Personal Website",
    year: "2026",
    summary:
      "Website gallery ảnh cá nhân đang chạy thực tế, lưu trữ và chia sẻ ảnh chụp quanh TP. Hồ Chí Minh.",
    description:
      "Website giới thiệu bộ sưu tập ảnh cá nhân với gallery phân loại theo album, trang about và trang liên hệ. Ảnh được đồng bộ từ Google Drive.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    goal:
      "Tạo một không gian online để lưu giữ và chia sẻ những khoảnh khắc đã chụp, với trải nghiệm xem ảnh mượt mà.",
    features: [
      "Gallery ảnh phân loại theo album",
      "Xem ảnh theo từng frame",
      "Trang giới thiệu bản thân",
      "Trang liên hệ với email và Instagram",
      "Giao diện tối, phong cách terminal",
    ],
    outcome:
      "Website đang hoạt động thực tế và được dùng làm portfolio nhiếp ảnh cá nhân.",
    liveUrl: "https://orywt.io.vn",
  },
];

export function getProjectById(id) {
  return projects.find((project) => project.id === id);
}
