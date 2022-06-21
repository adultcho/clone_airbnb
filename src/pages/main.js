import React from "react";



import { useSelector, useDispatch } from "react-redux";
import { loadPostDB } from "../redux/modules/post";


//components
import Card from "../components/Card";

//styles
import "../styles/pages/Main.css";

const Main = () => {

const dispatch = useDispatch();

const PostList = useSelector((state) => state.post.list);
  console.log(PostList);



  React.useEffect(() => {
    dispatch(loadPostDB());
  }, [dispatch]);
  

  return (
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
  );
};

export default Main;
