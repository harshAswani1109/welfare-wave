import { RxCross1 } from "react-icons/rx";
const MobileNavbar = (props) => {
  return (
    <nav className="w-full h-96 delay-1000 ease-in-out duration-100 transition-shadow p-4 ">
      <div className="flex justify-center items-center text-white bg-black h-full">
        HI I'am MobileNavbar
        {/* <RxCross1 onClick={props.handler} /> */}
      </div>
    </nav>
  );
};
export default MobileNavbar;
