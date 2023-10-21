import { Outlet } from "react-router-dom";
import Err403 from "./403";
import { cookie } from "../../../utility/utility";

export default function RequireAuth() {
  const info_cookie = cookie.getAll();

  return info_cookie.token && info_cookie.email && (info_cookie.id === 1 || info_cookie.id === 2) ? <Outlet /> : <Err403 />;
}
