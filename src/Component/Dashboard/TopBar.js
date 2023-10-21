import { useContext } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Menu } from "../Context/MenuContext";

export default function Topbar() {
  const menu = useContext(Menu);
  const setIsOpen = menu.setIsOpen;

  return (
    <div className="top-bar d-flex align-items-center justify-content-between">
      <div className="color-555">
        <h3 className="d-inline"> E-commerce </h3>
        <AiOutlineMenuUnfold
          onClick={() => setIsOpen((prev) => !prev)}
          cursor={"pointer"}
          size={25}
        />
      </div>
      <div style={{backgroundColor: "red !importent"}}>
      </div>
    </div>
  );
}
