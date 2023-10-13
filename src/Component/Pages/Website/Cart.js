import {
  PiNumberCircleOneFill,
  PiNumberCircleThreeFill,
  PiNumberCircleTwoFill,
} from "react-icons/pi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import TableShow from "../Dashboard/Table";
import "../Dashboard/dashboard.css";
import { Link } from "react-router-dom";
import { useProductsSelected } from "../../../utility/utility";

export default function Cart() {
  const { products, subtotal } = useProductsSelected();
  // const selectedProducts = useSelector((state) => state.selectedProducts);
  const header = [
    {
      key: "far_image",
      name: "Product",
    },
    {
      key: "price",
      name: "Price",
    },
    {
      key: "count",
      name: "Count",
    },
  ];

  return (
    <>
      <section className="p-5" style={{ marginTop: "9rem" }}>
        <h1 className="text-start custom-letter-spacing  ">CART</h1>
        <div className="d-flex justify-content-center custom-letter-spacing custom-word-spacing font-3xl fs-6 gray-color my-4 ">
          <span
            className="d-flex align-items-center  justify-content-center  cursor-pointer"
            style={{ color: "#a86e3b" }}
          >
            <PiNumberCircleOneFill size={29} />
            <p className="m-0">SHOPPING CART</p>
          </span>

          <MdOutlineKeyboardArrowRight size={30} />

          <span className="d-flex align-items-center  justify-content-center cursor-pointer">
            <PiNumberCircleTwoFill size={29} />
            <p className="m-0">CHECKOUT DETAILS</p>
          </span>

          <MdOutlineKeyboardArrowRight size={30} />

          <span className="d-flex align-items-center  justify-content-center cursor-pointer">
            <PiNumberCircleThreeFill size={29} />
            <p className="m-0"> ORDER COMPLETE</p>
          </span>
        </div>
        <TableShow header={header} data={products} />
        <div className="cart-total border pb-2 w-50 mx-auto ">
          <h4 className="p-2 border">Cart Total</h4>
          <p style={{ fontSize: "1.2rem" }}>
            {" "}
            Total Cost: $ {subtotal}{" "}
          </p>
          <Link to={""} className="btn-dark px-2 py-1">
            {" "}
            Next{" "}
          </Link>
        </div>
      </section>
    </>
  );
}
