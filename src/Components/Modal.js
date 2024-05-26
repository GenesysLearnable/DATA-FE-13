import "../Components/Modal.css";
import { FaXmark } from "react-icons/fa6";
import { useRef } from "react";

function Modal({ onClose }) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  function handlNetflix() {
    alert("Coming Soon");
  }
  function handlSpotify() {
    alert("Coming Soon");
  }

  return (
    <div ref={modalRef} onClick={closeModal} className="modal-container">
      <div className="modal">
        <FaXmark className="close-btn" onClick={onClose} />
        <div className="modal-outer">
          <div className="platform">
            <img src="./logos_netflix.png" alt="netflix" />
            <button onClick={handlNetflix}>connect</button>
          </div>

          <div className="platform">
            <img src="./spotify.png" alt="spotify" />
            <button onClick={handlSpotify}>connect</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
