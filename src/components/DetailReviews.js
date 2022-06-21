import React from "react";
import { useState } from "react";
import "../styles/components/DetailReviews.css";
import DetailReviwsCommentList from "./DetailReviwsCommentList";
import DetailAirCover from "./DetailAirCover";
import DetailAboutPlace from "./DetailAboutPlace";
import DetailPlaceInfor from "./DetailPlaceInfor";

function DetailReviews() {
  return (
    <div className="detail_reviews_container">
      <div className="detail_reviews_category_comments">
        <DetailPlaceInfor />
        <DetailAirCover />
        <DetailAboutPlace />
        <DetailReviwsCommentList />
      </div>
    </div>
  );
}

export default DetailReviews;
