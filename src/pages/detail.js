import React from "react";
import { useParams } from "react-router-dom";

//component
import DetailSubHeader from "../components/DetailSubHeader";
import DetailPhotos from "../components/DetailPhotos";
import DetailReviews from "../components/DetailReviews";

//redux
import { useSelector, useDispatch } from "react-redux";
import { loadDetailDB } from "../redux/modules/detail";

//style
import "../styles/pages/Detail.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();

  const detailList = useSelector((state) => state.detail.list);

  // console.log(detailList);

  React.useEffect(() => {
    dispatch(loadDetailDB(postId));
  }, [dispatch, postId]);

  return (
    <div className="detail">
      {detailList &&
        detailList.map((detailList, index) => (
          <>
            <DetailSubHeader />
            <DetailPhotos image={detailList.image} />
            <DetailReviews />
          </>
        ))}
      {/* <DetailSubHeader />
      <DetailPhotos />
      <DetailReviews /> */}
    </div>
  );
};

export default Detail;
