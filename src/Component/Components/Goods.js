import { IoIosBasket } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteProductAsync } from "../../store/productsSlice";
import { Link, useLocation } from "react-router-dom";
import Gallery from "./Gallery";
import { useState } from "react";
import { addSelectedProduct } from "../../store/selectedProductsSlice";

export default function Goods(props) {
  const rootUrl = window.location.pathname; // This will print the root URL (e.g., "http://localhost:3000" during development)
  
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(deleteProductAsync({ id: props.id }));
  }

  // if we in dashboard I will hide the  IoIosBasket icon
  const location = useLocation().pathname;

  // for traggle state between showing and hiddening
  const [showGallery, set_showGallery] = useState(false);
  return (
    <div
      style={{
        minWidth: "200px",
        width: "20%",
        maxWidth: "400px",
        margin: "1rem",
      }}
    >
      <div className=" one-product">
        <img className="img1" src={props.closed_image} alt="" />
        <div className="img2 position-relative">
          <img src={props.far_image} alt="" />
          <button
            className={`position-absolute pos-icon-1 border-0  ${location.includes("dashboard") ?   "bg-opacity-0 " : "hover-icon" }`}
            disabled={ location.includes("dashboard") ? true : false}
            onClick={() => {
              dispatch(
                addSelectedProduct({
                  id: props.id,
                  closed_image: props.closed_image,
                  far_image: props.far_image,
                  price: props.price,
                  karat: props.karat,
                  category: props.category,
                })
              );
            }}
          >
            <IoIosBasket size={24} />
          </button>
          <FaEye
            onClick={() => set_showGallery(true)}
            size={24}
            className="position-absolute pos-icon-2 hover-icon"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center gap-3    ">
        <span className="dark fs-5 "> {props.karat} karat </span>
        <span className="dark fs-5"> ${props.price} </span>
      </div>
      {rootUrl.includes("dashboard") && (
        <div className="d-flex justify-content-center gap-3    ">
          <Link
            to={`update/${props.id}`}
            className="rounded-3  btn-blue py-1  border-0 "
          >
            update
          </Link>
          <button
            onClick={() => {
              handleDelete();
              if (rootUrl.includes("categories")) {
                console.log(rootUrl.includes("categories"));
                props.onDelete(props.id);
              }
            }}
            className="rounded-3 bg-danger  text-white px-2  py-1  border-0 "
          >
            delete
          </button>
        </div>
      )}
      {showGallery && (
        <Gallery
          images={[props.closed_image, props.far_image]}
          onClose={set_showGallery}
        />
      )}{" "}
    </div>
  );
}
