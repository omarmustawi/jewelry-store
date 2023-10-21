import { useEffect, useState } from "react";

export default function Alert({ message }) {
  // HOW TO MAKE Alert DISPLAY FOR 5 SEC
  const [alert, set_alert] = useState(false);

  useEffect(() => {
    set_alert(true);
    const timeoutId = setTimeout(() => {
      set_alert(false);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [message]);
  return (
    <>
      {alert && (
        <div
          className="position-fixed d-flex justify-content-center"
          style={{ top: "7rem", zIndex: "2000" }}
        >
          <div className="border shadow footer col-10  col-sm-4 p-3 rounded-2  text-light-emphasis ">
            <p className="p-0 pb-0 ">{message}</p>
          </div>
        </div>
      )}
    </>
  );
}
