import Cookie from "cookie-universal";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { USER } from "../../../Api/Api";
import { Axios } from "../../../Api/Axios";
import Loading from "../../Loading/Loading";
import Err403 from "./403";

export default function RequireAuth({ allowedRole }) {

  //  Token & Cookie
  const cookie = Cookie();
  const token = cookie.get("e-commerce");
  const id = cookie.get("id");
  const role = cookie.get("role");
  console.log('role: ' , role);


    return token ? (
    id === null ? (
      <Loading /> // there is toke and no user ==> still loading
    ) : allowedRole.includes(`${role}`) ? (
      <Outlet />
    ) : (
      <Err403 role={role} />
    ) // there are toke and user  and not allowed to enter==> 403
  ) : (
    <Navigate to={"/login"} replace={true} /> //no token ==> no user ==> nav to login
  );
}
