import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import { useContext } from "react";
import { WindowSize } from "../Component/Context/WindowContext";
import Cookie from "cookie-universal";
// ========== start export token ===========
export const cookie = Cookie();
export const id = cookie.get("id");
export const token = cookie.get("token");
export const email = cookie.get("email");

// ========== end export token ===========

// ========= start window context hook =============
export const useWindowSize = () => {
  const context = useContext(WindowSize);
  return context.windowSize;
};
// ========= end window context hook =============

// ========= start useProducts hook =========
export function useProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const { data, status, error } = products;

  const loadProducts = () => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  };
  return { data, status, error, loadProducts };
}
// ========= end useProducts hook =========

// =========  start useProductsSelected hook =========
export function useProductsSelected() {
  const selectedProducts = useSelector((state) => state.selectedProducts);
  const { products, subtotal } = selectedProducts;

  return { products, subtotal };
}
// ========= end useProductsSelected hook =========
