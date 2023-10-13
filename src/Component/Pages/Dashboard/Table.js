import { Table } from "react-bootstrap";
import { AiOutlineCloseCircle, AiOutlinePlus } from "react-icons/ai";
import { RiSubtractLine } from "react-icons/ri";
import {
  decreaseSelectedProduct,
  increaseSelectedProduct,
  removeSelectedProduct,
} from "../../../store/selectedProductsSlice";
import { useDispatch } from "react-redux";

export default function TableShow(props) {
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
            <>
              <img
                src={`${row[cell.key]}`}
                style={{ height: "5rem", background: "red" }}
                alt=""
              />
              {row.category}
            </>
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
                Loading...
              </td>
            </tr>
          ) : props.data.length <= 1 && props.noUsers ? (
            <tr>
              <td colSpan={12} className="text-center">
                No users found
              </td>
            </tr>
          ) : (
            dataShow
          )}
        </tbody>
      </Table>
    </>
  );
}
