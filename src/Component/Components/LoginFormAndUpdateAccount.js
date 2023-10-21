import { BsPersonCircle } from "react-icons/bs";
import LoadingSubmit from "../Loading/Loading";
import axios from "axios";
import { LOGIN, UPDATE, baseURL } from "../../Api/Api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cookie, token, id } from "../../utility/utility";
import Alert from "./Alert";

export default function LoginFormAndUpdateAccount({ typeComponent }) {
  // states
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // loading
  const [loading, setLoading] = useState(false);

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
      const res =
        typeComponent === "login"
          ? await axios.post(`${baseURL}/${LOGIN}`, form) // http://127.0.0.1:8000/api/auth/login
          : await axios.post(
              `${baseURL}/${UPDATE}`,
              {
                ...form,
                name: "Morty",
                id: id,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            ); // http://127.0.0.1:8000/api/auth/update
      setLoading(false);
      if (res.data.status === 200) {
        setErr(res.data.message);
        if (typeComponent === "login") {
          const token = res.data.data.token;
          cookie.set("token", token);
          const Id = res.data.data.user.id;
          const name = res.data.data.user.name;
          const email = res.data.data.user.email;
          cookie.set("id", Id);
          cookie.set("name", name);
          cookie.set("email", email);
          navigate(`/dashboard`);
        } else {
          const Id = res.data.data.id;
          const name = res.data.data.name;
          const email = res.data.data.email;
          cookie.set("id", Id);
          cookie.set("name", name);
          cookie.set("email", email);
        }
      } else {
        setErr(res.data.message);
        console.log(err);
      }
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
    <>
      {loading && <LoadingSubmit />}
      <div className="container">
        <div
          className="row m-2"
          style={{
            height: typeComponent === "login" ? "100vh" : "calc(100vh-70px)",
          }}
        >
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
              name="password"
              value={form.password}
              onChange={handleChange}
            />

            <button className="p-2  border focus-ring  " onClick={handleSubmit}>
              SEND
            </button>
          </form>
          {err && <Alert message={err} />}
        </div>
      </div>
    </>
  );
}
