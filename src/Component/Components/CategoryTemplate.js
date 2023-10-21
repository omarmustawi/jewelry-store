import { useEffect, useState } from "react";
import { useProducts } from "../../utility/utility";
import Goods from "./Goods";
import Loading from "../Loading/Loading";

export default function CategoryTemplate({ title, category_id }) {
  const { data, status, error, loadProducts } = useProducts();
  const [filter_products, set_filter_products] = useState([]);

  useEffect(() => {
    // Only call loadProducts if the status is "idle"
    if (status === "idle") {
      loadProducts();
    }
  }, [status, loadProducts]);

  useEffect(() => {
    // Filter products when data changes (after loading)
    const filteredProducts = data?.filter(
      (product) => product.category === category_id
    );
    set_filter_products(filteredProducts);
  }, [data]);

  if (status === "loading") {
    return (
      <Loading />
    );
  } else if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h1 className="font-6xl height-16 pt-5 text-start m-5 d-flex align-items-end">
        {title}
      </h1>
      <section style={{ margin: "5rem 0" }}>
        <div
          style={{ gap: "1rem" }}
          className="d-flex flex-wrap justify-content-center"
        >
          {filter_products.length > 0 ? (
            filter_products?.map((product) => (
              <Goods
                id={product.id}
                key={product.id}
                karat={product.karat}
                price={product.price}
                closed_image={product.closed_image}
                far_image={product.far_image}
                category={product.category}
              />
            ))
          ) : (
            <h5>There is no product in this category!</h5>
          )}
        </div>
      </section>
    </>
  );
}
