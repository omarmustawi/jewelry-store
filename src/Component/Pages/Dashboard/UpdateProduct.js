import AddUpdateProductForm from "../../Components/AddUpdateProductForm";

export default function UpdateProduct() {
  const id = parseInt(window.location.pathname.match(/(\d+)/)[0], 10);
  return <AddUpdateProductForm id={id} />;
}
