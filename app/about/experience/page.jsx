export default function Experience() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        Experience
      </p>

      <h1 className="mt-3 text-4xl font-bold text-gray-900">
        Kinh nghiệm
      </h1>

      <div className="mt-8 space-y-6">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-blue-600">
            12/2025 - Hiện tại
          </p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            Software Developer
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Phát triển hệ thống Backend cho dự án Mini App "Hair Salon Booking" bằng Java, Spring Boot và Maven. Thực hiện xây dựng luồng đặt lịch, RESTful API và thiết kế cơ sở dữ liệu.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-blue-600">
            2025 - 2026
          </p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            UI/UX Designer & Web Development
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Thiết kế giao diện người dùng trên Figma, tập trung vào trải nghiệm mượt mà và tính thẩm mỹ. Kết hợp thực hành xây dựng giao diện thực tế bằng React, Next.js và Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}