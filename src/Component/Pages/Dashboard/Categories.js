import { useEffect, useState } from "react";
import Goods from "../../Components/Goods";
import {useProducts} from "../../../utility/utility";

export default function Categories() {
  // run  dispatch fetchProducts and handle status( loading... , success , failed ..)
  const { data, status, error, loadProducts } = useProducts();
  const [filter_products, set_filter_products] = useState(data);
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);
  if (status === "loading") {
    return (
      <div className="d-flex justify-content-center align-items-center w-100">
        <h1 className="fs-1 text-primary font-monospace">Loading...</h1>
      </div>
    );
  }
  if (status === "failed") {
    return <div>Error: {error} </div>;
  }
  // ======================== end ==============================


  function HandleCategory(id) {
    const filteredProducts = data?.filter((product) => product.category === id);
    set_filter_products(filteredProducts);
  }

  function handleProductDelete(id) {
    // Update all_products and filter_products when a product is deleted
    set_filter_products(data?.filter((product) => product.id !== id));
  }
  return (
    <section  style={{height: "90vh"}} className="w-100 overflow-y-scroll">
      <ul className="d-flex justify-content-center w-100  p-3 list-unstyled  ">
        <li
          className="cursor-pointer px-3 rounded-3  btn-blue mx-1 "
          onClick={() => HandleCategory(1)}
        >
          {" "}
          Rings{" "}
        </li>
        <li
          className="cursor-pointer px-3 rounded-3  btn-blue mx-1 "
          onClick={() => HandleCategory(2)}
        >
          {" "}
          Bracelets{" "}
        </li>
        <li
          className="cursor-pointer px-3 rounded-3  btn-blue mx-1 "
          onClick={() => HandleCategory(3)}
        >
          {" "}
          Earrings{" "}
        </li>
        <li
          className="cursor-pointer px-3 rounded-3  btn-blue mx-1 "
          onClick={() => HandleCategory(4)}
        >
          {" "}
          Necklaces{" "}
        </li>
      </ul>
      {/* start display filteres products */}
      <section className="d-flex flex-wrap justify-content-center w-100 ">
        {filter_products.length > 0 ? (
          filter_products.map((product) => (
            <Goods
              id={product.id}
              key={product.id}
              karat={product.karat}
              price={product.price}
              closed_image={product.closed_image}
              far_image={product.far_image}
              category={product.category}
              onDelete={handleProductDelete}
            />
          ))
        ) : (
          <h5>There is no any product in this category!</h5>
        )}
      </section>
      {/* end display filteres products */}
    </section>
  );
}
