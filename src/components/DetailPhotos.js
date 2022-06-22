import React from "react";
import { useState } from "react";
import "../styles/components/DetailPhotos.css";
import DetailPhotosModal from "./DetailPhotosModal";

function DetailPhotos(props) {
  console.log(props);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = (callBackParam) => {
    setIsOpen(!isOpen);
    document.body.style.overflow = "hidden";
  };

  return (
    // <div className="wrap">
    <div className="detail_photos_container">
      <div className="detail_photos_1">
        <img src={props.image[0]} alt="" />
      </div>
      <div className="detail_photos_2">
        <img src={props.image[1]} alt="" />
      </div>
      <div className="detail_photos_3">
        <img src={props.image[2]} alt="" />
      </div>
      <div className="detail_photos_4">
        <img src={props.image[3]} alt="" />
      </div>
      <div className="detail_photos_5">
        <img src={props.image[4]} alt="" />
        <button className="detail_photos_more_btn" onClick={openModal}>
          사진 모두 보기
        </button>
      </div>
      {isOpen ? (
        <DetailPhotosModal openModalCallBack={openModal} images={props.image} />
      ) : null}
    </div>
  );
}

export default DetailPhotos;
