import {MdOutlineAddShoppingCart, MdProductionQuantityLimits} from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";

export const links = [
  {
    name: "Home",
    path: "/",
    icon: <AiTwotoneHome size={30} />,
  },
  {
    name: "Categories",
    path: "/dashboard/categories",
    icon: <MdProductionQuantityLimits size={30} />,
  },
  {
    name: "Add Product",
    path: "/dashboard/product/add",
    icon: <MdOutlineAddShoppingCart size={30} />,
  },
  {
    name: "Products",
    path: "/dashboard/products",
    icon: <MdOutlineAddShoppingCart size={30} />,
  },
];
