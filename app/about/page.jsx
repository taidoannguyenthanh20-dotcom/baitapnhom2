import SectionTitle from "../../components/SectionTitle";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <SectionTitle title="Về tôi" description="Giới thiệu bản thân" />
      <p className="mb-4">Tôi là một sinh viên ngành an toàn thông tin.</p>
      <div className="flex gap-4">
        <Link href="/about/education" className="text-blue-500 underline">Xem Học vấn</Link>
        <Link href="/about/experience" className="text-blue-500 underline">Xem Kinh nghiệm</Link>
      </div>
    </div>
  );
}
