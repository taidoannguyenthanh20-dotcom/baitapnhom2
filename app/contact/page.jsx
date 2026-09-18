import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div>
      <SectionTitle label="Liên hệ" title="Gửi tin nhắn cho tôi" description="Điền vào form dưới đây để gửi thông tin liên hệ." />
      <ContactForm />
    </div>
  );
}