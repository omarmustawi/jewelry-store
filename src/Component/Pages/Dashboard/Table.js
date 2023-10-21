import { Table } from "react-bootstrap";
import { AiOutlineCloseCircle, AiOutlinePlus } from "react-icons/ai";
import { RiSubtractLine } from "react-icons/ri";
import {
  decreaseSelectedProduct,
  increaseSelectedProduct,
  removeSelectedProduct,
} from "../../../store/selectedProductsSlice";
import { useDispatch } from "react-redux";
import { useWindowSize } from "../../../utility/utility";

export default function TableShow(props) {
  const width_of_screen = useWindowSize();

  const dispatch = useDispatch();

  const headerShow = props.header.map((item, id) => (
    <th key={id}>{item.name} </th>
  ));

  const dataShow = props.data.map((row, id) => (
    <tr key={id}>
      <td> {id + 1}</td>
      {props.header.map((cell, id) => (
        <td key={id}>
          {cell.key === "far_image" ? (
            <div className="d-flex  justify-content-around  align-items-center ">
              <img
                src={`${row[cell.key]}`}
                style={{ height: "5rem", background: "red" }}
                alt=""
              />
              {row.category === 1
                ? "Ring"
                : row.category === 2
                ? "Bracelet"
                : row.category === 3
                ? "Earring"
                : "Necklace"}
            </div>
          ) : cell.key === "price" ? (
            <>${row[cell.key]}</>
          ) : (
            <div className="d-flex justify-content-center  ">
              <RiSubtractLine
                onClick={() =>
                  dispatch(decreaseSelectedProduct({ id: row.id }))
                }
                style={{ width: "2.5rem", height: "2.5rem" }}
                className="border p-2 cursor-pointer hover-icon"
                size={20}
              />

              <span
                style={{ width: "2.5rem", height: "2.5rem" }}
                className="border  d-flex justify-content-center align-items-center cursor-pointer hover-icon"
              >
                {row[cell.key]}{" "}
              </span>
              <AiOutlinePlus
                onClick={() =>
                  dispatch(increaseSelectedProduct({ id: row.id }))
                }
                style={{ width: "2.5rem", height: "2.5rem" }}
                className="border p-2 cursor-pointer hover-icon"
                size={20}
              />
            </div>
          )}
        </td>
      ))}
      <td>{row.count * row.price}</td>
      <td>
        <AiOutlineCloseCircle
          onClick={() => dispatch(removeSelectedProduct({ id: row.id }))}
          className="cursor-pointer hover-icon"
          size={25}
        />
      </td>
    </tr>
  ));
  return (
    <>
      {" "}
      <Table bordered hover responsive>
        {width_of_screen > 700 ? (
          <>
            <thead>
              <tr>
                <th> Id </th>
                {headerShow}
                <th> Subtotal </th>
                <th> Action </th>
              </tr>
            </thead>
            <tbody>
              {props.data.length === 0 ? (
                <tr>
                  <td colSpan={12} className="text-center">
                    There is not selected products...
                  </td>
                </tr>
              ) : (
                dataShow
              )}
            </tbody>
          </>
        ) : (
          <>
            {props.data.length > 0 ? (
              props.data.map((item, index) => (
                <div key={index} className="border text-dark-emphasis  my-4">
                  <h2 className="border p-1 m-0 footer">
                    Category: {item.category}
                  </h2>
                  <div className="d-flex justify-content-around border ">
                    <div className=" p-1 m-0 text-dark-emphasis">
                      ID: {item.id}
                    </div>
                    <div className=" p-1 m-0 text-dark-emphasis">
                      Price: {item.price}
                    </div>
                  </div>
                  <div className="d-flex justify-content-around border">
                    <p className=" p-1 m-0">Karat: {item.karat}</p>
                    <p className=" p-1 m-0">Count: {item.count}</p>
                  </div>
                  <p className="border p-1 m-0 row row-cols-sm-3">
                    <img
                      // style={{minWidth: "50px"}}
                      src={item.closed_image}
                      alt="Closed Image"
                    />
                  </p>
                </div>
              ))
            ) : (
              <div className="fs-5">There is not selected products...</div>
            )}
          </>
        )}
      </Table>
    </>
  );
}
