import React from "react";
import "../styles/components/DetailAirCover.css";

function DetailAirCover() {
  return (
    <div className="detail_air_cover_container">
      <div className="detail_air_cover_title">
        <h1 className="h1_first">에어</h1>
        <h1 className="h1_second">커버</h1>
      </div>
      <div className="detail_air_cover_text">
        <p>
          모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은
          경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이
          포함됩니다.
        </p>
      </div>
      <a href="" className="detail_air_cover_more_btn">
        더 알아보기
      </a>
    </div>
  );
}

export default DetailAirCover;
