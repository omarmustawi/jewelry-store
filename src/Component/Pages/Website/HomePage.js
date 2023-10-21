import TitleSection from "../../Components/TitleSection";
import Goods from "../../Components/Goods";
import { useEffect } from "react";
import { useProducts } from "../../../utility/utility";
import Loading from "../../Loading/Loading";
// ====================

export default function HomePage() {
  const { data, status, error, loadProducts } = useProducts();
  useEffect(() => {
    // Only call loadProducts if the status is "idle"
    if (status === "idle") {
      loadProducts();
    }
  }, [status, loadProducts]);
  if (status === "loading") {
    return (
      <Loading />
    );
  }
  if (status === "failed") {
    return <div>Error: {error} </div>;
  }
  return (
    <>
      <div className="bg-home d-flex flex-column justify-content-center align-items-lg-start  align-items-center  w-100 p-lg-5  ">
        <span className="text-start"> NEW COLLECTION </span>
        <h1 className="text-title-responsive   text-start">
          THE NEW RING <br /> SENSATION
        </h1>
      </div>
      <TitleSection small="POPULAR PRODUCTS" big="TRENDING NOW" />
      <div
        style={{ gap: "1rem" }}
        className="d-flex flex-wrap justify-content-center my-5"
      >
        {data?.map((product) => (
          <Goods
            id={product.id}
            key={product.id}
            closed_image={product.closed_image}
            far_image={product.far_image}
            karat={product.karat}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
      <TitleSection
        small="BEST IN BUSINESS"
        big="WHY CHOOSE US"
        middle="CRAS MALESUADA DOLOR SIT AMET EST EGESTAS ULLAMCORPER. NULLAM IN TORTOR MI. MAECENAS VULPUTATE LIBERO"
      />
    </>
  );
}
