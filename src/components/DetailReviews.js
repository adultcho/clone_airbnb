import React from "react";
import "../styles/components/DetailReviews.css";
import DetailReviwsCommentList from "./DetailReviwsCommentList";
import DetailAirCover from "./DetailAirCover";
import DetailAboutPlace from "./DetailAboutPlace";
import DetailPlaceInfor from "./DetailPlaceInfor";

function DetailReviews({ detailInfor, detailScore }) {
  return (
    <div className="detail_reviews_container">
      <div className="detail_reviews_category_comments">
        <DetailPlaceInfor detailInfor={detailInfor} />
        <DetailAirCover />
        <DetailAboutPlace detailInforText={detailInfor.description} />
        <DetailReviwsCommentList
          detailInfor={detailInfor}
          detailScore={detailScore}
        />
      </div>
    </div>
  );
}

export default DetailReviews;
