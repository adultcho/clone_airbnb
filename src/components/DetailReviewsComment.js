import React from "react";
import "../styles/components/DetailReviewsComment.css";
import { Avatar } from "@material-ui/core";

function DetailReviewsComment() {
  const username = "테스트";
  const commentDate = "2022년 5월";
  const comments = `ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁd`;

  const countTextLine = comments.split("\n");

  return (
    <div className="detail_reviews_comment">
      <div className="detail_reviews_comment_top">
        <Avatar />
        <div className="detail_reviews_profile_infor">
          <div className="detail_reviews_profile_infor_name">{username}</div>
          <div className="detail_reviews_profile_infor_date">{commentDate}</div>
        </div>
      </div>
      <div className="detail_reviews_comment_bottom">{comments}</div>
      {countTextLine.length > 3 ? <button>더보기</button> : null}
    </div>
  );
}

export default DetailReviewsComment;
