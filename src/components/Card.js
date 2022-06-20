import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/components/Card.css";

const Card = (props) => {
  // console.log(props);

  const navigate = useNavigate();


  const moveToDetailPage = () => {
    navigate("/detail/" + props.postId);
  };
  return (
    <div onClick={moveToDetailPage} className="card_container">
      <div className="card">
        <img src={props.image} className="card_image" alt=""></img>

        <div className="card_content">
          <div>
            <p>{props.location}</p>
            <span>{props.star === "NEW" ? "NEW!" : props.star + " ★"} </span>
          </div>
          <p>{props.length}</p>
          <p>{props.date}</p>
          <p>
            <span>{props.price.split("/")[0]} </span>
            /박
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
