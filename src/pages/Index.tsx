import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import CollectionsSection from "@/components/CollectionsSection";
import AboutSection from "@/components/AboutSection";
import FloatingContactButton from "@/components/FloatingContactButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <CollectionsSection />
      <AboutSection />
      <Footer />
      <FloatingContactButton />
    </main>
  );
};

export default Index;
