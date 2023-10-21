// import axios from "axios";
// import { useEffect, useState } from "react";
// import { token } from "../../../utility/utility";
// import TableShow from "./Table";

// export default function Events() {
//   const [events, setEvents] = useState([]);
//   const header = [
//     {
//       key: "name",
//       name: "Name",
//     },
//     {
//       key: "card",
//       name: "Card",
//     },
//     {
//       key: "email",
//       name: "Email",
//     },
//   ];
//   useEffect(() => {
//     try {
//       axios
//         .get(`http://127.0.0.1:8000/api/events`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then((res) => {
//           console.log("res: ", res);
//           setEvents(res.data.data);
//         });
//     } catch (err) {
//       console.error("Oops! there is an error: ", err);
//     }
//   }, []);

//   return (
//     <section>
//       <TableShow header={header} data={events} />
//     </section>
//   );
// }
