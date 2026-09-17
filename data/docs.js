export const docsData = {
  "project-overview": {
    title: "Tổng quan Đồ án Developer Portfolio & CV",
    description: "Tài liệu hệ thống hóa toàn bộ kiến thức và quy trình xây dựng website Portfolio cá nhân của Phùng Anh Lực sử dụng Next.js 16 App Router.",
    subtopics: {
      "requirements": {
        title: "Các Yêu cầu Kỹ thuật theo README",
        description: "Đối chiếu 100% các tiêu chí yêu cầu trong bài tập: React Components, Props, Server/Client Components, App Router, Routing các cấp và Tailwind CSS."
      },
      "architecture": {
        title: "Cấu trúc & Kiến trúc Dự án",
        description: "Tách biệt rõ ràng giữa Data Layer (folder data/), Reusable UI Components (folder components/) và Routing Pages (folder app/)."
      }
    }
  },
  "nextjs": {
    title: "Kiến thức Next.js & App Router",
    description: "Phân tích các kỹ thuật nâng cao trong Next.js Framework: File-system Routing, Rendering Strategies và Layouts.",
    subtopics: {
      "routing": {
        title: "Kỹ thuật Routing trong Next.js App Router",
        description: "Next.js cung cấp cơ chế routing linh hoạt dựa trên cấu trúc thư mục trong app/.",
        subtopics: {
          "static-routes": {
            title: "Static Routing",
            description: "Các trang cố định như Trang chủ (/), Giới thiệu (/about), Kỹ năng (/skills), Dự án (/projects) và Liên hệ (/contact)."
          },
          "nested-routes": {
            title: "Nested Routing (/about/education, /about/experience)",
            description: "Tạo tuyến đường con lồng nhau dưới /about giúp chia nhỏ nội dung Học vấn và Kinh nghiệm làm việc."
          },
          "dynamic-routes": {
            title: "Dynamic Routing (/projects/[id])",
            description: "Bắt tham số URL động [id] để hiển thị trang chi tiết cho từng dự án tương ứng kèm loading skeleton."
          },
          "catch-all-routes": {
            title: "Catch-all Routing (/docs/[...slug])",
            description: "Cơ chế [...slug] bắt toàn bộ các phân đoạn URL phía sau /docs/ phục vụ việc duyệt tài liệu nhiều cấp."
          }
        }
      },
      "server-client-components": {
        title: "Server & Client Components",
        description: "Kết hợp giữa Server Component (mặc định rendering cực nhanh trên server) và Client Component ('use client' cho Form & Avatar có state)."
      }
    }
  },
  "react": {
    title: "Kiến thức React Core",
    description: "Ứng dụng tư duy React Component, Props, State và Event Handlers vào dự án thực tế.",
    subtopics: {
      "components-props": {
        title: "Component & Props (String, Number, Boolean, Array)",
        description: "Truyền dữ liệu từ Component cha xuống Component con. Minh họa cụ thể trong SkillCard với chuỗi name, số level, boolean isFeatured và mảng tags."
      },
      "state-events": {
        title: "State Management & Event Handling",
        description: "Sử dụng Hook useState, xử lý sự kiện onChange, onSubmit và hiển thị banner thông báo tương tác trong ContactForm."
      }
    }
  }
};
