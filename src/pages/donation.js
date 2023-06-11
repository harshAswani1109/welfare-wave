import DonationCard from "../../components/donationCard";

const Donation = () => {
  return (
    <div>
      <div className="flex font-mono justify-center items-center tracking-wider">
        <h1 className="text-4xl font-semibold p-2">Donation </h1>
      </div>
      <div className="flex justify-evenly items-center flex-wrap">
        <DonationCard />
        <DonationCard />
        <DonationCard />
      </div>
      <div className="px-10 mt-4">
        <p className="">
          Generosity is not just about giving; its about making a difference and
          transforming lives. Your donation, no matter how small, has the power
          to create positive ripples that extend far beyond what you can
          imagine.
        </p>
        <p className="max-md:hidden">
          In a world where compassion and empathy are essential, donating is a
          powerful act that can create a lasting impact. It is a testament to
          the belief that we are all connected and that by extending a helping
          hand, we can make a difference in the lives of those less fortunate.
          When you make a donation, you are not just providing financial
          support; you are offering hope, opportunity, and a chance for a better
          future. Your contribution can help feed a hungry child, provide
          medical care to someone in need, or empower individuals to access
          education and break the cycle of poverty. It can support initiatives
          that promote social justice, equality, and environmental
          sustainability. Donating is an expression of solidarity, kindness, and
          compassion.
        </p>{" "}
        <p className="max-lg:hidden">
          It is a way to uplift others and create a ripple effect of positive
          change. Your generosity can inspire others to join the cause,
          amplifying the impact and creating a collective force for good. Every
          donation, no matter the amount, is valuable and appreciated. It is a
          symbol of your belief in humanity's potential for kindness and your
          commitment to making the world a better place. Together, we can create
          a brighter future, filled with compassion, justice, and opportunities
          for all. We invite you to be part of this transformative journey by
          making a donation today. Your support will enable us to continue our
          vital work and bring about meaningful change in the lives of those who
          need it most. Join us as we strive to build a world where everyone has
          a chance to thrive and where compassion knows no bounds. Thank you for
          your generosity, and for being a beacon of hope in the lives of
          others.
        </p>
      </div>
    </div>
  );
};
export default Donation;
