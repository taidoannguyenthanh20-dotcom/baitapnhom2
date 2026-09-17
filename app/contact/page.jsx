
import ContactForm from "../../components/ContactForm";
import SectionTitle from "../../components/SectionTitle";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <SectionTitle
        label="Contact"
        title="Liên hệ"
        description="Gửi tin nhắn mẫu nếu bạn muốn trao đổi về một dự án hoặc cơ hội hợp tác."
      />
      <ContactForm />
    </section>
  );
}
