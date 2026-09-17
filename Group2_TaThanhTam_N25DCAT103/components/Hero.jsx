import Link from "next/link";

// Props: name (String), projectCount (Number), isStudent (Boolean), skills (Array).
export default function Hero({ name, studentId, projectCount, isStudent, skills }) {
  return (
    <section className="panel">
      <p className="text-sm font-semibold text-blue-700">Developer Portfolio &amp; CV</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{name}</h1>
      <p className="mt-4 text-lg font-medium">{isStudent ? "Sinh viên · Front-end Developer" : "Front-end Developer"}</p>
      <p className="mt-2 text-sm text-slate-600">Mã sinh viên: {studentId} · {projectCount} dự án học tập</p>
      <p className="mt-5 max-w-2xl leading-7 text-slate-600">
        Tôi đang học phát triển giao diện web, tập trung vào HTML, CSS, JavaScript và React.
        Tôi mong muốn xây dựng những website rõ ràng, dễ sử dụng trên cả máy tính và điện thoại.
      </p>
      <ul aria-label="Kỹ năng nổi bật" className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li key={skill} className="rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-blue-800">{skill}</li>
        ))}
      </ul>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link href="/projects" className="button">Xem dự án</Link>
        <Link href="/about" className="button button-secondary">Giới thiệu &amp; CV</Link>
        <Link href="/contact" className="button button-secondary">Liên hệ</Link>
      </div>
    </section>
  );
}
