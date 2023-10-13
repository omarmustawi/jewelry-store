import { useState } from "react";

export default function CheckOutDetails() {
  const [info_customer, set_info_customer] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    street: "",
  });
  // handle Form Change
  function handleChange(e) {
    set_info_customer({ ...info_customer, [e.target.name]: e.target.value });
  }
  return (
    <>
      <h4> Customer Information </h4>
      <div>
        <div>
          <input
            className="p-3  ms-1  border focus-ring "
            type="text"
            placeholder="Full Name"
            name="name"
            value={info_customer.name}
            onChange={handleChange}
          />
          <input
            className="p-3  ms-1  border focus-ring "
            type="email"
            placeholder="Email Adress"
            name="email"
            value={info_customer.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="p-3  ms-1  border focus-ring "
            type="number"
            placeholder="Phone"
            name="phone"
            value={info_customer.phone}
            onChange={handleChange}
          />
          <select
            className="form-select bg-input-control"
            aria-label="Default select example"
            value={""}
          >
            <option defaultValue={0}> Country: </option>
            <option value={1}>  </option>
            <option value={2}>  </option>
            <option value={3}>  </option>
            <option value={4}>  </option>
          </select>
        </div>
      </div>
    </>
  );
}
