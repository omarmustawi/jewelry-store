import { AiOutlineCloseCircle, AiOutlinePlus } from "react-icons/ai";
import { RiSubtractLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  decreaseSelectedProduct,
  increaseSelectedProduct,
  removeSelectedProduct,
} from "../../store/selectedProductsSlice";

export default function Item({ item }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="item d-flex justify-content-between   gap-3">
        <span className="d-flex align-items-center  gap-2">
          <img src={item.far_image} alt="" className="" />
          <div>
            <h5>category: {item.category} </h5>
            <div className="d-flex">
              <RiSubtractLine
                onClick={() =>
                  dispatch(decreaseSelectedProduct({ id: item.id }))
                }
                style={{ width: "2.5rem", height: "2.5rem" }}
                className="border p-2 cursor-pointer hover-icon"
                size={20}
              />
              <span
                style={{ width: "2.5rem", height: "2.5rem" }}
                className="border  d-flex justify-content-center align-items-center cursor-pointer hover-icon"
              >
                {" "}
                {item.count}{" "}
              </span>
              <AiOutlinePlus
                onClick={() =>
                  dispatch(increaseSelectedProduct({ id: item.id }))
                }
                style={{ width: "2.5rem", height: "2.5rem" }}
                className="border p-2 cursor-pointer hover-icon"
                size={20}
              />
            </div>
          </div>
        </span>
        <div className="text-dark-emphasis  d-flex  flex-column align-items-end  gap-2  ">
          <AiOutlineCloseCircle
            onClick={() => dispatch(removeSelectedProduct({ id: item.id }))}
            className="cursor-pointer hover-icon"
            size={20}
          />
          <span> {item.price * item.count} $ </span>
        </div>
      </div>
      <hr />
    </>
  );
}
