import SectionTitle from "@/components/SectionTitle";

export const metadata = { title: "Học vấn" };

export default function EducationPage() {
  return (
    <section>
      <SectionTitle label="Education" title="Học vấn" description="Thông tin học tập của Tạ Thanh Tâm." />
      <div className="panel">
        <h2 className="text-xl font-bold">Sinh viên · N25DCAT103</h2>
        <dl className="mt-5 space-y-3 text-slate-600">
          <div><dt className="font-semibold text-slate-900">Trường</dt><dd>Chưa cập nhật</dd></div>
          <div><dt className="font-semibold text-slate-900">Ngành học</dt><dd>Chưa cập nhật</dd></div>
          <div><dt className="font-semibold text-slate-900">Thời gian học</dt><dd>Chưa cập nhật</dd></div>
        </dl>
        <p className="mt-5 text-sm leading-6 text-slate-500">Bổ sung thông tin học vấn thực tế tại trang này.</p>
      </div>
    </section>
  );
}
