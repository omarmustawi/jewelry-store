import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";

export function useProducts () {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const { data, status, error } = products;

  const loadProducts = () => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  };
  return { data, status, error, loadProducts };
};

export function useProductsSelected() {
  const selectedProducts = useSelector((state) => state.selectedProducts);
  const { products, subtotal } = selectedProducts;

  return { products, subtotal };
};

