import React from "react";
import { useState } from "react";
import "../styles/components/DetailReviewsModal.css";
import CloseIcon from "@mui/icons-material/Close";
import DetailReviewsScoreCategory from "./DetailReviewsScoreCategory";
import DetailReviewsComment from "./DetailReviewsComment";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";

function DetailReviewsModal({ openModalCallBack }) {
  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => {
    openModalCallBack(isOpen);
  };

  // 모달 좌측 평균 평점 및 총 후기 개수
  const averageScore = 4.85;
  const totalReviews = 85;

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
    <div className="detail_reviews_modal_container">
      <div className="detail_reviews_modal_window">
        <CloseIcon
          className="detail_reviews_modal_close_btn"
          onClick={closeModal}
        />
        <div className="detail_reviews_modal_top">
          <div className="detail_reviews_modal_top_left">
            <div className="detail_reviews_modal_left_title_box">
              <StarIcon />
              {averageScore} 후기 {totalReviews}개
            </div>
          </div>

          <div className="detail_reviews_modal_search_bar_box">
            <SearchIcon />
            <input
              className="detail_reviews_modal_input_text"
              placeholder="후기 검색"
            />
          </div>
        </div>
        <div className="detail_reviews_modal_contents">
          <div className="detail_reviews_modal_left">
            {data
              ? data.category.map((l, index) => {
                  return (
                    <div className="test">
                      <DetailReviewsScoreCategory
                        category={l}
                        score={data.score[index]}
                      />
                    </div>
                  );
                })
              : null}
          </div>
          <div className="detail_reviews_modal_right">
            <div className="detail_reviews_modal_comment_list">
              <DetailReviewsComment />
              <DetailReviewsComment />
              <DetailReviewsComment />
              <DetailReviewsComment />
              <DetailReviewsComment />
              <DetailReviewsComment />
              <DetailReviewsComment />
              <DetailReviewsComment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailReviewsModal;
