import React, { useEffect } from "react";
import { useState } from "react";

//무한 스크롤
import { useInView } from "react-intersection-observer";

//redux
import { useSelector, useDispatch } from "react-redux";
import { loadPostDB } from "../redux/modules/post";

//components
import Card from "../components/Card";

//styles
import "../styles/pages/Main.css";

//  Icon 모음
import ForestIcon from "@mui/icons-material/Forest";
import CabinIcon from "@mui/icons-material/Cabin";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import BungalowIcon from "@mui/icons-material/Bungalow";
import VillaIcon from "@mui/icons-material/Villa";
import KayakingIcon from "@mui/icons-material/Kayaking";
import WbShadeIcon from "@mui/icons-material/WbShade";


import { SecurityUpdateGood } from "@mui/icons-material";


const Main = () => {

  const dispatch = useDispatch();
  const [ref, inView] = useInView();
  const [page, setPage] = React.useState(0);

  const PostList = useSelector((state) => state.post.list);
  console.log(PostList);

  const [category, setCategory] = useState("섬");

  React.useEffect(() => {
    dispatch(loadPostDB(category));

  }, [category]);
  console.log(category);


  console.log(inView);

  // React.useEffect(() => {
  //   if(PostList.length === 0){
  //     console.log('첫 포스트 로딩');
  //     dispatch(loadPostDB(category));
  //     return;
  //   }
  // }, [category]);

  React.useEffect(() => {
    if (inView) {
      console.log("첫 로딩 이후 무한 스크롤");
      setPage(page + 1);
      dispatch(loadPostDB(page, category));
    }
  }, [category, inView]);
  console.log(page);

  // console.log(category)


  return (
    <>
      <div className="category_box">
        <button
          value="섬"
          onClick={() => {
            setCategory("섬");
          }}
        >


          <span className="material-symbols-outlined">houseboat</span>섬

        </button>
        <button
          value="국립공원"
          onClick={() => {
            setCategory("국립공원");
          }}
        >
          <ForestIcon />
          국립공원
        </button>
        <button
          value="통나무집"
          onClick={() => {
            setCategory("통나무집");
          }}
        >
          <CabinIcon />
          통나무집
        </button>
        <button
          value="기상천외한숙소"
          onClick={() => {
            setCategory("기상천외한숙소");
          }}
        >
          <VillaIcon />
          기상천외한숙소
        </button>
        <button
          value="해변근처"
          onClick={() => {
            setCategory("해변근처");
          }}
        >
          <BeachAccessIcon />
          해변근처
        </button>
        <button
          value="초소형주택"
          onClick={() => {
            setCategory("초소형주택");
          }}
        >

          <span className="material-symbols-outlined">gite</span>

          초소형주택
        </button>
        <button
          value="디자인"
          onClick={() => {
            setCategory("디자인");
          }}
        >
          <WbShadeIcon />
          디자인
        </button>
        <button
          value="캠핑장"
          onClick={() => {
            setCategory("캠핑장");
          }}
        >

          <span className="material-symbols-outlined">camping</span>

          캠핑장
        </button>
        <button
          value="A자형주택"
          onClick={() => {
            setCategory("A자형주택");
          }}
        >
          <BungalowIcon />
          A자형주택
        </button>
        <button
          value="호숫가"
          onClick={() => {
            setCategory("호숫가");
          }}
        >
          <KayakingIcon />
          호숫가
        </button>
      </div>
      <div className="main">
        {PostList &&
          PostList.map((PostList, idx) => (
            <Card
              key={idx}
              postId={PostList.postId}
              image={PostList.image}
              location={PostList.location}
              length={PostList.length}
              date={PostList.date}
              star={PostList.star}
              price={PostList.price}
            />
          ))}
        <div ref={ref} />
      </div>
    </>
  );
};

export default Main;
