import { useEffect } from "react";
import Goods from "../../Components/Goods";
import {useProducts} from "../../../utility/utility";

export default function Products() {
  // run  dispatch fetchProducts and handle status( loading... , success , failed ..)
  const { data, status, error, loadProducts } = useProducts();
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
  // ========== end ====================================

  return (
    <section style={{height: "90vh"}} className="d-flex flex-wrap justify-content-center w-100 overflow-y-scroll ">
      {data?.map((product) => (
        <Goods
          id={product.id}
          key={product.id}
          karat={product.karat}
          price={product.price}
          closed_image={product.closed_image}
          far_image={product.far_image}
          category={product.category}
        />
      ))}
    </section>
  );
}
