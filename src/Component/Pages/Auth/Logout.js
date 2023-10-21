import { useNavigate } from "react-router-dom";
import { cookie } from "../../../utility/utility";

export default function Logout() {
  const navigate = useNavigate();

  function HandleLogout() {
    cookie.remove("token");
    cookie.remove("id");
    cookie.remove("name");
    cookie.remove("email");
    navigate("/", { replace: true });
    window.location.reload();
  }
  return (
    <button className="btn-dark" onClick={HandleLogout}>
      Log Out
    </button>
  );
}
