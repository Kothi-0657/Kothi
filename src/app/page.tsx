import Hero1 from "./component/Hero/hero1";
import Testimonial from "./Testimonial";
import WhyChooseUs from "./component/Whychooseus/Whychooseus";
import About from "./About/About";
import HomeServices from "./component/HomeServices/HomeServices";
import ServicesQuickAccess from "./component/HomeServices/ServiceQuickAccess";
// Update the import path to match the actual file name and casing, e.g.:
// Update the import path to match the actual file name and casing, e.g.:
import ConstructionSection from "./component/ConstructionSection/ConstructionSection";

export default function Home() {
  return (
    <div className="">
      <Hero1 />
      <HomeServices />
      <About />
      <ServicesQuickAccess />
      <ConstructionSection />
      <WhyChooseUs />
      <Testimonial />
    </div>
  );
}