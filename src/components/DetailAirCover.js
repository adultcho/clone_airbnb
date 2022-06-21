import React from "react";
import { useState } from "react";
import "../styles/components/DetailAirCover.css";
import DetailAirCoverModal from "./DetailAirCoverModal";

function DetailAirCover() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (callBackParam) => {
    console.log(callBackParam);
    setIsOpen(!isOpen);
  };

  return (
    <div className="detail_air_cover_container">
      <div className="detail_air_cover_title">
        <h1 className="h1_first">에어</h1>
        <h1>커버</h1>
      </div>
      <div className="detail_air_cover_text">
        <p>
          모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은
          경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이
          포함됩니다.
        </p>
      </div>
      <button onClick={openModal} className="detail_air_cover_more_btn">
        <h4>더 알아보기</h4>
      </button>
      
      {isOpen ? <DetailAirCoverModal openModalCallBack={openModal} /> : null}
    </div>
  );
}

export default DetailAirCover;
