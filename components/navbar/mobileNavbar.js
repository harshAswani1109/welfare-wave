import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import DropDown from "./dropdown";

const MobileNavbar = ({ handler }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleFunction = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClick = () => {
    handler(); // Call the handler function from the parent component to close the dropdown
  };

  return (
    <nav className="w-full h-72 delay-1000 ease-in-out duration-100 transition-shadow p-4 absolute -top-0 z-10">
      <div className="flex justify-center flex-col items-start text-white bg-black h-full gap-4">
        <div className="flex flex-row justify-between items-end w-full px-4 text-xl">
          <span>HI I'am MobileNavbar</span>
          <span>
            <RxCross1 onClick={handler} />
          </span>
        </div>
        <div className="flex justify-center items-start flex-col text-xl pl-4">
          <Link
            href="/"
            className="text-gray-00 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium"
            onClick={handleClick} // Close the dropdown when a menu item is clicked
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-00 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium"
            onClick={handleClick} // Close the dropdown when a menu item is clicked
          >
            About
          </Link>
          <div className="relative inline-block text-left">
            <button
              onClick={handleFunction}
              className="text-gray-00 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium focus:outline-none flex justify-center items-end gap-"
            >
              <span>Education</span>
              <RiArrowDropDownLine />
            </button>
            {dropdownOpen ? <DropDown handler={handleClick} /> : ""}
          </div>
          <Link
            href="/donation"
            className="text-gray-00 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium"
            onClick={handleClick} // Close the dropdown when a menu item is clicked
          >
            Donation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
