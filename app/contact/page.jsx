import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <SectionTitle
        label="Liên hệ"
        title="Gửi tin nhắn cho tôi"
        description="Mọi thắc mắc hoặc cơ hội hợp tác, hãy điền thông tin bên dưới"
      />
      <ContactForm />
    </div>
  );
}
