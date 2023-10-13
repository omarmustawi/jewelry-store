import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { baseURL, LOGIN } from "../../../Api/Api";
import axios from "axios";
import "./Auth.css";
import LoadingSubmit from "../../Loading/Loading";
import Cookie from "cookie-universal";
import { BsArrowBarRight, BsPersonCircle } from "react-icons/bs";

export default function Login() {
  // states
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // loading
  const [loading, setLoading] = useState(false);

  // Cookie
  const cookie = Cookie();

  //  Err
  const [err, setErr] = useState("");

  // handle Form Change
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // handle Submit
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${baseURL}/${LOGIN}`, form); // DATA IS FORM http://127.0.0.1:4000/api/login
      console.log(res);
      setLoading(false);
      const token = res.data.token;
      const id = res.data.user._id;
      const name = res.data.user.name;
      const role = res.data.user.role;
      cookie.set("id", id);
      cookie.set("name", name);
      cookie.set("e-commerce", token);
      cookie.set("role", role);
      const go = role === "2002" ? "users" : "employee";
      navigate(`/dashboard/${go}`);
    } catch (err) {
      setLoading(false);
      // i will remove comment when get real backend
      if (err.response.status === 401) {
        setErr(err.response.data.message);
      } else {
        setErr(err.response.data.message);
      }
    }
  }
  return (
    <div style={{ background: "#faf5f0" }}>
      {loading && <LoadingSubmit />}
      <div className="container">
        <div className="row m-2" style={{ height: "100vh" }}>
          <form className="p-sm-5 p-2 py-5  row gap-4  col-lg-6 ">
            <BsPersonCircle size={50} />
            <input
              className="p-3  ms-1  border focus-ring "
              type="text"
              placeholder="Email Adress"
              name="email"
              value={form.email}
              onChange={handleChange}
            />

            <input
              className="p-3  ms-1  border focus-ring "
              type="email"
              placeholder="Password"
              name="email"
              value={form.password}
              onChange={handleChange}
            />

            <button className="p-2  border focus-ring  " onClick={handleSubmit}>
              SEND
            </button>
            <Link to={'/register'} className="text-secondary cursor-pointer"> Or Sign up <BsArrowBarRight /> </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
