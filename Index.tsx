import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContinueListening from "@/components/ContinueListening";
import TrendingStories from "@/components/TrendingStories";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedQuote from "@/components/FeaturedQuote";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ContinueListening />
      <TrendingStories />
      <CategoriesSection />
      <FeaturedQuote />
      <Footer />
    </div>
  );
};

export default Index;
