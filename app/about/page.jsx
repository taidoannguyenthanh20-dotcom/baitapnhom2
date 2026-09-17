import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <div>
      <SectionTitle label="About Me" title="Giới thiệu bản thân" />
      <div className="flex gap-4">
        <Link href="/about/education" className="bg-gray-100 p-4 rounded hover:bg-gray-200">Xem Học vấn</Link>
        <Link href="/about/experience" className="bg-gray-100 p-4 rounded hover:bg-gray-200">Xem Kinh nghiệm</Link>
      </div>
    </div>
  );
}
