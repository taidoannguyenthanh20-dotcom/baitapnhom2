import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';

// Ví dụ Component con nhận nhiều kiểu Props khác nhau
function ProfileInfo({ name, age, isStudent, skills }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
      <h3 className="font-bold text-xl">Thông tin chi tiết</h3>
      <ul className="mt-4 space-y-2">
        <li><strong>Họ tên:</strong> {name} </li>
        <li><strong>Tuổi:</strong> {age} </li>
        <li><strong>Trạng thái:</strong> {isStudent ? "Sinh viên PTIT" : "Đã tốt nghiệp"} </li>
        <li><strong>Kỹ năng chính:</strong> {skills.join(', ')} </li>
      </ul>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div>
      <SectionTitle label="Giới thiệu" title="Về Bản Thân" />
      
      {/* Thực hành truyền các kiểu dữ liệu vào Props */}
      <ProfileInfo 
        name="Nguyễn Thị Thu Tâm" 
        age={20} 
        isStudent={true} 
        skills={["HTML", "CSS", "React", "Next.js"]} 
      />

      <div className="flex gap-4 mt-6">
        <Link href="/about/education" className="text-blue-600 hover:underline">🎓 Xem Học vấn</Link>
        <Link href="/about/experience" className="text-blue-600 hover:underline">💼 Xem Kinh nghiệm</Link>
      </div>
    </div>
  );
}
