export default function TitleSection(props) {
  return (
    <div className="d-flex flex-column mt-5 ">
      <span className="fs-6 light"> {props.small} </span>
      <span className="fs-1"> {props.big} </span>
      <span className="fs-4 d-grid col-lg-6 col-10   dark m-auto font-thin"> {props.middle} </span>
      <span className="line-brown "></span>
    </div>
  );
}
