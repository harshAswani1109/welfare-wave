import qr from "./assets/qr.jpg";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import Image from "next/image";
const Qr = () => {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const handleFunction = () => {
    setdropdownOpen(!dropdownOpen);
  };
  return (
    <div className="flex justify-center items-center w-full absolute xl:left-0 mt-2">
      <div className="border-4 z-10 w-[900px] h-[500px] backdrop-blur bg-[#ffffff50]">
        <div
          handler={handleFunction}
          className="flex justify-center items-center h-full relative"
        >
          <Image src={qr} className="" height={250} width={250} />
        </div>
      </div>
    </div>
  );
};
export default Qr;
