import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InstitutionalSection from "@/components/InstitutionalSection";
import CoursesSection from "@/components/CoursesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <InstitutionalSection />
      <CoursesSection />
      <Footer />
    </div>
  );
};

export default Index;
