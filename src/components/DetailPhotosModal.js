import React from "react";
import { useState } from "react";
import "../styles/components/DetailPhotosModal.css";

function DetailPhotosModal({ openModalCallBack }) {
  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => {
    openModalCallBack(isOpen);
  };
  return (
    <div className="detail_photos_modal_container">
      <button className="test" onClick={closeModal}>
        X
      </button>
      <div className="detail_photos_modal_window"></div>
    </div>
  );
}

export default DetailPhotosModal;
