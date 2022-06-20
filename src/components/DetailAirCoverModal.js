import React from "react";
import { useState } from "react";
import "../styles/components/DetailAirCoverModal.css";
import CloseIcon from "@mui/icons-material/Close";

function DetailAirCoverModal({ openModalCallBack }) {
  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => {
    openModalCallBack(isOpen);
  };

  return (
    <div className="detail_air_cover_modal_container">
      <div className="detail_air_cover_modal_window">
        <CloseIcon
          className="detail_air_cover_modal_close_btn"
          onClick={closeModal}
        />
        <div className="detail_air_cover_modal_top">
          <div className="detail_air_cover_modal_title">
            <h1 className="h1_first">에어</h1>
            <h1 className="h1_second">커버</h1>
          </div>
          <div>에어커버는 모든 예약에 적용되는 포괄적인 보호 장치입니다.</div>
        </div>

        <div className="detail_air_cover_modal_text_container">
          <div className="detail_air_cover_modal_text_box">
            <h4>예약 지원 보장</h4>
            <p>
              드물지만 체크인까지 30일 이내로 남은 시점에 호스트가 예약을
              취소하는 경우, 에어비앤비에서 기존 숙소와 비슷한 숙소 또는 더 나은
              숙소를 찾아드리거나 요금을 환불해 드립니다.
            </p>
          </div>

          <div className="detail_air_cover_modal_text_box">
            <h4>체크인 지원 보장</h4>
            <p>
              숙소에 체크인할 수 없으며 호스트가 문제를 해결할 수 없는 경우,
              예약한 기간 동안 머물 수 있도록 기존 숙소와 비슷한 숙소 또는 더
              나은 숙소를 찾아드리거나 요금을 환불해 드립니다.
            </p>
          </div>

          <div className="detail_air_cover_modal_text_box">
            <h4>숙소 정확도 보장</h4>
            <p>
              냉장고가 고장 났는데 호스트가 쉽게 고칠 수 없는 경우, 침실 수가
              숙소 페이지에 표시된 것보다 적은 경우 등 숙박 중 언제라도 실제
              숙소가 숙소 페이지 설명과 다른 것을 알게 될 경우, 문제 발견
              시점으로부터 3일 이내에 신고해주세요. 에어비앤비에서 비슷한 숙소
              또는 더 나은 숙소를 찾아드리거나 요금을 환불해드립니다.
            </p>
          </div>

          <div className="detail_air_cover_modal_text_box">
            <h4>24시간 안전 지원 라인</h4>
            <p>
              안전하지 않다고 느낄 경우, 24시간 언제든 특별 교육을 받은 안전
              전문 상담원의 신속한 지원을 받으실 수 있습니다.
            </p>
          </div>
        </div>

        <div className="detail_air_cover_modal_bottom">
          <div>
            에어커버를 통한 예약 보호에 대한 전체 내용은{" "}
            <a
              href="https://www.airbnb.co.kr/help/article/3218/%EC%97%90%EC%96%B4%EC%BB%A4%EB%B2%84%EB%A5%BC-%ED%86%B5%ED%95%B4-%EB%B3%B4%ED%98%B8%EB%B0%9B%EA%B8%B0"
              target="_blank"
            >
              도움말 센터
            </a>
            에서 확인하세요.
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailAirCoverModal;
