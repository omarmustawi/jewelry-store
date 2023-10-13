import { Link } from "react-router-dom";
import "./403.css";


export default function Err403({role}) {
  return (
    <div className="text-wrapper">
      <div className="title" data-content={404}>
        403 - ACCESS DENIED
      </div>
      <div className="subtitle">
        Oops, You don't have permission to access this page
      </div>
      <Link to={ role === "2020"? "/dashboard/employee": "/" } className="btn-blue ">
        { role === "2020" ? "Go To Employee Page" : "Go To Home Page" }
      </Link>
    </div>
  );
}
