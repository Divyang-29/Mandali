import HeroSection from './HeroSection/HeroSection';
import StatsSection from './StatsSection/StatsSection';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import HowItWorksSection from './HowItWorksSection/HowItWorksSection';
import RoadmapSection from './RoadmapSection/RoadmapSection';
import WaitlistSection from './WaitlistSection/WaitlistSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <RoadmapSection />
      <WaitlistSection />
    </>
  );
}

