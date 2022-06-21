import React from "react";
import { useState } from "react";
import "../styles/components/DetailPhotos.css";
import DetailPhotosModal from "./DetailPhotosModal";

function DetailPhotos() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = (callBackParam) => {
    console.log(callBackParam);
    setIsOpen(!isOpen);
  };

  return (
    <div className="wrap">
      <div className="detail_photos_container">
        <div className="photos_row_box_1">
          <div className="detail_photos_1">
            <img
              src="https://a0.muscache.com/im/pictures/32e8b4a0-83ff-4dba-8253-5340d8d05215.jpg?im_w=1200"
              alt=""
            />
          </div>
        </div>

        <div className="photos_row_box2">
          <div className="detail_photos_2">
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-49227437/original/5b50ac57-8eca-4b8b-be51-43a7155ed37a.jpeg?im_w=720"
              alt=""
            />
          </div>

          <div className="detail_photos_3">
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-49227437/original/df072e91-5a50-4c04-ac97-80aad69ec55d.jpeg?im_w=720"
              alt=""
            />
          </div>
        </div>

        <div className="photos_row_box3">
          <div className="detail_photos_4">
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-49227437/original/f1f4f807-b77f-4223-98f0-3afaa11520f6.jpeg?im_w=720"
              alt=""
            />
          </div>

          <div className="detail_photos_5">
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-49227437/original/df072e91-5a50-4c04-ac97-80aad69ec55d.jpeg?im_w=720"
              alt=""
            />
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
