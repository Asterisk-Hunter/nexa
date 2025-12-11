// Full HomePage - PortfolioScrub removed (causes navigation issues)
import HeroPremium from '@/components/HeroPremium';
import SocialProof from '@/components/SocialProof';
import AboutFuturistic from '@/components/AboutFuturistic';
import ServicesBento from '@/components/ServicesBento';
import SectionWave from '@/components/SectionWave';
// import PortfolioScrub from '@/components/PortfolioScrub'; // REMOVED - breaks navigation
import Portfolio from '@/components/Portfolio';
import PricingPremium from '@/components/PricingPremium';
import TestimonialsPremium from '@/components/TestimonialsPremium';
import CTA from '@/components/CTA';
import ErrorBoundary from '@/components/ErrorBoundary';
import FAQFuturistic from '@/components/FAQFuturistic';
import SEOHead from '@/components/SEOHead';

export default function HomePage() {
    return (
        <>
            <SEOHead />{/* Uses default homepage meta tags */}
            <HeroPremium />
            <SocialProof />
            <AboutFuturistic />
            <ServicesBento />
            <SectionWave />
            {/* PortfolioScrub removed - GSAP ScrollTrigger pin conflicts with React Router */}
            <Portfolio />
            <SectionWave />
            <ErrorBoundary fallback={<div className="py-32 text-center text-slate-400">Pricing section unavailable</div>}>
                <PricingPremium />
            </ErrorBoundary>
            <SectionWave />
            <TestimonialsPremium />
            <SectionWave />
            <FAQFuturistic />
            <CTA />
        </>
    );
}
