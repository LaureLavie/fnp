import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsGrid from "@/components/StatsGrid";
import Engagements from "@/components/Engagements";
import TestCta from "@/components/TestCta";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
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