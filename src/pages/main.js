import React from "react";
import axios from 'axios';

//components
import Card from "../components/Card";

//styles
import "../styles/pages/Main.css";

const Main = () => {

  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://3.39.223.175/api/posts") // back-end server http://13.125.151.93/api/poststudy
      .then((response) => {
        console.log(response);
        setState(response.data.posts);
      })
      .catch((response) => {
        // console.log(response);
      });

  }, []);

  // console.log(state)

  return (
    <div className="main">
      {state && state.map((state,idx) => (
          <Card
          key={idx}
          postId = {state.postId}
          image = {state.image}
          location = {state.location}
          length = {state.length}
          date = {state.date}
          star = {state.star}
          price = {state.price}
          />
        ))}
    </div>
  );
};

export default Main;
