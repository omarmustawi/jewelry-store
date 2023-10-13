import { useRef, useState } from "react";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
import { BiFullscreen } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";

export default function Gallery({ images, onClose }) {
  const [full, set_full] = useState(false);

  const [zoom, setZoom] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);

  const imageRef = useRef(null);
  const isDragging = useRef(false);
  const startPanX = useRef(null);

  const handleZoomIn = () => {
    setZoom(zoom + 0.1);
  };

  const handleZoomOut = () => {
    if (zoom > 1) {
      setZoom(zoom - 0.1);
    }
  };

  const handleMouseDown = () => {
    isDragging.current = true;
    imageRef.current.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    imageRef.current.style.cursor = "grab";
  };

  const handleMouseMove = (e) => {
    console.log("isDragging:" + isDragging.current);
    if (!isDragging.current && zoom > 1) {
      const newPanX = e.clientX - startPanX.current;
      const newPanY = e.clientY - startPanX.current;
      setPanX(newPanX);
      setPanY(newPanY);
      console.log("panX: " + panX, " panY: " + panY);
    }
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    imageRef.current.style.cursor = "grab";
  };

  const handleDoubleClick = () => {
    setZoom(1);
    setPanX(0);
    setPanY(0);
  };
  return (
    <div
      className="gallery d-flex justify-content-center align-items-center "
    >
      <div className="position-absolute d-flex gap-3 top-0  right-0 m-3 z-3 ">
        <RiCloseFill
          onClick={() => onClose(false)}
          className="cursor-pointer text-light  "
          size={30}
        />
        <AiOutlineZoomIn
          onClick={handleZoomIn}
          className="cursor-pointer text-light  "
          size={30}
        />
        <AiOutlineZoomOut
          onClick={handleZoomOut}
          className="cursor-pointer text-light  "
          size={30}
        />
        <BiFullscreen
          onClick={() => set_full(!full)}
          className="cursor-pointer text-light  "
          size={30}
        />
      </div>
      <div
        className={
          full
            ? "h-100 w-100  bg-black  d-flex justify-content-center align-items-center  "
            : "h-75"
        }
      >
        <img
          ref={imageRef}
          key={0}
          style={{
            transform: `scale(${zoom}) translate(${panX * 0.1}px , ${
              panY * 0.1
            }px)`,
            cursor: zoom > 1 ? "grab" : "auto",
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onDoubleClick={handleDoubleClick}
          className="h-100 image-container"
          src={images[0]}
          alt={`Image ${0}`}
        />
      </div>
    </div>
  );
}
