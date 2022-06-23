import React from "react";
import "../styles/components/DetailSubHeader.css";
import { useSelector, useDispatch } from "react-redux";
import StarIcon from "@mui/icons-material/Star";
import {loadCommentDB} from '../redux/modules/comment'
import {useParams} from 'react-router-dom'

function DetailSubHeader({ title, location, detailScore }) {
  let average = 0;


  const commentList = useSelector((state) => state.comment.list.comments);

  console.log(commentList);

  detailScore &&
    detailScore.map((l, index) => {
      average = average + parseFloat(l);
      console.log(average);
    });


  average = average / 6;

  return (
    <div className="detail_sub_header_container">
      {/* 서브헤더 상단 타이틀 부분 */}

      <div className="detail_sub_header_title">
        <h1 id="detail_sub_header_title_h1">{title}</h1>
      </div>

      {/* 서브헤더 하단 부분 평점, 후기, 공유하기 & 저장 버튼 */}
      <div className="detail_sub_header_infor">
        <div className="detail_sub_header_infor_text">
          <StarIcon />
          {average.toFixed(1)}
          <div className="detail_sub_header_reviews_number">

            후기 {commentList.length ? commentList.length : 0}개

          </div>
          <div className="detail_sub_header_address">{location}</div>
        </div>
        {/* <div>
          <div>공유하기</div>
          <div>저장</div>
        </div> */}
      </div>
    </div>
  );
}

export default DetailSubHeader;
