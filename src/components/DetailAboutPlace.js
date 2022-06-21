import React from "react";
import { useState } from "react";
import "../styles/components/DetailAboutPlace.css";
import DetailAboutPlaceModal from "./DetailAboutPlaceModal";

function DetailAboutPlace() {
  const [isOpen, setIsOpen] = useState(false);
  const [inforText, setInforText] = useState("");

  const openModal = (callBackParam) => {
    setIsOpen(!isOpen);
    document.body.style.overflow = "hidden";
  };

  React.useEffect(() => {
    setInforText(`금수산 등산로 중턱에 위치하여 발아래로 굽이치는 산 능선과 산자락들이 한 폭의 산수화를 보는듯 장관이며,

    운 좋은 아침에는 발아래 펼쳐지는 운해랑 능선사이로 떠오르는 해돋이는 글로서 표현이 어려울 정도로 경이로운 곳입니다.
    
    집은 목조주택으로 1,2층 (40여평) 전체 사용이라 가족행사 등 각종 모임에 적합한 장소입니다
    
    * 노래방기기,윶이 준비되어 있으며 2층에는 당구대가 설치되어 있습니다
    
    * 바베큐 이용가능(무료) 그릴, 철망1개,토치,부탄가스는 준비되어 있으며 ...
    숯은 준비해오셔야 합니다.
    
    * 불멍가능 (화로사용 및 장작
    별도비용 2만원)
    
    * 산자락이라 두꺼운 외투 필요합니다(데크에서 바베큐시)
    숙소
    독채 단독사용이라 주변신경쓰지 않고 편하게 사용할수 있는 곳입니다
    
    -1층은 안방과 거실 화장실(2),넓은데크
    - 2층은 다락방 형식으로 방 두개와 중간에 거실용도(당구대)의 공간이 있습니다
    
    단양시내까지는 승용차로 20여분 소요되며, 금수산 등산로 입구에 위치하고 있습니다
    게스트 이용 가능 공간/시설
    독채 2층 건물로 방3, 욕실2, 화장실2,
    그리고 넓은 데크( 바베큐나 테이블에서 회식하기 좋음)
    
    주차는 집앞 시멘트 평면공간(7~8대)가능
    당구대 1개
    노래방 기기
    흔들그네
    윷놀이 일체
    와이파이(비번dhh8jdf229)
    티브이
    냉장고
    전자렌지
    가스렌지
    커피포트
    각종 냄비나 그릇 컵등 다수
    기타 주의사항
    * 사회적 거리두기 관련하여 예약인원 4인 초과인원은 코로나 2차접종후 14일이 지나야 입실가능합니다
    
    산자락이고 시골입니다
    여름에는 나방이나 벌레도 있을수 있습니다
    
    시골의 정취와 자연경관을 좋아하시는 분들에겐 좋을것 같습니다.`);
  }, []);

  return (
    <div className="detail_about_place_container">
      <h1 className="detail_about_place_title">숙소 정보</h1>
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
