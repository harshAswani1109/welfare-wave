import AboutUs from "./landingComponents/AboutUs";
import CoreTeam from "./landingComponents/CoreTeam";
import Donate from "./landingComponents/Donate";
import Hero from "./landingComponents/Hero";

const Landing = () => {
  return (
    <section>
      <div>
        <Hero />
        <AboutUs />
        <Donate />
        <CoreTeam />
      </div>
    </section>
  );
};
export default Landing;
