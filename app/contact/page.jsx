import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="space-y-6 py-6">
      <SectionTitle label="Contact" title="Liên Hệ" description="Gửi thông tin trao đổi công việc hoặc hợp tác dự án." />
      <ContactForm />
    </div>
  );
}