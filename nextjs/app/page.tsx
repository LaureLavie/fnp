import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsGrid from "@/components/StatsGrid";
import Engagements from "@/components/Engagements";
import TestCta from "@/components/TestCta";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsGrid />
        <Engagements />
        <TestCta />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}