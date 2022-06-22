import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/components/DetailReviewsComment.css";
import { Avatar } from "@material-ui/core";
import DetailReviewsModal from "./DetailReviewsModal";

//redux
import { useSelector, useDispatch } from "react-redux";
import { loadCommentDB } from "../redux/modules/comment";

function DetailReviewsComment({ full }) {
  const commentList = useSelector((state) => state.comment.list.comments);

  const { postId } = useParams();

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadCommentDB(postId));
  }, [dispatch, postId]);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = (callBackParam) => {
    setIsOpen(!isOpen);
    document.body.style.overflow = "hidden";
  };

  //   const username = "테스트";
  //   const commentDate = "2022년 5월";
  //   const comments = `정원도 넓고 바베큐장도 크고 집도 1,2층 다 사용하니 거실도 크고, 방도많고, 화장실도 3개, 좋아요. 노래방도 살짝쿵 사용. 네가족 여행하며 각각 방쓰고 내집처럼 편하게 쉬다왔습니다.
  // 정수기가 있는줄알았는데, 없애셨데요. 식기류 바베큐장비 다 넉넉해서 좋아요
  //   asdasd`;

  //   const countTextLine = commentList.comment.split("");
  //   console.log(countTextLine.length);

  return (
    <>
      {commentList &&
        commentList.map((commentList, index) => {
          return (
            <div className="detail_reviews_comment">
              <div className="detail_reviews_comment_top">
                <Avatar />
                <div className="detail_reviews_profile_infor">
                  <div className="detail_reviews_profile_infor_name">
                    {commentList.nickname}
                  </div>
                  <div className="detail_reviews_profile_infor_date">
                    {commentList.createdAt}
                  </div>
                </div>
              </div>
              {full ? (
                <div className="detail_reviews_comment_bottom">
                  {commentList.comment}
                </div>
              ) : (
                <div className="detail_reviews_comment_bottom_full">
                  {commentList.comment}
                </div>
              )}

              {commentList.comment.length > 50 && full ? (
                <button
                  className="detail_reviews_comment_more_btn"
                  onClick={openModal}
                >
                  더 보기
                </button>
              ) : null}
            </div>
          );
        })}
      {isOpen ? <DetailReviewsModal openModalCallBack={openModal} /> : null}
    </>
  );
}

export default DetailReviewsComment;
