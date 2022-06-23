import React from "react";
import { useParams } from "react-router-dom";

//component
import DetailSubHeader from "../components/DetailSubHeader";
import DetailPhotos from "../components/DetailPhotos";
import DetailReviews from "../components/DetailReviews";

//redux
import { useSelector, useDispatch } from "react-redux";
import { loadDetailDB } from "../redux/modules/detail";
import { loadCommentDB } from "../redux/modules/comment";

//style
import "../styles/pages/Detail.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();

  const detailList = useSelector((state) => state.detail.list);

  console.log(detailList);

  React.useEffect(() => {
    dispatch(loadDetailDB(postId));
  }, [dispatch, postId]);

  //  후기 개수 가져오기 위해 처음에 한번 호출
  React.useEffect(() => {
    dispatch(loadCommentDB(postId));
  }, [dispatch, postId]);

  return (
    <div className="detail">
      {detailList &&
        detailList.map((detailList, index) => (
          <>
            <DetailSubHeader
              title={detailList.title}
              location={detailList.location}
              detailScore={detailList.score}
            />
            <DetailPhotos image={detailList.image} />
            <DetailReviews
              detailInfor={detailList.details}
              detailScore={detailList.score}
            />
          </>
        ))}
      {/* <DetailSubHeader />
      <DetailPhotos />
      <DetailReviews /> */}
    </div>
  );
};

export default Detail;
