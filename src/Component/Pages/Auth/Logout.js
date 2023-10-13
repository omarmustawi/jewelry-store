import { useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";

export default function Logout() {
  const navigate = useNavigate();
  function HandleLogout() {
    console.log("run");
    const cookie = Cookie();
    cookie.remove("e-commerce");
    cookie.remove("id");
    cookie.remove("name");
    navigate("/", { replace: true });
    window.location.reload();
  }
  return (
    <button className="btn-dark" onClick={HandleLogout}>
      Log Out
    </button>
  );
}
