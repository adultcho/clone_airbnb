import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

//components
import DetailReviewsScoreCategory from "./DetailReviewsScoreCategory";

//redux
import { useSelector, useDispatch } from "react-redux";
import {
  addCommentDB,
  updateCommentDB,
  deleteCommentDB,
} from "../redux/modules/comment";

//style, icons
import "../styles/components/DetailReviewsModal.css";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";

function DetailReviewsModal({ openModalCallBack, detailScore }) {
  const commentList = useSelector((state) => state.comment.list);
  console.log(commentList);
  console.log(detailScore);

  const userEmail = localStorage.getItem("user-email");

  //postId useParams로 가져오기
  const { postId } = useParams();
  // console.log(postId)

  const dispatch = useDispatch();

  //comment ref 값
  const comment_ref = React.useRef(null);

  //작성 버튼 클릭시 발생 이벤트

  const commentSubmit = (e) => {
    const comment = { comment: comment_ref.current.value };
    console.log(comment);
    // console.log(postId);
    dispatch(addCommentDB(postId, comment)); //axios post

    comment_ref.current.value = "";
    // setTimeout(() => {
    //   dispatch(loadCommentDB(postId));
    // }, 500);
    // dispatch(loadCommentDB(postId))// axios get
  };

  //모달 open
  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => {
    openModalCallBack(isOpen);
    document.body.style.overflow = "unset";
  };

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // 모달 좌측 평균 평점 및 총 후기 개수
  let averageScore = 0;
  detailScore &&
    detailScore.map((l, index) => {
      averageScore = averageScore + parseFloat(l);
    });

  averageScore = averageScore / 6;

  console.log(averageScore);
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

  const testReload = () => {};

  return (
    <div className="detail_reviews_modal_container" onClick={handleClose}>
      <div className="detail_reviews_modal_window">
        <CloseIcon
          className="detail_reviews_modal_close_btn"
          onClick={closeModal}
        />
        <div className="detail_reviews_modal_top">
          <div className="detail_reviews_modal_top_left">
            <div className="detail_reviews_modal_left_title_box">
              <StarIcon />
              {averageScore.toFixed(1)} 후기 {commentList.length}개
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
              ? data.category &&
                data.category.map((l, index) => {
                  return (
                    <div className="full">
                      <DetailReviewsScoreCategory
                        key={index}
                        category={l}
                        score={detailScore[index]}
                      />
                    </div>
                  );
                })
              : null}
            <div className="detail_reviews_modal_left_input_box">
              {/* <h2>평점</h2>
              <div>
                <div>
                  <span>청결도</span> ★★★★★
                </div>
                <div>
                  <span>정확성</span> ★★★★★
                </div>
                <div>
                  <span>의사소통</span> ★★★★★
                </div>
                <div>
                  <span>위치</span> ★★★★★
                </div>
                <div>
                  <span>체크인</span> ★★★★★
                </div>
                <div>
                  <span>가격대비 만족도</span> ★★★★★
                </div>
              </div> */}
              <h2>댓글</h2>
              <textarea
                ref={comment_ref}
                placeholder="댓글을 입력해 주세요."
              ></textarea>
              <button onClick={commentSubmit}>평점 및 댓글 작성</button>
            </div>
          </div>
          <div className="detail_reviews_modal_right">
            {/* <div className="detail_reviews_modal_comment_list"> */}

            {/* <DetailReviewsComment full={false} /> */}
            {commentList &&
              commentList.map((commentList, index) => {
                return (
                  <div className="detail_reviews_comment">
                    <div className="detail_reviews_comment_top">
                      {/* <Avatar /> */}
                      <div className="detail_reviews_profile_infor">
                        <div className="detail_reviews_profile_infor_name">
                          {commentList.nickname}
                        </div>
                        <div className="detail_reviews_profile_infor_date">
                          {commentList.createdAt}
                        </div>
                      </div>
                    </div>
                    <div className="detail_reviews_comment_bottom_full">
                      {commentList.comment}

                      {userEmail === commentList.useremail ? (
                        <div>
                          <button
                            className="detail_reviews_comment_button"
                            onClick={() => {
                              // console.log(commentList.commentId)
                              const commentId = commentList.commentId;
                              dispatch(updateCommentDB(postId, commentId));
                            }}
                          >
                            수정
                          </button>
                          <button
                            className="detail_reviews_comment_button"
                            onClick={() => {
                              // console.log(commentList.commentId)
                              const commentId = commentList.commentId;
                              dispatch(deleteCommentDB(postId, commentId));
                            }}
                          >
                            삭제
                          </button>
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}

            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailReviewsModal;
