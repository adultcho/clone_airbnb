import React from "react";
import "../styles/components/DetailPlaceInfor.css";
import { Avatar } from "@material-ui/core";

function DetailPlaceInfor() {
  const name = "???님이 호스팅하는 펜션";
  const people = 10;
  const bedroom = 3;
  const bed = 5;
  const bathroom = 2;
  return (
    <div className="detail_place_infor_container">
      <div className="detail_place_infor_text">
        <div className="detail_place_infor_text_top">{name}</div>
        <div className="detail_place_infor_text_bottom">
          최대 인원{people} 침실{bedroom}개 침대{bed}개 욕실{bathroom}개
        </div>
      </div>
      <div className="detail_place_infor_profile_image">
        <Avatar />
      </div>
    </div>
  );
}

export default DetailPlaceInfor;
