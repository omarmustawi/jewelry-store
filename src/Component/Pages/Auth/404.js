import { Link } from "react-router-dom";
import "./404.css";

export default function Err404() {
  return (
    <div className="section">
      <div className="content">
        <h1 className="error404">404</h1>
        <div className="page">
          Ooops!!! The page you are looking for is not found
        </div>
        <Link to="/" className="back-home">
          Back to home
        </Link>
      </div>
    </div>
  );
}
