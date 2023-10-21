import TableShow from "../Dashboard/Table";
import "../Dashboard/dashboard.css";
import { Link } from "react-router-dom";
import { useProductsSelected } from "../../../utility/utility";
import OrderingSteps from "../../Components/OrderingSteps";
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
        <OrderingSteps title={"Cart"} colored={"one"} />
        <TableShow header={header} data={products} />
        <div className="cart-total border pb-2 w-50 mx-auto ">
          <h4 className="p-2 border">Cart Total</h4>
          <p style={{ fontSize: "1.2rem" }}> Total Cost: $ {subtotal} </p>
          <Link to={"checkOutDetails"} className="btn-dark px-2 py-1">
            {" "}
            Next{" "}
          </Link>
        </div>
      </section>
    </>
  );
}
