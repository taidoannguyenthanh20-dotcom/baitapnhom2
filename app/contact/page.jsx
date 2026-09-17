import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="py-8">
      <SectionTitle 
        label="Liên Hệ" 
        title="Gửi Tin Nhắn Cho Tôi" 
        description="Điền thông tin vào form bên dưới, tôi sẽ phản hồi sớm nhất có thể."
      />
      <ContactForm />
    </div>
  );
}
