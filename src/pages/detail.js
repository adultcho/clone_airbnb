import React from "react";
import "../styles/pages/Detail.css";
import DetailSubHeader from "../components/DetailSubHeader";
import DetailPhotos from "../components/DetailPhotos";
import DetailReviews from "../components/DetailReviews";

const Detail = () => {
  return (
    <div className="detail">
      <DetailSubHeader />
      <DetailPhotos />
      <DetailReviews />
    </div>
  );
};

export default Detail;
