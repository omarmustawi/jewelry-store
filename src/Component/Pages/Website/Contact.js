import IntroPage from "../../Components/IntroPage";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { SlEnvolopeLetter } from "react-icons/sl";
import { BsTelephoneFill } from "react-icons/bs";

export default function Contact() {
  const [letter, setletter] = useState({
    fName: "",
    lName: "",
    email: "",
    object: "",
  });

  // HANDLE CHANGE LETTER
  function handleChange(e) {
    setletter({ ...letter, [e.target.name]: e.target.value });
  }

  console.log("letter: ", letter);

  // HANDLE SUBMIT LETTER INTO US
  function handleSubmit() {}

  return (
    <>
      <section>
        <IntroPage title="CONTACT US" sentence="GET IN TOUCH" />
        <div className="row  p-lg-5 gap-5 m-5">
          <div className="col-lg-5 ">
            <h1> MESSAGE US </h1>
            <p>
              {" "}
              If You Have Any Question Or Any Problem, We Are Always Ready To
              Listen To Your Opinion{" "}
            </p>
            <FaLocationDot size={20} />
            <span> 123 Fifth Avenue, New York, NY 10160 </span>
            <br />
            <SlEnvolopeLetter size={20} />
            <span> contact@info.com </span>
            <br />
            <BsTelephoneFill size={20} />
            <span> 9-334-7565-9787 </span>
          </div>

          <form
            className="p-5 row gap-4  col-lg-6 "
            style={{ background: "#faf5f0" }}
            
          >
            <div className="row p-0 justify-content-between  ">
              <input
                className="p-3 border  col-sm-5 mb-sm-0 mb-2  focus-ring  "
                type="text"
                placeholder="First Name"
                name="fName"
                value={letter.fName}
                onChange={handleChange}
              />
              <input
                className="p-3 border  col-sm-6 mt-sm-0 mt-3  focus-ring     "
                type="text"
                placeholder="First Name"
                name="lName"
                value={letter.lName}
                onChange={handleChange}
              />
            </div>
            <input
              className="p-3 ms-1  border focus-ring "
              type="text"
              placeholder="Email Adress"
              name="email"
              value={letter.email}
              onChange={handleChange}
            />
            <textarea
              className="p-3 border focus-ring "
              rows={5}
              placeholder="Object..."
              value={letter.object}
              onChange={handleChange}
            />
            <button className="p-2  border focus-ring  " onClick={handleSubmit}>
              SEND
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
