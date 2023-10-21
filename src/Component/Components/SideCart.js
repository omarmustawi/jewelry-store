import "../../Css/base/side-cart.css";
import { RiCloseFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import Item from "./Item";
import { Link } from "react-router-dom";

export default function SideCart({ isHidden, close_sideCart }) {
  const selectedProducts = useSelector(
    (state) => state.selectedProducts.products
  );
  const subtotal = useSelector((state) => state.selectedProducts.subtotal);
  return (
    <section
      className={`position-fixed top-0 right-0 bg-light h-100 side-cart p-3 ${
        isHidden ? "translate-sideCart" : ""
      }`}
    >
      <div className="d-flex justify-content-between ">
        <h4> Shopping Cart </h4>
        <RiCloseFill className="cursor-pointer hover-icon" onClick={() => close_sideCart(!isHidden)} size={30} />
      </div>
      <hr />
      <div className="h-75 border-bottom overflow-y-scroll ">
        {selectedProducts.map((item, id) => (
          <Item key={id} item={item} />
        ))}
      </div>

      <div>
        <div className="d-flex p-2 justify-content-between  align-items-center ">
          <h4>Subtotal:</h4>
          <span> ${subtotal} </span>
        </div>
        <div>
          <Link to={"purchases"} className="btn-dark">VIEW CART</Link>
        </div>
      </div>
    </section>
  );
}
