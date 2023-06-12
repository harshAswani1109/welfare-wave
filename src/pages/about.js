import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../../public/ab1.jpeg";
import image1 from "../../public/ab1.jpeg";
import image2 from "../../public/ab1.jpeg";
import image3 from "../../public/ab1.jpeg";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-start md:items-center">
            <div className="md:w-96 md:h-96 relative md:-ml-72 mt-4 md:mt-8 pb-8 md:pb-0">
              <Image src={image1} alt="Image 1" className="rounded-lg" />
            </div>
            <div className="md:w-96 md:h-96 relative md:-mr-80 md:-mt-24 pb-8 md:pb-0">
              <Image src={image2} alt="Image 2" className="rounded-lg" />
            </div>
            <div className="md:w-96 md:h-96 relative md:-ml-72 md:-mt-24 pb-8 md:pb-0 hidden md:block">
              <Image src={image3} alt="Image 3" className="rounded-lg" />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl font-semibold mb-6 text-center md:text-start">
              About Us
            </h2>
            <p className="text-lg text-gray-800 mb-8">
              At Welfare Wave, we are a community of students dedicated to
              serving humanity and making a positive impact on society. Our
              mission is to reduce food wastage and alleviate hunger among
              children in India. We believe that even a small difference can
              create significant change, and we are committed to improving the
              lives of 1000 people through our efforts.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              We envision a world where no child goes to bed on an empty
              stomach. In a society that is progressing in many ways, it is
              disheartening to know that over 20 crore Indians still suffer from
              hunger. We strive to change this reality by providing healthy
              meals to children, ensuring they can sleep with full stomachs and
              have a brighter future.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              To achieve our goals, we collaborate with different NGOs and old
              age homes. By partnering with these organizations, we can extend
              our reach and provide support to a wider range of individuals in
              need. Together, we can work towards a better society, where every
              person has access to nutritious food and a better quality of life.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              We are also committed to reducing food wastage by working closely
              with messes and establishments that produce excess food. By
              repurposing this surplus food for a good cause, we ensure that it
              does not go to waste but instead reaches those who need it the
              most. This approach not only helps in fighting hunger but also
              promotes sustainability and responsible consumption.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              If you share our passion for making a difference and believe in
              our cause, we invite you to join us in our mission. Whether you
              are a student, an NGO, or an organization, there are various ways
              to contribute and help us create a positive impact on the lives of
              those in need. Together, we can build a better future for all.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
