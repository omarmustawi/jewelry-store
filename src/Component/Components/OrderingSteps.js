import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  PiNumberCircleOneFill,
  PiNumberCircleThreeFill,
  PiNumberCircleTwoFill,
} from "react-icons/pi";
import { Link } from "react-router-dom";
import { useWindowSize } from "../../utility/utility";

export default function OrderingSteps({ title, colored }) {
  // import the width of screen from context WindowContext
  const width_of_screen = useWindowSize();

  return (
    <>
      <h1 className="text-start custom-letter-spacing  "> {title} </h1>
      <div
        className={`d-flex justify-content-center custom-letter-spacing custom-word-spacing font-3xl fs-6 gray-color my-4  ${
          width_of_screen < 850 && "flex-column  gap-3"
        } `}
      >
        <Link
          to={"/purchases"}
          className="d-flex align-items-center gray-color justify-content-center  cursor-pointer"
          style={{ color: colored === "one" ? "#a86e3b" : "" }}
        >
          <PiNumberCircleOneFill size={29} />
          <p className="m-0">SHOPPING CART</p>
        </Link>

        {width_of_screen > 850 && <MdOutlineKeyboardArrowRight size={30} />}

        <Link
          to={"checkOutDetails"}
          className="d-flex align-items-center gray-color  justify-content-center cursor-pointer"
          style={{ color: colored === "two" ? "#a86e3b" : "" }}
        >
          <PiNumberCircleTwoFill size={29} />
          <p className="m-0">CHECKOUT DETAILS</p>
        </Link>

        {width_of_screen > 850 && <MdOutlineKeyboardArrowRight size={30} />}

        <div
          className="d-flex align-items-center  gray-color justify-content-center cursor-pointer"
          style={{ color: colored === "three" ? "#a86e3b" : "" }}
        >
          <PiNumberCircleThreeFill size={29} />
          <p className="m-0"> ORDER COMPLETE</p>
        </div>
      </div>
    </>
  );
}
