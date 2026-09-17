import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="space-y-12 py-6">
      <SectionTitle
        label="Liên hệ"
        title="Gửi tin nhắn trực tiếp"
        description="Điền thông tin vào Form liên hệ phía dưới để gửi tin nhắn trực tiếp đến Phùng Anh Lực."
      />

      <ContactForm />
    </div>
  );
}
