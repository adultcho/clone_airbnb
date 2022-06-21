import React from "react";
import { useState, useRef } from "react";
import "../styles/components/DetailAboutPlaceModal.css";
import CloseIcon from "@mui/icons-material/Close";

function DetailAboutPlaceModal({ openModalCallBack, inforText }) {
  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => {
    openModalCallBack(!isOpen);
    document.body.style.overflow = "unset";
  };

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="detail_about_place_modal_container" onClick={handleClose}>
      <div className="detail_about_place_modal_window">
        <CloseIcon
          className="detail_about_place_modal_close_btn"
          onClick={closeModal}
        />
        <h1>숙소 설명</h1>
        <div className="detail_about_place_modal_input_text">
          <pre>{inforText}</pre>
        </div>
      </div>
    </div>
  );
}

export default DetailAboutPlaceModal;
