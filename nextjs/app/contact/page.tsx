import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}