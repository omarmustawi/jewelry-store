import "./App.css";
import "./index.css";

import HomePage from "./Component/Pages/Website/HomePage";
import Login from "./Component/Pages/Auth/Login";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import Dashboard from "./Component/Pages/Dashboard/Dashboard";
import Err404 from "./Component/Pages/Auth/404";
import Categories from "./Component/Pages/Dashboard/Categories";
import Rings from "./Component/Pages/Website/Rings";
import Bracelets from "./Component/Pages/Website/Bracelets";
import Earrings from "./Component/Pages/Website/Earrings";
import Necklaces from "./Component/Pages/Website/Necklaces";
import About from "./Component/Pages/Website/About";
import Contact from "./Component/Pages/Website/Contact";
import AddProduct from "./Component/Pages/Dashboard/AddProduct";
import Products from "./Component/Pages/Dashboard/Products";
import UpdateProduct from "./Component/Pages/Dashboard/UpdateProduct";
import Cart from "./Component/Pages/Website/Cart";
import { useState } from "react";
import MyNavbar from "./Component/Pages/NavbarAndFooter/Navbar";
import Footer from "./Component/Pages/NavbarAndFooter/Footer";
import SideCart from "./Component/Components/SideCart";

import CheckOutDetails from "./Component/Pages/Website/CheckOutDetails";
import UpdateAccount from "./Component/Pages/Dashboard/UpdateAccount";
import Purchase from "./Component/Pages/Website/Purchase";
import RequireAuth from "./Component/Pages/Auth/RequireAuth";
// import Events from "./Component/Pages/Dashboard/Events";

function App() {
  const [is_hidden, set_is_hidden] = useState(true);
  const location = useLocation().pathname;
  return (
    <div className="App">
      {!location.includes("dashboard") && (
        <MyNavbar open_sideCart={set_is_hidden} />
      )}
      <SideCart close_sideCart={set_is_hidden} isHidden={is_hidden} />
      {/* dark layer */}
      {!is_hidden && (
        <div className="top-0 right-0 position-fixed w-100 h-100 bg-dark opacity-50 "></div>
      )}{" "}
      {/*  dark layer only appear when sideCart appear  */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rings" element={<Rings />} />
        <Route path="/bracelets" element={<Bracelets />} />
        <Route path="/earrings" element={<Earrings />} />
        <Route path="/necklaces" element={<Necklaces />} />
        <Route path="/purchases" element={<Purchase />}>
          <Route path="" element={<Cart />} />
          <Route path="checkOutDetails" element={<CheckOutDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Err404 />} />
        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="categories" element={<Categories />} />
            <Route path="updateAccount" element={<UpdateAccount />} />
            <Route path="product/add" element={<AddProduct />} />
            <Route path="products" element={<Products />} />
            <Route path="products/update/:id" element={<UpdateProduct />} />
            {/* <Route path="events" element={<Events />} /> */}
          </Route>
        </Route>
      </Routes>
      {!location.includes("dashboard") && <Footer />}
    </div>
  );
}

export default App;
