import Hero1 from "./component/Hero/hero1";
import Testimonial from "./Testimonial";
import WhyChooseUs from "./component/Whychooseus/Whychooseus";
import About from "./About/About";
import ConstructionSection from "./component/ConstructionSection/page";

export default function Home() {
  return (
    <div className="">
      <Hero1 />
      <Testimonial />
      <About />
      <ConstructionSection />
      <WhyChooseUs />
    </div>
  );
}
