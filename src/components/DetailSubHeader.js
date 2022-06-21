import React from "react";
import "../styles/components/DetailSubHeader.css";
import StarIcon from "@mui/icons-material/Star";

function DetailSubHeader() {
  const title = "산블라스섬의 키메라섬 프라이빗 투어 (성인만 참여 가능)";
  const average = "4.94";
  const review_number = "17";
  const homeAddress = "Jeokseong-myeon, Danyang-gun, 충청북도, 한국";
  return (
    <div className="detail_sub_header_container">
      {/* 서브헤더 상단 타이틀 부분 */}

      <div className="detail_sub_header_title">
        <h1 id="detail_sub_header_title_h1">{title}</h1>
      </div>

      {/* 서브헤더 하단 부분 평점, 후기, 공유하기 & 저장 버튼 */}
      <div className="detail_sub_header_infor">
        <div className="detail_sub_header_infor_text">
          <StarIcon />
          {average}
          <div className="detail_sub_header_reviews_number">
            후기 {review_number}개
          </div>
          <div className="detail_sub_header_address">{homeAddress}</div>
        </div>
        {/* <div>
          <div>공유하기</div>
          <div>저장</div>
        </div> */}
      </div>
    </div>
  );
}

export default DetailSubHeader;
