import React from "react";
import "../styles/components/DetailReviewsScoreCategory.css";

function DetailReviewsScoreCategory({ category, score }) {
  return (
    <div className="detail_reviews_score_category_container">
      <div className="detail_reviews_score_category_name">{category}</div>
      <div className="detail_reviews_score_category_bar">
        <progress className="score_bar" value={score} min="0" max="5" />
      </div>
      <div className="detail_reviews_score_category_score">{score}</div>
    </div>
  );
}

export default DetailReviewsScoreCategory;
