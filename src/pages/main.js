import React from "react";
import { useState } from "react";

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

//  무한 스크롤
import { List, AutoSizer } from "react-virtualized";

const Main = () => {
  const dispatch = useDispatch();

  const PostList = useSelector((state) => state.post.list);
  const [category, setCategory] = useState("섬");
  const selectCategory = (e) => {
    setCategory(e.target.value);
  };
  React.useEffect(() => {
    dispatch(loadPostDB(category));
  }, [category]);

  return (
    <>
      <div className="category_box">
        <button value="섬" onClick={selectCategory}>
          <span class="material-symbols-outlined">houseboat</span>섬
        </button>
        <button value="국립공원" onClick={selectCategory}>
          <ForestIcon />
          국립공원
        </button>
        <button value="통나무집" onClick={selectCategory}>
          <CabinIcon />
          통나무집
        </button>
        <button value="기상천외한숙소" onClick={selectCategory}>
          <VillaIcon />
          기상천외한숙소
        </button>
        <button value="해변근처" onClick={selectCategory}>
          <BeachAccessIcon />
          해변근처
        </button>
        <button value="초소형주택" onClick={selectCategory}>
          <span class="material-symbols-outlined">gite</span>
          초소형주택
        </button>
        <button value="디자인" onClick={selectCategory}>
          <WbShadeIcon />
          디자인
        </button>
        <button value="캠핑장" onClick={selectCategory}>
          <span class="material-symbols-outlined">camping</span>
          캠핑장
        </button>
        <button value="A자형주택" onClick={selectCategory}>
          <BungalowIcon />
          A자형주택
        </button>
        <button value="호숫가" onClick={selectCategory}>
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
      </div>
    </>
  );
};

export default Main;
