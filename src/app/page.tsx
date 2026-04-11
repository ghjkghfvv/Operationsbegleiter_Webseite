import { HeroSection } from '@/components/sections/HeroSection';
import { TrustBar } from '@/components/sections/TrustBar';
import { FeatureShowcase } from '@/components/sections/FeatureShowcase';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { BellaShowcase } from '@/components/sections/BellaShowcase';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { CTASection } from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <FeatureShowcase />
      <TimelineSection />
      <BellaShowcase />
      <StatsSection />
      <TestimonialsSection />
      <ComparisonSection />
      <CTASection />
    </>
  );
}
