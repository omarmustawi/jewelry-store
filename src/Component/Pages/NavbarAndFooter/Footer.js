import { Link } from "react-router-dom";
import logo from "../../../Css/assets/images/logo-regular.png"; 
import '../../../Css/base/nav.css';



export default function Footer() {
  return (
    <section className="footer mt-5 p-lg-4 p-2 border-top">
      <div className="d-flex flex-column flex-sm-row flex-wrap justify-content-between gap-4 gap-sm-0">
        {" "}
        <img className="m-auto " style={{width: '150px' , height: "60px"}} src={logo} alt="" />{" "}
        {/* ================ PAGES ============== */}
        <ul className="list-unstyled m-auto  ">
            <li className="mb-3 fw-bold dark "> Pages </li>
            <li className="to-right  "> <Link className="light link px-3 " to={"/"}> Home </Link> </li>
            <li className="to-right "> <Link className="light link px-3 " to={"/about"}> about </Link> </li>
            <li className="to-right "> <Link className="light link px-3 " to={"/contact"}> contact  </Link> </li>
        </ul>
        {/* =============== CATGEORIES ============ */}
        <ul className="list-unstyled  m-auto">
            <li className="mb-3 fw-bold dark"> CATEGORIES </li>
            <li className="to-right"> <Link className="light link px-3" to={"/rings"}> rings </Link> </li>
            <li className="to-right"> <Link className="light link px-3" to={"/bracelets"}> bracelets </Link> </li>
            <li className="to-right"> <Link className="light link px-3" to={"/earrings"}> earrings  </Link> </li>
            <li className="to-right"> <Link className="light link px-3" to={"/necklaces"}> necklaces  </Link> </li>
        </ul>
        {/* ========== ADDRESS ===================== */}
        <ul className="list-unstyled m-auto">
            <li className="mb-3 fw-bold dark"> ADDRESS </li>
            <li> <Link className="light px-3" to={""}> 123 Fifth Avenue, New York, </Link> </li>
            <li> <Link className="light px-3" to={""}> NY 10160 </Link> </li>
            <li> <Link className="light px-3" to={""}> contact@info.com  </Link> </li>
            <li> <Link className="light px-3" to={""}> 929-242-6868  </Link> </li>
        </ul>
        {/* ========== ADDRESS ===================== */}
        
      </div>
      <div className="dark border-top pt-3"> Copyright © 2023 Blingg Jewelry | Powered by Blingg Jewelry </div>
    </section>
  );
}
