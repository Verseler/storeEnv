import HeroSection from "@/Pages/Landing/Partials/HeroSection";
import FeatureSection from "@/Pages/Landing/Partials/FeatureSection";
import HowItWorksSection from "@/Pages/Landing/Partials/HowItWorksSection";
import CTASection from "@/Pages/Landing/Partials/CTASection";
import Guest from "@/Layouts/GuestLayout";

export default function LandingPage() {


    return (
        <Guest>
            <HeroSection />

            <FeatureSection />

            <HowItWorksSection />

            <CTASection />
        </Guest>
    );
}
