
import SectionTitle from "../../../components/SectionTitle";

export default function EducationPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <SectionTitle
        label="Education"
        title="Học vấn"
        description="Thông tin học vấn trong CV & Portfolio."
      />

      <article className="rounded-2xl border bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-blue-600">2023 - 2027</p>
        <h2 className="mt-2 text-2xl font-bold text-gray-900">
          Học viện Công nghệ Bưu chính Viễn thông TpHCM
        </h2>
        <p className="mt-3 leading-7 text-gray-600">
          Chuyên ngành Công nghệ Đa phương tiện. Tập trung vào lập trình Web, cơ sở
          dữ liệu, cấu trúc dữ liệu và phát triển phần mềm.
        </p>
      </article>
    </section>
  );
}
