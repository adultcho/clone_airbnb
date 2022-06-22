import React from "react";
import "../styles/components/DetailPlaceInfor.css";
import { Avatar } from "@material-ui/core";

function DetailPlaceInfor({ detailInfor }) {
  return (
    <div className="detail_place_infor_container">
      <div className="detail_place_infor_text">
        <div className="detail_place_infor_text_top">{detailInfor.hosting}</div>
        <div className="detail_place_infor_text_bottom">
          {detailInfor.information}
        </div>
      </div>
      <div className="detail_place_infor_profile_image">
        <Avatar />
      </div>
    </div>
  );
}

export default DetailPlaceInfor;
