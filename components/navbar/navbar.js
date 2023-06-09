import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNavbar from "./mobileNavbar";

const Navbar = () => {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const handleFunction = () => {
    setdropdownOpen(!dropdownOpen);
  };
  return (
    <nav>
      <div className="flex justify-between items-center px-10 h-20">
        <div>HI I'am Navbar</div>
        <div className="md:hidden">
          <RxHamburgerMenu onClick={handleFunction} />
        </div>
      </div>
      {dropdownOpen ? <MobileNavbar handler={handleFunction} /> : ""}
    </nav>
  );
};
export default Navbar;
