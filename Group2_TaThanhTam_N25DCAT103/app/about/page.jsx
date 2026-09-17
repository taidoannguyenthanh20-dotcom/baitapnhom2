import SectionTitle from "@/components/SectionTitle";

export const metadata = { title: "Giới thiệu" };

export default function AboutPage() {
  return (
    <section>
      <SectionTitle label="About" title="Giới thiệu bản thân" description="Thông tin cá nhân và định hướng học tập." />
      <div className="panel">
        <dl className="space-y-4">
          <div><dt className="text-sm text-slate-500">Họ và tên</dt><dd className="mt-1 font-semibold">Tạ Thanh Tâm</dd></div>
          <div><dt className="text-sm text-slate-500">Mã sinh viên</dt><dd className="mt-1 font-semibold">N25DCAT103</dd></div>
          <div><dt className="text-sm text-slate-500">Định hướng</dt><dd className="mt-1 font-semibold">Phát triển giao diện web</dd></div>
        </dl>
        <p className="mt-6 leading-7 text-slate-600">Tôi quan tâm đến lập trình front end và đang rèn luyện kỹ năng xây dựng giao diện bằng React, Next.js và Tailwind CSS. Mục tiêu của tôi là viết code dễ hiểu, chia component hợp lý và tạo trải nghiệm thuận tiện cho người dùng.</p>
      </div>
    </section>
  );
}
