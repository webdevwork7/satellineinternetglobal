import NavBar from "@/components/NavBar"
import HeroSection from "@/components/HeroSection"
import FeaturedDeals from "@/components/FeaturedDeals"
import StarLinkSection from "@/components/StarLinkSection"
import ProviderSection from "@/components/ProviderSection"
import ComparisonSection from "@/components/ComparisonSection"
import BundlingSection from "@/components/BundlingSection"
import FAQSection from "@/components/FAQSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        <HeroSection />
        <FeaturedDeals />
        <StarLinkSection />
        <ProviderSection />
        <BundlingSection />
        <ComparisonSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default Index
