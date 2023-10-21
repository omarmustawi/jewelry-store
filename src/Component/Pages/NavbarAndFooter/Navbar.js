import { NavLink } from "react-router-dom";
import Logout from "../Auth/Logout";
import "../../../Css/base/nav.css";
import logo from "../../../Css/assets/images/logo-regular.png";
import { IoIosBasket } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import {   cookie, useWindowSize } from "../../../utility/utility";



export default function MyNavbar({ open_sideCart }) {
  const width_of_screen = useWindowSize();

  // const cookie = Cookie();
  const token = cookie.get("token");

  //  display menu
  const [leftDisplay, setLeftDisplay] = useState(false);
  const [rightDisplay, setRightDisplay] = useState(false);

  return (
    <nav className="d-flex justify-content-around p-4 position-fixed fixed-top bg-nav border-bottom ">
      {/* START LEFT SECTION 'CATEGORIES' */}
      {width_of_screen < 1100 && (
        <h6
          className="d-flex align-items-center  link"
          role="button"
          onClick={() => setLeftDisplay(!leftDisplay)}
        >
          {" "}
          Categories{" "}
          <AiOutlinePlus
            className={leftDisplay ? " rotate-element" : "rotate-0"}
          />{" "}
        </h6>
      )}

      <ul
        className={
          width_of_screen > 1100
            ? "d-flex align-items-center list-unstyled "
            : leftDisplay
            ? "d-flex align-items-center list-unstyled flex-column position-absolute text-secondary  gap-3 p-4 bg-light left-nav rounded shadow  "
            : "d-none"
        }
      >
        <li>
          {" "}
          <NavLink className="dark link px-3 " to="/rings">
            rings
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink className="dark link px-3 " to="/bracelets">
            bracelets
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink className="dark link px-3 " to="/earrings">
            earrings
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink className="dark link px-3 " to="/necklaces">
            necklaces
          </NavLink>{" "}
        </li>
      </ul>
      {/* END LEFT SECTION 'CATEGORIES' */}

      <img style={{ width: "fitContent" }} src={logo} alt="" />

      {/* START left SECTION 'PAGES' */}
      {width_of_screen < 1100 && (
        <h6
          className="d-flex align-items-center  link"
          role="button"
          onClick={() => setRightDisplay(!rightDisplay)}
        >
          {" "}
          Pages{" "}
          <AiOutlinePlus
            className={rightDisplay ? " rotate-element" : "rotate-0"}
          />{" "}
        </h6>
      )}
      <ul
        className={
          width_of_screen > 1100
            ? "d-flex align-items-center list-unstyled "
            : rightDisplay
            ? "d-flex align-items-center list-unstyled flex-column position-absolute text-secondary  gap-3 p-4 bg-light rounded shadow right-nav  "
            : "d-none"
        }
      >
        <li>
          {" "}
          <NavLink className="dark link px-3 " to={"/"}>
            home
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink className="dark link px-3 " to={"/about"}>
            about
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink className="dark link px-3 " to={"/contact"}>
            contact
          </NavLink>{" "}
        </li>

        {token ? (
          <>
            <li>
              {" "}
              <NavLink className="dark link px-3 " to={"/dashboard"}>
                dashboard
              </NavLink>{" "}
            </li>

            <li>
              {" "}
              <Logout />{" "}
            </li>
          </>
        ) : (
          <li>
            {" "}
            <NavLink className="dark link px-3 " to={"/login"}>
              Login
            </NavLink>{" "}
          </li>
        )}

        <li>
          {" "}
          <div
            onClick={() => open_sideCart((prev) => !prev)}
            className="dark link px-3 "
          >
            <IoIosBasket className="cursor-pointer" size={30} />
          </div>
        </li>
      </ul>
      {/* END RIGHT SECTION 'PAGES' */}
    </nav>
  );
}
