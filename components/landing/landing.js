import AboutUs from "./landingComponents/AboutUs";
import CoreTeam from "./landingComponents/CoreTeam";
import Donate from "./landingComponents/Donate";
import Hero from "./landingComponents/Hero";
import Stats from "./landingComponents/Stats";

const Landing = () => {
  return (
    <section>
      <div>
        <Hero />
        <AboutUs />
        <Stats />
        <Donate />
        <CoreTeam />
      </div>
    </section>
  );
};
export default Landing;
