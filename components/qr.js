import qr from "./assets/qr.jpg";
import { RxCross1 } from "react-icons/rx";
const Qr = (props) => {
  return (
    <div className="h-96 w-96 bg-black z-10">
      <div>
        <span onClick={props.handler}>
          <RxCross1 />
        </span>
      </div>
      <div handler={handleFunction} className="bg-blur ">
        ew lkwnekln
        <Image src={qr} className="h-60 w-60" />
      </div>
    </div>
  );
};
export default Qr;
