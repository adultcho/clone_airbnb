import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

//component
import DetailReviewsComment from "./DetailReviewsComment";
import DetailReviewsScoreCategory from "./DetailReviewsScoreCategory";
import DetailReviewsModal from "./DetailReviewsModal";

//redux
import { useDispatch } from "react-redux";
import { loadCommentDB } from "../redux/modules/comment";

//style
import "../styles/components/DetailReviewsCommentList.css";

function DetailReviwsCommentList() {
  const dispatch = useDispatch();
  const { postId } = useParams();

  // 모달 설정
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    dispatch(loadCommentDB(postId));
  }, []);

  const openModal = (callBackParam) => {
    setIsOpen(!isOpen);
    document.body.style.overflow = "hidden";
  };

  // 받아온 카테고리별 점수 출력 하기
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
    <div className="detail_reviews_comment_list_container">
      <div className="detail_reviews_category_score">
        {data
          ? data.category.map((l, index) => {
              return (
                <div className="detail_reviews_category_box">
                  <DetailReviewsScoreCategory
                 key={index}
                    category={l}
                    score={data.score[index]}
                  />
                </div>
              );
            })
          : null}
      </div>
      <div className="detail_reviews_comments">
        <div className="comment">
          <DetailReviewsComment full={true} />
        </div>
        <div className="comment">
          <DetailReviewsComment full={true} />
        </div>
        <div className="comment">
          <DetailReviewsComment full={true} />
        </div>
        <div className="comment">
          <DetailReviewsComment full={true} />
        </div>
        <div className="comment">
          <DetailReviewsComment full={true} />
        </div>
        <div className="comment">
          <DetailReviewsComment full={true} />
        </div>
      </div>
      <button className="detail_more_reviews_btn" onClick={openModal}>
        후기 ?개 모두 보기
      </button>
      {isOpen ? <DetailReviewsModal openModalCallBack={openModal} /> : null}
      {console.log(isOpen)}
    </div>
  );
}

export default DetailReviwsCommentList;
