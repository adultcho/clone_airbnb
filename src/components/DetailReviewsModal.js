import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

//components
import DetailReviewsScoreCategory from "./DetailReviewsScoreCategory";
import DetailReviewsComment from "./DetailReviewsComment";

//redux
import { useDispatch } from "react-redux";
import { addCommentDB } from "../redux/modules/comment";

//style, icons
import "../styles/components/DetailReviewsModal.css";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";

function DetailReviewsModal({ openModalCallBack }) {
  //postId useParams로 가져오기
  const { postId } = useParams();
  // console.log(postId)

  const dispatch = useDispatch();

  //comment ref 값
  const comment_ref = React.useRef(null);

  //작성 버튼 클릭시 발생 이벤트
  const commentSubmit = (e) => {
    e.preventDefault();
    const comment = { comment: comment_ref.current.value };
    console.log(comment);

    // console.log(postId);
    dispatch(addCommentDB(postId, comment));
    comment_ref.current.value = "";
  };

  //모달 open
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
                        key={index}
                        category={l}
                        score={data.score[index]}
                      />
                    </div>
                  );
                })
              : null}
            <form
              onSubmit={commentSubmit}
              className="detail_reviews_modal_left_input_box"
            >
              <h2>평점</h2>
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
              </div>
              <h2>댓글</h2>
              <textarea
                ref={comment_ref}
                placeholder="댓글을 입력해 주세요."
              ></textarea>
              <button>평점 및 댓글 작성</button>
            </form>
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
