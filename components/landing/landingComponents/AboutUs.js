import Image from "next/image";
import aboutImage from "../../../public/ab1.jpeg"; // Import the image file

const AboutUs = () => {
  return (
    <div
      className="flex flex-col md:flex-row w-full items-center mt-10 md:mb-56 md:pt-10 md:mt-14"
      id="about"
    >
      <div className="md:w-4/5">
        <div className="md:pr-0">
          <p className="text-5xl font-bold md:ml-72">About Us</p>
          <p className="text-gray-500 text-xl w-full md:w-8/12 text-center my-4 md:ml-28">
            Over 20 crore Indians still go to sleep on an empty stomach
            everyday, in a world where we are progressing in every way. Welware
            Wave is community of students who want to serve the humanity and
            help them as much as possible. If we could make even a small
            difference in the lives of 1000 people, our goal would be achieved.
            <br />
            Our mission is to Reduce the wastage of food by using it for a good
            cause and provide a healthy meal to kids so that they can sleep with
            a full stomach.
            <br />
            Our future plan is to collaborate with different NGOs, old age homes
            so more benefit of the society. Also, we will combine with mess of
            over Kota city to reduce the wastage and use it for a good cause as
            much as possible.
          </p>
        </div>
      </div>
      <div className="md:w-3/5 flex justify-end">
        <div className="rounded-full shadow-md overflow-hidden">
          <Image
            src={aboutImage}
            alt="About Us"
            className="w-full"
            style={{ borderRadius: "50%" }}
          />{" "}
          {/* Display the image with rounded corners */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
