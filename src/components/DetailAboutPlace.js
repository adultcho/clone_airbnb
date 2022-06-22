import React from "react";
import { useState } from "react";
import "../styles/components/DetailAboutPlace.css";
import DetailAboutPlaceModal from "./DetailAboutPlaceModal";

function DetailAboutPlace({ detailInforText }) {
  console.log(detailInforText);
  const [isOpen, setIsOpen] = useState(false);
  const [inforText, setInforText] = useState("");

  const openModal = (callBackParam) => {
    setIsOpen(!isOpen);
    document.body.style.overflow = "hidden";
  };

  React.useEffect(() => {
    setInforText(detailInforText);
  }, []);

  console.log(detailInforText.length);

  return (
    <div className="detail_about_place_container">
      {/* <h1 className="detail_about_place_title">숙소 정보</h1> */}
      <div className="detail_about_place_infor_text">{inforText}</div>

      <div className="detail_about_place_infor_btn_box">
        <button
          className="detail_about_place_infor_more_btn"
          onClick={openModal}
        >
          더 보기
        </button>
        <span className="material-symbols-outlined">navigate_next</span>
      </div>
      {isOpen ? (
        <DetailAboutPlaceModal
          openModalCallBack={openModal}
          inforText={inforText}
        />
      ) : null}
    </div>
  );
}

export default DetailAboutPlace;
