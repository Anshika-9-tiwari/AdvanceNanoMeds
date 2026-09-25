import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoFormSection from "@/components/contact/ContactInfoFormSection";
import ContactMap from "@/components/contact/ContactMap";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <ContactInfoFormSection>
        <ContactForm />
      </ContactInfoFormSection>

      <ContactMap />
    </>
  );
}