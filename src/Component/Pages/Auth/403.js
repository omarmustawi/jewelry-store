import { Link } from "react-router-dom";
import "./404.css";

export default function Err403() {
  return (
    <div className="section">
      <div className="content">
        <h1 className="error404">403</h1>
        <div className="page">
          Oops, You don't have permission to access this page{" "}
        </div>
        <Link to="/login" className="back-home">
          Go To Login
        </Link>
      </div>
    </div>
  );
}
