import ContactForm from "../../components/ContactForm";
import SectionTitle from "../../components/SectionTitle";

export const metadata = { title: "Contact" };

const contactInfo = [
  { label: "Email", value: "n23dcpt108@student.ptithcm.edu.vn" },
  { label: "Location", value: "Hồ Chí Minh, Việt Nam" },
  { label: "Focus", value: "Web Development" },
];

export default function Contact() {
  return (
    <section className="container-page py-16">
      <SectionTitle
        label="Contact"
        title="Liên hệ với mình"
        description="Form bên dưới là Client Component: dùng useState lưu nội dung nhập, onChange cập nhật từng ký tự và onSubmit hiển thị thông báo."
      />

      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card">
          <h2 className="text-xl">Thông tin liên hệ</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Nếu bạn muốn trao đổi về bài tập, dự án học tập hoặc cơ hội hợp
            tác, hãy gửi tin nhắn qua form.
          </p>
          <dl className="mt-6 space-y-5">
            {contactInfo.map((item) => (
              <div key={item.label}>
                <dt className="text-sm font-semibold text-slate-900">
                  {item.label}
                </dt>
                <dd className="mt-1 break-all text-slate-600">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
