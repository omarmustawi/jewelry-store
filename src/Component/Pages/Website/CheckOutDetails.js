import { useEffect, useState } from "react";
import OrderingSteps from "../../Components/OrderingSteps";
import { useProductsSelected } from "../../../utility/utility";
import axios from "axios";

export default function CheckOutDetails() {
  const [info_customer, set_info_customer] = useState({
    name: '',
    email: "",
    phone: "",
    card: "",
    street: "",
    country: "",
    city: "",
    products: [],
  });
  // result of order
  const [result_of_order, set_result_of_order] = useState("");

  const [code_country, set_code_country] = useState([]);
  useEffect(() => {
    try {
      axios.get("http://127.0.01:8000/api/loc").then((res) => {
        set_code_country(res.data.data);
      });
    } catch (err) {
      console.error("Oops! there is an error: ", err);
    }
  }, []);

  // handle Form Change
  function handleChange(e) {
    set_info_customer({ ...info_customer, [e.target.name]: e.target.value });
  }

  // selected products
  const selectedProducts = useProductsSelected();
  info_customer.products = selectedProducts.products.map((element) => ({
    id: element.id,
    count: element.count,
  }));

  // const navigate = useNavigate();
  function handleSubmit() {
    try {
      axios
        .post("http://127.0.0.1:8000/api/purchase", info_customer)
        .then((res) => {
          set_result_of_order(res.data.message);
          console.log("res: " + res.data );
        });
    } catch (err) {
      console.error("Oops! there is an error: ", err);
    }
  }
  return (
    <div className="p-5" style={{ marginTop: "9rem" }}>
      <OrderingSteps
        title={"Check out details"}
        colored={result_of_order === "" ? "two" : "three"}
      />
      {result_of_order === "" ? (
        <>
          {" "}
          <h4> Customer Information </h4>
          <div className="container ">
            <div className="d-flex flex-column flex-md-row gap-3 my-3 ">
              <input
                className="p-3 border focus-ring col-12 col-md-6 "
                type="text"
                placeholder="Full Name"
                name="name"
                value={info_customer.name}
                onChange={handleChange}
              />
              <input
                className="p-3 border focus-ring col-12 col-md-6 "
                type="email"
                placeholder="Email Adress"
                name="email"
                value={info_customer.email}
                onChange={handleChange}
              />
            </div>
            <div className="d-flex flex-column flex-md-row gap-3 my-3">
              <input
                className="p-3 border focus-ring col-12 col-md-6"
                type="text"
                placeholder="Phone"
                name="phone"
                value={info_customer.phone}
                onChange={handleChange}
              />
              <input
                className="p-3 border focus-ring col-12 col-md-6"
                type="text"
                placeholder="Card"
                name="card"
                value={info_customer.card}
                onChange={handleChange}
              />
            </div>
            <div className="d-flex flex-column flex-md-row gap-3 my-3">
              <input
                className="p-3 border focus-ring  col-12 col-md-6 "
                type="text"
                placeholder="City"
                name="city"
                value={info_customer.city}
                onChange={handleChange}
              />
              <input
                className="p-3 border focus-ring col-12 col-md-6"
                type="text"
                placeholder="Street"
                name="street"
                value={info_customer.street}
                onChange={handleChange}
              />
            </div>
            <select
              className="form-select bg-input-control my-3 p-3"
              aria-label="Default select example"
              name="country"
              value={info_customer.country}
              onChange={handleChange}
            >
              <option defaultValue={0}>Country</option>
              {code_country.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <button onClick={handleSubmit} className="btn-dark px-2 py-1">
              {" "}
              Check Out{" "}
            </button>
          </div>
        </>
      ) : (
        <>
          <h4 className="text-dark-emphasis  my-5"> {result_of_order}. </h4>
          <div className="d-flex flex-column flex-sm-row  justify-content-around p-4 footer  rounded-2 text-secondary  m-auto fs-5 col-12 col-lg-6 ">
            <div className="text-start my-1">
              <div>
                {" "}
                Name:{" "}
                <span className="text-dark-emphasis   ">
                  {info_customer.name}
                </span>{" "}
              </div>
              <div>
                {" "}
                Phone:{" "}
                <span className="  text-dark-emphasis  ">
                  {info_customer.phone}
                </span>{" "}
              </div>
              <div>
                {" "}
                Card:{" "}
                <span className="  text-dark-emphasis  ">
                  {info_customer.card}{" "}
                </span>
              </div>
            </div>
            <div className="text-start my-1 ">
              <div>
                {" "}
                Country:{" "}
                <span className="  text-dark-emphasis  ">
                  {info_customer.country
                    ? code_country[info_customer.country - 1].name
                    : "Unknown"}{" "}
                </span>{" "}
              </div>
              <div>
                {" "}
                City:{" "}
                <span className="  text-dark-emphasis  ">
                  {info_customer.city}{" "}
                </span>
              </div>
              <div>
                {" "}
                Sreet:{" "}
                <span className="  text-dark-emphasis  ">
                  {info_customer.street}{" "}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
