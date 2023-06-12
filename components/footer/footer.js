import Image from "next/image";
import { SiTwitter } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-row-reverse max-lg:flex-col-reverse max-lg:gap-4 sm:mx-20 mt-10 ">
      <div className="flex justify-center items-center lg:items-start  flex-col lg:w-2/5">
        <span className="text-6xl max-sm:text-3xl font-bold ">
          Welfare Wave
        </span>
        <p className="sm:text-2xl">
          "A word after a word after a word is power."
        </p>
        <div className="flex justify-center items-center flex-row gap-6 my-6">
          <span className="h-8 w-8">
            <FaFacebook className="h-full w-full" />
          </span>
          <span className="h-8 w-8">
            <SiTwitter className="h-full w-full" />
          </span>
          <span className="h-8 w-8">
            <AiFillInstagram className="h-full w-full" />
          </span>
          <span className="h-8 w-8">
            <ImLinkedin className="h-full w-full" />
          </span>
        </div>
        <div className="flex justify-center items-center flex-row max-sm:flex-col gap-2 ">
          <Link href="/contact">
            <button className="bg-black hover:bg-red-500 text-white border-2 border-black font-bold p-2 rounded-full h-12 w-40 max-sm:w-72 sm:w-44">
              Contact Us
            </button>
          </Link>
          <Link href="/faq">
            <button className="bg-white hover:bg-black hover:text-white text-black border-2 border-black font-bold p-2 rounded-full h-12 max-sm:w-72 sm:w-44">
              F.A.Q
            </button>
          </Link>
        </div>
        <span className="text-lg mt-6 font-mono">Envision x 404</span>
      </div>
      <div className="flex justify-center items-center lg:w-3/5">
        <Link href="/">
          {/* <Image src={bluneo} height={300} width={300} /> */}
        </Link>
      </div>
    </div>
  );
};
export default Footer;
