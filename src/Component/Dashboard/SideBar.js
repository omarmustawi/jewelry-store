import { NavLink } from "react-router-dom";
import "./bars.css";
import { Menu } from "../Context/MenuContext";
import { useContext} from "react";

import { links } from "./NavLink";
import { useWindowSize } from "../../utility/utility";

export default function Sidebar() {
  const menu = useContext(Menu);
  const isOpen = menu.isOpen;

  const width_of_screen = useWindowSize();
  return (
    <>
      <div
        style={{
          background: "rgba(3, 142, 220, 0.2)",
          position: "fixed",
          top: "0",
          left: "0",
          bottom: "0",
          right: "0",
          display: width_of_screen < "768" && isOpen ? "block" : "none",
        }}
      ></div>
      <div
        className="side-bar pt-3"
        style={{
          left: width_of_screen < "768" ? (isOpen ? 0 : "-100%") : 0,
          width:
            width_of_screen < "768"
              ? "fit-content"
              : isOpen
              ? "220px"
              : "fit-content",
          position: width_of_screen < "768" ? "fixed" : "sticky",
        }}
      >
        {links.map((link, key) => (
          <NavLink
            key={key}
            to={link.path}
            className="d-flex align-items-center gap-2 side-bar-link"
            style={{
              borderRadius: !isOpen || width_of_screen < 768 ? "50%" : "10px",
              padding: !isOpen || width_of_screen < 768 ? "10px" : "10px 2px",
            }}
          >
            {link.icon}
            {isOpen && width_of_screen > 768 && <p className="m-0"> {link.name} </p>}
          </NavLink>
        ))}
      </div>
    </>
  );
}
