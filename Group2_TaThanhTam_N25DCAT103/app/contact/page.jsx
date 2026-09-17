import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Liên hệ" };

export default function ContactPage() {
  return (
    <section>
      <SectionTitle label="Contact" title="Liên hệ" description="Để lại thông tin và lời nhắn bằng form bên dưới." />
      <ContactForm />
    </section>
  );
}
