import React from "react";
import { useState } from "react";
import DetailReviewsScoreCategory from "./DetailReviewsScoreCategory";
import "../styles/components/DetailReviews.css";
import DetailReviwsCommentList from "./DetailReviwsCommentList";
import DetailAirCover from "./DetailAirCover";
import DetailAboutPlace from "./DetailAboutPlace";

function DetailReviews() {
  const [data, setData] = useState();
  const categoryName = [
    "청결도",
    "정확성",
    "의사소통",
    "위치",
    "체크인",
    "가격 대비 만족도",
  ];
  const categoryScore = ["4.8", "5.0", "4.9", "4.9", "4.8", "4.8"];

  if (data === undefined)
    setData({ category: categoryName, score: categoryScore });

  return (
    <div className="detail_reviews_container">
      <div className="detail_reviews_category_score">
        {data
          ? data.category.map((l, index) => {
              return (
                <DetailReviewsScoreCategory
                  category={l}
                  score={data.score[index]}
                />
              );
            })
          : null}
      </div>
      <div className="detail_reviews_category_comments">
        <DetailAirCover />
        <DetailAboutPlace />
        <DetailReviwsCommentList />
      </div>
    </div>
  );
}

export default DetailReviews;
