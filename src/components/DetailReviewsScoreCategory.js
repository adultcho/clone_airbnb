import React from "react";
import "../styles/components/DetailReviewsScoreCategory.css";

function DetailReviewsScoreCategory({ category, score }) {
  return (
    <div className="detail_review_score_category_container">
      <div className="detail_reviews_score_category_name">{category}</div>
      <div className="detail_reviews_score_category_score">
        <progress className="score_bar" value={score} min="0" max="5" />
        <p>{score}</p>
      </div>
    </div>
  );
}

export default DetailReviewsScoreCategory;
