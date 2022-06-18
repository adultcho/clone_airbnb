import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/components/Card.css";

const Card = () => {
  const navigate = useNavigate();
  let postId = Math.random(); // postId 임의 생성

  const moveToDetailPage = () => {
    navigate("/detail/" + postId);
  };

  return (
    <div onClick={moveToDetailPage} className="card_container">
      <div className="card">
        <div className="card_image"></div>

        <div className="card_content">
          <div><p>San Blas 멕시코</p><span>5.0 ★</span></div>
          <p>11.472km 거리</p>
          <p>7월 18일 ~ 23일</p>
          <p><span>₩258.327</span> /박</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
