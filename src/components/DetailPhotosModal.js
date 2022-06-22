import React from "react";
import { useState } from "react";
import "../styles/components/DetailPhotosModal.css";

function DetailPhotosModal({ openModalCallBack, images }) {
  const [isOpen, setIsOpen] = useState(true);
  const photoNum = 1;
  const closeModal = () => {
    openModalCallBack(isOpen);
    document.body.style.overflow = "unset";
  };
  return (
    <div className="detail_photos_modal_container">
      <div className="detail_photos_modal_back_btn">
        <span class="material-symbols-outlined" onClick={closeModal}>
          arrow_back_ios
        </span>
      </div>
      <div>
        <div className="detail_photos_modal_window">
          {images.map((l, index) => {
            return <img className={"detail_photos_modal_1"} src={l} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default DetailPhotosModal;
