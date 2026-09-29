import BundlingSection from "@/components/BundlingSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <BundlingSection />
        <InfoSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}