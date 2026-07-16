import Navbar from "@/components/Navbar";
import Events from "@/components/accueil/Events";
import Hero from "@/components/accueil/Hero";
import StatsGrid from "@/components/accueil/StatsGrid";
import Engagements from "@/components/accueil/Engagements";
import TestCta from "@/components/accueil/TestCta";
import ContactSection from "@/components/accueil/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Events />
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