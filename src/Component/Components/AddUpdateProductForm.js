import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProductAsync, updateProductAsync } from "../../store/productsSlice";
import { Form } from "react-bootstrap";
import Loading from "../Loading/Loading";
import axios from "axios";

export default function Add_update_product_form({ id }) {
  const [karat, setKarat] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [imageClosed, setImageClosed] = useState(null);
  const [imageFar, setImageFar] = useState(null);

  useEffect(() => {
    if (id) {
      try {
        axios.get(`http://127.0.0.1:8000/api/product/${id}`).then((res) => {
          setKarat(res.data.data.karat);
          setCategory(res.data.data.category);
          setPrice(res.data.data.price);
          setImageClosed(res.data.data.closed_image);
          setImageFar(res.data.data.far_image);
        });
      } catch (err) {
        console.error("oops! there is an error: ", err);
      }
    }
  }, [id]);

  // // ERR
  const [err, setErr] = useState("");

  // Loading
  const [loading, setLoading] = useState(false);

  // SUBMIT FOR UPDATE INFO
  const dispatch = useDispatch();
  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData();
    if (id) form.append("id", id);
    form.append("karat", karat);
    form.append("category", category);
    form.append("price", price);
    form.append("closed_image", imageClosed);
    form.append("far_image", imageFar);
    setLoading(true);
    try {
      if (id) await dispatch(updateProductAsync(form));
      // Pass the form data to the action
      else await dispatch(addProductAsync(form));
      setLoading(false);
      // Optionally, you can reset the form fields here
      setKarat("");
      setCategory("");
      setPrice("");
      setImageClosed(null);
      setImageFar(null);
    } catch (err) {
      setLoading(false);
      setErr(err.response.data);
      console.log("err ", err);
    }
  }

  // to disdplay images which are fetchedfrom backend and images which are uploded
  const [display_img_close, set_display_img_close] = useState(false);
  const [display_img_far, set_display_img_far] = useState(false);

  return (
    <>
      {loading && <Loading />}
      <Form
        style={{ height: "calc(100vh - 70px)" }}
        className="bg-control w-100 p-3"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <Form.Group
          className="mb-3 text-start"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Karat:</Form.Label>
          <Form.Control
            className="bg-input-control"
            value={karat}
            onChange={(e) => setKarat(e.target.value)}
            type="number"
            name="karat"
            placeholder="Enter Karat.."
            minLength="3"
            required
          />
        </Form.Group>

        <select
          className="form-select bg-input-control"
          aria-label="Default select example"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option defaultValue={0}> Category: </option>
          <option value={1}> Rings </option>
          <option value={2}> Bracelets </option>
          <option value={3}> Earrings </option>
          <option value={4}> Necklaces </option>
        </select>

        <Form.Group
          className="mb-3 text-start"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Price:</Form.Label>
          <Form.Control
            className="bg-input-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            name="price"
            placeholder="Enter Price.."
            minLength="3"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 text-start" controlId="image">
          <Form.Label>Image Closed:</Form.Label>
          <Form.Control
            className="bg-input-control"
            onChange={(e) => {
              const file = e.target.files[0]; // Get the selected file
              setImageClosed(file); // set the file object as the value
              set_display_img_close(true);
            }}
            type="file"
            name="closed_image"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 text-start" controlId="image">
          <Form.Label>Image Far:</Form.Label>
          <Form.Control
            className="bg-input-control"
            onChange={(e) => {
              const file = e.target.files[0]; // Get the selected file
              setImageFar(file); // Set the file object as the value
              set_display_img_far(true);
            }}
            type="file"
            name="far_image"
            required
          />
        </Form.Group>
        <div className="d-flex gap-3  justify-content-center my-3">
          {imageClosed && (
            <img
              className="img-add-product"
              src={
                display_img_close
                  ? URL.createObjectURL(imageClosed)
                  : imageClosed
              }
              alt="Image Closed"
            />
          )}
          {imageFar && (
            <img
              className="img-add-product"
              src={display_img_far ? URL.createObjectURL(imageFar) : imageFar}
              alt="Image Far"
            />
          )}
        </div>

        <button className="button btn-blue" type="submit">
          Save
        </button>
        {err && <p className="error"> {err} </p>}
      </Form>
    </>
  );
}
