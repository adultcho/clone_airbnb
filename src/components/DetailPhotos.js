import React from "react";
import { useState } from "react";
import "../styles/components/DetailPhotos.css";
import DetailPhotosModal from "./DetailPhotosModal";

function DetailPhotos(props) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = (callBackParam) => {
    console.log(callBackParam);
    setIsOpen(!isOpen);
  };
  // console.log(props)

  return (
    <div className="wrap">
      <div className="detail_photos_container">
        <div className="photos_row_box_1">
          <div className="detail_photos_1">
            <img src={props.image[0]} alt="" />
          </div>
        </div>

        <div className="photos_row_box2">
          <div className="detail_photos_2">
            <img src={props.image[1]} alt="" />
          </div>

          <div className="detail_photos_3">
            <img src={props.image[2]} alt="" />
          </div>
        </div>

        <div className="photos_row_box3">
          <div className="detail_photos_4">
            <img src={props.image[3]} alt="" />
          </div>

          <div className="detail_photos_5">
            <img src={props.image[4]} alt="" />
            <button className="detail_photos_more_btn" onClick={openModal}>
              사진 모두 보기
            </button>
          </div>
        </div>
      </div>
      {isOpen ? <DetailPhotosModal openModalCallBack={openModal} /> : null}
    </div>
  );
}

export default DetailPhotos;
