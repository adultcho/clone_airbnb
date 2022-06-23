import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useParams} from 'react-router-dom'
import {loadCommentDB} from '../redux/modules/comment'

//component
import DetailReviewsComment from "./DetailReviewsComment";
import DetailReviewsScoreCategory from "./DetailReviewsScoreCategory";
import DetailReviewsModal from "./DetailReviewsModal";

//style
import "../styles/components/DetailReviewsCommentList.css";

function DetailReviwsCommentList({ detailInfor, detailScore }) {

  const {postId} = useParams();
  const dispatch = useDispatch();
  console.log(detailScore);
  // 모달 설정
  const [isOpen, setIsOpen] = useState(false);

  const commentList = useSelector((state) => state.comment.list.comments);
  console.log(commentList);

  React.useEffect(()=>{
    dispatch(loadCommentDB(postId))
  },[dispatch, postId])

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
          ?data.category&& data.category.map((l, index) => {
              return (
                <div className="detail_reviews_category_box">
                  <DetailReviewsScoreCategory
                    key={index}
                    category={l}
                    score={detailScore[index]}
                  />
                </div>
              );
            })
          : null}
      </div>
      <div className="detail_reviews_comments">
        <DetailReviewsComment full={true} />
      </div>
      <button className="detail_more_reviews_btn" onClick={openModal}>
        후기 {commentList.length ? commentList.length : 0}개 모두 보기
      </button>
      {isOpen ? (
        <DetailReviewsModal
          openModalCallBack={openModal}
          detailScore={detailScore}
        />
      ) : null}
      {console.log(isOpen)}
    </div>
  );
}

export default DetailReviwsCommentList;
