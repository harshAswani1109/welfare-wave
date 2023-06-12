import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import MobileNavbar from "./mobileNavbar";
import Link from "next/link";
import DropDown from "./dropdown";

const Navbar = () => {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const handleFunction = () => {
    setdropdownOpen(!dropdownOpen);
  };

  return (
    <nav>
      <div className="flex justify-between items-center px-10 h-20 ">
        <div>HI I'am Navbar</div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <Link
              href="/"
              className="text-gray-00 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-gray-00 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <div className="relative inline-block text-left">
              <button
                onClick={handleFunction}
                className="text-gray-00 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none flex justify-center items-end gap-"
              >
                <span>Education</span>
                <RiArrowDropDownLine />
              </button>
              {dropdownOpen ? <DropDown handler={handleFunction} /> : ""}
            </div>
            <Link
              href="/donation"
              className="text-gray-00 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Donation
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <RxHamburgerMenu onClick={handleFunction} />
        </div>
      </div>
      <div className="md:hidden">
        {dropdownOpen ? <MobileNavbar handler={handleFunction} /> : ""}
      </div>
    </nav>
  );
};

export default Navbar;
