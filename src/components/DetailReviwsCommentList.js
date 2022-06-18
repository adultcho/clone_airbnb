import React from "react";
import "../styles/components/DetailReviewsCommentList.css";
import DetailReviewsComment from "./DetailReviewsComment";

function DetailReviwsCommentList() {
  return (
    <div className="detail_reviews_comment_list_container">
      <DetailReviewsComment />
      <DetailReviewsComment />
      <DetailReviewsComment />
      <DetailReviewsComment />
      <DetailReviewsComment />
      <DetailReviewsComment />
      <button className="detail_more_reviews_btn">후기 ?개 모두 보기</button>
    </div>
  );
}

export default DetailReviwsCommentList;
