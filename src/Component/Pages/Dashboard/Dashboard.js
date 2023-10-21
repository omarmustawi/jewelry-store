import { Outlet } from "react-router-dom";
import Sidebar from "../../Dashboard/SideBar";
import Topbar from "../../Dashboard/TopBar";
import "./dashboard.css";
export default function Dashboard() {
  return (
    <div className="position-relative dashboard">
      <Topbar />
      <div
        className="bg-control d-flex gap-1"
        style={{ marginTop: "70px", height: "calc(100vh - 70px)" }}
      >
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
